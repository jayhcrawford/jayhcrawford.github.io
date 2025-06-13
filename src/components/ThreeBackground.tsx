import { useEffect, useRef } from "react";
import * as THREE from "three"
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

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    const animate = () => {
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render(scene, camera);
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
