const initialState = {
    first_name: '',
    last_name: '',
    email: '',
    is_admin: null,
    id: 0
}

const REALTOR_INFO = 'REALTOR_INFO'
const LOGOUT_USER = 'LOGOUT_USER'

export function realtorInfo(first_name, last_name, email, is_admin, id){
    return{
        type: REALTOR_INFO,
        payload: first_name, last_name, email, is_admin, id
    }
}

export function logoutUser(){
    return{
        type: LOGOUT_USER
    }
}


export default function adminReducer(state=initialState, action){
    console.log('1', action)
    const {type, payload} = action
    console.log(action)
    switch(type){
        case REALTOR_INFO:
            const {first_name, last_name, email, is_admin, id} = payload
            return {...state, first_name, last_name, email, is_admin, id}
        case LOGOUT_USER:
            return {...initialState}
        default:
            return state
    }
}