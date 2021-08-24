import { format } from "date-fns";
import { useContext } from "react";
import { DateTimeContext } from "../DateTimeContext";
import Morning from "../images/morning.png";
import Aftrenoon from "../images/afternoon.png";
import Evening from "../images/evening.png";
import Night from "../images/night.png";

const LocationCard = (props) => {
    const timestamp = props.data.datetime.substring(0, 26);
    const timezone = props.data.timezone;

    const [locationData, setLocationData] = useContext(DateTimeContext);

    const del = () => {
        const newArray = locationData.filter((data) => {
            return data.timezone !== timezone;
        });

        setLocationData(newArray);
    };

    const gettimeofday = () => {
        const hrs = new Date(Date.parse(timestamp)).getHours();
        if (6 <= hrs && hrs <= 11) {
            return Morning;
        } else if (12 <= hrs && hrs <= 16) {
            return Aftrenoon;
        } else if (17 <= hrs && hrs <= 20) {
            return Evening;
        } else if ((21 <= hrs && hrs <= 24) || (0 <= hrs && hrs <= 5)) {
            return Night;
        }
    };

    return (
        <>
            {props.data && (
                <div className="card" onClick={del}>
                    <div className="content">
                        <p className="place">
                            {timezone.slice(
                                timezone.indexOf("/") + 1,
                                timezone.length
                            )}
                        </p>
                        <p className="time">
                            {format(new Date(Date.parse(timestamp)), "h:m a")}
                        </p>
                        <p className="date">
                            {format(new Date(timestamp), "EEEE, do LLL.")}
                        </p>
                    </div>

                    <div className="contain">
                        <div className="gradient"></div>
                        <img src={gettimeofday()} alt="" />
                    </div>
                </div>
            )}
        </>
    );
};
export default LocationCard;
