import React, { useState } from 'react'
// import { walletClient } from "~~/utils/wagmi"
import CustomInput from '~~/components/CustomInput'

const Order = () => {
    const [amountInToken, setAmountInToken] = useState<any>('')
    const [amountInCon, setAmountInCon] = useState<string>('')
    const [currency, setCurrency] = useState<string>('')
    const [tokenAddress, settokenAddress] = useState<any>('')
    const paymasterAddress = "0xBAb868Bfd8BB3e1B3Adaec62c69CE5DA6FEb3879"
    const isFormFilled = amountInCon && amountInToken && currency && tokenAddress
console.log(paymasterAddress);

  return (
    <div className=" flex justify-center items-center h-[93vh]">
        <div className="w-[40rem]">

        <CustomInput
              type="number"
              name="email"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                try {
                  const amount = parseInt(e.target.value);
                  setAmountInToken(amount);
                } catch (error) { }
              }}
              className="w-full py-3 rounded-md flex items-center px-3 bg-[#EAF0F7]"
            />

<CustomInput
              type="number"
              name="number"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAmountInCon(e.target.value)}
              className="w-full py-3 rounded-md flex items-center px-3 bg-[#EAF0F7]"
            />

<CustomInput
              type="number"
              name="number"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCurrency(e.target.value)}
              className="w-full py-3 rounded-md flex items-center px-3 bg-[#EAF0F7]"
            />

<CustomInput
              type="number"
              name="number"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => settokenAddress      
                
                
                (e.target.value)}
              className="w-full py-3 rounded-md flex items-center px-3 bg-[#EAF0F7]"
            />
<button disabled={!isFormFilled}>Order</button>
        </div>

    </div>
  )
}

export default Order