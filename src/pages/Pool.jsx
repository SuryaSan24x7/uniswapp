import backgroundImg from '../assets/background.png';
import AppNavbar from '../components/AppNavbar';
import React,{ useState } from 'react';
import {ethers} from 'ethers';
import { Link, useNavigate } from 'react-router-dom'; 
import ConnectWallet from '../components/ConnectWallet';
import createPair from '../components/CreatePair';

function Pool() {
const [walletData, setWalletData] = useState();
const [account, setAccount] = useState();
const [network, setNetwork] = useState();
const [Connected, setWalletConnected] = useState(false);
const [tokenA,setTokenA]=useState();
const [tokenB,setTokenB]=useState();
const factoryAddress = ''; //use .enc to provide factory contract address

async function connectWallet() {
  if (account !== undefined) {
    setConnectTextSt(`🔌 Account ${account} already connected ⚡ ✅`);
  } else {
    const wData = await ConnectWallet();

    let newAccount = wData[0];
    let newNetwork = wData[2];
    if (newAccount !== undefined) {
      setConnectTextSt(`🔌 Account ${newAccount} connected ⚡ ✅`);
      setWalletData(wData);
      setAccount(newAccount);
      setNetwork(newNetwork);
      setWalletConnected(true);
    }
  }
}
async function disconnectWallet() {
  setAccount();
  setWalletData();
  setConnectTextSt("🔌 Connect Wallet");
  setWalletConnected(false);
}
async function createPairBtn() {
    setShowForm(true);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    createPair(walletData, factoryAddress, tokenA, tokenB);
    setShowForm(false);
  }
    return(
        <>
        <AppNavbar connectWallet={connectWallet} disconnectWallet={disconnectWallet}/>
        <div className="w-screen h-screen flex flex-row text-white justify-center items-start bg-[#171616]">
            {/* main conatainer */}
            <div className="max-w-[640px] flex flex-col gap-5 items-center px-2">
                <div 
                    className="bg-cover border border-[#222222] shadow-lg shadow-white-40 flex flex-col p-4 gap-3  rounded-[12px]"
                    style={{ backgroundImage: `url(${backgroundImg})` }}
                    >
                    <div>
                        <h1 className="text-[16px] ">Liquidity provider rewards</h1>
                    </div>
                    <div>
                    <p className="text-[13px]">
                        Liquidity providers earn a 0.3% fee on all trades proportional to their share of the pool. Fees are added to the pool, accrue in real time and can be claimed by withdrawing your liquidity.
                    </p>
                    </div>
                    <div>
                    <a 
                        href="https://docs.uniswap.org/contracts/v2/concepts/core-concepts/pools"
                        className="text-[13px] underline"
                        
                    >
                        Read more about providing liquidity
                    </a>
                    </div>
                </div>
                <div className="w-full flex flex-col sm:flex-row items-center justify-between">
                    <div>
                        <h1 className="text-[20px] font-semibold">Your V2 liquidity</h1>
                    </div>
                    <div className="flex flex-col mt-5 sm:mt-0 sm:flex-row  items-center gap-4 sm:gap-2">
                        <button type="button" className="text-[#fc72ff] hover:border-[#fc72ff] bg-[rgb(49, 28, 49)] border-[0.5px] border-[rgb(49, 28, 49)] text-[16px] px-4 py-2 font-semibold rounded-[12px]" onClick={createPairBtn}>Create a pair</button>
                        <button type="button" className="bg-[#fc72ff] hover:bg-[#ec51f0] text-white text-[16px] px-4 py-2 font-semibold rounded-[12px]">Import pool</button>
                        <button type="button" className="bg-[#fc72ff] hover:bg-[#ec51f0] text-white text-[16px] px-4 py-2 font-semibold rounded-[12px]" >Add V2 liquidity</button>
                    </div>
                </div>
                <div>
                <div className={showForm ? 'block' : 'hidden'}>
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tokenA">
              Token A Address
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="tokenA"
              type="text"
              placeholder="Token A Address"
              value={tokenA}
              onChange={(e) => setTokenA(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tokenB">
              Token B Address
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="tokenB"
              type="text"
              placeholder="Token B Address"
              value={tokenB}
              onChange={(e) => setTokenB(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
              Create Pair
            </button>
          </div>
        </form>
      </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Pool