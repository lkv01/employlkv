import axios from 'axios';

// const usersUrl = 'http://localhost:3003/users';
// const usersUrl = 'http://localhost:8080';

// export const getUsers = async (id) => {
//     id = id || '';
//     return await axios.get(`${usersUrl}/${id}`);
// }

// export const addUser = async (user) => {
//     return await axios.post(`${usersUrl}/add`, user);
// }

// export const deleteUser = async (id) => {
//     return await axios.delete(`${usersUrl}/${id}`);
// }

// export const editUser = async (id, user) => {
//     return await axios.put(`${usersUrl}/${id}`, user)
// }

const usersUrl = 'http://localhost:8080';

export const addUser = async (user) => {
    try {
        return await axios.post(`${usersUrl}/add`, user);
    } catch (error) {
        console.log('error while calling addUser API', error);
    }
}

export const getUsers = async (user) => {
    try {
        return await axios.get(`${usersUrl}/all`, user);
    } catch (error) {
        console.log('error while calling getUsers API', error);
    }
}

export const getUser = async (id) => {
    try {
        return await axios.get(`${usersUrl}/${id}`);
    } catch (error) {
        console.log('Error while calling getUser api', error);
    }
}

export const editUser = async (user, id) => {
    try {
        return await axios.put(`${usersUrl}/${id}`, user);
    } catch (error) {
        console.log('Error while calling editUser api', error);
    }
}

export const deleteUser = async (id) => {
    try {
        return await axios.delete(`${usersUrl}/${id}`);
    } catch (error) {
        console.log('Error while calling deleteUser api', error);
    }
}