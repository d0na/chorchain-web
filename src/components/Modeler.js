import React, {useEffect} from 'react';
import ChorModeler from 'chor-js/lib/Modeler'
// import Reporter from '../lib/validator/Validator.js';
import emptyDiagram from '../model/EmptyDiagram.bpmn'
import PropertiesView from "./PropertiesPanel/PropertiesView";
import {Icon, Modal, Radio} from 'antd';

const {confirm} = Modal;


export function Modeler() {
    return (
        <div>
            <ModelEditor/>
        </div>
    )
}

export function ModelEditor() {

    const modeler = new ChorModeler();

    function renderModel(newXml) {
        console.log("Render model ",)
        modeler.importXML(newXml)
            .then(function (result) {
                modeler.get('canvas').zoom('fit-viewport');
            }).catch(function (error) {
            console.error('something went wrong: ', error);
        });
    }

    const newModel = () => {
        confirm({
            title: 'New model',
            content: 'If you click the OK button the current model will be deleted',
            onOk() {
                renderModel(emptyDiagram)
            },
            onCancel() {
            },
        });
    };

    const createModel = () => {
        confirm({
            title: 'Create a model',
            content: 'If you click the OK button a new model will be generated.',
            onOk() {
                //TODO generate a new bpm model
            },
            onCancel() {
            },
        });
    };

    const saveModel = () => {
        confirm({
            title: 'Save a model',
            content: 'If you click the OK button the current model will be saved.',
            onOk() {
                //TODO generate a new bpm model
            },
            onCancel() {
            },
        });
    };

    const importModel = () => {
        confirm({
            title: 'Import a model',
            content: 'If you click the OK button the current model will be saved.',
            onOk() {
                //TODO generate a new bpm model
            },
            onCancel() {
            },
        });
    };

    const exportModel = () => {
        confirm({
            title: 'Export a model',
            content: 'If you click the OK button the current model will be saved.',
            onOk() {
                //TODO generate a new bpm model
            },
            onCancel() {
            },
        });
    };

    useEffect(() => {
        // use as ComponentDidMount
        // wait for the div '#canvas' has been rendered and then attach the chor-js editor with an emptyDiagram
        modeler.attachTo('#canvas');
        renderModel(emptyDiagram);
    });

    return (
        <>
            <MenuModeler
                onNewClick={() => newModel()}
                onSaveClick={() => saveModel()}
                onCreateClick={() => createModel()}
                onExportClick={() => exportModel()}
                onImportClick={() => importModel()}
            />
            <div id="canvas" style={{height: 500, border: '1px solid grey'}}/>
            <PropertiesView modeler={modeler}/>
        </>
    )
}


function MenuModeler({onNewClick, onSaveClick, onImportClick, onExportClick, onCreateClick}) {
    return (
        <Radio.Group>
            <Radio.Button value="new" onClick={onNewClick}>New<Icon type="form"/></Radio.Button>
            <Radio.Button value="create" onClick={onCreateClick}>Create<Icon type="plus"/></Radio.Button>
            <Radio.Button value="import" onClick={onImportClick}>Import <Icon type="import"/></Radio.Button>
            <Radio.Button value="export" onClick={onExportClick}>Export <Icon type="export"/></Radio.Button>
            <Radio.Button value="save" onClick={onSaveClick}>Save <Icon type="save"/></Radio.Button>
        </Radio.Group>
    )
}

