# Pod Evaluation Service

### Description

Using the [Javascript client](https://github.com/kubernetes-client/javascript) it watches pods running in a cluster and evaluates the following rules:

- Image prefix includes 'bitnami/'
- Label contains key 'team"
- Recent start time (not older than 7 days)

### Requirements

- Node v15.3.0
- [Minikube](https://minikube.sigs.k8s.io/docs/start/)
- [Docker](https://docs.docker.com/get-docker/)

### Usage

Make sure that the cluster is running (`minikube start`).

```
npm install
```

```
node index.js
```

### Testing

Tests are written using Mocha, Chai and Sinon.

```
npm run test
```
