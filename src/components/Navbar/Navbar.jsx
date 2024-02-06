// import React from "react";

const Navbar = () => {
   return (
      
         <div className="sticky top-0 z-50 p-6 md:col-span-3 bg-blueSpace-dark rounded-[25px] text-white text-center flex justify-between items-center">
            <div className="flex gap-5 items-center">
               <span className="l:hidden cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="33" height="34" viewBox="0 0 33 34" fill="none">
                     <path d="M4.125 17.0056H28.875" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                     <path d="M4.125 8.75562H28.875" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                     <path d="M4.125 25.2556H28.875" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
               </span>
               <h2 className="font-DanaDemibold text-xl tracking-wider">داشبورد</h2>
            </div>
            <span className="cursor-pointer">
               <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
                  <path d="M24.75 11C24.75 8.81196 23.8808 6.71354 22.3336 5.16637C20.7865 3.61919 18.688 2.75 16.5 2.75C14.312 2.75 12.2135 3.61919 10.6664 5.16637C9.11919 6.71354 8.25 8.81196 8.25 11C8.25 20.625 4.125 23.375 4.125 23.375H28.875C28.875 23.375 24.75 20.625 24.75 11Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M18.8787 28.875C18.637 29.2917 18.29 29.6376 17.8725 29.8781C17.4551 30.1186 16.9817 30.2451 16.5 30.2451C16.0182 30.2451 15.5449 30.1186 15.1274 29.8781C14.7099 29.6376 14.363 29.2917 14.1212 28.875" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
               </svg>
            </span>
         </div>
      
   );
};

export default Navbar;
