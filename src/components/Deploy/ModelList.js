import React from "react";
import {Avatar, Icon, List} from "antd";

export function ModelList({dataSource}){
    return(
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
                    style={{marginLeft:20,marginRight:20}}
                    key={item.title}
                    actions={[
                        <IconText type="tool" theme="twoTone" text="Deploy" key="list-vertical-star-o" />,
                        <IconText type="delete" text="Delete" key="list-vertical-like-o" />,
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
                        avatar={<Avatar src={item.avatar} />}
                        title={<a href={item.href}>{item.title}</a>}
                        description={item.description}
                    />
                    {item.content}
                </List.Item>
            )}
        />
    )
}

const IconText = ({ type, text }) => (
    <span>
    <Icon type={type} style={{ marginRight: 8 }} />
        {text}
  </span>
);