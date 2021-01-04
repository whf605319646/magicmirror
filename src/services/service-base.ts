import flagwind from "@egova/flagwind-core";
import { ApplicationContext } from "@/application";
import axios, {  } from "axios";
/**
 * 业务服务基类。
 * @abstract
 * @class
 * @version 1.0.0
 */
export default abstract class ServiceBase {
    protected url(url: string): string {
        return url;
    }

    /**
     * 获取当前应用的上下文实例。
     * @protected
     * @property
     * @returns ApplicationContext
     */
    protected get applicationContext(): ApplicationContext {
        return flagwind.Application.context as any;
    }

    /**
     * 发送post请求
     * @param url 请求地址
     * @param data 发送的参数
     */
    protected _post<T>(url: string, data?: any): Promise<T> {
        return axios.post(this.url(url), data).then(res => res.data);
    }

    /**
     * 发送get请求
     * @param url 请求地址
     */
    protected _get<T>(url: string): Promise<T> {
        return axios.get(this.url(url)).then(res => res.data);
    }

    /**
     * 发送put请求
     * @param url 请求地址
     * @param data 请求参数
     */
    protected _put<T>(url: string, data?: any): Promise<T> {
        return axios.put(this.url(url), data).then(res => res.data);
    }

    /**
     * 发送delete请求 请求地址
     * @param url
     */
    protected _delete<T>(url: string): Promise<T> {
        return axios.delete(this.url(url)).then(res => res.data);
    }
    /**
     * 导出数据
     * @param url
     * @param data
     */
    protected _export(url: string, data?: any): Promise<any> {
        return axios
            .post(this.url(url), data, {
                headers: {
                    "X-Requested-With": "XMLHttpRequest",
                    "Content-Type": "application/json; charset=UTF-8",
                    "Access-Control-Allow-Origin": "*"
                },
                responseType: "arraybuffer"
            })
            .then((res: any) => {
                let blob = new Blob([res.data], {
                    type: "application/vnd.ms-excel"
                });
                let objectUrl = URL.createObjectURL(blob);
                window.location.href = objectUrl;
            });
    }
}
