'use client'

import { useState } from "react";
import "Styles/globals.css";
import {abi} from "./contracts"

import { useContractRead } from 'wagmi'
import { readContract } from "viem/dist/types/actions/public/readContract";


export default function Tro() 
{
    var u;
    const [a,seta] = useState(true);
    const [openContract,setOpenContract] = useState(1);


    const Sondage_count = useContractRead(
        {
            address: '0x721AB533c5f1F94CE0e4728e43E21d69e5d46D56',
            ...abi,
            functionName:'Sondage_count',
            
            
        })
        var Sondages_count = Number(Sondage_count.data);
        


        

           
    const sondageInfo = useContractRead(
        {
            address: '0x721AB533c5f1F94CE0e4728e43E21d69e5d46D56',
            ...abi,
            functionName:'sondageInfo',
            // @ts-ignore
            args : [openContract],
                            
        })
            
        var sondageData=sondageInfo.data?.toString().split(',');
                    
            
                    
            
    
                
    

    

    function write()
    {
        seta(!a);
        console.log(Sondages_count);
    }

    
    
    return (
        <>



        <button onClick={write}>DEBUG</button> <br/>
        {sondageData}

        {a && 

            <div>
                <h1>il y a {Sondage_count.data?.toString()} sondages</h1>
                <br></br>
                <h1>Opened poll number : {openContract}</h1>
                <h2 className="px-5 underline ">{}</h2>

                    <div className="box-decoration-clone bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-5">
                        Piou piou
                    </div>

            </div>


        }

<br></br>
        </>
    )
}