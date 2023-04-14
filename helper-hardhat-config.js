const { ethers } = require("hardhat")

const networkConfig = {
    default: {
        name: "hardhat",
        keepersUpdateInterval: "30",

    },
    31337: {
        name: "localhost",
        ethUsdPriceFeed:"0x694AA1769357215DE4FAC081bf1f309aDC325306",    
        gasLane: "0x474e34a077df58807dbe9c96d3c009b23b3c6d0cce433e59bbf5b34f823bc56c", // 30 gwei 
        mintFee: "100000000000000000",
        callbackGasLimit: "500000", // 500,000 gas

    },
    11155111: {
        name: "sepolia",
        vrfCoordinatorV2: "0x8103B0A8A00be2DDC778e6e7eaa21791Cd364625",
        subscriptionId: "1017",
        gasLane: "0x474e34a077df58807dbe9c96d3c009b23b3c6d0cce433e59bbf5b34f823bc56c", // 30 gwei
        callbackGasLimit: "100000000", // 500,000 gas
        mintFee: "100000000000000000",
        ethUsdPriceFeed:"0x694AA1769357215DE4FAC081bf1f309aDC325306",
    },
    5: {
        name: "goerli",
        vrfCoordinatorV2: "0x2Ca8E0C643bDe4C2E08ab1fA0da3401AdAD7734D",
        subscriptionId: "1017",
        gasLane: "0x474e34a077df58807dbe9c96d3c009b23b3c6d0cce433e59bbf5b34f823bc56c", // 30 gwei
        callbackGasLimit: "100000000", // 500,000 gas
        mintFee: "100000000000000000",
        ethUsdPriceFeed:"0x694AA1769357215DE4FAC081bf1f309aDC325306",
    },


    1: {
        name: "mainnet",
        keepersUpdateInterval: "30",
    },

    
}

const VERIFICATION_BLOCK_CONFIRMATIONS = 6
const DECIMALS = "18"
const INITIAL_PRICE = "2000000000000000000"
const developmentChains = ["hardhat", "localhost"]
const frontEndContractsFile2 =
    "../nextjs-nft-marketplace-thegraph-fcc/constants/networkMapping.json"
    const frontEndAbiLocation2 = "../nexjs/constants/"


module.exports = {
    networkConfig,
    developmentChains,
    DECIMALS,
    INITIAL_PRICE,
}