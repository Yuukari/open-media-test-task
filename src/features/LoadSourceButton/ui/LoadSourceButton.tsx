import { ButtonHTMLAttributes, FC } from 'react';

import styles from './LoadSourceButton.module.css';

const LoadSourceButton: FC<ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
    return <button {...props} className={styles.loadSourceButton}>
        <div className={styles.loadSourceButton__icon}>
            <svg width="40" height="36" viewBox="0 0 40 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M39.7197 18.6943C40.0934 18.3068 40.0934 17.693 39.7197 17.3056L23.7197 0.721618L23.0253 0.00195312L21.586 1.3906L22.2803 2.11026L36.6457 16.9999H1H0V18.9999H1H36.6457L22.2803 33.8896L21.586 34.6093L23.0253 35.9979L23.7197 35.2782L39.7197 18.6943Z" fill="#1B191C"/>
            </svg>
        </div>
    </button>;
};

export default LoadSourceButton;