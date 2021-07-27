import { CSG } from './CSG';

// alias self to ctx to give us types
const ctx: Worker = self as any;

// respond to messages from the main thread
ctx.addEventListener('message', (event) => {
  const { id, csgA, csgB, op } = event.data;
  const a = CSG.fromRawObj(csgA);
  const b = CSG.fromRawObj(csgB);
  const result = a[op](b);
  ctx.postMessage({ id, result });
});
