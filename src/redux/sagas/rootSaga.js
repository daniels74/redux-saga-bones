import { takeLatest } from "redux-saga/effects";
import { handleGetUser } from "./handlers/user";
import { getUser } from "../reducers/userSlice";

//for nasa
import { getNasa } from "../reducers/nasaSlice";
import { handleGetNasa } from "./handlers/handleGetNasa";

export function* watcherSaga() {
  yield takeLatest(getUser.type, handleGetUser);
  yield takeLatest(getNasa.type, handleGetNasa);
}
