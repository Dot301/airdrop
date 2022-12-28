import './App.css';
import Body from './Components/Body';
import Header from './Components/Header';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import TokenPage from './Components/TokenPage';
import { useEffect, useState } from 'react';
// import {ethers,
//   provider,
//   signer,
//   account} from './web3'
const {ethers} = require('ethers');

// Router no use    
function App() {

  const [account, setAcc] = useState();
  const [provider, setProvider] = useState();
  const [signer, setSigner] = useState();

  useEffect(()=>{
    loadetheracc();
  }, [])
  
  const loadetheracc = async ()=>{
    await window.ethereum.enable();
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const acco = await signer.getAddress();
    setProvider(provider)
    setSigner(signer)
    setAcc(acco);
    // // return acco, provider, signer;
    // console.log(provider)
    // console.log(account)
    // console.log(signer)
  }


  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Body />}/>
          <Route path="/header" element={<Header />}/> 
          <Route path="/tokenaddress" element={<TokenPage provid = {provider} accou = {account}  sign = {signer}/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
