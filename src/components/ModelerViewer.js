import React, {useEffect} from 'react';
import ChorModeler from 'chor-js/lib/Modeler'
// import Reporter from '../lib/validator/Validator.js';
import emptyDiagram from '../model/EmptyDiagram.bpmn'
import PropertiesView from "./PropertiesPanel/PropertiesView";

export function ModelerViewer() {

    const modeler = new ChorModeler();

    function renderModel(newXml) {
        modeler.importXML(newXml)
            .then(function (result) {
                modeler.get('canvas').zoom('fit-viewport');
            }).catch(function (error) {
            console.error('something went wrong: ', error);
        });
    }

    useEffect(() => {
        // use as ComponentDidMount
        // wait for the div '#canvas' has been rendered and then attach the chor-js editor with an emptyDiagram
        modeler.attachTo('#canvas');
        renderModel(emptyDiagram);
    });
    return (
        <>
            <div id="canvas" style={{height: 500}}>
            </div>
            <PropertiesView modeler={modeler}/>
        </>
    )
}