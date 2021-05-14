# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [3.1.0](https://github.com/Jiro-Digital/three-csg-ts/compare/v3.0.1...v3.1.0) (2021-05-14)


### Features

* add static CSG wrapper methods ([860143c](https://github.com/Jiro-Digital/three-csg-ts/commit/860143c43c1215421ca1a69b932f96a2fa95371e))

### [3.0.1](https://github.com/Jiro-Digital/three-csg-ts/compare/v3.0.0...v3.0.1) (2021-05-14)


### Bug Fixes

* re-add CSG toGeometry method ([0d82369](https://github.com/Jiro-Digital/three-csg-ts/commit/0d82369d2b3b8d18b9a987ee8b2a06a11f678c61))

## [3.0.0](https://github.com/Jiro-Digital/three-csg-ts/compare/v2.3.0...v3.0.0) (2021-05-14)


### ⚠ BREAKING CHANGES

* now supports three v0.125.0 and above

### Features

* add support for three >= 0.125.0 ([b8f514f](https://github.com/Jiro-Digital/three-csg-ts/commit/b8f514f4e345cadbd5895bd6fa995a8777882bee))


### Bug Fixes

* add dev test setup ([f1ad8b5](https://github.com/Jiro-Digital/three-csg-ts/commit/f1ad8b5274066d2b6b8480f866ee3f17ba3f64f6))

## [2.3.0](https://github.com/Jiro-Digital/three-csg-ts/compare/v2.2.2...v2.3.0) (2021-05-14)


### Features

* add esm build ([7f797a3](https://github.com/Jiro-Digital/three-csg-ts/commit/7f797a30adf2a20c27b6997ada558e19bc5752ce))


### Bug Fixes

* upgrade dependencies ([6d1bf6e](https://github.com/Jiro-Digital/three-csg-ts/commit/6d1bf6efba9537de4ec33b02117981d3c4d70672))

### [2.2.2](https://github.com/Jiro-Digital/three-csg-ts/compare/v2.2.1...v2.2.2) (2021-02-04)


### Bug Fixes

* pin three peer dependency ([a4dad9a](https://github.com/Jiro-Digital/three-csg-ts/commit/a4dad9a0c2dbde721f58355aa2424bcf53f1d261))

### [2.2.1](https://github.com/Jiro-Digital/three-csg-ts/compare/v2.2.0...v2.2.1) (2021-02-04)


### Bug Fixes

* pin three peer dependency below 0.125.0 ([49a7b4f](https://github.com/Jiro-Digital/three-csg-ts/commit/49a7b4f3c3c55506fb607f44b885e857ce616154))

## [2.2.0](https://github.com/Jiro-Digital/three-csg-ts/compare/v2.1.0...v2.2.0) (2021-01-26)


### Features

* support conversion to geometry ([9fb107d](https://github.com/Jiro-Digital/three-csg-ts/commit/9fb107dc73188e07e1086bd4872572731651b112))

## [2.1.0](https://github.com/Jiro-Digital/three-csg-ts/compare/v2.0.1...v2.1.0) (2021-01-26)


### Features

* Add support for multiple materials ([94cf1ba](https://github.com/Jiro-Digital/three-csg-ts/commit/94cf1bac10aa69e256fbdd9405d682433c8eacde))


### Bug Fixes

* add missing return types ([f9672a3](https://github.com/Jiro-Digital/three-csg-ts/commit/f9672a397644cdb9f355a6d2cb3410031bd0e0f2))
* update dependencies ([d6a02b5](https://github.com/Jiro-Digital/three-csg-ts/commit/d6a02b53e96404a5e52e50b7fa39cb4e956d9e3f))

### [2.0.1](https://github.com/Jiro-Digital/three-csg-ts/compare/v2.0.0...v2.0.1) (2021-01-13)


### Bug Fixes

* add types for fromGeometry method ([b216185](https://github.com/Jiro-Digital/three-csg-ts/commit/b216185fe9dfb98a096b8245d780621a1b5f896e))
* clone matrix before invert ([#14](https://github.com/Jiro-Digital/three-csg-ts/issues/14)) ([6907456](https://github.com/Jiro-Digital/three-csg-ts/commit/690745649a7e637da49035db0dd7e21c1eaea8cb))
* upgrade dependencies ([5223398](https://github.com/Jiro-Digital/three-csg-ts/commit/52233988a46cbee38c89d027b45bd2c5f55c19df))
* upgrade dependencies ([a4a7a2c](https://github.com/Jiro-Digital/three-csg-ts/commit/a4a7a2c1a2f998c864f6a2f35a562d4ebf280caa))
* upgrade dependencies ([a45a222](https://github.com/Jiro-Digital/three-csg-ts/commit/a45a22252172794b052e3b79135d0496385df27b))
* upgrade dependencies ([a821f57](https://github.com/Jiro-Digital/three-csg-ts/commit/a821f578f8ca6cf689809d404ab148e34988c944))

## [2.0.0](https://github.com/Jiro-Digital/three-csg-ts/compare/v1.0.6...v2.0.0) (2020-12-13)


### ⚠ BREAKING CHANGES

* target es6

### Features

* target es6 ([6cea95e](https://github.com/Jiro-Digital/three-csg-ts/commit/6cea95e49dfe04c6984dcdb9ce075c84830e6453))


### Bug Fixes

* handle Matrix4 getInverse deprecation in three r123 ([d04eb4b](https://github.com/Jiro-Digital/three-csg-ts/commit/d04eb4bb2efa01a26353d50ea50a678c4f2f2feb))
* upgrade dependencies ([b40b1a0](https://github.com/Jiro-Digital/three-csg-ts/commit/b40b1a0741bd147cf13fdb6ee1856862648d2c5c))

### [1.0.6](https://github.com/Jiro-Digital/three-csg-ts/compare/v1.0.5...v1.0.6) (2020-10-27)


### Bug Fixes

* add missing super call ([d4d3f65](https://github.com/Jiro-Digital/three-csg-ts/commit/d4d3f65ce66ac26dc8f13c8722119153d16fe58e))
* upgrade dependencies ([fce017d](https://github.com/Jiro-Digital/three-csg-ts/commit/fce017d64a671cb713eabc06ddee471aedf6d286))

### [1.0.5](https://github.com/Jiro-Digital/three-csg-ts/compare/v1.0.4...v1.0.5) (2020-10-06)


### Bug Fixes

* add organize imports plugin ([859aaa9](https://github.com/Jiro-Digital/three-csg-ts/commit/859aaa937c0dc288ce6f940cc7dad59d84ea391e))
* upgrade dependencies ([5e14d46](https://github.com/Jiro-Digital/three-csg-ts/commit/5e14d4627649c7ee835aee3fd767aaa828e920db))
* Upgrade dependencies ([03d07a6](https://github.com/Jiro-Digital/three-csg-ts/commit/03d07a647cb69de53c67022f13ec50442acaf211))

### [1.0.4](https://github.com/JiroUK/three-csg-ts/compare/v1.0.3...v1.0.4) (2020-04-14)


### Bug Fixes

* Update README ([351f54b](https://github.com/JiroUK/three-csg-ts/commit/351f54b3a389d1584ddb4a59b2afddf715d68793))

### [1.0.3](https://github.com/JiroUK/three-csg-ts/compare/v1.0.2...v1.0.3) (2020-04-07)


### Bug Fixes

* Upgrade dependencies ([de79f76](https://github.com/JiroUK/three-csg-ts/commit/de79f765daaf57caba523b0f282b6fcc280bf64b))

### 1.0.2 (2020-03-31)


### Bug Fixes

* Fix deprecation introduced by threejs r113 ([#6](https://github.com/JiroUK/three-csg-ts/issues/6)) ([c77bbdf](https://github.com/JiroUK/three-csg-ts/commit/c77bbdf9930de29c4f46c7142823e1bfb43609f9))
* Fix readme ([102aad4](https://github.com/JiroUK/three-csg-ts/commit/102aad41bfc16606b1c137d02e124565f403e429))
* Upgrade dependencies ([c5ef698](https://github.com/JiroUK/three-csg-ts/commit/c5ef69818c8dc56798f682899a3645eac09da524))
* **csg:** Add check for uv property in toMesh ([27d9575](https://github.com/JiroUK/three-csg-ts/commit/27d95757bd5d5e3492de83f1074ceb1d57a133e7))
* **csg:** Check faceVertexUvs exists ([#3](https://github.com/JiroUK/three-csg-ts/issues/3)) ([057bd3f](https://github.com/JiroUK/three-csg-ts/commit/057bd3f0b7d90669afa61e07075dad3cb4093eb3))
* **deps:** Upgrade dependencies ([473e6f4](https://github.com/JiroUK/three-csg-ts/commit/473e6f4ce06e4fd70698536551c9913ad1bdc894))
* **deps:** Upgrade dependencies ([580b3d8](https://github.com/JiroUK/three-csg-ts/commit/580b3d839afb5a025d0b6ccf87ccff6a2c763c9b))
* **deps:** Upgrade dependencies ([abf55fd](https://github.com/JiroUK/three-csg-ts/commit/abf55fd25513d5e6c49b90c6171e7a894b384da4))
* **deps:** Upgrade dependencies ([baca9f7](https://github.com/JiroUK/three-csg-ts/commit/baca9f74ddcf631226f9a31f949ed6444e3934f6))
* **deps:** Upgrade dependencies ([a6ed69e](https://github.com/JiroUK/three-csg-ts/commit/a6ed69eb43a66d3b4dee5b8c8ad18606d0313ab9))
* **deps:** Upgrade dependencies ([5cfc090](https://github.com/JiroUK/three-csg-ts/commit/5cfc0904a2dd30310d412819e9d92f33b1d6af10))
* **readme:** Update README ([c6329c9](https://github.com/JiroUK/three-csg-ts/commit/c6329c95998e5322b9d41fe10fe01f4bd0d88fce))

### [1.0.1](https://github.com/JiroUK/three-csg-ts/compare/v1.0.0...v1.0.1) (2020-02-25)


### Bug Fixes

* Fix readme ([66fc21b](https://github.com/JiroUK/three-csg-ts/commit/66fc21b))

## 1.0.0 (2020-02-25)


### Bug Fixes

* Fix deprecation introduced by threejs r113 ([#6](https://github.com/JiroUK/three-csg-ts/issues/6)) ([55b5fdf](https://github.com/JiroUK/three-csg-ts/commit/55b5fdf))
* **csg:** Add check for uv property in toMesh ([d491502](https://github.com/JiroUK/three-csg-ts/commit/d491502))
* **csg:** Check faceVertexUvs exists ([#3](https://github.com/JiroUK/three-csg-ts/issues/3)) ([59d2dca](https://github.com/JiroUK/three-csg-ts/commit/59d2dca))
* **deps:** Upgrade dependencies ([7b744e2](https://github.com/JiroUK/three-csg-ts/commit/7b744e2))
* **deps:** Upgrade dependencies ([338d745](https://github.com/JiroUK/three-csg-ts/commit/338d745))
* **deps:** Upgrade dependencies ([c4ea9c1](https://github.com/JiroUK/three-csg-ts/commit/c4ea9c1))
* **deps:** Upgrade dependencies ([8a833c2](https://github.com/JiroUK/three-csg-ts/commit/8a833c2))
* **deps:** Upgrade dependencies ([ce936de](https://github.com/JiroUK/three-csg-ts/commit/ce936de))
* **deps:** Upgrade dependencies ([43705b9](https://github.com/JiroUK/three-csg-ts/commit/43705b9))
* **readme:** Update README ([cfb8c08](https://github.com/JiroUK/three-csg-ts/commit/cfb8c08))
