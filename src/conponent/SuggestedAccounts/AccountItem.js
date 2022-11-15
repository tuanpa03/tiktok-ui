import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/conponent/Popper';

import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import PreviewAccount from './PreviewAccount';

const cx = classNames.bind(styles);

function AccountItem() {
    const previewAccountItem = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <PreviewAccount />
                </PopperWrapper>
            </div>
        );
    };

    return (
        <div>
            <Tippy interactive delay={[800, 0]} offset={[-30, 0]} placement="bottom" render={previewAccountItem}>
                <div className={cx('account-item')}>
                    <img
                        className={cx('avatar')}
                        src="https://www.bing.com/th?id=OIP.MpmYBjrTrzejcslqxlWcTwHaHV&w=251&h=248&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
                        alt=""
                    />
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>phianhtuan</strong>
                            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                        </p>
                        <p className={cx('name')}>Phí Anh Tuấn</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

AccountItem.propTypes = {};
export default AccountItem;
