import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";

import Layout from "../../common/Layout/Layout";
import { Imanga } from "../../../types/types";
import { db } from "../../../store/store";

import './Main.scss'
import starIcon from '../../../img/icons/star.svg'


const Main = () => {
    const [manga, setManga] = useState<Imanga[]>()
    const [loading, setLoading] = useState(true)

    const navigate = useNavigate()

    const fetchData = async () => {
        const data= await getDocs(collection(db, 'manga'))
        const dataList  = [] as Imanga[]
        data.forEach(item => {
            dataList.push(item.data() as Imanga)
        })
        setManga(dataList)
        setLoading(false)
    }

    const onNavigateSingleManga  = (id : string) : void => {
        navigate(`/manga/:${id}`)
    }
    useEffect(() => {
        fetchData()
    }, [])

    return (
        <Layout>
            <div className="main">
                <div className="main__inner">
                    <div className="main__title">
                        <h2>Каталог прочитанных мной манг</h2>
                        <div className="title__text">
                            Если хочешь узнать что я буду читать, то кликай <Link to='/manga/future'>сюда</Link>
                        </div>
                    </div>
                    <div className="main__items">
                        {!loading && manga?.map(item => (
                            <div 
                                className="main__item" 
                                key={item.id}
                            >
                                <img src={item.img} alt="manga img" onClick={() => onNavigateSingleManga(item.id)}/>
                                <div className="item__title">{item.title}</div>
                                <div className="item__rating">
                                    <span>{item.rating}</span>
                                    <img height={24} width={24} src={starIcon} alt="" />
                                </div>
                            </div>
                        ))}
                        
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Main;