import { Mesh } from 'three';
import { CSG } from './CSG';

export interface Task {
  id: number;
  meshA: Mesh;
  resolve: (value?: any) => void;
}

export class CsgWorker {
  private static taskId = 0;
  private static workerTasks = new Array<Task>();
  private static worker: Worker;

  private static getWorker(): Worker {
    if (!this.worker) {
      this.worker = new Worker(new URL('./worker.ts', import.meta.url));
      this.worker.onmessage = (e) => {
        const { id, result } = JSON.parse(e.data);
        // find task by id
        const { meshA, resolve } = this.workerTasks.find((t) => t.id === id);
        // remove task from list
        this.workerTasks = this.workerTasks.filter((t) => t.id !== id);
        // resolve task
        resolve(CSG.toMesh(CSG.fromJson(result), meshA.matrix, meshA.material));
      };
    }
    return this.worker;
  }

  static doAsync(
    meshA: Mesh,
    meshB: Mesh,
    op: 'union' | 'subtract' | 'intersect'
  ): Promise<Mesh> {
    return new Promise((resolve) => {
      const worker = this.getWorker();
      const csgA = CSG.fromMesh(meshA);
      const csgB = CSG.fromMesh(meshB);
      const task = {
        id: this.taskId++,
        meshA,
        resolve,
      } as Task;
      this.workerTasks.push(task);
      worker.postMessage(
        JSON.stringify({
          id: task.id,
          csgA,
          csgB,
          op,
        })
      );
    });
  }
}
