import {firestore} from './firebase/connect';
import {useEffect, useState} from "react";

export function useTotalCountHook(){
    const [totalCount, setTotalCount] = useState(0);

    useEffect(() => {
        let time = 0;
        const collection = firestore.collection('members').get();
        collection.then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                time = doc.data().count + time;
            });
            setTotalCount(time);
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });
    }, []);

    return {totalCount};
}