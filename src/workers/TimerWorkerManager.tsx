let instance: TimerWorkerManager | null = null;

export class TimerWorkerManager {
  private workers: Worker;

  private constructor() {
    this.workers = new Worker(new URL('./timerWorker.js', import.meta.url));
  }

  static getInstance() {
    if (!instance) {
      instance = new TimerWorkerManager();
    }
    return instance;
  }

  postMessage(message: any) {
    this.workers.postMessage(message);
  }

  onmessage(cb: (e: MessageEvent) => void) {
    this.workers.onmessage = cb;
  }

  terminate() {
    this.workers.terminate();
    instance = null;
  }
}
