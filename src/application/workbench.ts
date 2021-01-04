import flagwind from "@egova/flagwind-core";
import WorkbenchBase = flagwind.WorkbenchBase;
import ApplicationContextBase = flagwind.ApplicationContextBase;
import ApplicationContext from "@/application/context";
import Workspace from "@/application/workspace";

// import { routes } from "../routes";
// import modules from "@/store";

import Vue from "vue";
import Router from "vue-router";
import Vuex from "vuex";
import iView from "view-design";
// 导入系统组件
import components from "@egova/flagwind-web";

// import "@egova/flagwind-web/dist/flagwind-web.css";
import "@/assets/styles/index.scss";
import { EventBusMixin } from "./broadcast";

/**
 * 提供工作台的基本封装。
 * @class
 * @version 1.0.0
 */
export default class Workbench extends WorkbenchBase {
    private _workspace: Workspace | undefined;

    /**
     * 获取当前应用的主工作空间。
     * @property
     * @returns Workspace
     */
    public get workspace(): Workspace | undefined {
        return this._workspace;
    }

    /**
     * 初始化工作台的新实例。
     * @param  {ApplicationContextBase} applicationContext
     */
    public constructor(context: ApplicationContextBase) {
        super(context);
    }

    /**
     * 当工作台打开时调用。
     * @async
     * @protected
     * @virtual
     * @param  {Array<string>} args
     * @returns void
     */
    protected async onOpen(args: Array<string>): Promise<void> {
        let context = this.applicationContext as ApplicationContext;

        // 关闭生产提示
        // Vue.config.productionTip = false;
        // Vue.config.errorHandler = (err, vm, info) => {
        //   console.error(err);
        //   console.warn(info);
        // };
        Vue.config.devtools = process.env.NODE_ENV === "production" ? false : true;

        // 挂载全局事件
        Vue.mixin(EventBusMixin);

        // 初始化组件
        this.initializeComponent(context);

        // 初始化路由程序
        this.initializeRouter(context);

        // 初始化状态管理程序
        this.initializeStore(context);

        // 初始化自定义指令
        this.initializeDirective(context);

        // 初始化工作空间
        this._workspace = this.createWorkspace();
    }

    /**
     * 创建一个工作空间对象。
     * @override
     * @returns IWorkspace
     */
    protected createWorkspace(): Workspace {
        return new Workspace(this);
    }

    /**
     * 初始化全局组件。
     * @param  {ApplicationContext} context 应用程序上下文实例。
     * @returns void
     */
    private initializeComponent(context: ApplicationContext): void {
        // 注册系统组件
        Vue.use(components);
        Vue.use(iView);
    }

    /**
     * 初始化路由程序。
     * @param  {ApplicationContext} context 应用程序上下文实例。
     * @returns void
     */
    private initializeRouter(context: ApplicationContext): void {
        // 注册路由组件
        Vue.use(Router);

        // 初始化路由程序
        let router = new Router(context.routerOptions);

        // 设置路由程序
        context.router = router;
    }

    /**
     * 初始化状态管理程序。
     * @param  {ApplicationContext} context 应用程序上下文实例。
     * @returns void
     */
    private initializeStore(context: ApplicationContext): void {
        // 注册状态管理程序
        Vue.use(Vuex);

        // 初始化状态容器
        let store = new Vuex.Store(context.storeOptions);

        // 设置状态容器
        context.store = store;
    }

    /**
     * 初始化自定义指令。
     * @param  {ApplicationContext} context 应用程序上下文实例。
     * @returns void
     */
    private initializeDirective(context: ApplicationContext): void {
        // Vue.use(directives);
    }
}
