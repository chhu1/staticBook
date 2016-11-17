import pureRender from 'pure-render-decorator';
import React, { Component, PropTypes } from 'react';

import './bottomNav.scss';

@pureRender
class BottomNav extends Component {
    render() {
        const { activeBottomNav, changeBottomNav } = this.props;
        const navData = [{
            key: 'discovery',
            text: '发现',
            imgSrc: require('../../../static/images/discovery.png'),
            activeImgSrc: require('../../../static/images/discovery_active.png')
        }, {
            key: 'news',
            text: '资讯',
            imgSrc: require('../../../static/images/news.png'),
            activeImgSrc: require('../../../static/images/news_active.png')
        }, {
            key: 'mine',
            text: '我的',
            imgSrc: require('../../../static/images/mine.png'),
            activeImgSrc: require('../../../static/images/mine_active.png')
        }];
        return (
            <section className="bottom-nav">
                {
                    navData.map((item) => {
                        let { key, text, imgSrc, activeImgSrc } = item;
                        if (activeBottomNav == key) {
                            return (
                                <div key={key} className="nav-item active" data-param={key} onClick={changeBottomNav}>
                                    <img src={activeImgSrc} />
                                <p>{text}</p>
                                </div> 
                            );
                        }
                        return (
                            <div key={key} className="nav-item" data-param={key} onClick={changeBottomNav}>
                                <img src={imgSrc} />
                            <p>{text}</p>
                            </div> 
                        );
                    })
                }
            </section>
        );
    }
}

export default BottomNav;
