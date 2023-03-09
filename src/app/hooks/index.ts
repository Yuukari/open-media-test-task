import { useEffect, useLayoutEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import type { RootState, AppDispatch } from '../store';

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useLatest = (value: any) => {
    const valueRef = useRef(value);

    useLayoutEffect(() => {
        valueRef.current = value;
    }, [value]);

    return valueRef;
}

export const useOutsideClick = (elementRef: any, handler: () => void, attached = true) => {
    const latestHandler = useLatest(handler);
  
    useEffect(() => {
        if (!attached) 
            return;
    
        const handleClick = (e: any) => {
            if (!elementRef.current) 
                return;

            if (!elementRef.current.contains(e.target))
                latestHandler.current();
        };
    
        document.addEventListener("click", handleClick);
    
        return () => {
            document.removeEventListener("click", handleClick);
        };
    }, [elementRef, latestHandler, attached]);
  }