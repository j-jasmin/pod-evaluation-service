module.exports = (pod) => {
  const currentTime = new Date();
  const SevenDaysAgo = new Date(Date.now()).setDate(currentTime.getDate() - 7);
  const startTimeDate = new Date(pod.status.startTime);

  return SevenDaysAgo < startTimeDate ? true : false;
};
