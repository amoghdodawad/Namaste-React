// import { useState } from "react";
const useOnlineStatus = () =>{
    // const [onlineStatus,setOnlineStatus] = useState(true);
    let onlineStatus = true;
    window.addEventListener('offline',()=>{
        // setOnlineStatus(false);
        onlineStatus = false;
    })
    window.addEventListener('online',()=>{
        // setOnlineStatus(true);
        onlineStatus = true;
    })
    return onlineStatus;
}

export default useOnlineStatus;