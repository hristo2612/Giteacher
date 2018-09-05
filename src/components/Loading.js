import React from 'react';
import ReactDelayRender from 'react-delay-render';
import CircularProgress from '@material-ui/core/CircularProgress';

const Loading = () => <CircularProgress
                        style={{position: 'absolute', top: '50%', left: '50%', zIndex: 1000, margin: '0 0 0 -25px'}}
                        size={50} />;

export default ReactDelayRender({ delay: 269 })(Loading);