import { useAccount, useConnect, useDisconnect } from 'wagmi'




const { connector, isConnected } = useAccount()

const { connect, connectors, error, isLoading, pendingConnector } =
  useConnect()


const { disconnect } = useDisconnect()


//This is metamask
const my_connector=connectors[0];



export function Headbar() 
{
    
    <div id='Navbar'>
<center>


  {!isConnected && (
    <button key={my_connector.id} onClick={()=>connect({connector:my_connector})}>
      Connect with MetaMask
    </button>
  )}

  {isConnected && (
    <button onClick={() => disconnect()}>
      Disconnect from {connector?.name}
    </button>
  )}

  {
    isLoading && (
      <h1>Connecting to Blockchain</h1>
    )
  }


</center>
</div>

}