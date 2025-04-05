import path from "path";
require('dotenv').config({ path: path.resolve(__dirname. '.env')})

import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const {PRIVATE_KEY} = process.env

const config: HardhatUserConfig = {
  solidity: "0.8.28",
};

export default config;
