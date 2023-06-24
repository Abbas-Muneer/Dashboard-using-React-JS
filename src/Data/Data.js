// Sidebar imports
import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
  UilChart,
  UilInfo,
  UilUser,
  UilSignOutAlt,
} from "@iconscout/react-unicons";

// Analytics Cards imports
import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";
import { keyboard } from "@testing-library/user-event/dist/keyboard";

// Recent Card Imports


// Sidebar Data
export const SidebarData = [
  {
    icon: UilEstate,
    heading: "Home",
    
  },
  {
    icon: UilClipboardAlt,
    heading: "Dashboard",
  },
  {
    icon: UilUsersAlt,
    heading: "Employees",
  },
  {
    icon: UilUser,
    heading: "My Account",
  },
  {
    icon: UilInfo,
    heading: "Information",
  },
];

// Analytics Cards Data
export const cardsData = [
  {
    title: "Vacation",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    png: "UilUsdSquare",
    
  },
  {
    title: "Sick",
    color: {
      backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    png: "UilMoneyWithdrawal",
    
  },
  {
    title: "Vacation",
    color: {
      backGround:
        "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
   
    png: "UilClipboardAlt",
  
  },
];

// Recent Update Card Data
export const UpdatesData = [
  {
    name: "Today (0)",
    noti: "No Leavers",
  },
  {
    
    name: "Tommorow(0)",
    noti: "No Leavers",
  },
  {
    
    name: "Rest of June",
    noti: "No Leavers",
  },
];
