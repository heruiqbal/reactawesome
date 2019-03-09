import axios from 'axios';
import userReducer from './reducer';

const userApi = {};

let payload = {}
userApi.loginUser = (req,success,failed) => {
    payload.email = req.body.email;
    payload.password = req.body.password;

    return (dispatch) => {
        axios.post(`http://localhost:3000/users`,payload)
            .then(res => {
                dispatch(userReducer.loginUser(res));
                console.log(res)
            })
            .catch(err => {
                failed(err)
            });
    }
}

userApi.registerUser = (req,success,failed) => {
    payload.name = req.body.fullName
    payload.email = req.body.email;
    payload.password = req.body.password;

    return (dispatch) => {
        axios.post(`http://localhost:3000/users/register`,payload)
            .then(res => {
                dispatch(userReducer.loginUser(res.data));
                success(res);
            })
            .catch(err => {
                failed(err)
            });
    }
}

export default userApi;