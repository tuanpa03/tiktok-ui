import className from 'classnames/bind';
import config from '~/config';
import { HomeIcon, LiveIcon, UserGroupIcon } from '~/conponent/Icons';
import SuggestedAccounts from '~/conponent/SuggestedAccounts';
import Menu, { MenuItem } from './Menu';
import styles from './Sidebar.module.scss';

const cx = className.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For Your" to={config.routes.home} icon={<HomeIcon />} />
                <MenuItem title="Following" to={config.routes.following} icon={<UserGroupIcon />} />
                <MenuItem title="Live" to={config.routes.live} icon={<LiveIcon />} />
            </Menu>

            <SuggestedAccounts label="Suggested accounts" />
            <SuggestedAccounts label="Following accounts" />
        </aside>
    );
}

export default Sidebar;
