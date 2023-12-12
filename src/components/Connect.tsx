'use client'

import { BaseError } from 'viem'

import { useAccount, useConnect, useDisconnect, sepolia,configureChains } from 'wagmi'
import {goerli} from 'wagmi/chains'
import { infuraProvider } from 'wagmi/providers/infura'

export function Connect() {

  const { connector, isConnected } = useAccount()

  const { connect, connectors, error, isLoading, pendingConnector } =
  //Sepolia not supported of rnow donbc on travaille sur goerli pour l'instant
    useConnect(/*{
      chainId:sepolia.id,
    }*/)

    const { chains, publicClient } = configureChains(
      [goerli,sepolia],
      [infuraProvider({ apiKey: '01d84256042040afb53ee2ef68300312' })],
    )

  const { disconnect } = useDisconnect()

const my_connector=connectors[0];

  return (
    <div>

      <div>
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
      </div>


      {error && <div>{(error as BaseError).shortMessage}</div>}
    </div>
  )
}
