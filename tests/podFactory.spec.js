const chai = require("chai");
const factories = require("chai-factories");

chai.use(factories);

chai.factory("failing", {
  kind: "Pod",
  apiVersion: "v1",
  metadata: {
    name: "evaluation-service-774d74c48f-g549s",
    namespace: "default",
    labels: { app: "evaluation-service", "pod-template-hash": "774d74c48f" },
  },
  spec: {
    containers: [
      {
        name: "pod-evaluation-service",
        image: "pod-evaluation-service:latest",
      },
    ],
  },
  status: {
    startTime: "2020-03-06T17:30:11Z",
  },
});

chai.factory("passing", {
  kind: "Pod",
  apiVersion: "v1",
  metadata: {
    name: "some-name-774d74c48f-g549s",
    namespace: "default",
    labels: { team: "some-value", "pod-template-hash": "774d74c48f" },
  },
  spec: {
    containers: [
      {
        name: "some-name",
        image: "bitnami/some-name:latest",
      },
    ],
  },
  status: {
    startTime: Date.now(),
  },
});
