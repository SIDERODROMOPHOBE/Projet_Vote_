'use client'

import { useState } from "react";
import "Styles/globals.css";
import {Vote} from "./contracts"

import { useContractRead } from 'wagmi'
import { readContract } from "viem/dist/types/actions/public/readContract";


export default function Tro() 
{
    var u;
    const [a,seta] = useState(true);
    const [openContract,setOpenContract] = useState(1);



    const sondageResults = useContractRead(
        {
            address: '0x13095563E31e6B40982e9B11B18bb566bca41E94',
            abi: [
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
            ],
            functionName:'sondageResults',
            args : [openContract],
            
        })

        const sondageInfo = useContractRead(
            {
                address: '0x13095563E31e6B40982e9B11B18bb566bca41E94',
                abi: [
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
                ],
                functionName:'sondageInfo',
                args : [openContract],
                
            })

        const isFinished = useContractRead(
            {
                address: '0x13095563E31e6B40982e9B11B18bb566bca41E94',
                abi: [
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
                ],
                functionName:'isFinished',
                args : [openContract],
                
            })

    function write()
    {
        seta(!a);
        console.log(a);
    }


    
    return (
        <>



        <button onClick={write}>aaa</button>



        {a && 

      
        <h1>Opened poll number : {openContract}</h1>
        
        

        }

<br></br>
        </>
    )
}