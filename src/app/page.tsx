import { Connect } from '../components/Connect'
import { Connected } from '../components/Connected'
import {NetworkSwitcher} from '../components/NetworkSwitcher'
import Tro from '../components/Tro'

import "Styles/globals.css";




export default function Page() {


  return (

 
    <div>
    
    
      
      <br></br>
      
      <Connect />
      
      <Connected>
        <Tro></Tro>
      </Connected>

      <NetworkSwitcher></NetworkSwitcher>

    </div>
  )
}
