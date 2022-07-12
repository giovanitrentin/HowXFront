//const { defineConfig } = require('@vue/cli-service')
//module.exports = defineConfig({
//  transpileDependencies: [
//    'vuetify'
//  ]
//})

//module.exports = {
//  devServer: {
//  proxy: '*',
//  }
//}

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/my-project/'
    : '/'
}

const trajectory = path.resolve();

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(trajectory, "/dist")));
    app.get("*", (req, res) =>
        res.sendFile(path.resolve(trajectory, "dist", "index.html"))
    );
}