import { View, component, watch } from "@egova/flagwind-web";
import Header from "../header";
import "./index.scss";

@component({
    template: require("./index.html"),
    components: {
        "p-Header" : Header
    }
})
export default class Main extends View {

    public async mounted() {
        //
    }

    @watch("$route", { immediate: true })
    public handlerPermissions() {
        // console.log("%s", this.$route);
    }

    public reset() {
        // 重置scrollTop值
        let wel: any = document.querySelector(".outer-page");
        if (!wel) return;
        wel.scrollTop = 0;
    }

}
