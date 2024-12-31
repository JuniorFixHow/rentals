import { db } from "@/lib/database/firebase";
import { IFavourite } from "@/types/Types"
import { useUser } from "@clerk/nextjs";
import { collection, DocumentData, onSnapshot, query, QuerySnapshot, where } from "firebase/firestore";
import { useEffect, useState } from "react"

export const useFetchFavourites = ()=>{
    const [favourites, setFavourites] = useState<IFavourite[]>([]);
    const {user, isLoaded} = useUser()

    useEffect(()=>{
        if(!isLoaded) return;
        if(user){
            const q = query(collection(db, 'Favourites'), where('userId', '==', user?.id));
            const unsubscribe = onSnapshot(q, (snapshot:QuerySnapshot<DocumentData>)=>{
                const list:IFavourite[] = [];
                snapshot.forEach((doc)=>{
                    const fav = {id:doc.id, ...doc.data()} as IFavourite;
                    list.push(fav);
                })
                setFavourites(list);
            })

            return ()=> unsubscribe();
        }
    },[user, user?.id, isLoaded])

    return {favourites}
}