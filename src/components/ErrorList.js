import React from 'react';

class ErrorList extends React.Component {
    render() {
        const errors = this.props.errors;
        if (errors) {
            return (
                <ul style={{color: '#B85C5C', fontWeight: 'bold'}}>
                    {
                        Object.keys(errors).map(key => {
                            return (
                                <li key={key}>
                                    {key} {errors[key]}
                                </li>
                            );
                        })
                    }
                </ul>
            );
        } else {
            return null;
        }
    }
}

export default ErrorList;