class endWebpackPlugin {
    constructor(onEnd, onErr) {
        this.onEnd = onEnd
        this.onErr = onErr
    }
    apply(compiler) {
        compiler.plugin('done', (stats) => {
            this.onEnd(stats)
        })
        compiler.plugin('failed', (stats) => {
            this.onErr(stats)
        })
    }
}
module.exports = endWebpackPlugin