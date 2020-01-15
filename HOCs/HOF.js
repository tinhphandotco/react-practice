const addPrefix = prefix => actionType => `${prefix}.${actionType}`;


// users.actions.js

const userActionType = addPrefix('users.actions');

export const GET_USERS = userActionType('GET_USERS');
export const DELETE_USER = userActionType('DELETE_USER');

// users.actions.js

const userActionType = addPrefix('profile.actions');

export const GET_USERS = userActionType('GET_USERS');
export const DELETE_USER = userActionType('DELETE_USER');

