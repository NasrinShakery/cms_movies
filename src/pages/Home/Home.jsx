// import React from "react";
import TotalNumbrsBox from "../../components/TotalNumbrsBox/TotalNumbrsBox";
import RecentBox from "../../components/RecentBox/RecentBox";

const Home = () => {
   return (
      <div className="space-y-5 ">
         <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            <TotalNumbrsBox/>
            <TotalNumbrsBox/>
            <TotalNumbrsBox/>
            <TotalNumbrsBox/>
         </div>
         <div className="flex justify-center items-center flex-col 845:flex-row  gap-5">
            <RecentBox/>
            <RecentBox/>
         </div>
      </div>
   );
};

export default Home;
