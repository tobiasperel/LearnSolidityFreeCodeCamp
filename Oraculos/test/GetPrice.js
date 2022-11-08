const { expect } = require("chai");
const { ethers } = require ('hardhat')

async function deploy() {
  const getPriceFactory = await ethers.getContractFactory('GetPrice')
  const getPrice = await getPriceFactory.deploy()
  await getPrice.deployed()
  return getPrice
}

describe('GetPrice', () => {
  describe('getData', () => {
    it('take the data', async () => {
      const getPrice = await deploy()

      const [alice, bob] = await ethers.getSigners()
      // const data = await getPrice.connect(bob).getLatestPrice()
      console.log(data)
    })
  })
})