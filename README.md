# Three CSG

[![CircleCI](https://circleci.com/gh/Hi-Level/three-csg.svg?style=svg&circle-token=32d4dc85df58e34f69da484a464e5e07718fda5c)](https://circleci.com/gh/Hi-Level/three-csg)
[![Maintainability](https://api.codeclimate.com/v1/badges/03518d7b40e2d73eb5bf/maintainability)](https://codeclimate.com/github/Hi-Level/three-csg/maintainability)

CSG (Constructive Solid Geometry) library for [three.js](https://github.com/mrdoob/three.js/) with Typescript support.

*This is a typescript rewrite of [THREE-CSGMesh](https://github.com/manthrax/THREE-CSGMesh).*

## Concept

CSG is the name of a technique for generating a new geometry as a function of two input geometries.

CSG is sometimes referred to as "Boolean" operators in 3d modelling packages.

Internally it uses a structure called a BSP (binary space partitioning) tree to carry out these operations.

The supported operations are .subtract, .union, and .intersect.

By using different combinations of these 3 operations, and changing the order of the input models, you can construct any combination of the input models.

## Installation

* Install with npm `npm i -save @hi-level/three-csg`
* Install with yarn `yarn add @hi-level/three-csg`

## Example usage

```
import * as THREE from 'three';
import { CSG } from '@hi-level/three-csg';

// Make 2 box meshes..
const meshA = new THREE.Mesh(new THREE.BoxGeometry(1,1,1));
const meshB = new THREE.Mesh(new THREE.BoxGeometry(1,1,1));

// Offset one of the boxes by half its width..
meshB.position.add(new THREE.Vector3(0.5, 0.5, 0.5);

// Make sure the .matrix of each mesh is current
meshA.updateMatrix();
meshB.updateMatrix();

// Create a bsp tree from each of the meshes
const bspA = CSG.fromMesh(meshA);                        
const bspB = CSG.fromMesh(meshB);

// Subtract one bsp from the other via .subtract... other supported modes are .union and .intersect
const bspResult = bspA.subtract(bspB);

// Get the resulting mesh from the result bsp
const meshResult = CSG.toMesh(bspResult, meshA.matrix);

// Set the results material to the material of the first cube.
meshResult.material = meshA.material;
```