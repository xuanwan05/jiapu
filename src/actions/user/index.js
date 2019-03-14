//action types
const LOAD_ALL_USERS = 'LOAD_ALL_USERS'
const LOAD_ALL_USERS_SUCCEED = 'LOAD_ALL_USERS_SUCCEED'
const LOAD_ALL_USERS_FAILED = 'LOAD_ALL_USERS_FAILED'
const LOAD_USER = 'LOAD_USER'
const LOAD_USER_SUCCEED = 'LOAD_USER_SUCCEED'
const LOAD_USER_FAILED = 'LOAD_USER_FAILED'
const ADD_USER = 'ADD_USER'
const ADD_USER_SUCCEED = 'ADD_USER_SUCCEED'
const ADD_USER_FAILED = 'ADD_USER_FAILED'
const DELETE_USER = 'DELETE_USER'
const DELETE_USER_SUCCEED = 'DELETE_USER_SUCCEED'
const DELETE_USER_FAILED = 'DELETE_USER_FAILED'


//actions
export const loadAllUsers = () => ({
    type: LOAD_ALL_USERS
})

export const loadAllUsersSucceed = (users) => ({
    type: LOAD_ALL_USERS_SUCCEED,
    users: users
})

export const loadAllUsersFailed = () => ({
    type: LOAD_ALL_USERS_FAILED
})

export const loadUser = (uuid) => ({
    type: LOAD_USER,
    uuid: uuid
})

export const loadUsersucceed = (user) => ({
    type: LOAD_USER_SUCCEED,
    users: user
})

export const loadUserFailed = (uuid) => ({
    type: LOAD_USER_FAILED
})

export const addUser = (user, redirectURL) => ({
    type: ADD_USER,
    user: user,
    redirectURL: redirectURL
})

export const addUsersucceed = () => ({
    type: ADD_USER_SUCCEED
})

export const addUserFailed = () => ({
    type: ADD_USER_FAILED
})

export const deleteUser = (uuid) => ({
    type: DELETE_USER,
    uuid: uuid
})

export const deleteUsersucceed = () => ({
    type: DELETE_USER_SUCCEED
})

export const deleteUserFailed = () => ({
    type: DELETE_USER_FAILED
})

