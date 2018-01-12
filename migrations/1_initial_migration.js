var Migrations = artifacts.require("./Migrations.sol");
var EIP20 = artifacts.require("./EIP20.sol");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(EIP20, 10000, "Training Bucks", 0, "TBX");
};
