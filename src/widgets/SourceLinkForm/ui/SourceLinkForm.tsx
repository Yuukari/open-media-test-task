import { FC } from 'react';

import { useAppDispatch } from '../../../app/hooks';
import { setSource } from '../../../entities/PlayerInstance/model';

import SourceLinkInput from '../../../entities/SourceLinkInput/ui';

import styles from './SourceLinkForm.module.css';

const SourceLinkForm: FC = () => {
    const dispatch = useAppDispatch();

    const handleLoadButtonClick = (url: string) => {
        dispatch(setSource(url));
    }

    return <div className={styles.sourceLinkForm}>
        <p className={styles.sourceLinkForm__label}>Insert the link</p>

        <div className={styles.sourceLinkForm__wrapper}>
            <SourceLinkInput
                onLoadButtonClick={handleLoadButtonClick}
            />
        </div>
    </div>;
};

export default SourceLinkForm;