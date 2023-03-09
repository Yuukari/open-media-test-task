import React, { FC, useEffect, ReactNode } from 'react';

type ClickOutsideHandlerProps = {
    children: ReactNode,

    onClick: () => void
}

// Честно, для отслеживания кликов вне элемента взял готовое решение, не смог пробросить ref к Input'у из папки Shared
// чтобы сделать более простое решение через хуки

const ClickOutsideHandler: FC<ClickOutsideHandlerProps> = (props) => {
    const { children, onClick } = props;

    const refs = React.Children.map(children, () => React.createRef<any>());

    const handleClick = (e: any) => {
        if (!refs)
            return;
            
        const isOutside = refs.every(ref => {
            return !ref.current.contains(e.target);
        });

        if (isOutside)
            onClick();
    };

    useEffect(() => {
        document.addEventListener("click", handleClick);

        return () => {
            document.removeEventListener("click", handleClick);
        };
    });

    return React.Children.map(children, (element: any, idx) =>
        React.cloneElement(element, { ref: refs![idx] })
    );
}

export default ClickOutsideHandler;