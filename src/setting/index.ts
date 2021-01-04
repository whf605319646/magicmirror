export const debug = process.env.NODE_ENV === "development";
export const global = <any>window;
const assetsUrl = `${location.protocol}//${location.host}`.replace(/\/$/, "");

/**
 * 项目配置
 */
export const webSetting = {

    /* 后端接口地址（必填） */
    serviceUrl: "http://www.egova.top:2133",

    /* 前端包路径（必填，如果在根路径下可不填）*/
    assetsUrl,

    /* 前端文件路径 */
    get pluginsUrl(): string {
        return `${this.assetsUrl}/static/projects/${this.projectName}`;
    },

    /* 服务端文件路径（在服务器上，与webapp文件夹同级）*/
    get filesUrl(): string {
        return `${this.serviceUrl}/files`;
    },

    /* sock地址 */
    sockjsUrl: "http://www.egova.top:2133/stomp-websocket",

    ...global.webSetting
};