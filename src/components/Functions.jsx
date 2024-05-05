import { ethers } from "ethers";
import router02Abi from "../contracts/CustomV2Router02.json";

async function swapExactETHForTokens(walletData, routerAddress, amountOutMin, path, deadline) {
    const provider = walletData[1];
    const signer = provider.getSigner();
    const routerContract = new ethers.Contract(routerAddress, router02Abi, signer);

    try {
        const tx = await routerContract.swapExactETHForTokens(
            amountOutMin,
            path,
            signer.getAddress(),
            deadline,
            { value: amountOutMin }
        );
        console.log("Swap transaction sent:", tx.hash);
        await tx.wait();

        console.log("Swap successful.");
        alert(`Swap successful. ✅`);
    } catch (error) {
        console.error("Failed to swap ETH for tokens:", error);
        alert(`Error: ${error.message}`);
    }
}

async function swapExactTokensForETH(walletData, routerAddress, amountIn, amountOutMin, path, deadline) {
    const provider = walletData[1];
    const signer = provider.getSigner();
    const routerContract = new ethers.Contract(routerAddress, router02Abi, signer);

    try {
        const tx = await routerContract.swapExactTokensForETH(
            amountIn,
            amountOutMin,
            path,
            signer.getAddress(),
            deadline
        );
        console.log("Swap transaction sent:", tx.hash);
        await tx.wait();

        console.log("Swap successful.");
        alert(`Swap successful. ✅`);
    } catch (error) {
        console.error("Failed to swap tokens for ETH:", error);
        alert(`Error: ${error.message}`);
    }
}

async function swapExactTokensForTokens(walletData, routerAddress, amountIn, amountOutMin, path, deadline) {
    const provider = walletData[1];
    const signer = provider.getSigner();
    const routerContract = new ethers.Contract(routerAddress, router02Abi, signer);

    try {
        const tx = await routerContract.swapExactTokensForTokens(
            amountIn,
            amountOutMin,
            path,
            signer.getAddress(),
            deadline
        );
        console.log("Swap transaction sent:", tx.hash);
        await tx.wait();

        console.log("Swap successful.");
        alert(`Swap successful. ✅`);
    } catch (error) {
        console.error("Failed to swap tokens for tokens:", error);
        alert(`Error: ${error.message}`);
    }
}

async function addLiquidityETH(walletData, routerAddress, token, amountTokenDesired, amountTokenMin, amountETHMin, deadline) {
    const provider = walletData[1];
    const signer = provider.getSigner();
    const routerContract = new ethers.Contract(routerAddress, router02Abi, signer);

    try {
        const tx = await routerContract.addLiquidityETH(
            token,
            amountTokenDesired,
            amountTokenMin,
            amountETHMin,
            signer.getAddress(),
            deadline,
            { value: amountETHMin }
        );
        console.log("Add Liquidity transaction sent:", tx.hash);
        await tx.wait();

        console.log("Liquidity added successfully.");
        alert(`Liquidity added successfully. ✅`);
    } catch (error) {
        console.error("Failed to add liquidity with ETH:", error);
        alert(`Error: ${error.message}`);
    }
}

async function addLiquidity(walletData, routerAddress, tokenA, tokenB, amountADesired, amountBDesired, amountAMin, amountBMin, deadline) {
    const provider = walletData[1];
    const signer = provider.getSigner();
    const routerContract = new ethers.Contract(routerAddress, router02Abi, signer);

    try {
        const tx = await routerContract.addLiquidity(
            tokenA,
            tokenB,
            amountADesired,
            amountBDesired,
            amountAMin,
            amountBMin,
            signer.getAddress(),
            deadline
        );
        console.log("Add Liquidity transaction sent:", tx.hash);
        await tx.wait();

        console.log("Liquidity added successfully.");
        alert(`Liquidity added successfully. ✅`);
    } catch (error) {
        console.error("Failed to add liquidity:", error);
        alert(`Error: ${error.message}`);
    }
}

async function removeLiquidityETH(walletData, routerAddress, token, liquidity, amountTokenMin, amountETHMin, deadline) {
    const provider = walletData[1];
    const signer = provider.getSigner();
    const routerContract = new ethers.Contract(routerAddress, router02Abi, signer);

    try {
        const tx = await routerContract.removeLiquidityETH(
            token,
            liquidity,
            amountTokenMin,
            amountETHMin,
            signer.getAddress(),
            deadline
        );
        console.log("Remove Liquidity transaction sent:", tx.hash);
        await tx.wait();

        console.log("Liquidity removed successfully.");
        alert(`Liquidity removed successfully. ✅`);
    } catch (error) {
        console.error("Failed to remove liquidity with ETH:", error);
        alert(`Error: ${error.message}`);
    }
}

async function removeLiquidity(walletData, routerAddress, tokenA, tokenB, liquidity, amountAMin, amountBMin, deadline) {
    const provider = walletData[1];
    const signer = provider.getSigner();
    const routerContract = new ethers.Contract(routerAddress, router02Abi, signer);

    try {
        const tx = await routerContract.removeLiquidity(
            tokenA,
            tokenB,
            liquidity,
            amountAMin,
            amountBMin,
            signer.getAddress(),
            deadline
        );
        console.log("Remove Liquidity transaction sent:", tx.hash);
        await tx.wait();

        console.log("Liquidity removed successfully.");
        alert(`Liquidity removed successfully. ✅`);
    } catch (error) {
        console.error("Failed to remove liquidity:", error);
        alert(`Error: ${error.message}`);
    }
}



export {
    swapExactETHForTokens,
    swapExactTokensForETH,
    swapExactTokensForTokens,
    addLiquidityETH,
    addLiquidity,
    removeLiquidityETH,
    removeLiquidity
};
