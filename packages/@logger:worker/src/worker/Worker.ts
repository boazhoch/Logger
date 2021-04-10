import { expose } from "comlink";
import taggedLogerFactory from "@logger/tagged";

const logger = taggedLogerFactory({
  sendMessageOptions: { headers: { contentType: "application/json" }, urlEndpoint: "/log" },
  logFormmaterOptions: {
    prefix: () => `prefix`,
    suffix: () => ` Suffix format`,
  },
});

expose(logger);
