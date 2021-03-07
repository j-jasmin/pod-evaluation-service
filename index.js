const k8s = require("@kubernetes/client-node");
const evaluate = require("./evaluate");

const kc = new k8s.KubeConfig();
kc.loadFromDefault();

const watch = new k8s.Watch(kc);

watch.watch(
  "/api/v1/namespaces/default/pods",
  {
    allowWatchBookmarks: false,
  },
  (type, pod) => {
    try {
      ["ADDED", "MODIFIED"].includes(type)
        ? evaluate(pod)
        : console.log("unknown type: " + type);
    } catch (e) {
      console.error(e);
    }
  }
);
