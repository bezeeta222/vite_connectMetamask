import {
    FETCH_ETHACCOUNT_FAILURE,
    FETCH_ETHACCOUNT_REQUEST,
    FETCH_ETHACCOUNT_SUCCESS
} from "./actionTypes";
import {
    FetchEthaccountFailurePayload,
    FetchEthaccountRequest,
    FetchEthaccountSuccess,
    FetchEthaccountSuccessPayload
} from "./types";

export const fetchEthaccountRequest = (): FetchEthaccountRequest => ({
    type: FETCH_ETHACCOUNT_REQUEST
});

export const fetchEthaccountSuccess = (
    payload: FetchEthaccountSuccessPayload
): FetchEthaccountSuccess => ({
    type: FETCH_ETHACCOUNT_SUCCESS,
    payload
});

export const fetchEthaccountFailure = (
    payload: FetchEthaccountFailurePayload
) => ({
    type: FETCH_ETHACCOUNT_FAILURE,
    payload
});
