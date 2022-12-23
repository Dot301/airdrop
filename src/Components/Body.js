import React from 'react'
import hero from '../resources/MerketTree.webp'
import Typewriter from 'typewriter-effect';

function Body() {
    return (
        <div className=' h-screen flex'>
            <div className='hero w-2/4 h-full flex flex-col items-center justify-center'>
                <div className='w-[40%] h-[40%] -mt-48'>
                    <img src={hero}
                        className='fill-inherit w-[100%] h-[100%] object-cover rounded-full shadow-lg shadow-gray-50' />
                </div>
                <div className='font-semibold w-full h-1/4 text-6xl flex items-center justify-center text-white'>
                    {/* <h2 className='relative'>Merkel Tree</h2> */}
                    <Typewriter
                        options={{
                            strings: ['Merkel Tree..!'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </div>
            </div>
            <div className='about w-2/4 h-full flex flex-col font-mono text-white'>
                <div className='upper h-2/6 w-full flex items-center'>
                    <h1 className='text-8xl'>Hello Welcome</h1>
                </div>
                <div className='lower h-4/6 w-full flex flex-col pr-20'>
                    {/* <p>An airdrop is a distribution of a cryptocurrency token or coin, usually for free, to a large number of wallet addresses. Airdrops are commonly used as a marketing strategy to increase the awareness and adoption of a new cryptocurrency. Ethereum is a decentralized, open-source blockchain platform that supports smart contracts. ERC20 is a technical standard for Ethereum smart contracts that defines a set of rules for the creation of new tokens on the Ethereum platform. ERC20 tokens are widely used in various decentralized applications (dApps) on the Ethereum network.</p> */}
                    <p className='tracking-wide leading-8 text-justify'>An airdrop is a distribution of a cryptocurrency token or coin, usually for free, to a large number of wallet addresses. Airdrops are commonly used as a marketing strategy to increase the awareness and adoption of a new cryptocurrency.</p>
                    <p className='tracking-wide leading-8 text-justify'>Ethereum is a decentralized, open-source blockchain platform that supports smart contracts. ERC20 is a technical standard for Ethereum smart contracts that defines a set of rules for the creation of new tokens on the Ethereum platform. ERC20 tokens are widely used in various decentralized applications (dApps) on the Ethereum network.</p>
                </div>
            </div>
        </div>
    )
}

export default Body