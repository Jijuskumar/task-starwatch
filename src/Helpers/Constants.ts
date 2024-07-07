import { MenuItemBO } from "../BOs/MenuItemBO";
import { ReactComponent as Favorite } from "../Assets/Images/Favourites.svg";
import { ReactComponent as OrderList } from "../Assets/Images/orderlist.svg";
import { ReactComponent as DashBoard } from "../Assets/Images/dashboard.svg";
import { ReactComponent as Products } from "../Assets/Images/product.svg";
import { ReactComponent as Messages } from "../Assets/Images/chat.svg";
import { ReactComponent as Logout } from "../Assets/Images/Logout.svg";
import { ReactComponent as Settings } from "../Assets/Images/settings.svg";
import { ReactComponent as Inbox } from "../Assets/Images/contact.svg";
import { ReactComponent as Chart } from "../Assets/Images/Chart.svg";
import { ReactComponent as Stock } from "../Assets/Images/stock.svg";
import { ReactComponent as Invoice } from "../Assets/Images/invoice.svg";
import { ReactComponent as Todo } from "../Assets/Images/Todo.svg";
import { ReactComponent as Team } from "../Assets/Images/team.svg";
import { ReactComponent as Calendar } from "../Assets/Images/calendar.svg";
import { ReactComponent as Pricing } from "../Assets/Images/pricing.svg";
import { CaroselItemBO } from "../BOs/CaroselItemBO";

export const MenuItems: MenuItemBO[] = [
  {
    icon: DashBoard,
    name: "DashBoard",
    navigateTo: "dashboard",
  },
  {
    icon: Products,
    name: "Products",
    navigateTo: "products",
  },
  {
    icon: Favorite,
    name: "Favourite",
    navigateTo: "dashboard",
  },
  {
    icon: Messages,
    name: "Messages",
    navigateTo: "messages",
  },
  {
    icon: OrderList,
    name: "Order Lists",
    navigateTo: "products",
  },
  {
    icon: Stock,
    name: "Stocks",
    navigateTo: "stock",
  },
  {
    icon: Pricing,
    name: "Pricing",
    navigateTo: "calendar",
  },
  {
    icon: Calendar,
    name: "Calendar",
    navigateTo: "calendar",
  },
  {
    icon: Todo,
    name: "Todo",
    navigateTo: "todos",
  },
  {
    icon: Inbox,
    name: "Contacts",
    navigateTo: "contacts",
  },
  {
    icon: Invoice,
    name: "Invoices",
    navigateTo: "invoices",
  },
  {
    icon: Chart,
    name: "Chart",
    navigateTo: "chart",
  },
  {
    icon: Team,
    name: "Teams",
    navigateTo: "team",
  },
  {
    icon: Settings,
    name: "Settings",
    navigateTo: "settings",
  },

  {
    icon: Logout,
    name: "Logout",
    navigateTo: "logout",
  },
];

export const CaroselData: CaroselItemBO[] = [
  {
    id: "123456",
    date: "September 12-22",
    label: "Designer Dresses - Pick from trendy Designer Dress.",
    description: "Enjoy free home delivery in this summer",
  },
  {
    id: "123457",
    date: "August 12-22",
    label: "Designer Dresses - Pick from trendy Designer Dress.",
    description: "Enjoy free home delivery in this Independance",
  },
  {
    id: "123458",
    date: "November 12-22",
    label: "Designer Dresses - Pick from trendy Designer Dress.",
    description: "Enjoy free home delivery in this Christmas",
  },
];
