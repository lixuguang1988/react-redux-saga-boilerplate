/* eslint-disable no-constant-condition */

import { put, call, takeLatest, all, fork  } from 'redux-saga/effects';
import { getProfile, getPost } from '../services/home';


function* fetchProfile(){
  console.log('fetch profile bfore')
  const profile = yield call(getProfile);
  console.log('fetch profile after')

  yield put({
    type: 'FETCH_HOME_RESOURCE_SUCCESS',
    payload: {
      profile,
      ajax: false
    }
  });
}

function* fetchPosts(){
  console.log('fetch posts before')
  const posts = yield call(getPost);
  console.log('fetch posts after')
  yield put({
    type: 'FETCH_HOME_RESOURCE_SUCCESS',
    payload: {
      posts,
      ajax: false
    }
  });
}

/**
 * 首页数据请求
 */
export function* getHomeResource(action) {
  yield put({
    type: 'FETCH_HOME_RESOURCE_START',
    payload: {
      ajax: true,
      err: null
    }
  });

  try{
    //这种形式有失败的时候不能自动cancel掉未完成的
    // yield all([
    //   call(fetchPosts, action),
    //   call(fetchProfile, action),
    // ]);

    //封装成函数是为了trycatch，直接yield fork 无法catch
    yield call(forkFetch, action);
  }catch(error){
    console.error('home saga error', error);
    yield put({
      type: 'FETCH_HOME_RESOURCE_FAILED',
      payload: {
        ajax: false,
        error: error
      }
    });
  }
}

function* forkFetch(action){
  yield fork(fetchProfile, action)
  yield fork(fetchPosts, action)
}



export default function* watchHome() {
  yield takeLatest('ROUTE_IN_HOME', getHomeResource);
}
