import flagwind from "@egova/flagwind-core";
import ApplicationContext from "@/application/context";
import { routes } from "./routes";
import modules from "@/store";
// 导入样式
import style from "@/assets/styles";

// 获取应用上下文
let context = new ApplicationContext(routes, modules);

// 装载样式
style.install();

// 启动应用程序
flagwind.Application.start(context);
