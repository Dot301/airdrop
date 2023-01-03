import React from 'react'

function Tokens({data}) {
  return (
    <div className='container relative m-5 w-64 h-64 shadow-lg shadow-blue-800 border rounded-lg border-blue-600 hover:scale-110 hover:bg-rounded-xl hover:cursor-pointer duration-200 ease-in-out'>
        <div className='card relative w-64 h-64 rounded-lg overflow-hidden flex-col justify-center items-center'>
            <div className='imgbx w-[99%] transition overflow-hidden flex justify-center items-center'>
                <img src="https://clarisco.s3.ap-south-1.amazonaws.com/clarisco+images/blockchain/solutions/ethereum-token-development/ethereum-token-development-company.webp" className='w-[100%] '/>
            </div>
            <div className='contentbx flex flex-col justify-center items-center'>
                <h2>{data.name}</h2>
                <div className='symbol flex flex-row'>
                    <h3>Symbol &nbsp;&nbsp;:&nbsp;&nbsp;</h3>
                    <span>{data.symbol}</span>
                </div>
                <div className='decimal flex flex-row'>
                    <h3>Decimal &nbsp;:&nbsp;&nbsp;</h3>
                    <span>{data.decimals}</span>
                </div>
                <div className='supply flex flex-row'>
                    <h3>Supply &nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;</h3>
                    <span>{data.totalSupply}</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Tokens