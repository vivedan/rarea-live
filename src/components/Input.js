import React from 'react';

import Close from './Close';
import InputComment from './InputComment';

function Input(props) {
    return (
        <div className="input-wrapper wrapper centered">
            <Close setSlide={props.setSlide}/>
            
            <InputComment setSlide={props.setSlide} language={props.language}/>
            
        </div>
    );
}

export default Input;