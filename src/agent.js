import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';

const request = superagentPromise(_superagent, global.Promise);

const API_ROOT = 'http://localhost:3000';

const responseBody = res => res.body;

const requests = {
    get: url =>
        request.get(`${API_ROOT}${url}`).then(responseBody)
};

const Tutorials = {
    all: page =>
        requests.get('/tutorials?limit=10')
};

const Profiles = {
    profile: username =>
            request.get('/profiles/' + username)
};

const User = {
    user: id =>
        request.get('/users/user/' + id)
}

export default {
    Tutorials,
    Profiles,
    User
};