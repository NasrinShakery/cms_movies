import { useState } from "react";
import "./App.css";
import { useRoutes } from "react-router-dom";
import routes from "./routes";
import Sidebar from "./components/Sidebar/Sidebar";
import Navbar from "./components/Navbar/Navbar";

function App() {
   const router = useRoutes(routes);

   return (
      <>
         <div className="p-2 bg-blueSpace">
            <div className="grid gap-4 md:grid-cols-4 grid-rows-12">
               <Sidebar />
               <Navbar />
               <h1 className="p-6 font-DanaDemibold md:col-span-3 row-span-10   bg-slate-700 rounded-[15px] text-white text-center">
                  {router} محتوای هر صفحه
               </h1>
            </div>
         </div>
      </>
   );
}

export default App;
