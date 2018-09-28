import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import PersonPin from '@material-ui/icons/PersonPin';
import Lock from '@material-ui/icons/Lock';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    margin: {
        margin: theme.spacing.unit,
    },
    flex: {
        flexGrow: 1
    }
});

function InputWithIcon(props) {
    const { classes, email, password, changeEmail, changePassword, onSubmit, inProgress } = props;

    return (
        <form style={{ width: '290px', margin: 'auto' }}>
            <TextField
                className={classes.margin}
                id="email"
                label="Email/Username"
                autoComplete="email"
                style={{ width: '280px' }}
                value={email || ''}
                onChange={changeEmail}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <PersonPin />
                        </InputAdornment>
                    ),
                }}
            />
            <br/>
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
                            <Lock />
                        </InputAdornment>
                    ),
                }}
            />
          <Button onClick={onSubmit} disabled={inProgress} type="submit" variant="contained" color="primary">Sign In</Button>
        </form>
    );
}

InputWithIcon.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InputWithIcon);