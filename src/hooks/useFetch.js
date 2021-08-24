import { useState } from "react";

const useFetch = () => {

    const [data,setData] = useState();

    const getData = async (url) =>{

        return fetch(url)
            .then((raw)=>{
                return raw.json();
            })
            .then((objdata)=>{
                setData(objdata);
                return objdata;
            })

    }
    return {data, getData};
}

export default useFetch;