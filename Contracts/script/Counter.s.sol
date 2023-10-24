// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Script, console2} from "forge-std/Script.sol";

import {Vote} from "../src/Vote.sol";


contract DeploymentScript is Script {
    function run() external {

        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY_ANVIL");
        vm.startBroadcast(deployerPrivateKey);

        new Vote();
        

        vm.stopBroadcast();
    }
}