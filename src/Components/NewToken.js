import { Button, TextField } from '@mui/material'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import React, { useState } from 'react'

function NewToken() {

    const [symbol, setSymbol] = useState();
    const [name, setName] = useState();
    const [decimal, setDecimal] = useState();
    const [supply, setSupply] = useState();


    const handlesubmit = ()=>{
        console.log(name);
        console.log(supply)
    }


    return (
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50%] h-[50%] flex justify-center pt-6 bg-slate-300'>
            <form >
                <div className='h-16 text-lg flex flex-row items-center justify-between'>
                    <h2 className='font-bold text-2xl'>Create Your new token here..</h2>
                    <button className='flex justify-end'><CloseOutlinedIcon /></button>
                </div>
                <div className='w-[800px] my-4' >
                    <TextField id="standard-basic" label="Symbol" variant='outlined' className='w-full' value={symbol} onChange={(e)=>{setSymbol(e.target.value)}}/>
                </div>
                <div className='w-[800px] my-4'>
                    <TextField id="standard-basic" label="Name" variant='outlined' className='w-full'value={name} onChange={(e)=>{setName(e.target.value)}} />
                </div>
                <div className='w-[800px] my-4'>
                    <TextField id="standard-basic" label="Decimal" variant='outlined' className='w-full' value={decimal} onChange={(e)=>{setDecimal(e.target.value)}}/>
                </div>
                <div className='w-[800px] my-4'>
                    <TextField id="standard-basic" label="Initial supply" variant='outlined' className='w-full' value={supply} onChange={(e)=>{setSupply(e.target.value)}}/>
                </div>
                <div className='w-[800px] my-4'>
                    {/* <button id="standard-basic" label="Initial supply" variant='outlined' className='w-full' /> */}
                    <Button variant="contained" type='button' onClick={handlesubmit}>Generate</Button>
                </div>
            </form>
        </div>
    )
}

export default NewToken