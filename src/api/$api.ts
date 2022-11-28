import { getDocs, collection, addDoc, doc, deleteDoc} from "firebase/firestore"
import { IManga } from "../types/types"
import { db } from "../store/store"


export const fetchAllManga = async (setManga : Function, setLoading: Function) => {
    const data= await getDocs(collection(db, 'manga'))
    const dataList  = [] as IManga[]
    data.forEach(item => {
        dataList.push({
            id: item.id,
            title: item.data().title,
            img: item.data().img,
            rating: item.data().rating,
            description: item.data().description,
            review: item.data().review
        } as IManga)
    })
    setManga(dataList)
    setLoading(false)

}

export const fetchCurrentManga = async (id : string | undefined,  setLoading : Function) => {
    setLoading(true)
    const data  = await getDocs(collection(db, 'manga'))
    let currentManga = {} as IManga

     data.forEach(item => {
        if(item.id === id) {
            currentManga = {
                id: item.id,
                title: item.data().title,
                img: item.data().img,
                rating: item.data().rating,
                description: item.data().description,
                review: item.data().review
            }
        }
    })
    setLoading(false)
    return currentManga
}

export const updateManga = async(manga : IManga) => {
    try {
        await deleteDoc(doc(db, 'manga', manga.id))
        const updateManga = {
            img: manga.img,
            title: manga.title,
            rating: manga.rating,
            description: manga.description,
            review: manga.review
        }
        const data = await addDoc(collection(db, 'manga'), updateManga)
        return data
        
    } catch (error) {
        console.log(error)
    }
}
