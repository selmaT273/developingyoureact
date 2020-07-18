import React from 'react';
import './register-button.css';

const styles = [
    'btn--primary',
    'btn-outline'
]

const sizes = [
    'btn--medium',
    'btn--large'
]

export const RegisterButton = ({
    children,
    onClick,
    buttonStyle,
    buttonSize
}) => {
    const checkButtonStyle = styles.includes(buttonStyle) ? buttonStyle : styles[0]

    const checkButtonSize = sizes.includes(buttonSize) ? buttonSize : sizes[0]

    return(
        <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick}>{children}</button>
    )
}