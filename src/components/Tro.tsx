'use client'

import {useEffect, useState, ChangeEvent } from "react";
import {abi} from "./contracts"
import { useContractRead, useContractWrite,usePrepareContractWrite  } from 'wagmi'

import "Styles/globals.css";


export default function Tro() 
{
    const [a,seta] = useState(true);
    const [openContract,setOpenContract] = useState(1);

    const [newSondageName,setNewSondageName] = useState("");
    const [newSondageOP1,setNewSondageOP1] = useState("");
    const [newSondageOP2,setNewSondageOP2] = useState("");

    const [chosenSondage,setChosenSondage]=useState(1);
    const [chosenVote,setChosenVote]=useState(1);

    const [sondageCount,setSondageCount]=useState(0);

    const updateSondageName = (e: ChangeEvent<HTMLInputElement>) => {
        setNewSondageName(e.target.value);
    };
    const updateSondageOP1 = (e: ChangeEvent<HTMLInputElement>) => {
        setNewSondageOP1(e.target.value);
    };
    const updateSondageOP2 = (e: ChangeEvent<HTMLInputElement>) => {
        setNewSondageOP2(e.target.value);
    };



    const sondageCountq = useContractRead(
        {
            address: '0x721AB533c5f1F94CE0e4728e43E21d69e5d46D56',
            ...abi,
            functionName:'Sondage_count',
        })
        

    useEffect(()=>{
        sondageCountq.refetch
        setSondageCount(Number(sondageCountq.data))
        
    })
           
    const sondageInfo = useContractRead(
        {
            address: '0x721AB533c5f1F94CE0e4728e43E21d69e5d46D56',
            ...abi,
            functionName:'sondageInfo',
            // @ts-ignore
            args : [openContract],
                            
        })

    useEffect(()=>{
        sondageInfo.refetch
        addSondageUI();
        for(var y=0;y<=sondageCount;y++)
        {
           
        }
    },[openContract])

    function addSondageUI()
    {
        var datas = sondageInfo.data?.toString().split(',')
        return(
            <>
                <div>
                    <h1>
                        Sondage n°{datas[0]} : {datas[1]}
                    </h1>
                </div>
            </>
        )
        
    }

    
    var sondageData=sondageInfo.data?.toString().split(',');
    
    
        
    const prepareSondageWrite = usePrepareContractWrite(
        {
            address: '0x721AB533c5f1F94CE0e4728e43E21d69e5d46D56',
            ...abi,
            functionName: 'creerSondage',
            args:[newSondageName,newSondageOP1,newSondageOP2],
        })
    
    const sondageWrite = useContractWrite(prepareSondageWrite.config);
    

    
    const prepareVoteWrite = usePrepareContractWrite(
        {
            address: '0x721AB533c5f1F94CE0e4728e43E21d69e5d46D56',
            ...abi,
            functionName: 'voter',
            // @ts-ignore
            args:[chosenSondage,chosenVote],
        })
        
        const voteWrite = useContractWrite(prepareVoteWrite.config);

    function wriite()
    {
        seta(!a)

        
    }

    function toggleFormNewSondage() 
    {
        setFormNewSondage(!formNewSondage);
        setNewSondageName("");
        setNewSondageOP1("");
        setNewSondageOP2("");
    }
    const [formNewSondage,setFormNewSondage] = useState(false);

  
   
    
    function nextSondage()
    {
      console.log('set opencotract to : ',openContract+1)
      
      if(openContract>=sondageCount)
      {
        setOpenContract(1);
      }
      else
      {        
        setOpenContract(openContract+1);
      }
      
    }
    function prevSondage()
    {
      console.log('set opencotract to : ',openContract+1)
      
      if(openContract<=1)
      {
        setOpenContract(sondageCount);
      }
      else
      {        
        setOpenContract(openContract-1);
      }
      
    }


return (
        <>  

            <div>
            <button onClick={nextSondage}>NEXT SONDAGE</button>
            &nbsp;
            <button onClick={prevSondage}>PREV SONDAGE</button>
          </div>

        {!formNewSondage &&<button onClick={toggleFormNewSondage}>Créer un nouveau sondage</button>}
        
        {formNewSondage && 
        <div>
        <label>Nom du nouveau sondage</label>
            <input placeholder="Sondage Name" type="text" onChange={updateSondageName} value ={newSondageName}></input>
            &nbsp;
            <label>Nom de l'option de vote 1</label>
            <input placeholder="Vote Option" type="text" onChange={updateSondageOP1} value ={newSondageOP1}></input>
            &nbsp;
            <label>Nom de l'option de vote 2</label>
            <input placeholder="Other vote option" type="text" onChange={updateSondageOP2} value ={newSondageOP2}></input>
            <br/>



            <button disabled={newSondageName===''||newSondageOP1===""||newSondageOP2===""} onClick={() => sondageWrite.write?.()}>Créer le Sondage</button>
            {sondageWrite.isLoading && <div>Check Wallet to validate transaction</div>}
            {sondageWrite.isSuccess && <div>Transaction: {JSON.stringify(sondageWrite.data)}</div>}
<br/>
            <button onClick={toggleFormNewSondage}>Quitter</button>
        </div>
        }



        <br/>
        <button onClick={wriite}>DEBUG</button> <br/>
        

        {a && 

            <div>
                <h1>
                    il y a {// @ts-ignore 
                    sondageData[0]
                } 
                    &nbsp; sondages
                </h1>
                <br></br>

                <h1>Réferendum numéro  {openContract} :</h1>
                

                    <div className="text-center  box-decoration-clone bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-5">
                        
                         {// @ts-ignore
                        sondageData[1]
                    }
                        <div className="box-decoration-clone bg-gradient-to-r from-indigo-800 to-pink-100 text-white px-5">
                            <a className="underline"> 
                            {
                                // @ts-ignore
                                sondageData[2]
                            }
                            </a>
                            
                            <br/>
                            <p>or</p>
                            
                            <a className="underline">
                            {
                                // @ts-ignore
                                sondageData[3]
                            }
                            </a>
                            
                        </div>
                        <br/>
                    </div>

            </div>


        }

        </>
        )
    }

