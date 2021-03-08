const chai = require("chai");
const factories = require("chai-factories");
const factory = require("./podFactory.spec");
const sinon = require("sinon");
const evaluate = require("../evaluate");

const expect = chai.expect;

chai.use(factories);
const pod = chai.create("passing");

describe("Evaluate", () => {
  it("should log with pod and rule evaluation info", () => {
    const spy = sinon.spy(console, "log");
    evaluate(pod);

    expect(JSON.parse(spy.args[0][0])).to.have.all.keys(
      "pod",
      "rule_evaluation"
    );
    spy.restore();
  });
});
