/* eslint-disable no-constant-condition */

import { fork, all } from 'redux-saga/effects';
import watchHome from './home';


export default function* root() {
  // yield all([fork(watchHome), fork(watchGetProducts), fork(watchCheckout)])
  yield all([fork(watchHome)]);
}
