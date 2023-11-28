import { erc20ABI } from 'wagmi'

export const Vote = {
  address: '0x13095563E31e6B40982e9B11B18bb566bca41E94',
  abi: [

    [
      {
        "inputs": [],
        "name": "Sondage_count",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_newGod",
            "type": "address"
          }
        ],
        "name": "changeGod2",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "string",
            "name": "_intitule",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "_option1",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "_option2",
            "type": "string"
          }
        ],
        "name": "creerSondage",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_sondageId",
            "type": "uint256"
          }
        ],
        "name": "isFinished",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_sondageId",
            "type": "uint256"
          }
        ],
        "name": "rouvrirSondage",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_sondageId",
            "type": "uint256"
          }
        ],
        "name": "sondageInfo",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_sondageId",
            "type": "uint256"
          }
        ],
        "name": "sondageResults",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "votesOption1",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "votesOption2",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_sondageId",
            "type": "uint256"
          }
        ],
        "name": "terminerSondage",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_sondageId",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "_choix",
            "type": "uint256"
          }
        ],
        "name": "voter",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      }
    ]

  ],
  chainId: 5,
} as const

export const usdcContractConfig = {
  address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
  abi: erc20ABI,
} as const
