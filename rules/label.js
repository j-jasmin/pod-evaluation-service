module.exports = (pod) => {
  return pod.metadata.labels.hasOwnProperty("team");
};
