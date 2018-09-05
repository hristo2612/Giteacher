import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';

const superagent = superagentPromise(_superagent, global.Promise);

const API_ROOT = 'http://localhost:4200';

const responseBody = res => res.body;

let token = null;
const tokenPlugin = req => {
    if (token) {
        req.set('authorization', 'Token ' + token);
    }
};

const requests = {
    del: url =>
        superagent.del(`${API_ROOT}${url}`).use(tokenPlugin).then(responseBody),
    get: url =>
        superagent.get(`${API_ROOT}${url}`).use(tokenPlugin).then(responseBody),
    put: (url, body) =>
        superagent.put(`${API_ROOT}${url}`, body).use(tokenPlugin).then(responseBody),
    post: (url, body) =>
        superagent.post(`${API_ROOT}${url}`, body).use(tokenPlugin).then(responseBody),
};

const User = {
    get: () =>
        requests.get('/users/user'),
    update: user =>
        requests.put('/users/user', { user }),
    login: (email, password) =>
        requests.post('/users/login', { user: { email, password } }),
    register: (username, email, password) =>
        requests.post('/users/register', { user: { username, email, password } }),
    update: user =>
        requests.put('/users/user', { user }),
}

const Tutorials = {
    all: page =>
        superagent.get('/tutorials?limit=10')
};

const Profile = {
    get: username =>
        superagent.get('/profiles/' + username)
};

export default {
    Tutorials,
    Profile,
    User,
    setToken: _token => { token = _token; }
};