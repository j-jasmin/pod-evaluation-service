module.exports = (pod, days) => {
  const currentTime = new Date();
  const xDaysAgo = new Date(Date.now()).setDate(currentTime.getDate() - days);
  const startTimeDate = new Date(pod.status.startTime);

  return xDaysAgo < startTimeDate ? true : false;
};
