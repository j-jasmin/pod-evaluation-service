const hasImagePrefix = require("./rules/imagePrefix");
const isLabelPresent = require("./rules/label");
const isOlderThan = require("./rules/age");

module.exports = (pod) => {
  const evaluationResults = {
    pod: pod.metadata.name,
    rule_evaluation: [
      {
        name: "image_prefix",
        valid: hasImagePrefix(pod),
      },
      {
        name: "team_label_present",
        valid: isLabelPresent(pod),
      },
      {
        name: "recent_start_time",
        valid: isOlderThan(pod),
      },
    ],
  };
  console.log(JSON.stringify(evaluationResults));
};
