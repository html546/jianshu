import axios from 'axios';
import * as contants from './contants';
const changeDetail = (title, content) => ({
    type: contants.CHANGE_DETAIL,
    title,
    content
})
export const getDetail = () => {
    return (dispatch) => {
        axios.get('/api/detail.json').then((res) => {
            const result = res.data.data;
            dispatch(changeDetail(result.title, result.content));
        })
    }
}