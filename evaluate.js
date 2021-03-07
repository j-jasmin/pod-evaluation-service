const hasImagePrefix = require("./rules/imagePrefix");
const isLabelPresent = require("./rules/label");
const isOlderThan = require("./rules/olderThan");

module.exports = (pod) => {
  const evaluationResults = {
    pod: pod.metadata.name,
    rule_evaluation: [
      {
        name: "image_prefix",
        valid: hasImagePrefix(pod, "tfsdffest"),
      },
      {
        name: "team_label_present",
        valid: isLabelPresent(pod, "jasminj000"),
      },
      {
        name: "recent_start_time",
        valid: isOlderThan(pod, 7),
      },
    ],
  };
  console.log(JSON.stringify(evaluationResults));
};
