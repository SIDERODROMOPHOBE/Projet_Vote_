'use client'

import { useNetwork, useSwitchNetwork,configureChains,sepolia  } from 'wagmi'

import { jsonRpcProvider } from 'wagmi/providers/jsonRpc'


//tester p^lus tard de remettre sepolia, pour l'instant on fait goerli
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
