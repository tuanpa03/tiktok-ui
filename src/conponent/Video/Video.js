import { AiFillHeart } from 'react-icons/ai';
import { FaCommentDots } from 'react-icons/fa6';
import { FaBookmark, FaShare } from 'react-icons/fa';

import classNames from 'classnames/bind';

import image from '~/assets/images/no-image.png';
import video from '~/assets/video/video.mp4';
import Image from '~/conponent/Image';
import Button from '~/conponent/Button';

import styles from './video.module.scss';
const cx = classNames.bind(styles);

const Video = () => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('follow-acc')}>
                <Button>Theo dõi</Button>
            </div>
            <div className={cx('col-left')}>
                <Image className={cx('avatar')} src={image} alt="avatar" />
            </div>
            <div className={cx('col-center')}>
                <div className={cx('accounts')}>
                    <div className={cx('name')}>tuanpa2k2@gmail.com</div>
                    <div className={cx('descriptions')}>
                        Xin name trận solo hay hơn trận này 😍 #anime #onepiece #luffy #luffyvskaido #highlightsanime
                        #abcxyz VỞ KỊCH CỦA EM. HỒ PHONG AN. HUYN REMIX - BD Media Music
                    </div>
                </div>
                <div className={cx('video-c')}>
                    <video src={video} />
                </div>
            </div>
            <div className={cx('col-right')}>
                <div className={cx('heart')}>
                    <div className={cx('icon')}>
                        <AiFillHeart />
                    </div>
                    <div className={cx('views')}>100M</div>
                </div>
                <div className={cx('comment')}>
                    <div className={cx('icon')}>
                        <FaCommentDots />
                    </div>
                    <div className={cx('views')}>20M</div>
                </div>
                <div className={cx('save')}>
                    <div className={cx('icon')}>
                        <FaBookmark />
                    </div>
                    <div className={cx('views')}>5M</div>
                </div>
                <div className={cx('share')}>
                    <div className={cx('icon')}>
                        <FaShare />
                    </div>
                    <div className={cx('views')}>30M</div>
                </div>
            </div>
        </div>
    );
};

export default Video;
