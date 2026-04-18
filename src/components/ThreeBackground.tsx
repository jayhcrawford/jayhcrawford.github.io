import { BlendFunction, EffectComposer, EffectPass, RenderPass, SelectiveBloomEffect } from "postprocessing";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import useWindowSize from '../hooks/useWindowSize';

const BLOOM_LAYER = 1;



const ThreeBackground = () => {
  const { width, height } = useWindowSize();
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.layers.enable(BLOOM_LAYER);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });

    renderer.setClearColor(0x000000, 0);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.NoToneMapping;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(width, height);
    renderer.domElement.style.position = 'absolute';
    renderer.domElement.style.inset = '0';
    renderer.domElement.style.zIndex = '0';
    renderer.domElement.style.pointerEvents = 'none';
    renderer.domElement.style.background = 'transparent';

    const mountNode = mountRef.current;
    if (mountNode instanceof HTMLElement && !mountNode.hasChildNodes()) {
      mountNode.appendChild(renderer.domElement);
    }

    const starGroup = new THREE.Group();

    for (let i = 0; i < 50; i++) {
      const scale = 0.02 + Math.random() * 0.08;
      const geometry = new THREE.SphereGeometry(scale, 16, 16);
      const material = new THREE.MeshBasicMaterial({ color: new THREE.Color(1, 1, 1) });
      material.toneMapped = false;

      material.color.multiplyScalar(4);

      const sphere = new THREE.Mesh(geometry, material);
      sphere.position.set((Math.random() - 0.5) * 10, (Math.random() - 0.5) * 10, (Math.random() - 0.5) * 10);
      sphere.layers.enable(BLOOM_LAYER);
      starGroup.add(sphere);
    }

    // Planet
    const planetGeometry = new THREE.SphereGeometry(1, 64, 64);
    const planetMaterial = new THREE.ShaderMaterial({
      uniforms: {
        color1: { value: new THREE.Color(0xff00aa) }, // neon pink
        color2: { value: new THREE.Color(0x00ff88) }, // neon green
        bandCount: { value: 20.0 }, // controls number of horizontal bands
      },
      vertexShader: `
varying vec3 vPosition;
varying vec3 vWorldPosition;

void main() {
  vPosition = normalize(position);

  vec4 worldPosition = modelMatrix * vec4(position, 1.0);
  vWorldPosition = worldPosition.xyz;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
  `,
      fragmentShader: `
varying vec3 vPosition;
varying vec3 vWorldPosition;

uniform vec3 color1;
uniform vec3 color2;
uniform float bandCount;

void main() {
float bands = vPosition.y * bandCount * 0.5 + 0.5;
float mask = step(0.5, fract(bands));
  vec3 baseColor = mix(color1, color2, mask);

  // Fresnel edge glow
  vec3 viewDir = normalize(cameraPosition - vWorldPosition);
  float fresnel = dot(viewDir, normalize(vPosition));
  fresnel = 1.0 - fresnel;
  fresnel = pow(fresnel, 6.0);

  vec3 glow = vec3(1.0, 0.95, 0.7) * fresnel * 1.2;

  vec3 finalColor = baseColor * 0.8 + glow;

  gl_FragColor = vec4(finalColor, 1.0);
}
  `,
    });
    const planet = new THREE.Mesh(planetGeometry, planetMaterial);

    // Make planet bigger
    const PLANET_SCALE = 2.8;
    planet.scale.setScalar(PLANET_SCALE);

    // IMPORTANT: disable bloom on planet
    // planet.layers.disable(BLOOM_LAYER);
    

    scene.add(planet);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.2);
    directionalLight.position.set(5, 3, 5);
    scene.add(directionalLight);

    const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
    scene.add(ambientLight);

    scene.add(starGroup);

    camera.position.z = 5;

    const atmosphereMaterial = new THREE.ShaderMaterial({
      uniforms: {
        glowColor: { value: new THREE.Color(0xffffcc) }, // soft yellow-white
      },
      vertexShader: `
    varying vec3 vNormal;
    varying vec3 vWorldPosition;

    void main() {
      vNormal = normalize(normalMatrix * normal);
      vec4 worldPosition = modelMatrix * vec4(position, 1.0);
      vWorldPosition = worldPosition.xyz;

      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
      fragmentShader: `
    varying vec3 vNormal;
    varying vec3 vWorldPosition;

    uniform vec3 glowColor;

    void main() {
      vec3 viewDirection = normalize(cameraPosition - vWorldPosition);

      // Fresnel effect (edge glow)
      float fresnel = dot(viewDirection, vNormal);
      fresnel = 1.0 - fresnel;

      // sharpen the edge
      fresnel = pow(fresnel, 3.0);

      vec3 color = glowColor * fresnel * 2.5;

      gl_FragColor = vec4(color, fresnel);
    }
  `,
      blending: THREE.AdditiveBlending,
      transparent: true,
      depthWrite: false,
      side: THREE.BackSide,
    });

    const atmosphere = new THREE.Mesh(
      new THREE.SphereGeometry(1.02, 64, 64),
      atmosphereMaterial
    );

    atmosphere.layers.enable(BLOOM_LAYER);

    // Keep atmosphere locked to the planet
    planet.add(atmosphere);

    // Anchor planet near left edge of visible frustum
    const distance = camera.position.z - planet.position.z;
    const vFov = THREE.MathUtils.degToRad(camera.fov);
    const visibleHeight = 2 * Math.tan(vFov / 2) * distance;
    const visibleWidth = visibleHeight * camera.aspect;
    const leftMargin = 0.25;
    const planetRadius = PLANET_SCALE * 1.02;
    planet.position.x = -visibleWidth / 2 + planetRadius + leftMargin;

    scene.add(planet);

    const composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene, camera));

    const selectiveBloom = new SelectiveBloomEffect(scene, camera, {
      blendFunction: BlendFunction.ADD,
      intensity: 1.1,
      luminanceThreshold: 0.02,
      luminanceSmoothing: 0.25,
      radius: 0.7,
      mipmapBlur: true,
    });

    starGroup.children.forEach((obj) => {
      selectiveBloom.selection.add(obj);
    });

    selectiveBloom.selection.add(planet);

    selectiveBloom.selection.add(atmosphere);
    const effectPass = new EffectPass(camera, selectiveBloom);
    effectPass.renderToScreen = true;
    composer.addPass(effectPass);

    let frameId = 0;
    const animate = () => {
      frameId = window.requestAnimationFrame(animate);
      starGroup.rotation.x += 0.00018;
      starGroup.rotation.y += 0.00011;
      planet.rotation.y += 0.002;

      // Render the scene with bloom effect
      composer.render();

      // DEBUG render without bloom to check performance impact
      // renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.cancelAnimationFrame(frameId);
      starGroup.traverse((object) => {
        if (object instanceof THREE.Mesh) {
          object.geometry.dispose();
          if (Array.isArray(object.material)) {
            object.material.forEach((material) => material.dispose());
          } else {
            object.material.dispose();
          }
        }
      });

      composer.dispose();
      renderer.dispose();
      if (mountNode) mountNode.removeChild(renderer.domElement);
    };
  }, [width, height]);

  return (
    <div
      id="three_background"
      style={{ position: 'fixed', top: 0, left: 0, width: `${width}px`, height: `${height}px`, overflow: 'hidden', pointerEvents: 'none' }}
      ref={mountRef}
    />
  );
};

export default ThreeBackground;
