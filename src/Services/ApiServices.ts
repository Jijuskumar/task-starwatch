import { ProductBO } from "../BOs/ProductBO";
import Watch from "../Assets/Images/Watch.png";
import { MessageBO } from "../BOs/MessageBO";
import { PER_PAGE } from "../Helpers/Constants";

export const getProducts = async () => {
  try {
    const Products: ProductBO[] = [
      {
        id: "kjcbewb-vewv-wev-wevvvvv",
        name: "Apple Watch Series 4",
        price: "120.00",
        rating: 4.2,
        totalRating: 120,
        images: [Watch, Watch, Watch, Watch],
      },
      {
        id: "kjcbewb-vewv-wev-wevvvvv",
        name: "Apple Watch Series 3",
        price: "100.00",
        rating: 4.2,
        totalRating: 120,
        images: [Watch, Watch, Watch, Watch],
      },
      {
        id: "kjcbewb-vewv-wev-wevvvvv",
        name: "Apple Watch Series 2",
        price: "90.00",
        rating: 3,
        totalRating: 120,
        images: [Watch, Watch, Watch, Watch],
      },
      {
        id: "kjcbewb-vewv-wev-wevvvvv",
        name: "Apple Watch Series",
        price: "70.00",
        rating: 2,
        totalRating: 120,
        images: [Watch, Watch, Watch, Watch],
      },
      {
        id: "kjcbewb-vewv-wev-wevvvvv",
        name: "Apple Watch Series 4",
        price: "120.00",
        rating: 4.2,
        totalRating: 120,
        images: [Watch, Watch, Watch, Watch],
      },
    ];

    return Products;
  } catch (error) {
    return undefined;
  }
};

export const getMessages = async (searchText: string, page: number) => {
  const Messages: MessageBO[] = [
    {
      id: "1234501",
      starred: true,
      sender: "Jullu Jalal",
      message: "Our Bachelor of Commerce program is ACBSP-accredited.",
      time: "8:38 AM",
      profile: "Primary",
    },
    {
      id: "1234502",
      starred: false,
      sender: "Minerva Barnett",
      message: "Get Best Advertiser In Your Side Pocket",
      time: "8:13 AM",
      profile: "Work",
    },
    {
      id: "1234503",
      starred: false,
      sender: "Peter Lewis",
      message: "Vacation Home Rental Success",
      time: "7:52 PM",
      profile: "Friends",
    },
    {
      id: "1234504",
      starred: false,
      sender: "Anthony Briggs",
      message: "Free Classifieds Using Them To Promote Your Stuff Online",
      time: "7:52 PM",
      profile: "",
    },
    {
      id: "1234505",
      starred: false,
      sender: "Clifford Morgan",
      message: "Enhance Your Brand Potential With Giant Advertising Blimps",
      time: "4:13 PM",
      profile: "Social",
    },
    {
      id: "1234506",
      starred: false,
      sender: "Cecilia Webster",
      message: "Always Look On The Bright Side Of Life",
      time: "3:52 PM",
      profile: "Friends",
    },
    {
      id: "1234507",
      starred: true,
      sender: "Harvey Manning",
      message: "Curling Irons Are As Individual As The Women Who Use Them",
      time: "2:30 PM",
      profile: "",
    },
    {
      id: "1234508",
      starred: false,
      sender: "Willie Blake",
      message: "Our Bachelor of Commerce program is ACBSP-accredited.",
      time: "8:38 AM",
      profile: "Primary",
    },
    {
      id: "1234509",
      starred: false,
      sender: "Minerva Barnett",
      message: "Get Best Advertiser In Your Side Pocket",
      time: "8:13 AM",
      profile: "Work",
    },
    {
      id: "1234510",
      starred: true,
      sender: "Fanny Weaver",
      message: "Free Classifieds Using Them To Promote Your Stuff Online",
      time: "7:52 PM",
      profile: "",
    },
    {
      id: "1234511",
      starred: false,
      sender: "Olga Hogan",
      message: "Enhance Your Brand Potential With Giant Advertising Blimps",
      time: "4:13 PM",
      profile: "Social",
    },
    {
      id: "1234512",
      starred: false,
      sender: "Lora Houston",
      message: "Vacation Home Rental Success",
      time: "7:52 PM",
      profile: "Friend",
    },
    {
      id: "1234513",
      starred: false,
      sender: "Anthony Briggs",
      message: "Free Classifieds Using Them To Promote Your Stuff Online",
      time: "7:52 PM",
      profile: "",
    },
    {
      id: "1234514",
      starred: false,
      sender: "Clifford Morgan",
      message: "Enhance Your Brand Potential With Giant Advertising Blimps",
      time: "4:13 PM",
      profile: "Social",
    },
    {
      id: "1234515",
      starred: false,
      sender: "Cecilia Webster",
      message: "Always Look On The Bright Side Of Life",
      time: "3:52 PM",
      profile: "Friends",
    },
    {
      id: "1234516",
      starred: true,
      sender: "Harvey Manning",
      message: "Curling Irons Are As Individual As The Women Who Use Them",
      time: "2:30 PM",
      profile: "",
    },
    {
      id: "1234517",
      starred: false,
      sender: "Willie Blake",
      message: "Our Bachelor of Commerce program is ACBSP-accredited.",
      time: "8:38 AM",
      profile: "Primary",
    },
    {
      id: "1234518",
      starred: false,
      sender: "Minerva Barnett",
      message: "Get Best Advertiser In Your Side Pocket",
      time: "8:13 AM",
      profile: "Work",
    },
  ];

  let filtered = [...Messages];

  let perPage = PER_PAGE;

  if (searchText) {
    filtered = filtered.filter(
      (message: MessageBO) =>
        message.message.includes(searchText) ||
        message.sender.includes(searchText)
    );
  }

  if (filtered.length > perPage) {
    const total = filtered.length;
    const start = (page - 1) * perPage;
    const data = filtered.splice(start, perPage);

    return {
      items: data,
      total: total,
      messages: Messages,
    };
  }

  return { items: filtered, total: filtered.length, messages: Messages };
};
