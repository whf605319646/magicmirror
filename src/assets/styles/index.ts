// 插件样式
import "normalize.css";
// 项目样式
import "@/assets/styles/index.scss";

let style = {
    install() {
        this.screen.resize();
        addEventListener("resize", this.screen.resize.bind(this.screen));
    },
    screen: {
        designWidth     : 1920,   // 设计稿屏幕宽度
        designHeight    : 1080,   // 设计稿屏幕高度
        minHeight       : 620,    // laptop高度
        resize() {
            document.documentElement.style.fontSize = (document.documentElement.clientWidth / 19.2) + "px";
        }
    }
};

// 注册屏幕分辨率自适应
// style.install();
export default style;