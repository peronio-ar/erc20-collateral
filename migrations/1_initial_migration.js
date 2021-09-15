const collateralContract = process.env.COLLATERAL_CONTRACT;
const contractName = process.env.NAME;
const contractSymbol = process.env.SYMBOL;

const ERC20Collateral = artifacts.require('ERC20Collateral');

module.exports = function (deployer, network) {
  deployer.deploy(
    ERC20Collateral,
    contractName,
    contractSymbol,
    collateralContract
  );
};
