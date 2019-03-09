import axios from 'axios';
import swapiReducer from './reducer';

const swapiApi = {};

swapiApi.fetchSwapiAPI = (req,success,failed) => {
    return (dispatch) => {
        axios.get(`https://cors-anywhere.herokuapp.com/https://swapi.co/api/people`)
            .then(res => {
                if(res.data.results.length > 0) {
                    success(res);
                    dispatch(swapiReducer.getData(res.data.results));
                }
            })
            .catch(err => {
                failed(err)
            });
    }
}

export default swapiApi;