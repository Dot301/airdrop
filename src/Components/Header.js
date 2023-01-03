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
      <nav className='pr-[10rem] flex flex-row'>
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
            <div className='peer-hover:flex justify-center hover:flex w-[200px] drop-shadow-lg hidden absolute flex-col bg-slate-900 z-10'>
              <Link to={'/merkleroot'}><div className='flex items-center hover:bg-slate-100 h-[20px] hover:text-black px-5 py-5'>Create Merkle Root</div></Link>
              <Link to={'/createairdrop'}><div className='flex items-center hover:bg-slate-100 h-[20px] hover:text-black px-5 py-5'>Create Airdrop</div></Link>
              <Link to={'/airdrops'}><div className='flex items-center hover:bg-slate-100 h-[20px] hover:text-black px-5 py-5'>Airdrops</div></Link>
            </div>
          </li>
        </ul>
      </nav>
        <div className='flex items-center justify-start'>
          <ConnectButton accountStatus={{
            smallScreen: 'avatar',
            largeScreen: 'full',
          }} />
        </div>
    </div>
  )
}

export default Header