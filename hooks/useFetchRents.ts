'use client'
import { db } from "@/lib/database/firebase";
import { IRent } from "@/types/Types"
import { useUser } from "@clerk/nextjs";
import { collection, DocumentData, onSnapshot, query, QuerySnapshot, where } from "firebase/firestore";
import { useEffect, useState } from "react"

export const useFetchRents = ()=>{
    const [rents, setRents] = useState<IRent[]>([]);

    useEffect(()=>{
        const q = collection(db, "Rents");
        const unsubscribe = onSnapshot(q, (snapshot: QuerySnapshot<DocumentData>) => {
            const lists:IRent[] = [];
            snapshot.forEach((doc)=>{
                const rent = {id:doc.id, ...doc.data()} as IRent;
                lists.push(rent);
            });
            setRents(lists);
        });

        return ()=>unsubscribe();
    },[]);

    return {rents}
}

export const useFetchUserRents = ()=>{
    const [userRents, setUserRents] = useState<IRent[]>([]);
    const {user, isLoaded} = useUser();

    useEffect(()=>{
        if(!isLoaded) return;
        if(user){
            const q = query(collection(db, "Rents"), where('userId', '==', user?.id));
            const unsubscribe = onSnapshot(q, (snapshot: QuerySnapshot<DocumentData>) => {
                const lists:IRent[] = [];
                snapshot.forEach((doc)=>{
                    const rent = {id:doc.id, ...doc.data()} as IRent;
                    lists.push(rent);
                });
                setUserRents(lists);
            });
    
            return ()=>unsubscribe();

        }
    },[isLoaded, user, user?.id]);

    return {userRents}
}