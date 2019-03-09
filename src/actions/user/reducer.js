const user = {};

user.loginUser = (data) => ({
    type: 'LOGINUSER',
    payload: data
});

export default user;