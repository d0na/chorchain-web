import ChorModeler from "chor-js/lib/Modeler";
import emptyDiagram from "../../model/EmptyDiagram.bpmn";
import React, {useEffect} from "react";
import PropertiesView from "./PropertiesPanel/PropertiesView";
import {renderModel} from "./actions";
import {ActionMenu} from "./ActionMenu";

export function Editor() {

    const modeler = new ChorModeler();

    useEffect(() => {
        // use as ComponentDidMount
        // wait for the div '#canvas' has been rendered and then attach the chor-js editor with an emptyDiagram
        modeler.attachTo('#canvas');
        renderModel(modeler, emptyDiagram);
    });

    return (
        <>
            <ActionMenu modeler={modeler}/>
            <div id="canvas" style={{height: 500, border: '1px solid grey'}}/>
            <PropertiesView modeler={modeler}/>
        </>
    )
}

