import Layout from "../../common/Layout/Layout";

import './Main.scss'
import starIcon from '../../../img/icons/star.svg'

const Main = () => {
    return (
        <Layout>
            <div className="main">
                <div className="main__inner">
                    <div className="main__title">
                        <h2>Каталог прочитанных мной манг</h2>
                        <div className="title__text">
                            Если хочешь узнать что я хочу прочитать, то кликай <span>сюда</span>
                        </div>
                    </div>
                    <div className="main__items">
                        <div className="main__item">
                            <img src="https://mangalib.me/uploads/cover/toukyou-revengers/cover/UaOZBySPdkJU_250x350.jpg" alt="manga img" />
                            <div className="item__title">Токийские мстители</div>
                            <div className="item__rating">
                                <span>5</span>
                                <img height={24} width={24} src={starIcon} alt="" />
                            </div>
                        </div>
                        <div className="main__item">
                            <img src="https://mangalib.me/uploads/cover/toukyou-revengers/cover/UaOZBySPdkJU_250x350.jpg" alt="manga img" />
                            <div className="item__title">Токийские мстители</div>
                            <div className="item__rating">
                                <span>5</span>
                                <img height={24} width={24} src={starIcon} alt="" />
                            </div>
                        </div>
                        <div className="main__item">
                            <img src="https://mangalib.me/uploads/cover/toukyou-revengers/cover/UaOZBySPdkJU_250x350.jpg" alt="manga img" />
                            <div className="item__title">Токийские мстители</div>
                            <div className="item__rating">
                                <span>5</span>
                                <img height={24} width={24} src={starIcon} alt="" />
                            </div>
                        </div>
                        <div className="main__item">
                            <img src="https://mangalib.me/uploads/cover/toukyou-revengers/cover/UaOZBySPdkJU_250x350.jpg" alt="manga img" />
                            <div className="item__title">Токийские мстители</div>
                            <div className="item__rating">
                                <span>5</span>
                                <img height={24} width={24} src={starIcon} alt="" />
                            </div>
                        </div>
                        <div className="main__item">
                            <img src="https://mangalib.me/uploads/cover/toukyou-revengers/cover/UaOZBySPdkJU_250x350.jpg" alt="manga img" />
                            <div className="item__title">Токийские мстители</div>
                            <div className="item__rating">
                                <span>5</span>
                                <img height={24} width={24} src={starIcon} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Main;