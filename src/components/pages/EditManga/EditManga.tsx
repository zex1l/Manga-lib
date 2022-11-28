import {useState, useEffect, FormEvent} from 'react'
import { useParams, useNavigate } from 'react-router-dom';

import { IManga } from '../../../types/types';
import { fetchCurrentManga, updateManga } from '../../../api/$api';

import './EditManga.scss'

const EditManga = () => {
    const [editManga, setEditManga] = useState({} as IManga)
    const [loading, setLoading] = useState(false)
    const {id} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        fetchCurrentManga(id, setLoading)
            .then(res => setEditManga(res))
    }, [])

    const inSubmitEditManga = (e : FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        updateManga(editManga)
            .then(res => navigate(`/manga/${res?.id}`))
    }


    return (
        <div className="edit">
            <div className="container">
                {!loading && (
                    <form className="edit__form" onSubmit={e =>inSubmitEditManga(e)}>
                        <input 
                                type="text" 
                                name={editManga.img}
                                value={editManga.img}
                                onChange={e => setEditManga({...editManga, img: e.target.value})}
                            />
                        <input 
                                type="text" 
                                name={editManga.title}
                                value={editManga.title}
                                onChange={e => setEditManga(editManga => ({...editManga, title: e.target.value}))}
                            />
                        <textarea
                                rows={10}
                                cols={37}
                                name={editManga.description}
                                value={editManga.description}
                                onChange={e => setEditManga(editManga => ({...editManga, description: e.target.value}))}
                            />
                        <input 
                                type="text" 
                                name={editManga.rating}
                                value={editManga.rating}
                                onChange={e => setEditManga(editManga => ({...editManga, rating: e.target.value}))}
                            />
                        <input 
                                type="text" 
                                name={editManga.review}
                                value={editManga.review}
                                onChange={e => setEditManga(editManga => ({...editManga, review: e.target.value}))}
                            />
                        <button>Отредактировать</button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default EditManga;