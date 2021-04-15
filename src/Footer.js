import Counter from './Counter';
import {useState} from 'react';

function Footer() {

    const [networkStatus, setNetworkStatus] = useState(navigator.onLine);

    window.addEventListener("load", () => {
        setNetworkStatus(navigator.onLine);
        
        window.addEventListener("online", () => {
            setNetworkStatus(true);
        });
        
        window.addEventListener("offline", () => {
            setNetworkStatus(false);
        });
    });


    return (
        <>
            {!networkStatus && <div className="no-internet white-font">Please check your internet connection.</div>}
            <div className="app-footer white-font">
                <span className="dates">6th April to 31st May 2021</span>
                <span className="counter"><Counter></Counter></span>
            </div>
        </>
    )
}

export default Footer;