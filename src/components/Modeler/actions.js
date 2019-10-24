/*
 *  Render a model
 */
export function renderModel(modeler, newXml) {
    console.log("Render model ",)
    modeler.importXML(newXml)
        .then(function (result) {
            modeler.get('canvas').zoom('fit-viewport');
        }).catch(function (error) {
        console.error('something went wrong: ', error);
    });
}


/*
    ???
 */
export function setEncoded(link, name, data) {
    var encodedData = encodeURIComponent(data);
    if (data) {
        link.addClass('active').attr({
            'href': 'data:application/bpmn20-xml;charset=UTF-8,' + encodedData,
            'download': name
        });
    } else {
        link.removeClass('active');
    }
}

/*
    Save a XML (BPMN) diagram
 */
export function saveDiagram(modeler, done) {
    modeler.saveXML({format: true}, function (err, xml) {
        done(err, xml);
    });
}