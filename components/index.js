import ScreenHeaderBtn from "./common/header/ScreenHeaderBtn";

// home screen
import Welcome from "../components/common/home/welcome/Welcome"
import NearbyJobCard from "../components/common/cards/nearby/NearbyJobCard";
import Nearbyjobs from "../components/common/home/nearby/Nearbyjobs"
import Popularjobs from "../components/common/home/popular/Popularjobs";
import PopularJobCard from "./common/cards/popular/PopularJobCard";
// job details screen
import Company from "../components/jobdetails/company/Company";
import { default as JobTabs } from "../components/jobdetails/tabs/Tabs";
import { default as JobAbout } from "../components/jobdetails/about/About";
import { default as JobFooter } from "./jobdetails/footer/Footer"
import Specifics from "../components/jobdetails/specifics/Specifics";

// common


export {
  ScreenHeaderBtn,
  Welcome,
  Nearbyjobs,
  Popularjobs,
  Company,
  JobTabs,
  JobAbout,
  JobFooter,
  Specifics,
  NearbyJobCard,
  PopularJobCard
  
};