import { db } from "@/lib/database/firebase";
import { IRent } from "@/types/Types"
import { useUser } from "@clerk/nextjs";
import { collection, DocumentData, onSnapshot, query, QuerySnapshot, where } from "firebase/firestore";
import { useEffect, useState } from "react"

export const useFetchOrders = ()=>{
    const [orders, setOrders] = useState<IRent[]>([]);
    const {user, isLoaded} = useUser();

    useEffect(()=>{
        if(!isLoaded) return;
        if(user){
            const q = query(collection(db, 'Orders'), where('userId', '==', user?.id));
            const unsubscribe = onSnapshot(q, (snapshot:QuerySnapshot<DocumentData>)=>{
                const list:IRent[] = [];
                snapshot.forEach((doc)=>{
                    const order = {id:doc.id, ...doc.data()} as IRent;
                    list.push(order);
                })
                setOrders(list);
            })

            return ()=>unsubscribe();
        }
    },[user, user?.id, isLoaded])

    return {orders}
}