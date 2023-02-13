import { all, takeEvery } from "redux-saga/effects";


const loginSaga = function* () {
    yield console.log('Hello')
}
const rootSagas = function *() {
    yield all([helloWorld])
}

export default rootSagas