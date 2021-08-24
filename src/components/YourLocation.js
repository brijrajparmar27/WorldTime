import { useEffect, useState } from "react";
import LocationCard from "./LocationCard";

const YourLocation = ()=>{

    const [data, setData] = useState();

    useEffect(()=>{
        fetch("https://worldtimeapi.org/api/ip")
        .then((raw)=>{
            return raw.json();
        })
        .then((data)=>{
            setData(data);
        })
    },[])

    return(
        <div className="helper">
            {
                data && <div className="yourlocation">
                    <p className="annot">Your Current Location</p>
                    <LocationCard data={data}/>
                </div>
            }
        </div>
        );
}
export default YourLocation;