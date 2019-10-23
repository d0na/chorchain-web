const proxy = require('http-proxy-middleware');
module.exports = function(app) {
    app.use(
        '/api',
        proxy({
            target: 'http://localhost:8888/ChorChain_war_exploded',
            pathRewrite: {
                '^/api': '/rest',
            },
            changeOrigin: true,
            logLevel: 'debug',
        })
    );
};
