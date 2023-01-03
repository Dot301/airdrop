import React, { useEffect, useState } from 'react'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { Modal } from '@mui/material';
import NewToken from './NewToken';
import Tokens from './Tokens';
import { tokenFactoryContractAddress, TokenFactoryContract_ABI, TokenContract_ABI } from '../config'

const { ethers, Contract, BigNumber } = require('ethers');

function TokenPage(props) {

    const [open, setOpen] = useState(false);
    const [_data, setData] = useState([]);
    // const [tokenaddresses, setTokenAddresses] = useState([]);
    let data1 = new Set();
    useEffect(() => {
        if (props.provid === undefined) return
        const load = async () => {
            let tokenfactory, data;
            tokenfactory = new ethers.Contract(tokenFactoryContractAddress, TokenFactoryContract_ABI, props.provid);
            data = await tokenfactory.tokenslist();
            if (data.length === 0) return
            fetchTokenData(data);
            // setTokenAddresses(data);
            // console.log(tokenaddresses)
        }
        load();
    }, [props.provid])

    const handleOpen = () => {
        // console.log(props.accou)
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    const fetchTokenData = async (_data) => {
        // console.log(tokenaddresses)
        let tokenAddressInstance;
        let _totalSupply, _totalSupplyHex;
        let _decimals, _name, _symbol;
        for (let i = _data.length - 1; i >= 0; i--) {
            tokenAddressInstance = new Contract(_data[i], TokenContract_ABI, props.provid);
            _totalSupplyHex = BigNumber.from((await tokenAddressInstance.totalSupply()).toString())
            _totalSupply = parseInt(_totalSupplyHex._hex)
            _decimals = await tokenAddressInstance.decimals()
            _symbol = await tokenAddressInstance.symbol()
            _name = await tokenAddressInstance.name()
            data1.add({ "totalSupply": _totalSupply, "decimals": _decimals, "name": _name, "symbol": _symbol })
            // setData(Array.from(data1))
        }
        // console.log(data1)
        setData(Array.from(data1))
    }

    return (
        <>
            <div className='w-screen h-screen text-white mt-6'>
                <div className='h-auto flex flex-row justify-end mr-40'>
                    <div className="mb-3 xl:w-96">
                        <div className="input-group relative flex flex-grow items-center w-full mb-4 border border-solid border-gray-300 rounded">
                            <input type="search" className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-transparent transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                placeholder="Search your token"
                                aria-label="Search"
                                aria-describedby="button-addon2" />
                            <div className='search w-10 flex items-center justify-center cursor-pointer'>
                                <SearchRoundedIcon />
                            </div>
                        </div>
                    </div>
                    <div className='h-10 w-40 mx-5 border rounded-md flex items-center justify-center hover:bg-[#060869]'>
                        <button type='button' onClick={handleOpen}>Generate New</button>
                    </div>
                </div>
                <div className='h-screen flex'>
                    <div className='tokentitle mx-10 text-3xl font-mono'>All your tokens.</div>
                    <div className='tokens w-3/4 h-3/4 border border-red-500 rounded-lg grid grid-cols-5 overflow-scroll'>
                        {
                            _data.map((data, index) => {
                                return (<Tokens data={data} key={index} />);
                            })
                        }
                    </div>
                </div>
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <div>
                    <NewToken provider={props.provid} account={props.accou} signer={props.sign} close={handleClose} />
                </div>
            </Modal>
        </>
    )
}

export default TokenPage