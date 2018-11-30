import { take, put, call, fork, select, takeEvery, all } from 'redux-saga/effects'
import * as actions from '../redux/actions'
import {}
export function* getAllAgents() {
  const agents = yield call(api.getAgents)
  yield put(action.receiveProduces(agents))
}