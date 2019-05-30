import { CSG } from '../index';

test('clone', () => {
    const csg = new CSG();
    expect(csg.clone()).toEqual(csg);
});
