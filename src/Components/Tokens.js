import React from 'react'

function Tokens({data}) {
  return (
    <div className='container relative m-5 w-64 h-64 shadow-lg shadow-blue-800 border rounded border-blue-600 hover:scale-105 hover:rounded-xl hover:cursor-pointer'>
        <div className='card relative w-64 h-64 rounded-xl overflow-hidden '>
            {/* <div className='imgbx'>
                <img src="https://assets.codepen.io/4164355/shoes.png" className='w-[80%]'/>
            </div> */}
            <div className='contentbx flex flex-col justify-center items-center my-20'>
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