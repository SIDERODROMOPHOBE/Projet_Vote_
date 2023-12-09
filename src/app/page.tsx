import { Account } from '../components/Account'
import { Balance } from '../components/Balance'
import { BlockNumber } from '../components/BlockNumber'
import { NetworkSwitcher } from '../components/NetworkSwitcher'
import { ReadContractsInfinite } from '../components/ReadContractsInfinite'
import { SendTransaction } from '../components/SendTransaction'
import { SendTransactionPrepared } from '../components/SendTransactionPrepared'
import { SignMessage } from '../components/SignMessage'
import { SignTypedData } from '../components/SignTypedData'
import { Token } from '../components/Token'
import { WatchContractEvents } from '../components/WatchContractEvents'
import { WatchPendingTransactions } from '../components/WatchPendingTransactions'
import { WriteContract } from '../components/WriteContract'
import { WriteContractPrepared } from '../components/WriteContractPrepared'

import { Connect } from '../components/Connect'
import { Connected } from '../components/Connected'
import Tro from '../components/Tro'

import "Styles/globals.css";




export default function Page() {


  return (

 
    <div>
    
    
      
      <br></br>
      
      <Connect />
      
      <Connected>
        <Tro></Tro>
        <hr />
        
      </Connected>

    </div>
  )
}
