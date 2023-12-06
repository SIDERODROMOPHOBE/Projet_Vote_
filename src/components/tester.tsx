'use client'

import {useEffect, useState, ChangeEvent } from "react";
import {abi} from "./contracts"
import { useContractRead, useContractWrite,usePrepareContractWrite  } from 'wagmi'

import "Styles/globals.css";

export default function Tester() 
{   
    const [openContract,setOpenContract] = useState(1);
    
    



  useEffect(() => {
    
    result.refetch
  }, [openContract]);
      


    const result = useContractRead({
        address: '0x721AB533c5f1F94CE0e4728e43E21d69e5d46D56',
        ...abi,
        functionName: 'sondageInfo', // Replace with your function name
        args: [BigInt(openContract)],
      });
      


      function testerrr()
      {
        console.log('set opencotract to : ',openContract+1)
        setOpenContract(openContract+1);
      }
  
    return (
          <></>
        );
      
}