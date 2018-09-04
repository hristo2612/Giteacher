import React from 'react';

const Profile = ({ match }) => {
    console.log(match);
    return (
        <div>
            <h1>You are { match && match.params ? match.params.username : 'something went horribly wrong'}</h1>
            <p>Page was loaded asynchronously</p>
        </div>
    );
};

export default Profile;