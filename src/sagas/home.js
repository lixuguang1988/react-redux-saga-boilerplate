/* eslint-disable no-constant-condition */

import { put, call, takeLatest  } from 'redux-saga/effects';
import { getProfile, getPost } from '../services/home';

/**
 * 首页数据请求
 */
export function* getHomeResource() {
  yield put({
    type: 'FETCH_HOME_RESOURCE_START',
    payload: {
      ajax: true,
      err: null
    }
  });

  try{
    const profile = yield call(getProfile)
    const posts = yield call(getPost)
    yield put({
      type: 'FETCH_HOME_RESOURCE_SUCCESS',
      payload: {
        profile,
        posts,
        ajax: false
      }
    });
  }catch(error){
    console.log('home saga error', error);
    yield put({
      type: 'FETCH_HOME_RESOURCE_FAILED',
      payload: {
        ajax: false,
        error: error
      }
    });
  }
}



export default function* watchHome() {
  yield takeLatest('ROUTE_IN_HOME', getHomeResource);
}
