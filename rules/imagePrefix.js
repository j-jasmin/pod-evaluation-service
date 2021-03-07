module.exports = (pod, prefix) => {
  const imagePrefix = pod.spec.containers[0].image.split("/")[0];
  return imagePrefix.match(prefix) ? true : false;
};
