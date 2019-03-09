let initialState = {
    isLogin: false,
    fullName: '',
    email: '',
}

const loginUser = (state,payload) => {
    let newState = JSON.parse(JSON.stringify(state));

    console.log(payload)
    newState.isLogin = true;
    newState.fullName = payload.name;
    newState.email = payload.email;
    
    return newState
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGINUSER': return loginUser(state,action.payload);
        default: return state;
    }
}

export default userReducer;