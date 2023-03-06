import { call, put } from "redux-saga/effects";
import { setNasa } from "../../reducers/nasaSlice";
import { requestGetNasa } from "../requests/requestGetNasa";

export function* handleGetNasa(action) {
  try {
    const response = yield call(requestGetNasa);
    const { data } = response;
    yield put(setNasa({ ...data }));
  } catch (error) {
    console.log(error);
  }
}
