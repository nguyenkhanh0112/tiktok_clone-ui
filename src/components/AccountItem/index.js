import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

function AccountItem({ Children }) {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/b5c8dcc9620977d83f0ee8366dd3f8aa~tplv-tiktokx-cropcenter:300:300.webp?dr=14577&refresh_token=741b09c6&x-expires=1761865200&x-signature=gI0%2BesVEixYJtarbVoV1dIPhiOk%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=c1333099&idc=sg1"
                alt="Hoa"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Hoa</span>
                </h4>
                <span className={cx('userName')}>nguyenvankhanh</span>
                <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
            </div>
        </div>
    );
}
export default AccountItem;
