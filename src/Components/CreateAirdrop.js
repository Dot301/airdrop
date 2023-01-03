import React,{useRef} from 'react'

// const Transloadit = require('transloadit')

function CreateAirdrop() {


    const fileInput = useRef(null);

    function uploadFile(event) {
        
    }

    function getURL() {

    }
    function createAirdrop() {

    }

    return (
        <div>
            <div className='m-10 text-white text-3xl flex justify-center items-center'>Create Airdrop</div>
            <div className='m-20 flex flex-col'>
                <div className=' flex flex-row items-center '>
                    <div className='w-[15%] text-white items-center'>Enter Number Of Tokens :</div>
                    <input type="search" className="form-control relative flex-auto border rounded-md min-w-0 block h-10 w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-transparent transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        placeholder="Enter number of tokens"
                        aria-label="Search"
                        aria-describedby="button-addon2" />
                </div>
                <div className=' mt-10 flex flex-row items-center '>
                    <div className='w-[15%] text-white items-center'>Enter Merkle Root :</div>
                    <input type="search" className="form-control relative flex-auto border rounded-md min-w-0 block h-10 w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-transparent transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        placeholder="Enter merkle root"
                        aria-label="Search"
                        aria-describedby="button-addon2" />
                </div>
                <div className=' mt-10 flex flex-row items-center '>
                    <div className='w-[15%] text-white items-center'>Enter Token Address :</div>
                    <input type="search" className="form-control relative flex-auto border rounded-md min-w-0 block h-10 w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-transparent transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        placeholder="Enter token address"
                        aria-label="Search"
                        aria-describedby="button-addon2" />
                </div>
                <div className=' mt-10 flex flex-row items-center '>
                    <div className='w-[15%] text-white items-center'>Enter Your Proof :</div>
                    <input type="search" className="form-control relative flex-auto border rounded-md min-w-0 block h-10 w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-transparent transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        placeholder="Enter URL"
                        aria-label="Search"
                        aria-describedby="button-addon2" />
                </div>

                <div className=' mt-10 ml-40 flex flex-row items-center justify-center '>
                    <div className='w-[15%] text-white items-center'>Generate URL Here : </div>
                    {/* <form onSubmit={uploadFile}>
                        <input type='file' ref={fileInput} /> */}
                        <button className=' h-10 mr-10 w-[25%] border text-white rounded-md flex items-center justify-center hover:bg-red-600' id='button' type='submit' onClick={uploadFile}>Upload File</button>
                    {/* </form> */}
                    <button className=' h-10 w-[25%] border text-white rounded-md flex items-center justify-center hover:bg-red-600' id='button' type='submit' onClick={getURL}>Generate URL</button>
                </div>
                <button className='mt-16 h-10 w-full border text-white rounded-md flex items-center justify-center hover:bg-green-600' id='button' type='submit' onClick={createAirdrop}>Create Airdrop</button>
            </div>
        </div>
    )
}

export default CreateAirdrop