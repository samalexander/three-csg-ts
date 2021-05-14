# three-csg-ts

CSG (Constructive Solid Geometry) library for [three.js](https://github.com/mrdoob/three.js/) with Typescript support.

_This is a typescript rewrite of [THREE-CSGMesh](https://github.com/manthrax/THREE-CSGMesh)._

[Example](https://stackblitz.com/edit/three-csg-ts?file=index.ts)

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

```
import * as THREE from 'three';
import { CSG } from 'three-csg-ts';

// Make 2 box meshes..
const meshA = new THREE.Mesh(new THREE.BoxGeometry(1,1,1), new THREE.MeshNormalMaterial());
const meshB = new THREE.Mesh(new THREE.BoxGeometry(1,1,1));

// Offset one of the boxes by half its width..
meshB.position.add(new THREE.Vector3(0.5, 0.5, 0.5));

// Make sure the .matrix of each mesh is current
meshA.updateMatrix();
meshB.updateMatrix();

// Subtract meshB from meshA
const meshResult = CSG.subtract(meshA, meshB);
```
