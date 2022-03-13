import { all, fork } from "redux-saga/effects";
import ethaccountSaga from "./ethaccount/sagas";

export default function* rootSaga() {
    yield all([fork(ethaccountSaga)]);
}
