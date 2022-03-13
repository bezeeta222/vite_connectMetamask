import {
    FETCH_ETHACCOUNT_FAILURE,
    FETCH_ETHACCOUNT_REQUEST,
    FETCH_ETHACCOUNT_SUCCESS
} from "./actionTypes";

export interface EthaccountState {
    error: string | null;
    pending: boolean;
    ethaccount: string;
}

export interface Ethaccount {
    publicKey: string;
    balance: number;
}

export interface FetchEthaccountSuccessPayload {
    ethaccount: Ethaccount;
}

export interface FetchEthaccountFailurePayload {
    error: string | null;
}

export interface FetchEthaccountRequest {
    type: typeof FETCH_ETHACCOUNT_REQUEST;
}

export interface FetchEthaccountSuccess {
    type: typeof FETCH_ETHACCOUNT_SUCCESS;
    payload: FetchEthaccountSuccessPayload;
}

export interface FetchEthaccountFailure {
    type: typeof FETCH_ETHACCOUNT_FAILURE;
    payload: FetchEthaccountFailurePayload;
}

export type EthaccountActions =
    | FetchEthaccountRequest
    | FetchEthaccountSuccess
    | FetchEthaccountFailure;
