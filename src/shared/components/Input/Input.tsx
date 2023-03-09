import { FC, InputHTMLAttributes } from 'react';
import cn from 'classnames';

import styles from './Input.module.css';

const Input: FC<InputHTMLAttributes<HTMLInputElement>> = ({ className, ...props }) => {
    return <input {...props} className={cn([styles.input, className])}/>;
};

export default Input;