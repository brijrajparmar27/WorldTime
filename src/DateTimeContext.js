import { createContext, useState} from "react";

const DateTimeContext = createContext();

const DateTimeProvider = (props)=>{
    const [locationData, setLocationData] = useState([]);
    return(
        <DateTimeContext.Provider value={[locationData, setLocationData]}>
            {props.children}
        </DateTimeContext.Provider>
    );
}

export {DateTimeContext,DateTimeProvider};
