import {FC, useState} from 'react';
import { IManga } from '../../../types/types';

import Button from '../Button/Button';

import './CurrentManga.scss'
import StarSvg from '../../../img/icons/star.svg'
import { Link } from 'react-router-dom';

interface ICurrManga {
    manga : IManga
}

const CurrentManga : FC<ICurrManga> = ({manga : {description, id, img, rating, title, review}}) => {
    const [show, setShow] = useState(false)


    return (
        <div className='manga'>
            {id && (
                <div className="manga__inner">
                    <div className="sidebar__img">
                        <img width={250} height={400} src={img} alt="Img manga" />
                        <Link to='/'>Главная</Link>
                    </div>
                    <div className="manga__content">
                        <div className="content__header">
                            <div className="content__title">{title}</div>
                            <div className="content__rating">
                                <span>{rating}</span>
                                <img src={StarSvg} alt="rating manga" />
                            </div>
                        </div>
                        <div className="content__wrapper">
                            <div className="content__description">{description}</div>
                        </div>
                        {
                            !show  ? <Button text='Показать отзыв' onClick={() => setShow(!show)}/>
                            :
                            <div className="content__wrapper ">
                                <div className="content__review">
                                    <div className="review__logo">
                                        <div className='review'>Отзыв</div>
                                        <div className='close'
                                            onClick={() => setShow(!show)}
                                        >
                                            X
                                        </div>
                                    </div>
                                    
                                    {review.length ? <div className="review__content">{review}</div>
                                        :
                                        <div>Отзыв в процессе написания</div>
                                    }
                                        
                                </div>
                            </div>
                        }
                    
                    </div>
                </div>
            )}
        </div>
    );
};

export default CurrentManga;