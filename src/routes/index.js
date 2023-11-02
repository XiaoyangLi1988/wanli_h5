import Home from "@/pages/Home"

console.log(typeof process.env.API)

const routes = [
  {
    path: "/",
    exact: true,
    component: Home
  },
  {
    path: "/home",
    exact: true,
    component: Home
  },
];

export default routes;
