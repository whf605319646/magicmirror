export const routes = [
    {
        name: "default",
        path: "/",
        redirect: "/welcome"
    },
    {
        name: "welcome",
        path: "/welcome",
        title: "欢迎",
        meta: { title: "欢迎" },
        component: () => import("@/pages/page2/views/welcome/index")
    }
];
