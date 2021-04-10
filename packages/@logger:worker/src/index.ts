//@ts-nocheck
import { wrap } from "comlink";

import WebWorker from "web-worker:./worker/Worker.ts";

const onVisibilityChange = (worker: any) => () => {
  if (document.visibilityState === "hidden") {
    worker.flush();
  }
};

function init() {
  const worker = wrap(new WebWorker());
  document.addEventListener("visibilitychange", onVisibilityChange(worker));
  return worker;
}

export default init;
