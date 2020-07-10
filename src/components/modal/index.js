import React from 'react';


const Modal = props => {
    const { onClose, children } = props;

    return (
        <div>
            <div>
                <button onClick={onClose}>
                Close
                </button>
                <div className="content">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Modal;

