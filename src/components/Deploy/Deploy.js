import React, {useEffect, useState} from "react";
import ModelList from "./ModelList";
import axios from "axios";
import {Spin} from "antd";

export function Deploy() {


    // const [{data, loading, error, response}, refetch] = useAxios(
    //     {url: 'api2/model', method: 'GET'}
    // )
    // if (loading) return <p>Loading...</p>
    // if (error) return <p>Error! {JSON.stringify(error)}</p>


    const [data, setData] = useState([]);
    const [loading, setLoading] = useState([]);

    useEffect(() => {
        async function fetchData() {
            console.log("fetching... ",)
            setLoading(true);
            await axios.get('api2/model').then((r) => {
                console.log(" r", r);
                setData(r.data)
                setLoading(false);

            });
        }

        fetchData();
    },[]);


    return (
        <div>
            <Description/>
            {loading && <Spin/>}
            <strong>{'TODO - Insert an input field to perfom a model search'}</strong>
            <ModelList dataSource={data}/>
        </div>
    );
}


const Description = () => {
    return (
        <div>
            <h1>Model list</h1>
            <p>Explanation here</p>
        </div>
    )
}