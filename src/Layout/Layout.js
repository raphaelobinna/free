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
    <div className={classes.Layout}>
    <p>@me 2020. All rights reserved</p>
    <p>To comment click <a href="https://wa.me/+2348160573782">here</a></p>
    </div>
   
</div>

 )
export default layout;