import { useEffect, useState } from 'react'
import { getFullPathAsset } from '../../utils'
import ImageComponent from '../common/Image'
import styles from './Index.module.scss'

const ScrollButton = () => {
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if(scrolled > 300){
            setVisible(true);
        } else if (scrolled <= 300){
            setVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisible);
        return () => window.removeEventListener('scroll', toggleVisible);
    });

    return (
        <div className={styles.scroll_btn}>
            <div 
                onClick={scrollToTop}
                style={{display: visible ? 'inline' : 'none'}}
            >
                <ImageComponent 
                    src={getFullPathAsset('images/scroll_btn.png')}
                />
            </div>
        </div>
    )
}

export default ScrollButton