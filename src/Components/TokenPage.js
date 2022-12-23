import React, { useState } from 'react'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { Modal } from '@mui/material';
import NewToken from './NewToken';

function TokenPage() {

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


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
                            <div className=''>
                                <SearchRoundedIcon />
                            </div>
                        </div>
                    </div>
                    <div className='h-10 w-40 mx-5 border rounded-md flex items-center justify-center hover:bg-[#060869]'>
                        <button type='button' onClick={handleOpen}>Generate New</button>
                    </div>
                </div>
                <div className='bg-red-900'>
                </div>
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <div>
                    <NewToken />
                </div>
            </Modal>
        </>
    )
}

export default TokenPage