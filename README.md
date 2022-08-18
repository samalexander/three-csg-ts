# three-csg-ts

CSG (Constructive Solid Geometry) library for [three.js](https://github.com/mrdoob/three.js/) with Typescript support.

_This is a typescript rewrite of [THREE-CSGMesh](https://github.com/manthrax/THREE-CSGMesh)._

[Example](https://stackblitz.com/edit/three-csg-ts?file=index.ts)

![Screenshot 2021-07-19 at 17 32 20](https://user-images.githubusercontent.com/935782/126194933-45ac18d0-2459-4213-97d2-d46ffb67483c.png)

## Concept

CSG is the name of a technique for generating a new geometry as a function of two input geometries.

CSG is sometimes referred to as "Boolean" operators in 3d modelling packages.

Internally it uses a structure called a BSP (binary space partitioning) tree to carry out these operations.

The supported operations are .subtract, .union, and .intersect.

By using different combinations of these 3 operations, and changing the order of the input models, you can construct any combination of the input models.

## Installation

- Install with npm `npm i -save three-csg-ts`
- Install with yarn `yarn add three-csg-ts`

## Example usage

```ts
import * as THREE from 'three';
import { CSG } from 'three-csg-ts';

// Make 2 meshes..
const box = new THREE.Mesh(
  new THREE.BoxGeometry(2, 2, 2),
  new THREE.MeshNormalMaterial()
);
const sphere = new THREE.Mesh(new THREE.SphereGeometry(1.2, 8, 8));

// Make sure the .matrix of each mesh is current
box.updateMatrix();
sphere.updateMatrix();

// Perform CSG operations
// The result is a THREE.Mesh that you can add to your scene...
const subRes = CSG.subtract(box, sphere);
const uniRes = CSG.union(box, sphere);
const intRes = CSG.intersect(box, sphere);
```
