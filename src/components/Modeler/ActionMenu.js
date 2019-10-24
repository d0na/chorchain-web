import {Button, Modal,  notification, Spin, Upload, Icon} from "antd";
import React, {useState} from "react";
import {renderModel, saveDiagram, setEncoded} from "./actions";
import emptyDiagram from "../../model/EmptyDiagram.bpmn";
import $ from "jquery"; //TODO capire se jquery è necessario e nel caso rimuoverlo dalle dipendenze se NO

const {confirm} = Modal;

export function ActionMenu({modeler}) {

    const acceptedFile = ".bpmn, .xml"
    const [loading, setLoading] = useState(false);


    //ToDO cambiare in moddale ed inserire un edit per specificare il nome del file.
    const uploadModelToServer = (modeler, filename) => {
        confirm({
            title: 'Upload model to the remote server',
            content: 'If you click the OK button the current model will be uploaded to the remote server.',
            onOk() {
                var fileXml;
                modeler.saveXML({format: true}, function (err, xml) {
                    setLoading(true);
                    console.log("xml file ", xml)
                    fileXml = xml;
                });

                fetch(`api/saveModel/aaa/5dadb861b7f056dc17e24a25`, {
                    method: 'POST',
                    body: fileXml
                })
                    .then(res => {
                        console.log("File uploaded ", res);
                        setLoading(false);
                        fileUploaded();
                    })
            },


            onCancel() {
            },
        });
    };

    return (
        <>
            <Button value="new" icon='form' onClick={() => newModel(modeler)}>New</Button>
            <Upload
                accept={acceptedFile}
                showUploadList={false}
                beforeUpload={file => {
                    const reader = new FileReader();

                    reader.onload = e => {
                        setLoading(true);
                    };

                    reader.addEventListener('load', function () {
                        setLoading(false);
                        const newXml = reader.result;
                        console.log("Imported new model");
                        renderModel(modeler, newXml);
                        // exportArtifacts();
                    }, false);

                    reader.readAsText(file);
                    // Prevent upload
                    return false;
                }}
            >
                <Button value="import" icon='import'>Import</Button>

            </Upload>
            <Button value="export" disabled={true} icon='export'>Export</Button>
            <Button value="save_svg" disabled={true} icon='file-image'>Save Svg</Button>
            <Button value="save" icon='upload' onClick={() => uploadModelToServer(modeler, 'aaaa')}>Upload</Button>
            {
                loading && <div className="spinner">
                    <Spin tip="Loading..."/>
                </div>
            }
        </>
    )
}


const fileUploaded = () => {
    notification.success({
        message: 'File uploaded',
        description:
            'The file .... has been correclty uploaded to the server and ready to be processed.',
        icon: <Icon type="smile" style={{ color: '#108ee9' }} />,
    });
};

const newModel = (modeler) => {
    confirm({
        title: 'New model',
        content: 'If you click the OK button the current model will be deleted',
        onOk() {
            console.log("Create new model ");
            renderModel(modeler, emptyDiagram)
        },
        onCancel() {
        },
    });
};

const createModel = (modeler) => {
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

const saveModel = (modeler) => {
    var downloadLink = $('#js-download-diagram');
    confirm({
        title: 'Save a model',
        content: 'If you click the OK button the current model will be saved.',
        onOk() {
            console.log("Saving XML .. ",)
            saveDiagram(modeler, function (err, xml) {
                setEncoded(downloadLink, 'diagram.bpmn', err ? null : xml);
            });
        },
        onCancel() {
        },
    });
};


const saveModelSvg = (modeler) => {
    confirm({
        title: 'Save a .svg model',
        content: 'If you click the OK button the current model will be saved ina svg format.',
        onOk() {
            //TODO generate a new bpm model
        },
        onCancel() {
        },
    });
};

const exportModel = (modeler) => {
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