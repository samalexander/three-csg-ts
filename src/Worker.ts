import { CSG } from './CSG';

// alias self to ctx to give us types
const ctx: Worker = self as any;

// respond to messages from the main thread
ctx.addEventListener('message', (event) => {
  const { id, csgA, csgB, op } = JSON.parse(event.data);
  const a = CSG.fromJson(csgA);
  const b = CSG.fromJson(csgB);
  const result = a[op](b);
  ctx.postMessage(JSON.stringify({ id, result }));
});
