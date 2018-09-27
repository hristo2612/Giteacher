import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Profile from '@material-ui/icons/AccountCircle';
import Lock from '@material-ui/icons/Lock';
import VpnKey from '@material-ui/icons/VpnKey';
import Button from '@material-ui/core/Button';
import Email from '@material-ui/icons/Email';
import Divider from '@material-ui/core/Divider';

const styles = theme => ({
    margin: {
        margin: theme.spacing.unit,
    },
    flex: {
        flexGrow: 1
    }
});

function InputWithIcon(props) {
    const { classes, email, username, password, changeEmail, changeUsername, changePassword, onSubmit, inProgress } = props;

    return (
        <form style={{ width: '290px', margin: 'auto' }}>
            <TextField
                className={classes.margin}
                id="email"
                label="Email"
                autoComplete="email"
                style={{ width: '280px' }}
                value={email || ''}
                onChange={changeEmail}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <Email />
                        </InputAdornment>
                    ),
                }}
            />
            <TextField
                className={classes.margin}
                id="username"
                label="Username"
                autoComplete="username"
                style={{ width: '280px' }}
                value={username || ''}
                onChange={changeUsername}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <Profile />
                        </InputAdornment>
                    ),
                }}
            />
            <TextField
                className={classes.margin}
                id="password"
                label="Password"
                autoComplete="password"
                type={"password"}
                style={{ width: '280px' }}
                value={password || ''}
                onChange={changePassword}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <VpnKey />
                        </InputAdornment>
                    ),
                }}
            />
            <br />
            <TextField
                className={classes.margin}
                id="repeat-password"
                label="Repeat Password"
                autoComplete="password"
                type={"password"}
                style={{ width: '280px' }}
                value={password || ''}
                onChange={changePassword}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <Lock />
                        </InputAdornment>
                    ),
                }}
            />
            <Button onClick={onSubmit} disabled={inProgress} variant="contained" color="primary">Sign Up</Button>
        </form>
    );
}

InputWithIcon.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InputWithIcon);