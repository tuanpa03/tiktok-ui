import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import Button from '~/conponent/Button';
import styles from './PreviewAccount.module.scss';

const cx = classNames.bind(styles);

function PreviewAccount() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="https://www.bing.com/th?id=OIP.MpmYBjrTrzejcslqxlWcTwHaHV&w=251&h=248&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
                    alt=""
                />
                <Button primary>Following</Button>
            </div>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>phianhtuan</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>Phí Anh Tuấn</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>8.2M </strong>
                    <span className={cx('label')}>Following</span>
                    <strong className={cx('value')}>8.2M </strong>
                    <span className={cx('label')}>Like</span>
                </p>
            </div>
        </div>
    );
}

export default PreviewAccount;
