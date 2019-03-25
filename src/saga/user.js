import {} from 'actions/user'
import { takeEvery, takeLatest } from 'redux-saga'

function* getAllUsersWorker() {

}

function* loadAllUsersWatcher(action) {
    try {
        const allUsers = yield call(getAllUsersWorker);
        yield put(loadAllUsersSucceed(allUsers));
    } catch (error) {
        yield put(loadAllUsersFailed());
    }
}

function* getUserWorker() {

}

function* loadUserWatcher(action) {
    try {
        const user = yield call(getUserWorker);
        yield put(loadUsersucceed(user));
    } catch (error) {
        yield put(loadUserFailed());
    }
}

function* addUserWorker() {

}

function* addUserWatcher(action) {
    try {
        const user = yield call(addUserWorker);
        yield put(addUsersucceed(user));
    } catch (error) {
        yield put(addUserFailed());
    }
}

function* deleteUserWorker() {

}

function* deleteUserWatcher(action) {
    try {
        const user = yield call(deleteUserWorker);
        yield put(deleteUsersucceed(user));
    } catch (error) {
        yield put(deleteUserFailed());
    }
}

function* user() {
    yield [
        takeEvery(LOAD_ALL_USERS, loadAllUsersWatcher),
        takeEvery(LOAD_USER, loadUserWatcher),
        takeEvery(ADD_USER, addUserWatcher),
        takeEvery(DELETE_USER, deleteUserWatcher)
    ]
}