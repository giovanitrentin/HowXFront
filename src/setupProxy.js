const { createProxyMiddleware } = require('http-proxy-middleware');
const proxy = require('http-proxy-middleware');
module.exports = function(app) {
    app.use(createProxyMiddleware('/api/', // replace with your endpoint
        { target: 'https://howxfront.herokuapp.com' } // replace with your target
    ));
}

const trajectory = path.resolve();

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(trajectory, "/dist")));
    app.get("*", (req, res) =>
        res.sendFile(path.resolve(trajectory, "dist", "index.html"))
    );
}