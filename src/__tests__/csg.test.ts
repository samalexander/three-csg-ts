import { BoxGeometry, BufferGeometry, Matrix4, Mesh, Vector3 } from 'three';
import { CSG } from '../index';

describe('CSG instance methods', () => {
  test('clone', () => {
    const csg = new CSG();
    expect(csg.clone()).toEqual(csg);
  });

  // Make 2 box meshes
  const meshA = new Mesh(new BoxGeometry(1, 1, 1));
  const meshB = new Mesh(new BoxGeometry(1, 1, 1));
  // offset one of the boxes by half its width
  meshB.position.add(new Vector3(0.5, 0.5, 0.5));
  // Make sure the .matrix of each mesh is current
  meshA.updateMatrix();
  meshB.updateMatrix();
  // Create a bsp tree from each of the meshes
  const bspA = CSG.fromMesh(meshA);
  const bspB = CSG.fromMesh(meshB);

  test('inverse', () => {
    expect(bspA.inverse()).toBeTruthy();
  });

  test('toPolygons', () => {
    expect(bspA.toPolygons()).toBeTruthy();
  });

  test('subtract', () => {
    // Subtract one bsp from the other
    const bspC = bspA.subtract(bspB);
    // Get the resulting mesh from the result bsp
    const meshC = CSG.toMesh(bspC, meshA.matrix);

    expect(meshC).toBeTruthy();
  });

  test('union', () => {
    // Union one bsp with the other
    const bspC = bspA.union(bspB);
    // Get the resulting mesh from the result bsp
    const meshC = CSG.toMesh(bspC, meshA.matrix);

    expect(meshC).toBeTruthy();
  });

  test('intersect', () => {
    // Intersect one bsp with the other
    const bspC = bspA.intersect(bspB);
    // Get the resulting mesh from the result bsp
    const meshC = CSG.toMesh(bspC, meshA.matrix);

    expect(meshC).toBeTruthy();
  });

  test('custom geometry', () => {
    const box = new BoxGeometry(1, 1, 1);
    const g = new BufferGeometry().copy(box);
    const csg = CSG.fromGeometry(g);

    const result = CSG.toMesh(csg, new Matrix4());
    expect(result).toBeTruthy();
  });
});
