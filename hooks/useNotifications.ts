import { db } from "@/lib/database/firebase";
import {  NotificationProps } from "@/types/Types"
import { useUser } from "@clerk/nextjs";
import { collection, DocumentData, onSnapshot, query, QuerySnapshot, where } from "firebase/firestore";
import { useEffect, useState } from "react"

export const useFetchNotifications = ()=>{
    const [notis, setNotis] = useState<NotificationProps[]>([]);
    const {user, isLoaded} = useUser();

    useEffect(()=>{
        if(!isLoaded) return;
        if(user){
            const q = query(collection(db, 'Notifications'), where('userId', '==', user?.id));
            const unsubscribe = onSnapshot(q, (snapshot:QuerySnapshot<DocumentData>)=>{
                const list:NotificationProps[] = [];
                snapshot.forEach((doc)=>{
                    const order = {id:doc.id, ...doc.data()} as NotificationProps;
                    list.push(order);
                })
                setNotis(list);
            })

            return ()=>unsubscribe();
        }
    },[user, user?.id, isLoaded])

    return {notis}
}