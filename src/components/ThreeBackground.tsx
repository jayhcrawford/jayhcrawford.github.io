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

    scene.add(starGroup);
    camera.position.z = 5;

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
    // selectiveBloom.selection.add(starGroup);

    starGroup.children.forEach((obj) => {
      selectiveBloom.selection.add(obj);
    });

    const effectPass = new EffectPass(camera, selectiveBloom);
    effectPass.renderToScreen = true;
    composer.addPass(effectPass);

    let frameId = 0;
    const animate = () => {
      frameId = window.requestAnimationFrame(animate);
      starGroup.rotation.x += 0.00018;
      starGroup.rotation.y += 0.00011;
      
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
