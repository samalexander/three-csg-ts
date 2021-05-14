import * as THREE from 'three';
import { CSG } from '../src';

let camera: THREE.PerspectiveCamera,
  scene: THREE.Scene,
  renderer: THREE.WebGLRenderer,
  mesh: THREE.Mesh;

init();
animate();

function init() {
  camera = new THREE.PerspectiveCamera(
    70,
    window.innerWidth / window.innerHeight,
    0.01,
    10
  );
  camera.position.z = 1;

  scene = new THREE.Scene();

  // Make 2 box meshes..
  const meshA = new THREE.Mesh(
    new THREE.BoxGeometry(0.2, 0.2, 0.2),
    new THREE.MeshNormalMaterial()
  );
  const meshB = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.2, 0.2));

  // Offset one of the boxes by half its width..
  meshB.position.add(new THREE.Vector3(0.1, 0.1, 0.1));

  // Make sure the .matrix of each mesh is current
  meshA.updateMatrix();
  meshB.updateMatrix();

  // Subtract meshB from meshA
  mesh = CSG.subtract(meshA, meshB);

  scene.add(mesh);

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);
}

function animate() {
  requestAnimationFrame(animate);

  mesh.rotation.x += 0.01;
  mesh.rotation.y += 0.01;

  renderer.render(scene, camera);
}
