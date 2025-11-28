import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import AccountItem from './AccountItem';
import { useEffect, useState } from 'react';
import * as userSuggested from '~/Services/suggestedService';
const cx = classNames.bind(styles);
function SuggestedAccounts({ label }) {
    const PAGE_SIZE = 5;
    const [accounts, setAccounts] = useState([]);
    const [displayCount, setDisplayCount] = useState(PAGE_SIZE);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);

    const loadMoreAccounts = async () => {
        if (loading || !hasMore) {
            return;
        }

        setLoading(true);
        try {
            const page = Math.floor(accounts.length / PAGE_SIZE) + 1;
            const { data, hasMore: moreAvailable } = await userSuggested.getSuggested(page, PAGE_SIZE);
            setAccounts((prevAccounts) => {
                const existingIds = new Set(prevAccounts.map((account) => account.id));
                const filteredData = data.filter((account) => !existingIds.has(account.id));
                return [...prevAccounts, ...filteredData];
            });
            setHasMore(moreAvailable);
        } catch (error) {
            console.error('Failed to load suggested accounts', error);
        } finally {
            setLoading(false);
        }
    };

    const handleToggleList = async () => {
        const showingAll = !hasMore && displayCount >= accounts.length;

        if (showingAll) {
            setDisplayCount(PAGE_SIZE);
            return;
        }

        const nextCount = displayCount + PAGE_SIZE;

        if (nextCount > accounts.length && hasMore) {
            await loadMoreAccounts();
        }

        setDisplayCount((prev) => prev + PAGE_SIZE);
    };

    useEffect(() => {
        loadMoreAccounts();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            {accounts.slice(0, displayCount).map((user) => (
                <AccountItem key={`${user.id}-${user.nickname}`} data={user} />
            ))}
            {(accounts.length > PAGE_SIZE || hasMore) && (
                <p className={cx('more-btn')} onClick={loading ? undefined : handleToggleList}>
                    {loading ? 'Loading...' : !hasMore && displayCount >= accounts.length ? 'See less' : 'See more'}
                </p>
            )}
        </div>
    );
}
SuggestedAccounts.propTypes = {
    label: PropTypes.string.isRequired,
};
export default SuggestedAccounts;
