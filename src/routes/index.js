import Home from "@/pages/Home";
import Center from "@/pages/Center";
import Contact from "@/pages/Contact";
import Hotel from "@/pages/Hotel";
import Medicine from "@/pages/Medicine";
import Metal from "@/pages/Metal";
import News from "@/pages/News";

const routes = [
  {
    path: "/",
    exact: true,
    component: Home
  },
  {
    path: "/center",
    exact: true,
    component: Center
  },
  {
    path: "/contact",
    exact: true,
    component: Contact
  },
  {
    path: "/hotel",
    exact: true,
    component: Hotel
  },
  {
    path: "/medicine",
    exact: true,
    component: Medicine
  },
  {
    path: "/metal",
    exact: true,
    component: Metal
  },
  {
    path: "/news",
    exact: true,
    component: News
  },
];

export default routes;
