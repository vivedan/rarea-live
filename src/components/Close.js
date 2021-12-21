import React from 'react';

function Close(props) {
    return (
        <div className="close-wrapper" onClick={() => props.setSlide("")}>x</div>
    );
}

export default Close;