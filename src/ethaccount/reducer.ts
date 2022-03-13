import {
    FETCH_ETHACCOUNT_REQUEST,
    FETCH_ETHACCOUNT_FAILURE,
    FETCH_ETHACCOUNT_SUCCESS
} from "./actionTypes";
import { EthaccountState, EthaccountActions } from "./types";

const initialState: EthaccountState = {
    error: null,
    pending: false,
    ethaccount: null,
};

export default (state = initialState, action: EthaccountActions| any) => {
    switch (action.type) {
        case FETCH_ETHACCOUNT_REQUEST:
            return {
                ...state,
                error: null,
                pending: true,
                ethaccount: null
            };
        case FETCH_ETHACCOUNT_SUCCESS:
            return {
                ...state,
                error: null,
                pending: false,
                ethaccount: action.payload
            };
        case FETCH_ETHACCOUNT_FAILURE:
            return {
                ...state,
                error: action.payload,
                pending: false,
                ethaccount: null
            };
        default:
            return {
                ...state
            };
    }
};
