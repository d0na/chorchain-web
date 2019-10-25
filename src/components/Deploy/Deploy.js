import {ModelList} from "./ModelList";
import React from "react";
import useAxios from "axios-hooks";

export function Deploy() {


    const [{data, loading, error, response}, refetch] = useAxios(
        {url: 'api/getModels', method: 'POST'}
    )
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error! {JSON.stringify(error)}</p>

    return (
        <div>
            <Description/>
            <strong>{'TODO - Insert an input field to perfom a model search'}</strong>
            <ModelList dataSource={data}/>
            {console.log(" ss", data)}
        </div>
    );
}



const Description = () =>{
    return(
        <div>
            <h1>Model list</h1>
            <p>Explanation here</p>
        </div>
    )
}