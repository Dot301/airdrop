import React from 'react'

function Tokens({data}) {
  return (
    <div className='container relative m-5 w-64 h-64 shadow-lg shadow-blue-800 border rounded border-blue-600 hover:scale-105 hover:rounded-xl hover:cursor-pointer'>
        <div className='card relative w-64 h-64 rounded-xl overflow-hidden '>
            {/* <div className='imgbx'>
                <img src="https://assets.codepen.io/4164355/shoes.png" className='w-[80%]'/>
            </div> */}
            <div className='contentbx'>
                <h2>{data.name}</h2>
                <div className='symbol'>
                    <h3>Symbol :</h3>
                    <span>{data.symbol}</span>
                </div>
                <div className='decimal'>
                    <h3>Decimal :</h3>
                    <span>{data.decimal}</span>
                </div>
                <div className='supply'>
                    <h3>Supply :</h3>
                    <span>{data.supply}</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Tokens