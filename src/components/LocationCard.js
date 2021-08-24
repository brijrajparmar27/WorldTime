import { format } from "date-fns";
import { useContext } from "react";
import { DateTimeContext } from "../DateTimeContext";

const LocationCard = (props)=>{

    const timestamp = props.data.datetime.substring(0,26);
    const timezone = props.data.timezone;

    const [locationData, setLocationData] = useContext(DateTimeContext);

    const del = ()=>{
        
        const newArray = locationData.filter((data)=>{
            return data.timezone !== timezone;
        })

        setLocationData(newArray);

    }

    const gettimeofday = ()  => {
        const hrs = new Date(Date.parse(timestamp)).getHours();
        if(6<=hrs && hrs<=11)
        {
            return("/images/morning.png");    
        }
        else if(12<=hrs && hrs<=16)
        {
            return("/images/afternoon.png");    
        }
        else if(17<=hrs && hrs<=20)
        {
            return("/images/evening.png");    
        }
        else if((21<=hrs && hrs<=24) || (1<=hrs && hrs<=5))
        {
            return("/images/night.png");    
        }
    }

    return(
        <>
            {
                props.data && <div className="card" onClick={del}>

                <div className="content">
                    <p className="place">{timezone.slice(timezone.indexOf('/')+1,timezone.length)}</p>
                    <p className="time">{format(new Date(Date.parse(timestamp)),'h:m a')}</p>
                    <p className="date">{format(new Date(timestamp),'EEEE, do LLL.')}</p>                        
                </div>        

                <div className="contain">
                    <div className="gradient">
                    </div>
                    <img src={gettimeofday()} alt=""/>    
                </div>
                
                </div>

            }
        </>
    )
}
export default LocationCard;