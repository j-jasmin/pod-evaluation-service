const chai = require("chai");
const factories = require("chai-factories");

// Require rules
const hasImagePrefix = require("../rules/imagePrefix");
const isLabelPresent = require("../rules/label");
const isOlderThan = require("../rules/olderThan");

const expect = chai.expect;

chai.use(factories);

const failingPod = chai.create("failing");
const passingPod = chai.create("passing");

describe("rules", () => {
  describe("image prefix", () => {
    it("should return true if it includes 'bitnami'", () => {
      expect(hasImagePrefix(passingPod, "bitnami")).to.equal(true);
    });
    it("should return false if it doesn't include 'bitnami'", () => {
      expect(hasImagePrefix(failingPod, "bitnami")).to.equal(false);
    });
  });

  describe("labels", () => {
    it("should return true if label keys include 'team'", () => {
      expect(isLabelPresent(passingPod, "team")).to.equal(true);
    });
    it("should return false if label keys don't have 'team'", () => {
      expect(isLabelPresent(failingPod, "team")).to.equal(false);
    });
  });

  describe("recent start time", () => {
    it("should return true if startTime is less than 7 days ago", () => {
      expect(isOlderThan(passingPod, 7)).to.equal(true);
    });
    it("should return false if pod is running for more than 7 days", () => {
      expect(isOlderThan(failingPod, 7)).to.equal(false);
    });
  });
});
