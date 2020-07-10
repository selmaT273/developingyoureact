import React from 'react';
import './modal.scss';


const Modal = props => {
    const { onClose, children } = props;

    return (
        <div className="overlay">
            <div className="modal">
                <div className="header">
                    <button onClick={onClose}>
                    Close
                    </button>
                </div>
                <div className="content">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Modal;

