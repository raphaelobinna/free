import React from 'react';
import classes from './Layout.css';
import Cod from '../Games/COD/COD';
import Gow from '../Games/GOW/GOW';
import Far from '../Games/FARCRY/FAR';
import Res from '../Games/RESE/RESE';

 const layout = () => (
    <div className={classes.layout}>
    <Cod/>
    <Gow/>
    <Far/>
    <Res/>

</div>

 )
export default layout;