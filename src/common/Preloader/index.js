import React from 'react';
import stylePreloader from './Preloader.module.css';
import loadingImg from '../../assets/image/loading.gif';

const Preloader = () => {
    return (
        <div className={stylePreloader.preloader}>
            <img src={loadingImg} alt="" />
        </div>
    )
}

export default Preloader;