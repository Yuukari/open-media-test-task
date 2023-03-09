import { ChangeEvent, FC, useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../../app/hooks';
import { reset, setValue } from '../model';

import Input from '../../../shared/components/Input';
import RecentSourcesList from '../../../features/RecentSourcesList/ui';
import LoadSourceButton from '../../../features/LoadSourceButton/ui';

import styles from './SourceLinkInput.module.css';
import ClickOutsideHandler from '../../../shared/hoc/ClickOutsideHandler';

interface SourceLinkInputProps {
    onLoadButtonClick: (url: string) => void
}

const SourceLinkInput: FC<SourceLinkInputProps> = (props) => {
    const { value, error } = useAppSelector((state) => state.sourceLinkInput);
    const dispatch = useAppDispatch();

    const [listOpen, setListOpen] = useState(false);
    
    const handleFocus = () => {
        setListOpen(true);
    }

    const handleOutsideClick = () => {
        setListOpen(false);
    }

    const handleSourceSelect = (source: string) => {
        dispatch(setValue(source));
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setValue(e.currentTarget.value));
    }

    const handleLoadButtonClick = () => {
        props.onLoadButtonClick(value);
        dispatch(reset());
    }

    return <div className={styles.sourceLinkInput}>
        <ClickOutsideHandler
            onClick={handleOutsideClick}
        >
            <div className={styles.sourceLinkInputWrapper}>
                <Input
                    className={styles.sourceLinkInput__input}
                    placeholder="https://"

                    value={value}

                    onFocus={handleFocus}
                    onChange={handleChange}
                />

                <RecentSourcesList
                    open={listOpen && value == ""}

                    onSelect={handleSourceSelect}
                />
            </div>
        </ClickOutsideHandler>

        <LoadSourceButton
            disabled={value == "" || error != null}
            onClick={handleLoadButtonClick}
        />

        {error && <p className={styles.sourceLinkInput__error}>
            {error}
        </p>}
    </div>;
};

export default SourceLinkInput;