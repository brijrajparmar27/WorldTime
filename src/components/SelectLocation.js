import { useContext, useState } from "react";
import { DateTimeContext } from "../DateTimeContext";
import useFetch from "../hooks/useFetch";

const SelectLocation = () => {
    const continents = ["Africa", "America", "Antarctica", "Asia", "Atlantic", "Australia", "Europe", "Indian", "Pacific"];

    const { data, getData } = useFetch();
    const [areas, setAreas] = useState();
    const [locationData, setLocationData] = useContext(DateTimeContext);

    const continentSelect = async (e) => {
        const selectedcontinent = e.target.value;
        const newData = await getData("https://worldtimeapi.org/api/timezone/" + selectedcontinent);
        setAreas(newData);
    }

    const areaSelect = async (e) => {
        const selectedarea = e.target.value;
        await getData("https://worldtimeapi.org/api/timezone/" + selectedarea)
            .then((newData) => {
                setLocationData(oldData=>[...oldData,newData]);
            })
    }

    return (
        <div className="selectlocation">
            <div className="dropdown">
                <select name="continent" id="continent" onChange={continentSelect}>
                    {
                        continents.map((continent) => {
                            return <option value={continent} key={continent}>{continent}</option>
                        })
                    }
                </select>
                {areas && <select name="areas" id="areas" onChange={areaSelect}>
                    {
                        areas.map((area) => {
                            return <option value={area} key={area}>{area.slice(area.indexOf('/')+1,area.length)}</option>
                        })
                    }
                </select>}
            </div>
        </div>
    );
}

export default SelectLocation