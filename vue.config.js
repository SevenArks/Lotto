// vue.config.js

/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
 module.exports = {
    //option
    //Basic path
    publicPath : process.env.NODE_ENV === 'production' ? './' : '/',
    //Output directory at build time
    outputDir: 'dist',
    //Set directory for static resources
    assetsDir: 'static',
    //Output path of html
    indexPath: 'index.html',
    //File name hash
    filenameHashing: true,
    
}