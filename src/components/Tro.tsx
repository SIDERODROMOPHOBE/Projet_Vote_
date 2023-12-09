'use client'

import {useEffect, useState, ChangeEvent, SetStateAction } from "react";
import {abi} from "./contracts"
import { useContractRead, useContractWrite,usePrepareContractWrite  } from 'wagmi'

import "Styles/globals.css";


export default function Tro() 
{

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
            address: '0x33434bf072f7188cea92CE3Da61D75a56F3624A7',
            ...abi,
            functionName:'Sondage_count',
        })
        

    useEffect(()=>{
        sondageCountq.refetch
        setSondageCount(Number(sondageCountq.data))
        
    },[sondageCountq,sondageCount])
           
    const sondageInfo = useContractRead
    (
        {
            address: '0x33434bf072f7188cea92CE3Da61D75a56F3624A7',
            ...abi,
            functionName:'sondageInfo',
            // @ts-ignore
            args : [openContract],
                            
        }
    )
    //sondageInfo.refetch
    var sondageData=sondageInfo.data?.toString().split(',');
    


    useEffect(()=>{
        sondageInfo.refetch
        sondageData=sondageInfo.data?.toString().split(',')
    },[openContract])

    function addSondageUI()
    {
        return sondageInfo.data?.toString().split(',')

        /*return(
            <>
                <div>
                    <h1>
                        Sondage n°{datas[0]} : {datas[1]}
                    </h1>
                </div>
            </>
        )*/
        
    }

    
    const prepareSondageWrite = usePrepareContractWrite(
        {
            address: '0x33434bf072f7188cea92CE3Da61D75a56F3624A7',
            ...abi,
            functionName: 'creerSondage',
            args:[newSondageName,newSondageOP1,newSondageOP2],
        })
    
    const sondageWrite = useContractWrite(prepareSondageWrite.config);
    
    const prepareVote = usePrepareContractWrite(
        {
            address: '0x33434bf072f7188cea92CE3Da61D75a56F3624A7',
            ...abi,
            functionName: 'voter',
            args:[BigInt(openContract),BigInt(chosenVote)],
        })
    
    const Vote = useContractWrite(prepareVote.config);

        function voteFor1()
        {
            setChosenVote(1)
            console.log("VOtED FOR 1")
            Vote.write?.()
        }
        function voteFor2()
        {
            setChosenVote(2)
            console.log("VOtED FOR 2")
            Vote.write?.()
        }
    
    
    const prepareVoteWrite = usePrepareContractWrite(
        {
            address: '0x33434bf072f7188cea92CE3Da61D75a56F3624A7',
            ...abi,
            functionName: 'voter',
            // @ts-ignore
            args:[chosenSondage,chosenVote],
        })
        
        const voteWrite = useContractWrite(prepareVoteWrite.config);



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
      //console.log('set opencotract to : ',openContract+1)
      
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
      //console.log('set opencotract to : ',openContract+1)
      
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

        <div>{sondageData}</div>
        <br></br>

            <div>

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

            <div>
                <h1>
                    il y a {// @ts-ignore 
                    sondageData[0]
                } 
                    &nbsp; sondages
                </h1>
                <br></br>

                <h1>Réferendum numéro  {openContract} :</h1>
    
<br/>
                    <div className="border-blue-200 border-2 text-center  box-decoration-clone bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-5">
                        
                         {// @ts-ignore
                        sondageData[1]
                    }
                        <div className="flex flex-row border-blue-200 border-2 box-decoration-clone bg-gradient-to-r to-red-800 from-blue-300 text-white px-5">
                            
                            
                            <button onClick={voteFor1} className="basis-1/2 text-amber-100 underline"> 
                            {
                                // @ts-ignore
                                sondageData[2]
                            }
                            </button>
                            
                            <p>or</p>
                            
                            <div onClick={voteFor2} className="basis-1/2 text-amber-100 underline">
                            {
                                // @ts-ignore
                                sondageData[3]
                            }
                            </div>
                            
                        </div>
                        <br/>
                    </div>

            </div>

<br></br>
            <center>
                <div className="flex">

                    <div className="flex-1 self-center rounded border-2 border-blue-800 bg-blue-600 cursor-pointer">  

                    <div onClick={prevSondage}>PREV SONDAGE</div>

                    </div>
&nbsp;
                    <a className="flex-1 self-center rounded border-2 border-blue-800 bg-blue-600 cursor-pointer">                    
                    <div onClick={nextSondage}>NEXT SONDAGE</div>
            
                    </a>
                    
                </div>
    </center>

        </>
        )
    }

