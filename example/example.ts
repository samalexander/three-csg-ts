import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { CsgWorker } from '../src/CsgWorker';

let camera: THREE.PerspectiveCamera,
  scene: THREE.Scene,
  renderer: THREE.WebGLRenderer,
  results = new Array<THREE.Mesh>(),
  async1: THREE.Mesh,
  async2: THREE.Mesh,
  async3: THREE.Mesh;
const worker1 = new CsgWorker(),
  worker2 = new CsgWorker(),
  worker3 = new CsgWorker();
const box = new THREE.Mesh(
    new THREE.BoxGeometry(2, 2, 2),
    new THREE.MeshNormalMaterial()
  ),
  sphere = new THREE.Mesh(
    new THREE.SphereGeometry(1.2, 16, 16),
    new THREE.MeshNormalMaterial()
  );

init();
animate();

function init() {
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    1,
    10000
  );
  const controls = new OrbitControls(camera, renderer.domElement);
  camera.position.set(0, 20, 10);
  controls.update();
}

function recompute() {
  for (const result of results) {
    result.parent.remove(result);
    result.geometry.dispose();
  }
  results = [];

  box.updateMatrix();
  sphere.updateMatrix();

  // ops with box as base mesh
  // results.push(CSG.subtract(box, sphere));
  // results.push(CSG.union(box, sphere));
  // results.push(CSG.intersect(box, sphere));
  // ops with sphere as base mesh
  // results.push(CSG.subtract(sphere, box));
  // results.push(CSG.union(sphere, box));
  // results.push(CSG.intersect(sphere, box));

  worker1.doAsync(box, sphere, 'subtract').then((result) => {
    if (result) {
      async1?.parent.remove(async1);
      async1?.geometry.dispose();
      async1 = result;
      scene.add(result);
    }
  });

  worker2.doAsync(box, sphere, 'subtract').then((result) => {
    if (result) {
      async2?.parent.remove(async2);
      async2?.geometry.dispose();
      async2 = result;
      scene.add(result);

      result.position.z -= 5;
    }
  });

  worker3.doAsync(box, sphere, 'subtract').then((result) => {
    if (result) {
      async3?.parent.remove(async3);
      async3?.geometry.dispose();
      async3 = result;
      scene.add(result);

      result.position.z += 5;
    }
  });

  for (let i = 0; i < results.length; i++) {
    const result = results[i];
    scene.add(result);

    result.position.z += -5 + (i % 3) * 5;
    result.position.x += -5 + ((i / 3) | 0) * 10;
  }
}

function animate() {
  requestAnimationFrame(animate);

  const time = performance.now();
  sphere.position.x = Math.sin(time * 0.001) * 2;
  sphere.position.z = Math.cos(time * 0.0011) * 0.5;
  recompute();

  renderer.render(scene, camera);
}
