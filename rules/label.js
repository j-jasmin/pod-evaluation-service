module.exports = (pod, label) => {
  return pod.metadata.labels.hasOwnProperty(label);
};
