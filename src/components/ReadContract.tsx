'use client'

import { useState } from 'react'
import { BaseError } from 'viem'
import { type Address, useContractRead } from 'wagmi'

import { Vote } from './contracts'

export function ReadContract() {
  return (
    <div>
      <div>
        <br />
        <TotalSupply />
        <br></br>
        <BalanceOf />
        
      </div>
    </div>
  )
}

function TotalSupply() {
  const { data, isRefetching, refetch, isSuccess} = useContractRead({
    ...Vote,
    functionName: 'Sondage_count',
    chainId:5,
  })

  return (
    <div>
      Total Supply: {data?.toString()}     &nbsp; {isSuccess.toString()}
      
    </div>
  )
}

function BalanceOf() {
  const [address, setAddress] = useState<Address>(
    '0xa5cc3c03994DB5b0d9A5eEdD10CabaB0813678AC',
  )

  const { data, error, isLoading, isSuccess } = useContractRead({
    ...Vote,
    functionName: 'sondageInfo',
    args: [0],
  })

  const [value, setValue] = useState<string>(address)

  return (
    <div>
      Token balance: {isSuccess && data?.toString()}
      
      <button onClick={() => setAddress(value as Address)}>
        {isLoading ? 'fetching...' : 'fetch'}
      </button>
      {error && <div>{(error as BaseError).shortMessage}</div>}
    </div>
  )
}
