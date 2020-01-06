import config from '../../package.json'
function routerUrl(pageName) {
    // ./detail.html
    // 开发环境 ./Detail
    // process.env.NODE_ENV 不生效
    if (config.production) {
        return './' + pageName + '.html';
    } else{
        return './' + pageName;
    }
}
export default routerUrl;