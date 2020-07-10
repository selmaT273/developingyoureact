import React from 'react';


const Modal = props => {
    const { title, onClose, children } = props;

    return (
        <div>
            <div>
                <span className="title">
                {title}
                </span>
                <button onClick={onClose}>
                &times;
                </button>
                <div className="content">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Modal;

