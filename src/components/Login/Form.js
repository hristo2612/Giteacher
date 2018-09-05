import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
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
    const { classes } = props;

    return (
        <div style={{ width: '210px', margin: 'auto' }}>
            <TextField
                className={classes.margin}
                id="input-with-icon-textfield"
                label="Username"
                inputStyle={{ textAlign: 'center' }}
                hintStyle={{ width: '200px', textAlign: 'center' }}
                style={{ width: '200px' }}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <AccountCircle />
                        </InputAdornment>
                    ),
                }}
            />
            <br/>
            <TextField
                className={classes.margin}
                id="input-with-icon-textfield"
                label="Username"
                inputStyle={{ textAlign: 'center' }}
                hintStyle={{ width: '200px', textAlign: 'center' }}
                style={{ width: '200px' }}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <AccountCircle />
                        </InputAdornment>
                    ),
                }}
            />
        </div>
    );
}

InputWithIcon.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InputWithIcon);