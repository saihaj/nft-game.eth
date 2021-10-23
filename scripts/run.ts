import { ethers } from 'hardhat'

const main = async () => {
  const gameContractFactory = await ethers.getContractFactory('MyEpicGame')
  const gameContract = await gameContractFactory.deploy(
    ['Rick', 'Catwoman', 'Pikachu'], // Names
    [
      'https://i.imgur.com/G7nY5M5.png', // Images
      'https://i.imgur.com/beQKUlf.jpeg',
      'https://i.imgur.com/WMB6g9u.png',
    ],
    [100, 100, 300], // HP values
    [30, 50, 25], // Attack damage values
  )
  await gameContract.deployed()
  console.log('Contract deployed to:', gameContract.address)
}

const runMain = async () => {
  try {
    await main()
    process.exit(0)
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

runMain()
