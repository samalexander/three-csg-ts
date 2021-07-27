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
    if (!window.Worker) {
      throw new Error('This browser does not support web workers');
    }
    if (!this.worker) {
      this.worker = new Worker('./worker.js');
      this.worker.onmessage = (e) => {
        const { id, result } = e.data;
        // find task by id
        const { meshA, resolve } = this.workerTasks.find((t) => t.id === id);
        // remove task from list
        this.workerTasks = this.workerTasks.filter((t) => t.id !== id);
        // resolve task
        resolve(
          CSG.toMesh(CSG.fromRawObj(result), meshA.matrix, meshA.material)
        );
      };
    }
    return this.worker;
  }

  /**
   * Terminates the underlying web worker.
   */
  static destroy(): void {
    this.worker?.terminate();
    this.worker = undefined;
  }

  /**
   * Performs CSG operations using a web worker. This prevents the main thread from being blocked.
   *
   * Returns a promise that resolves to the result. You probably want to chain the promise using the `then` method rather than awaiting it.
   */
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
      worker.postMessage({
        id: task.id,
        csgA,
        csgB,
        op,
      });
    });
  }
}
