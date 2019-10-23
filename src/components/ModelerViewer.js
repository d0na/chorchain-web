import React, {useEffect} from 'react';
import ChorModeler from 'chor-js/lib/Modeler'
// import Reporter from '../lib/validator/Validator.js';
import aa from '../model/NewDiagram.bpmn'
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
        modeler.attachTo('#canvas');
        renderModel(aa);
    });
    return (
        <>
            <div id="canvas" style={{height: 500}}>
                {/*<div id='modeler-container'*/}
                {/*     style={{width: '100%', height: '100%', padding: 10, border: '1px solid grey'}}/>*/}
            </div>
            <PropertiesView modeler={modeler}/>
        </>
    )
}

// export function ModelerViewer2() {
//     const $modelerContainer = document.querySelector('#root');
//     const modeler = new ChorModeler({
//         container: $modelerContainer,
//         moddleExtensions: {
//             custom: customModdleExtension
//         },
//         keyboard: {
//             bindTo: document.body
//         }
//     });
//
// }
