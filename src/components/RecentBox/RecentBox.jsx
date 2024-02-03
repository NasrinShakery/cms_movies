// import React from 'react'

const RecentBox = () => {
  return (
    <div className="w-full p-4 space-y-3 rounded-3xl bg-blueSpace-dark text-white">
      <div className="flex items-center justify-between gap-4 font-MorabbaMedium tracking-wider">
         <h4 className="">آخرین فیلم ها</h4>
         <a href="#" className="flex items-center justify-between p-2 w-32 h-10 bg-pink-600 rounded-lg">
            <span className="block w-6 h-6 text-xl font-Dana border rounded-md">+</span>
            <span>افزودن</span>
         </a>
      </div>
      <div className="px-5 py-1 flex items-center justify-between text-base font-MorabbaLight tracking-wider font-black bg-blueSpace/60 rounded-[10px]">
         <div className="">
            <span className="ml-2">پوستر</span>
            <span>عنوان</span>
         </div>
         <span>تاریخ ایجاد</span>
      </div>
   
    </div>
  )
}

export default RecentBox