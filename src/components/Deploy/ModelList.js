import React, {useState} from "react";
import {Avatar, Button, Descriptions, Divider, Drawer, Empty, Icon, List, Modal} from "antd";

export function ModelList({dataSource}) {

    const [showModelDetail, setShowModelDetail] = useState(false);
    const [model, setModel] = useState([]);
    const [showCreateInstance, setShowCreateInstance] = useState(false);

    return (
        <>
            <List
                itemLayout="vertical"
                // size="normal"
                pagination={{
                    onChange: page => {
                        console.log(page);
                    },
                    pageSize: 5,
                }}
                dataSource={dataSource}
                // footer={
                //     <div>
                //         <b>ant design</b> footer part
                //     </div>
                // }
                renderItem={item => (
                    <List.Item
                        style={{marginLeft: 20, marginRight: 20}}
                        key={item.title}
                        actions={[
                            <span onClick={
                                () => {
                                    setModel(item);
                                    setShowCreateInstance(true);
                                }
                            }><IconText type="tool" text="Create new instance" key="list-vertical-tool"/>
                            </span>,
                            <IconText type="profile" text={`Instances ${item.instances.length}`}
                                      key="list-vertical-eye"/>,
                            <IconText type="delete" text="Delete" key="list-vertical-delete"/>,
                        ]}
                        extra={
                            <img
                                width={200}
                                alt="logo"
                                src="preview_example.png"
                            />
                        }
                    >
                        <List.Item.Meta
                            avatar={<Avatar src={'https://avatars3.githubusercontent.com/u/6481734?s=200&v=4'}/>}
                            title={<span style={{cursor: 'pointer'}}
                                         onClick={
                                             () => {
                                                 setModel(item);
                                                 setShowModelDetail(true);
                                             }}
                            >
                                {item.name}
                            </span>}
                            description={'Model description added in the mongo DB //TODO'}
                        />
                        <span>
                    <div>Id:<span style={{color: "coral"}}>{item.id}</span></div>
                    <div>User:<span style={{color: "cadetblue"}}>{item.uploadedBy}</span></div>
                    </span>
                    </List.Item>
                )}
            />
            {showModelDetail && <ModelDetail model={model}
                                                    visible={showModelDetail}
                                                    hide={() => setShowModelDetail(false)}

            />}
            {showCreateInstance && <CreateInstance model={model}
                                                   visible={showCreateInstance}
                                                   hide={() => setShowCreateInstance(false)}

            />}
        </>
    )
}

const IconText = ({type, text}) => (
    <span>
    <Icon type={type} style={{marginRight: 8}}/>
        {text}
  </span>
);


function ModelDetail({model, visible, hide}) {
    const [showCreateInstance, setShowCreateInstance] = useState(false);

    console.log("model ", model)
    return (
        <Drawer
            title="Model detail"
            visible={visible}
            onClose={hide}
            width={800}
        >
            <Descriptions title="Model Info" column={2}>
                <Descriptions.Item label="Id">{model.id}</Descriptions.Item>
                <Descriptions.Item label="Created by">{model.uploadedBy}</Descriptions.Item>
                <Descriptions.Item label="Name">{model.name}</Descriptions.Item>
                <Descriptions.Item label="Available roles">
                    <ul>
                        {model.roles && model.roles.map((r, i) => <li key={i}>{r}</li>)}
                    </ul>
                </Descriptions.Item>
                <Descriptions.Item label="Created instances">{model.instances.length}</Descriptions.Item>
            </Descriptions>
            <div style={{float: 'right', margin: 10}}>
                <Button type={'primary'} onClick={() => setShowCreateInstance(true)}>Create instance</Button>
                <Button type={'danger'}>Delete model</Button>
            </div>
            <Divider/>
            <div>
                {model.instances && model.instances.map((i, key) => <InstanceRow data={i} key={key}/>)}
                {model.instances.length === 0 && <Empty description={'No instances'}/>}
            </div>
            {showCreateInstance &&
            <CreateInstance
                model={model}
                visible={showCreateInstance}
                hide={() => setShowCreateInstance(false)}
            />
            }
        </Drawer>
    )
}

function InstanceRow({data}) {
    return (
        <div>id:{data.id}</div>
    )
}


function CreateInstance({model, visible, hide}) {
    console.log("model ", model)
    return (
        <Modal
            title="Create a new model istance"
            visible={visible}
            onOk={hide}
            onCancel={hide}
            width={800}
        >
            dd
        </Modal>
    )
}


