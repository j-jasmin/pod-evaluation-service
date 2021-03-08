module.exports = (pod) => {
  const imagePrefix = pod.spec.containers[0].image.split("/")[0];
  return imagePrefix.match("bitnami") ? true : false;
};
