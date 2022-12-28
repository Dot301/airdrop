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
//rainbowkit
import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { mainnet, polygon, optimism, arbitrum, goerli } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';


const { ethers } = require('ethers');

const { chains, provider } = configureChains(
  [mainnet, polygon, optimism, arbitrum, goerli],
  [
    alchemyProvider({ apiKey: process.env.ALCHEMY_ID }),
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'Airdrop',
  chains
});

const wagmiClient = createClient({
  autoConnect: false,
  connectors,
  provider
})


// Router no use    
function App() {

  const [provider, setProvider] = useState();
  const [signer, setSigner] = useState();

  useEffect(() => {
    loadetheracc();
  }, [])

  const loadetheracc = async () => {
    // await window.ethereum.enable();
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    setProvider(provider)
    setSigner(signer)
  }


  return (
    <>
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider chains={chains}>
          <Router>
            <Header />
            <Routes>
              <Route path="/" element={<Body />} />
              <Route path="/header" element={<Header />} />
              <Route path="/tokenaddress" element={<TokenPage provid={provider} sign={signer} />} />
            </Routes>
          </Router>
        </RainbowKitProvider>
      </WagmiConfig>
    </>
  );
}

export default App;
