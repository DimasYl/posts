import React from 'react';
import style from './MyButton.module.css'

type MyButtonPropsType = {
    disabled?: boolean
    onClick?: (e: any) => void
}

const MyButton: React.FC<MyButtonPropsType> = ({children, ...props}) => {
    return (
        <button {...props} className={style.myBtn}>
            {children}
        </button>
    );
};

export default MyButton;