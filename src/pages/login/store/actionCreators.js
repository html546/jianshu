import axios from 'axios';
import * as contants from './contants';
const changeLogin = () => ({
    type: contants.CHANGE_LOGIN,
    value: true
});
export const logout = () => ({
    type:contants.LOGOUT,
    value:false
})
export const login = (account, password) => {
    return (dispatch) => {
        axios.get('/api/login.json?account=' + account + '&password=' + password).then((res) => {
            const result = res.data.data;
            if (result) {
                dispatch(changeLogin())
            } else {
                alert('登陆失败');
            }
            console.log(res);
        })
    }
}