module.exports = (pod) => {
  const currentTime = new Date();
  const xDaysAgo = new Date(Date.now()).setDate(currentTime.getDate() - 7);
  const startTimeDate = new Date(pod.status.startTime);

  return xDaysAgo < startTimeDate ? true : false;
};
