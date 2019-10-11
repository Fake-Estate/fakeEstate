const initialState = {
    first_name:'',
    last_name: '',
    id: 0,
    email: '',
    is_admin: null,
    slide: false
};

const REALTOR_INFO = 'REALTOR_INFO'
const LOGOUT_USER = 'LOGOUT_USER'
const ADD_USER = 'ADD_USER'
const SLIDE_NAV = 'SLIDE_NAV'

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

export function addUser(id, first_name, last_name){
    return{
        type:ADD_USER,
        payload:{id, first_name, last_name}
    }
}

export function slideNav(slide){
    return{
        type: SLIDE_NAV,
        payload: {slide}
    }
}



export default function reducer(state = initialState, action){
    const {type, payload} = action
    switch(type){
        case REALTOR_INFO:
            const {first_name, last_name, email, is_admin, id} = payload
            return {...state, first_name, last_name, email, is_admin, id}
        case LOGOUT_USER:
            return {...initialState}
        case ADD_USER:
            const myObj = Object.assign({}, state, {first_name:payload.first_name, last_name:payload.last_name, id: payload.id})
            return myObj
        case SLIDE_NAV:
            return Object.assign({}, state, {slide: !action.payload.slide})
        default:
            return state
    }
}