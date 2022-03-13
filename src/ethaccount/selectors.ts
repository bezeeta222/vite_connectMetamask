import { createSelector } from "reselect";

import { AppState } from "../reducer";

const getPending = (state: AppState) => state.ethaccount.pending;

const getEthaccount = (state: AppState) => state.ethaccount.ethaccount;

const getError = (state: AppState) => state.ethaccount.error;

export const getEthaccountSelector = createSelector(
    getEthaccount,
    ethaccount => ethaccount
);

export const getPendingSelector = createSelector(
    getPending,
    pending => pending
);

export const getErrorSelector = createSelector(getError, error => error);
