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
            setTotalTime(time);
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });
    }, [])

    return(
        <>
            <h1>
                <svg aria-hidden="true" focusable="false" data-prefix="fad" data-icon="praying-hands" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className="thanks-icon"><g className="fa-group"><path fill="currentColor" d="M640 384v96c0 10.82-8.52 32-32 32a32.16 32.16 0 0 1-8.06-1l-179.19-46.65A117.32 117.32 0 0 1 336 352V224a32 32 0 0 1 64 0v80a16 16 0 0 0 32 0v-76.54a95.86 95.86 0 0 0-13.69-49.39L340.56 48.48a31.8 31.8 0 0 1 53.27-34.7c.2.24.61.21.79.48l117.26 175.89A95.66 95.66 0 0 1 528 243.38v80.23l90.12 30A32 32 0 0 1 640 384z" className="fa-secondary"></path><path fill="currentColor" d="M32 511.92c-23.48 0-32-21.18-32-32v-96a32 32 0 0 1 21.88-30.35l90.12-30V243.3a95.66 95.66 0 0 1 16.12-53.23l117.26-175.9c.17-.27.59-.25.79-.48a31.8 31.8 0 0 1 53.27 34.7L221.69 178A95.86 95.86 0 0 0 208 227.37v76.55a16 16 0 1 0 32 0v-80a32 32 0 1 1 64 0v128a117.35 117.35 0 0 1-84.75 112.35L40.06 510.89a32 32 0 0 1-8.06 1.03z" className="fa-primary"></path></g></svg>
            </h1>
            <h2>Total district contribution</h2>
            <div className='total-count'>{totalTime}</div>
            <h2>Minutes</h2>
        </>
    )
};