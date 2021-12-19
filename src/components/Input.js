import React, { useState, useEffect } from 'react';

import Close from './Close';
import InputComment from './InputComment';

function Input(props) {
    return (
        <div className="input-wrapper wrapper centered">
            <Close setSlide={props.setSlide}/>
            
            <InputComment setSlide={props.setSlide}/>
            
        </div>
    );
}

export default Input;