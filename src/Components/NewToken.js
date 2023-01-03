import { Button, TextField } from '@mui/material'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import React, { useState } from 'react';
import {tokenFactoryContractAddress,TokenFactoryContract_ABI,TokenContract_ABI} from '../config'

const {ethers} = require('ethers');

function NewToken(props) {

    const [_symbol, setSymbol] = useState();
    const [_name, setName] = useState();
    const [_decimal, setDecimal] = useState();
    const [_supply, setSupply] = useState();
    const [_data,setData] = useState();
    const [_tokenfactory,setTokenFactory] = useState();


    const generateToken = async ()=>{
        const tokenfactory = new ethers.Contract(tokenFactoryContractAddress,TokenFactoryContract_ABI,props.provider);
        const signer1 = tokenfactory.connect(props.signer);
        await signer1.createToken(_name,_symbol,_supply,_decimal);
        setTokenFactory(tokenfactory);
        props.close();
    }
    
    
    return (
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50%] h-[50%] flex justify-center pt-6 bg-slate-300'>
            <form >
                <div className='h-16 text-lg flex flex-row items-center justify-between'>
                    <h2 className='font-bold text-2xl'>Create Your new token here..</h2>
                    <button className='flex justify-end'><CloseOutlinedIcon /></button>
                </div>
                <div className='w-[800px] my-4' >
                    <TextField id="standard-basic" label="Symbol" variant='outlined' className='w-full' value={_symbol} onChange={(e)=>{setSymbol(e.target.value)}}/>
                </div>
                <div className='w-[800px] my-4'>
                    <TextField id="standard-basic" label="Name" variant='outlined' className='w-full'value={_name} onChange={(e)=>{setName(e.target.value)}} />
                </div>
                <div className='w-[800px] my-4'>
                    <TextField id="standard-basic" label="Decimal" variant='outlined' className='w-full' value={_decimal} onChange={(e)=>{setDecimal(e.target.value)}}/>
                </div>
                <div className='w-[800px] my-4'>
                    <TextField id="standard-basic" label="Initial supply" variant='outlined' className='w-full' value={_supply} onChange={(e)=>{setSupply(e.target.value)}}/>
                </div>
                <div className='w-[800px] my-4'>
                    {/* <button id="standard-basic" label="Initial supply" variant='outlined' className='w-full' /> */}
                    <Button variant="contained" type='button' onClick={generateToken}>Generate</Button>
                </div>
            </form>
        </div>
    )
}

export default NewToken