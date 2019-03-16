import { getJSON } from "../utils/request";
// const token = '245d36b1-38c6-4f1e-9372-dfb6a80039e0';
/**
 * 获取个人页
 */
export function getProfile(){
  return getJSON('https://cnodejs.org/api/v1/user/lixuguang1988');
}

/**
 * 获取新闻通稿
 */
export function getPost(){
  return getJSON('https://cnodejs.org/api/v1/topics');
}

