import { useEffect, useRef } from "react";
import * as THREE from "three";
import { EffectComposer, RenderPass, EffectPass, SelectiveBloomEffect, BloomEffect } from 'postprocessing';
import useWindowSize from '../hooks/useWindowSize';

const ThreeBackground = () => {
  const { width, height } = useWindowSize();
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true }); // Enable transparency
    renderer.setClearColor(0x000000, 0); // Set background to transparent


    renderer.setSize(width, height);
    renderer.domElement.style.position = 'absolute';
    renderer.domElement.style.top = '0';
    renderer.domElement.style.left = '0';
    renderer.domElement.style.zIndex = '-1'; // Set behind other content

    const mountNode = mountRef.current;
    if (mountNode instanceof HTMLElement && !mountNode.hasChildNodes()) {
      mountNode.appendChild(renderer.domElement);
    }

    // Create a group to hold all the cubes
    const starGroup = new THREE.Group();

    for (let i = 0; i < 50; i++) {
      const geometry = new THREE.BoxGeometry(0.1, 0.1, 0.1); // Small cubes
      // const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
      const star = new THREE.Mesh(geometry, new THREE.MeshStandardMaterial({
        toneMapped: false,
        emissive: "white",
        emissiveIntensity: 1
      }));

      // Randomly position cubes within a certain range
      star.position.x = (Math.random() - 0.5) * 10;
      star.position.y = (Math.random() - 0.5) * 10;
      star.position.z = (Math.random() - 0.5) * 10;
      star.material.color.set(0, 0, 0)

      starGroup.add(star);
    }

    scene.add(starGroup);

    camera.position.z = 5;

    // Create bloom selection array
    const bloomSelection: THREE.Object3D<THREE.Object3DEventMap>[] = [];
    starGroup.children.forEach((child) => {
      bloomSelection.push(child);
    });

    // Set up postprocessing composer and passes
    const composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene, camera));

    // Set up SelectiveBloomEffect
    const selectiveBloomEffect = new BloomEffect({

      intensity: 100,
      luminanceThreshold: 0.1,
      luminanceSmoothing: .2,
      radius: 9,
    });
    const effectPass = new EffectPass(camera, selectiveBloomEffect);
    effectPass.renderToScreen = true;
    composer.addPass(effectPass);

    const animate = () => {
      // Rotate the whole group of stars
      starGroup.rotation.x += 0.002;
      starGroup.rotation.y += 0.003;

      composer.render();
      requestAnimationFrame(animate);
    };

    animate();
    return () => {
      if (mountNode) {
        mountNode.removeChild(renderer.domElement);
      }
    };
  }, [width, height]);

  return <div id="three_background" style={{ position: 'fixed', top: 0, left: 0, width: `${width}px`, height: `${height}px`, overflow: 'hidden' }} ref={mountRef} />;
};

export default ThreeBackground
