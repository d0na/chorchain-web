module.exports = {
    module: {
        rules: [
            {
                test: /\.bpmn$/i,
                use: 'raw-loader',
            },
        ],
    },
};