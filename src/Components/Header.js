import React from 'react'
import { Link } from 'react-router-dom'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { ConnectButton } from '@rainbow-me/rainbowkit';


function Header() {

  return (
    <div className=' h-[60px] flex items-center text-white font-mono'>
      <div className='w-3/4'>
        <Link to={'/'}><h1 className='flex-1 pl-20 text-4xl ml-20 font-mono'>AIRDROP</h1></Link>
      </div>
      <nav className='pr-[20rem] flex flex-row'>
        <ul className='container flex-row flex h-max'>
          <li className='mx-20 cursor-pointer h-[60px]'>
            <div className='w-48'>
              <Link to={'/tokenaddress'}>
                <button className='peer h-[60px] w-full flex flex-row items-center justify-center'>
                  Tokens Address
                </button>
              </Link>
            </div>
          </li>
          <li className='mx-20 cursor-pointer h-[60px]'>
            <button className='peer h-[60px] w-full flex flex-row items-center justify-center'>
              Airdrop
              <KeyboardArrowDownIcon className='text-sm' />
            </button>
            <div className='peer-hover:flex hover:flex w-[200px] drop-shadow-lg hidden absolute flex-col bg-slate-900 z-10'>
              <a className='hover:bg-slate-100 hover:text-black px-5 py-3'>Create Merkle Root</a>
              <a className='hover:bg-slate-100 hover:text-black px-5 py-3'>Create Airdrop</a>
              <a className='hover:bg-slate-100 hover:text-black px-5 py-3'>Airdrops</a>
            </div>

          </li>
        </ul>
        <div className='w-[300px] flex items-center justify-end '>
          <ConnectButton accountStatus={{
            smallScreen: 'avatar',
            largeScreen: 'full',
          }} />
        </div>
      </nav>
    </div>
  )
}

export default Header