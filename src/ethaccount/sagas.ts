import { all, call, put, takeLatest } from "redux-saga/effects";
import { ethers } from "ethers";
import { FETCH_ETHACCOUNT_REQUEST } from "./actionTypes";
import { fetchEthaccountSuccess, fetchEthaccountFailure } from "./actions";

function* fetchEthaccountSaga(): any {
    if (!window.ethereum) {
        yield put(
            fetchEthaccountFailure("Please intall and log into Metamask!")
        );
        return;
    }

    const accounts = yield window.ethereum.request({
        method: "eth_requestAccounts"
    });
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const address = accounts[0];
    const balance = yield provider.getBalance(address);
    const formattedBalance = ethers.utils.formatEther(balance);

    yield put(
        fetchEthaccountSuccess({
            publicKey: address,
            balance: formattedBalance
        })
    );
}

function* ethaccountSaga() {
    yield all([takeLatest(FETCH_ETHACCOUNT_REQUEST, fetchEthaccountSaga)]);
}

export default ethaccountSaga;
