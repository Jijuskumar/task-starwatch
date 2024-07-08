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
import { ReactComponent as Bin } from "../Assets/Images/Messages/bin.svg";
import { ReactComponent as Important } from "../Assets/Images/Messages/Important.svg";
import { ReactComponent as Spam } from "../Assets/Images/Messages/Spam.svg";
import { ReactComponent as Draft } from "../Assets/Images/Messages/pencil.svg";
import { ReactComponent as Sent } from "../Assets/Images/Messages/send.svg";
import { ReactComponent as Starred } from "../Assets/Images/Messages/rating-star.svg";
import { ReactComponent as MailInbox } from "../Assets/Images/Messages/email-action-unread-non-active.svg";
import { ReactComponent as MailInboxActive } from "../Assets/Images/Messages/email-action-unread.svg";
import { ReactComponent as User } from "../Assets/Images/DashBoard/User.svg";
import { ReactComponent as Order } from "../Assets/Images/DashBoard/Order.svg";
import { ReactComponent as Sales } from "../Assets/Images/DashBoard/Revenue.svg";
import { ReactComponent as Pending } from "../Assets/Images/DashBoard/Pending.svg";
import { CaroselItemBO } from "../BOs/CaroselItemBO";
import { EmailOptionBO } from "../BOs/EmailOptionBO";
import { DashBoardCardBO } from "../BOs/DashBoardCardBO";
import { ProductListBO } from "../BOs/ProductListBO";

export const PER_PAGE = 12;

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

export const EmailOptions: EmailOptionBO[] = [
  {
    name: "Inbox",
    icon: MailInbox,
    activeIcon: MailInboxActive,
  },
  {
    name: "Starred",
    icon: Starred,
    activeIcon: MailInboxActive,
  },
  {
    name: "Sent",
    icon: Sent,
    activeIcon: MailInboxActive,
  },
  {
    name: "Darft",
    icon: Draft,
    activeIcon: MailInboxActive,
  },
  {
    name: "Spam",
    icon: Spam,
    activeIcon: MailInboxActive,
  },
  {
    name: "Important",
    icon: Important,
    activeIcon: MailInboxActive,
  },
  {
    name: "Bin",
    icon: Bin,
    activeIcon: MailInboxActive,
  },
];

export const DashBoardCardData: DashBoardCardBO[] = [
  {
    label: "Total User",
    count: "46,860",
    sensex: true,
    profit: "8.5%",
    description: "Up from yesterday",
    icon: User,
  },
  {
    label: "Total Order",
    count: "10293",
    sensex: true,
    profit: "1.3%",
    description: "Up from past week",
    icon: Order,
  },
  {
    label: "Total Sales",
    count: "$89,000",
    sensex: false,
    profit: "4.3%",
    description: "Down from yesterday",
    icon: Sales,
  },
  {
    label: "Total Pending",
    count: "2040",
    sensex: true,
    profit: "1.8%",
    description: "Up from yesterday",
    icon: Pending,
  },
];

export const ProductList: ProductListBO[] = [
  {
    id: "7b9e0fa4-1c4f-4bcf-a8b2-9473a0f61f7c",
    productName: "Apple Watch",
    location: "6096 Marjolaine Landing",
    dateTime: "12.09.2019 - 12:53 PM",
    piece: 423,
    amount: "$34,295",
    status: "Delivered",
  },
  {
    id: "751ae97d7-2a44-4676-bb9a-5e57d7dbbd6d",
    productName: "Samsung Galaxy Watch",
    location: "1234 Elm Street",
    dateTime: "01.10.2020 - 10:15 AM",
    piece: 150,
    amount: "$29,999",
    status: "In Transit",
  },
  {
    id: "bf88288d-0b54-4205-b5b7-0b6c4f20b9fc",
    productName: "Fitbit Charge 4",
    location: "7890 Maple Avenue",
    dateTime: "03.15.2021 - 08:45 AM",
    piece: 300,
    amount: "$19,995",
    status: "Delivered",
  },
  {
    id: "d0530f17-7dbf-48b6-bd0f-5c1770ad15c9",
    productName: "Garmin Forerunner 945",
    location: "4567 Oak Lane",
    dateTime: "05.22.2021 - 02:30 PM",
    piece: 200,
    amount: "$49,999",
    status: "Pending",
  },
  {
    id: "d84c8f49-47b1-4b71-b0ec-5d8992c7b5f8",
    productName: "Huawei Watch GT 2",
    location: "3456 Pine Street",
    dateTime: "07.30.2021 - 05:15 PM",
    piece: 180,
    amount: "$21,495",
    status: "Delivered",
  },
  {
    id: "a212d1e3-5a41-4a02-b5b0-19e845d1af41",
    productName: "Amazfit Bip U Pro",
    location: "1234 Birch Road",
    dateTime: "09.12.2021 - 11:00 AM",
    piece: 220,
    amount: "$11,995",
    status: "In Transit",
  },
];
