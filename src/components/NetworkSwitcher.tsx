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
        
        {chain?.unsupported && ' which is unsupported for this app.\n Please switch network to Goerli Network'}

      </div>

      <br />

     


    </div>
  )
}
