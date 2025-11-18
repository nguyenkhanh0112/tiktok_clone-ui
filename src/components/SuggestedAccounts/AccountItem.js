import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import Image from '~/components/Images/Images';
import AccountPreview from './AccountPreview';
const cx = classNames.bind(styles);
function AccountItem() {
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview />
                </PopperWrapper>
            </div>
        );
    };
    return (
        <div>
            <Tippy interactive={true} delay={[800, 0]} offset={[-20, 0]} placement="bottom" render={renderPreview}>
                <div className={cx('account-item')}>
                    {/* <Image
                        src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/7324740234892017665~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=4e5e9bac&x-expires=1763607600&x-signature=oun%2F70t80KapvqU1yID8aBWWu5s%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my2"
                        alt=""
                    /> */}
                    <img
                        className={cx('avatar')}
                        src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/7324740234892017665~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=4e5e9bac&x-expires=1763607600&x-signature=oun%2F70t80KapvqU1yID8aBWWu5s%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my2"
                        alt="nguyenvankhanh"
                    />
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>nguyenvankhanh</strong>
                            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                        </p>
                        <p className={cx('name')}>Nguyễn Văn Khánh</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}
AccountItem.prototype = {};

export default AccountItem;
