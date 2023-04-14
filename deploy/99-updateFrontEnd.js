const { ethers } = require("hardhat")
const fs = require("fs")
require("dotenv").config()


const frontEndContractsFile = "../nexjs-nft/constants/networkMapping.json"
const frontEndAbiLocation="../nexjs-nft/constants/"
module.exports = async function() {
    if (process.env.UPDATE_FRONT_END) {
    console.log("Writing to front end...") 
        await updateContractAddresses()
        await updateAbi()
    }
}

async function updateAbi() {
    const nftMarketPlace = await ethers.getContract("MarketPlace")
    fs.writeFileSync(
        `${frontEndAbiLocation}MarketPlace.json`, nftMarketPlace.interface.format(ethers.utils.FormatTypes.json)
        )
        const basicNft = await ethers.getContract("BasicNft")
        fs.writeFileSync(
            `${frontEndAbiLocation}BasicNft.json`, basicNft.interface.format(ethers.utils.FormatTypes.json)
            )
}

async function updateContractAddresses(){
    const nftMarketplace = await ethers.getContract("MarketPlace")
    const chainId = network.config.chainId.toString()
    const contractAddresses = JSON.parse(fs.readFileSync(frontEndContractsFile, "utf8"))
    if (chainId in contractAddresses){
        if(!contractAddresses[chainId]["MarketPlace"].includes(nftMarketplace.address)){
            contractAddresses[chainId]["MarketPlace"].push(nftMarketplace.address)
        }
    } else {
        contractAddresses[chainId] = { MarketPlace: [nftMarketplace.address]}
    }
    fs.writeFileSync(frontEndContractsFile, JSON.stringify(contractAddresses))
}

module.exports.tags = ["all", "frontend"]