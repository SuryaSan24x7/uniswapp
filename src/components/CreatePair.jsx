import { ethers } from "ethers";
import customV2FactoryAbi from "../contracts/CustomV2Factory.json";

async function createPair(walletData, factoryAddress, tokenA, tokenB) {
    const provider = walletData[1];
    const signer = provider.getSigner();
    const factoryContract = new ethers.Contract(factoryAddress, customV2FactoryAbi, signer);

    try {
        const tx = await factoryContract.createPair(tokenA, tokenB);
        console.log("Create Pair transaction sent:", tx.hash);
        await tx.wait();

        // Listen for PairCreated event
        factoryContract.on("PairCreated", (token0, token1, pair, event) => {
            console.log("PairCreated event detected:");
            console.log("Token0:", token0);
            console.log("Token1:", token1);
            console.log("Pair:", pair);
            console.log("Event:", event);
            alert("Pair created successfully. ✅");
        });

        console.log("Pair creation transaction confirmed.");
    } catch (error) {
        console.error("Failed to create pair:", error);
        alert(`Error: ${error.message}`);
    }
}

export default createPair;
