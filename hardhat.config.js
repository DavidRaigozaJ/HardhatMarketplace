require("@nomiclabs/hardhat-waffle")
require("@nomiclabs/hardhat-etherscan")
require("hardhat-deploy")
require("solidity-coverage")
require("hardhat-gas-reporter")
require("dotenv").config()

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

const MUMBAI_API_KEY =
  process.env.MUMBAI_API_KEY

const MUMBAI_PRIVATE_KEY = 
  process.env.MUMBAI_PRIVATE_KEY


// Your API key for Etherscan, obtain one at https://etherscan.io/
const POLYGONSCAN_API_KEY =
  process.env.POLYGONSCAN_API_KEY || "Your etherscan API key"

module.exports = {
  defaultNetwork: "mumbai",
  networks: {
    hardhat: {
  
      chainId: 31337,
    },
    localhost: {
      chainId: 31337,
    },
    mumbai: {
      url: MUMBAI_API_KEY,
      accounts: MUMBAI_PRIVATE_KEY !== undefined ? [MUMBAI_PRIVATE_KEY] : [],
  
      saveDeployments: true,
      chainId: 	80001,
    },
  },
  etherscan: {
    // npx hardhat verify --network <NETWORK> <CONTRACT_ADDRESS> <CONSTRUCTOR_PARAMETERS>
    apiKey: {
      polygonMumbai: POLYGONSCAN_API_KEY,
    },
    customChains: [],
  },
  // gasReporter: {
  //   enabled: REPORT_GAS,
  //   currency: "USD",
  //   outputFile: "gas-report.txt",
  //   noColors: true,
  //   // coinmarketcap: process.env.COINMARKETCAP_API_KEY,
  // },

  namedAccounts: {
    deployer: {
      default: 0, // here this will by default take the first account as deployer
      1: 0, // similarly on mainnet it will take the first account as deployer. Note though that depending on how hardhat network are configured, the account 0 on one network can be different than on another
    },
    user1: {
      default: 1,
    },
  },
  solidity: {
    compilers: [
      {
        version: "0.8.8",
      },
      {
        version: "0.6.0",
      },
      {
        version: "0.8.0",
      },
      {
        version: "0.6.6",
      },
    ],
  },
  mocha: {
    timeout: 200000, // 200 seconds max for running tests
  },
}