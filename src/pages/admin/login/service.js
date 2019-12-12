import {POST, DELETE, GET} from 'utils/request';

//用户名登录
export function usernameLogin(payload) {
    return POST('/sys/login/accountLogin', payload);
}