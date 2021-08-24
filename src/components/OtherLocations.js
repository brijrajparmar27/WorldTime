import { useContext } from "react";
import { DateTimeContext } from "../DateTimeContext";
import LocationCard from "./LocationCard";

const OtherLocations = ()=>{

    const [locationData, setLocationData] = useContext(DateTimeContext);

    return(
        <>
        {
            (locationData.length>0) && <div className="otherlocations">
                <div className="bruh">
                <hr/>
                <div className="locationlist">
                {
                    locationData.map((location,idx)=>{
                        return <LocationCard data={location} key={idx}/>
                    })
                }
                </div>
                </div>
            </div>
        }
        </>
    );
}

export default OtherLocations;