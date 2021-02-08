import React from "react";
import {firestore} from './firebase/connect';
import {useState, useEffect} from 'react';

export default function Thanks(){
    const [totalTime, setTotalTime] = useState(0);

    useEffect(() => {
        let time = 0;
        const collection = firestore.collection('members').get();
        collection.then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                time = doc.data().count + time;
            });
            setTotalTime(Math.floor(time/60));
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });
    }, [])

    return(
        <>
            <h2>Thank You !!</h2>
            <h4>Total district contribution : {totalTime} Hours</h4>
        </>
    )
};