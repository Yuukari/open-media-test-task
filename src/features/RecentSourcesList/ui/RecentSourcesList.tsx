import { FC } from 'react';
import cn from 'classnames';

import { useAppSelector } from '../../../app/hooks';

import styles from './RecentSourcesList.module.css';

type RecentSourcesListProps = {
    open: boolean,

    onSelect: (source: string) => void
}

const RecentSourcesList: FC<RecentSourcesListProps> = (props) => {
    const { open, onSelect } = props;
    const { recentSources } = useAppSelector((state) => state.sourceLinkInput);

    const handleItemClick = (source: string) => {
        onSelect(source);
    };

    return <div 
        className={cn([
            styles.recentSourcesList,
            {[styles.recentSourcesList_open]: open && recentSources.length > 0}
        ])}
    >
        {recentSources.length > 0 &&
            recentSources.map((source, i) => 
                <div 
                    className={styles.recentSourcesList__item} 
                    key={i} 
                    
                    onClick={() => handleItemClick(source)}
                >{source}</div>
            )
        }
    </div>;
};

export default RecentSourcesList;