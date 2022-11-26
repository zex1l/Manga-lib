import { getDocs, collection} from "firebase/firestore"
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
