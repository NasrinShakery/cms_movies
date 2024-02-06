// import { useState } from "react";
import "./App.css";
import { useRoutes } from "react-router-dom";
import routes from "./routes";
import Sidebar from "./components/Sidebar/Sidebar";
import Navbar from "./components/Navbar/Navbar";

function App() {
   const router = useRoutes(routes);

   return (
      <>
         <div className="p-2 bg-blueSpace w-full">
            <div className="grid gap-4 l:grid-cols-4 grid-rows-layout">
               <Sidebar />
               <Navbar />
               <div className="p-6 md:col-span-3 row-span-10 bg-slate-700 rounded-[15px] font-DanaDemibold  text-white text-center">
                  {router} 
               </div>
            </div>
         </div>
      </>
   );
}

export default App;
