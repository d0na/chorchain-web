import {Button, Input, Modal, notification, Result, Spin, Upload as Import} from "antd";
import React, {useState} from "react";
import {renderModel, saveDiagram, setEncoded} from "./actions";
import emptyDiagram from "../../model/EmptyDiagram.bpmn";
import $ from "jquery";
import axios from "axios"; //TODO capire se jquery è necessario e nel caso rimuoverlo dalle dipendenze se NO

const {confirm} = Modal;

export function ActionMenu({modeler}) {

    const acceptedFile = ".bpmn, .xml"

    const [loading, setLoading] = useState(false);

    const [showInput, setShowInput] = useState(false);
    const [showUploaded, setShowUploaded] = useState(false);
    const [filename, setFilename] = useState(false);
    const [error, setError] = useState({});


    const onChangeInput = (e) => {
        setFilename(e.target.value);
    };

    return (
        <>
            <div>Model actions:</div>
            <Button value="new" icon='form' onClick={() => newModel(modeler)}>New</Button>

            <Import
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
                        notifySuccessfullyImported(file.name);
                        renderModel(modeler, newXml);
                        // exportArtifacts();
                    }, false);

                    reader.readAsText(file);

                    // Prevent upload
                    return false;
                }}
            >
                <Button value="import" icon='import'>Import</Button>

            </Import>

            <Button value="export" disabled={true} icon='export'>Export</Button>
            <Button value="save_svg" disabled={true} icon='file-image'>Save Svg</Button>
            <Button value="save" icon='upload' onClick={() => setShowInput(true)}>Upload</Button>

            {/* Loading Spinner  */}
            {
                loading && <div className="spinner">
                    <Spin tip="Loading..."/>
                </div>
            }

            {/* Notify that the model was uploaded */}
            {
                showUploaded && <Modal
                    title="Model uploaded"
                    visible={showUploaded}
                    onOk={
                        () => {
                            setShowUploaded(false);
                            renderModel(modeler, emptyDiagram);
                        }
                    }
                    onCancel={() => setShowUploaded(false)}
                >
                    <UploadedResult filename={filename}/>
                </Modal>
            }

            {/* Allows to enter a model name before it is uploaded  */}
            {
                showInput && <Modal
                    title="Insert model name"
                    visible={showInput}
                    onOk={
                        () => {
                            var fileXml;
                            modeler.saveXML({format: true}, function (err, xml) {
                                setLoading(true);
                                // console.log("xml file ", xml)
                                fileXml = xml;
                            });


                            // fetch(`api2/model`,
                            //     // fetch(`api/saveModel/${filename}/5dadb861b7f056dc17e24a25`,
                            //     {
                            //         method: 'POST',
                            //         body: JSON.stringify({filename: filename, data: fileXml}),
                            //         headers: {
                            //             'Accept': 'application/json', 'Content-Type': 'application/json'
                            //         }
                            //     })
                            axios.post(`api2/model`,
                                // fetch(`api/saveModel/${filename}/5dadb861b7f056dc17e24a25`,
                                JSON.stringify({filename: filename, data: fileXml}),
                                {
                                    headers: {
                                        'Accept': 'application/json', 'Content-Type': 'application/json'
                                    }
                                })
                                .then(res => {
                                    setLoading(false);
                                    if (res.status == 201) {
                                        console.log("File uploaded ", res);
                                        setShowInput(false);
                                        setShowUploaded(true);

                                    } else {
                                        setError(res.data);
                                        //todo notifica errore
                                    }
                                }).catch((e) => {
                                setLoading(false);
                                setError(e);
                            })

                        }
                    }
                    onCancel={() => setShowInput(false)}
                >
                    <p>If you click the OK button the current model will be uploaded to the remote server ready then to
                        be processed.</p>
                    <label><strong>Model name:</strong></label>
                    {/* TODO: modify in a form component*/}
                    <Input
                        placeholder="exampleDiagram"
                        onChange={onChangeInput}
                        addonAfter=".bpmn"
                    />
                    {error && <div style={{color: 'red'}}>{error.message}</div>}
                </Modal>
            }
        </>
    )
}

function UploadedResult({filename}) {
    const subTitle = <span>{`Model:`} <strong>{filename}.bpmn</strong></span>;
    return (
        <Result
            status="success"
            title="Model successfully uploaded!"
            subTitle={subTitle}
            extra={[
                <Button type="primary" key="console">
                    Process it
                </Button>,
            ]}
        />)
}

const notifySuccessfullyImported = (filename) => {
    const description = <span>{`Model `} <strong>{filename}</strong>  successfully imported</span>;
    notification['success']({
        message: 'Model imported',
        description: description
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