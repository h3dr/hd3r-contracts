var Hd3rToken = artifacts.require("Hd3rToken");

module.exports = async function (deployer) {
  await deployer.deploy(Hd3rToken);
};

var Hd3rCrowdsale = artifacts.require("Hd3rCrowdsale");

module.exports = async function (deployer) {
  await deployer.deploy(Hd3rCrowdsale, "", "", 0, 0);
};