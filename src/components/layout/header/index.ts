import { component, View } from "@egova/flagwind-web";
import "./index.scss";

@component({
    template: require("./index.html"),
    components: {
        //
    }
})
export default class Header extends View {

    public title: string = "MagicMirror";

    public name: string = "管理员";
}
