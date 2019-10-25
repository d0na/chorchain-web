import {ModelList} from "./ModelList";
import React from "react";

export function Deploy() {
    const listData = [];
    for (let i = 0; i < 23; i++) {
        listData.push({
            // href: 'http://ant.design',
            title: `Model name ${i}`,
            avatar: 'https://avatars3.githubusercontent.com/u/6481734?s=200&v=4',
            description:
                'Model description added in the mongo DB //TODO',
            // content:
            //     'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
        });
    }

    return (
        <ModelList dataSource={listData}/>
    );
}