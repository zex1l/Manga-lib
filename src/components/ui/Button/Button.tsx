import {FC} from 'react'

import './Button.scss'

interface IButton {
    text: string
    onClick: () => void
}

const Button:FC<IButton> = ({onClick, text}) => {
    return (
        <button
            onClick={onClick}
        >
            {text}
        </button>
    );
};

export default Button;