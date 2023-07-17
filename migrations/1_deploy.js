const UniswapV2Factory = artifacts.require("UniswapV2Factory");

module.exports = function(deployer) {
  // deployment steps
  const feeSetter = '0xDF27046391D2f4F0Dbb8A4Ee995BDc49d22e5ee1'
  deployer.deploy(UniswapV2Factory, feeSetter);
  
};