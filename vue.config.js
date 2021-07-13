module.exports = {
    devServer: {
        host: 'localhost',
        port: 9999
    },
    configureWebpack: {
        resolve: {
            alias: {
                'views': '@/views',
                'public': '@/public',
                'components': '@components'
            }
        }
    }

}