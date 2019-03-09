const swapiReducer = {};

swapiReducer.getData = (data) => ({
    type: 'SWAPIDATA',
    payload: data
});

export default swapiReducer;
