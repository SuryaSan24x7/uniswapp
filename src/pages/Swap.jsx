import { useState } from "react";
import AppNavbar from "../components/AppNavbar";

function Swap() {
    const [inputPayValue, setInputPayValue] = useState(""); 
    const [inputReceiveValue, setInputReceiveValue] = useState(""); 
    const [walletData, setWalletData] = useState();
const [account, setAccount] = useState();
const [network, setNetwork] = useState();
const [Connected, setWalletConnected] = useState(false);
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
    const handlePayChange = (event) => { 
        const input = event.target.value;
        // Allow only numbers 

        const payValue = input.replace(/[^0-9]/g, ""); 
        setInputPayValue(payValue); 
    }; 

    const handleReceiveChange = (event) => { 
        const input = event.target.value;
        // Allow only numbers 

        const receiveValue = input.replace(/[^0-9]/g, ""); 
        setInputReceiveValue(receiveValue); 
    }; 

    return(
        <>
        <AppNavbar connectWallet={connectWallet} disconnectWallet={disconnectWallet}/>
        <div className="w-screen h-screen flex flex-row text-white justify-center items-start bg-[#131313] py-12">
            <div>
                
                <div className="flex flex-col justify-center gap-1 items-center bg-[#131313] max-w-[480px] p-2 rounded-[24px] animate-fade-up delay-1000">
                    
                <div className="flex justify-between w-full pb-2 items-center">
                    <div className="flex gap-2">
                        <button type="button" className="py-2 px-4 bg-[#1b1b1b] text-[rgb(155, 155, 155)] rounded-[20px]">
                            Swap
                        </button>
                        <button type="button" className="py-2 px-4 bg-[#1b1b1b] text-[rgb(155, 155, 155)] rounded-[20px]">
                            Limit
                        </button>
                        <button type="button" className="py-2 px-4 bg-[#1b1b1b] text-[rgb(155, 155, 155)] rounded-[20px]">
                            Send
                        </button>
                        <button type="button" className="py-2 px-4 bg-[#1b1b1b] text-[rgb(155, 155, 155)] rounded-[20px]">
                            Buy
                        </button>
                    </div>
                    <div>
                        <button id="open-settings-dialog-button" aria-label="Transaction Settings" >
                            <div >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
                                <path 
                                    d="M20.83 14.6C19.9 14.06 19.33 13.07 19.33 12C19.33 10.93 19.9 9.93999 20.83 9.39999C20.99 9.29999 21.05 9.1 20.95 8.94L19.28 6.06C19.22 5.95 19.11 5.89001 19 5.89001C18.94 5.89001 18.88 5.91 18.83 5.94C18.37 6.2 17.85 6.34 17.33 6.34C16.8 6.34 16.28 6.19999 15.81 5.92999C14.88 5.38999 14.31 4.41 14.31 3.34C14.31 3.15 14.16 3 13.98 3H10.02C9.83999 3 9.69 3.15 9.69 3.34C9.69 4.41 9.12 5.38999 8.19 5.92999C7.72 6.19999 7.20001 6.34 6.67001 6.34C6.15001 6.34 5.63001 6.2 5.17001 5.94C5.01001 5.84 4.81 5.9 4.72 6.06L3.04001 8.94C3.01001 8.99 3 9.05001 3 9.10001C3 9.22001 3.06001 9.32999 3.17001 9.39999C4.10001 9.93999 4.67001 10.92 4.67001 11.99C4.67001 13.07 4.09999 14.06 3.17999 14.6H3.17001C3.01001 14.7 2.94999 14.9 3.04999 15.06L4.72 17.94C4.78 18.05 4.89 18.11 5 18.11C5.06 18.11 5.12001 18.09 5.17001 18.06C6.11001 17.53 7.26 17.53 8.19 18.07C9.11 18.61 9.67999 19.59 9.67999 20.66C9.67999 20.85 9.82999 21 10.02 21H13.98C14.16 21 14.31 20.85 14.31 20.66C14.31 19.59 14.88 18.61 15.81 18.07C16.28 17.8 16.8 17.66 17.33 17.66C17.85 17.66 18.37 17.8 18.83 18.06C18.99 18.16 19.19 18.1 19.28 17.94L20.96 15.06C20.99 15.01 21 14.95 21 14.9C21 14.78 20.94 14.67 20.83 14.6ZM12 15C10.34 15 9 13.66 9 12C9 10.34 10.34 9 12 9C13.66 9 15 10.34 15 12C15 13.66 13.66 15 12 15Z" 
                                    fill="currentColor">
                                </path>
                            </svg>
                            </div>
                        </button>
                    </div>
                </div>


                        {/* first container  */}
                        <div className="rounded-[20px] p-4 min-h-11  bg-[#1b1b1b] h-[120px] w-full">
                            <div>
                                <div>
                                <h1 className="text-[rgb(125,125,125)] text-[14px] font-normal">You pay</h1>
                                </div>
                                
                                <div className="flex justify-between items-center">
                                    <div className="mt-1">
                                        <input 
                                            type="text"
                                            value={inputPayValue}
                                            onChange={handlePayChange} 
                                            className="w-full outline-none text-white text-left text-4xl font-[485] max-h-11 bg-[#1b1b1b] caret-white placeholder-[#363636]"
                                            placeholder="0" 
                                        />
                                    </div>
                                    {/* dropdown menu     */}
                                    <div className="">
                                        <button 
                                            id="dropdownSearchButton" data-dropdown-toggle="dropdownSearch" data-dropdown-placement="bottom" 
                                            className="text-white text-[20px] flex bg-[#131313] hover:bg-opacity-80 font-semibold rounded-full px-3 py-1 text-center items-center" 
                                            type="button"
                                            // onClick={() => setShowModal(true)}
                                            >
                                                ETH
                                            <svg className="w-3.5 h-3.5 ms-3 items-center" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                
                                <div className="pt-2">
                                    <p className="text-[rgb(125,125,125)] text-[14px]">$23987646.45</p>
                                </div>
                            </div>
                        </div>

                        {/* Second container  */}
                        <div className="rounded-[20px] p-4 min-h-11  bg-[#1b1b1b] h-[120px] w-full">
                            <div>
                                <div>
                                <h1 className="text-[rgb(125,125,125)] text-[14px] font-normal">You receive</h1>
                                </div>

                                <div className="flex justify-between items-center">
                                <div className="mt-1">
                                <input 
                                    type="text"
                                    value={inputReceiveValue}
                                    onChange={handleReceiveChange} 
                                    className="w-full outline-none text-white text-left text-4xl font-[485] max-h-11 bg-[#1b1b1b] caret-white placeholder-[#363636]"
                                    placeholder="0" 
                                />
                                </div>
                                {/* dropdown menu     */}
                                    <div>
                                        <button 
                                            id="dropdownSearchButton" data-dropdown-toggle="dropdownSearch" data-dropdown-placement="bottom" 
                                            className="text-white flex text-[20px] bg-[#fc72ff] min-w-[180px] font-medium rounded-full px-3 py-1 text-center items-center" 
                                            type="button">
                                                Select Token
                                            <svg className="w-3.5 h-3.5 ms-3 items-center" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                                            </svg>
                                        </button>
                                    </div>
                                </div>

                                <div className="pt-2">
                                    <p className="text-[rgb(125,125,125)] text-[14px]">$23987646.45</p>
                                </div>
                            </div>
                        </div>

                        {/* button container */}
                        <div className="w-full">
                            <button className="w-full p-4 text-center bg-[rgb(49,28,49)] text-[rgb(252,114,255)] text-xl font-[535] rounded-[16px] hover:opacity-80">Connect Wallet</button>
                        </div>
                    </div>
            </div>
        </div>
        </>
    )
}

export default Swap
