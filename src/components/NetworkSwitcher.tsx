'use client'

import { useNetwork, useSwitchNetwork,configureChains,sepolia  } from 'wagmi'

import { jsonRpcProvider } from 'wagmi/providers/jsonRpc'



const { publicClient } = configureChains(
  [sepolia],
  [
    jsonRpcProvider({
      rpc: (chain) => ({
        http: `https://sepolia.infura.io/v3/01d84256042040afb53ee2ef68300312`,
      }),
    }),
  ],
)




export function NetworkSwitcher() {
  const { chain } = useNetwork()
  const { chains, error, isLoading, pendingChainId, switchNetwork } =
    useSwitchNetwork({
      chainId:11155111,
    })

  return (
    <div>

    <h1>awaa ::</h1>

    
      {chain && <div>Connectedd to {chain.name}</div>}
      {chains && (
        <div>Available chains: {chains.map((chain) => chain.name)} </div>
      )}


<br></br>
      <div>
        Connected to {chain?.name ?? chain?.id}
        {chain?.unsupported && ' (unsupported)'}
      </div>

      <br />

      {switchNetwork && (

        <div>

          Switch to:{' '}
          {chains.map((x) =>
            x.id === chain?.id ? null : (
              <button key={x.id} onClick={() => switchNetwork(x.id)}>
                {x.name}
                {isLoading && x.id === pendingChainId && ' (switching)'}
              </button>
            ),
          )}
          
        </div>

      )}

      <div>{error?.message}</div>

    </div>
  )
}
