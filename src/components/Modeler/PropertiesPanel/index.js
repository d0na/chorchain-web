import ReactDOM from 'react-dom';
import React, {useEffect} from 'react';

import PropertiesView from './PropertiesView';
import ChorModeler from "chor-js/lib/Modeler";
import customModdleExtension from "../../../moddle/custom";
import Reporter from "../../../lib/validator/Validator";


export function  PropertiesPanel(props){

    useEffect(() => {
    const pp = new PropertiesView(props.modeler);

    pp.attachTo('#properties-container');

});
return (
    <>
        <div id='properties-container' style={{width: '100%', height: '100%', padding: 10}}/>
    </>
)
}

