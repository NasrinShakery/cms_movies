import React from 'react'

const Users = () => {
  return (
    <>
    <h3 className='p-4'>لیست کاربران سایت</h3>
      <div className='grid grid-cols-9'>
        <div className='col-span-1 border p-2 bg-blueSpace'> شماره </div>
        <div className='col-span-2 border p-2 bg-blueSpace'>نام کاربر</div>
        <div className='col-span-2 border p-2 bg-blueSpace'> ایمیل </div>
        <div className='col-span-2 border p-2 bg-blueSpace'>موبایل</div>
        <div className='col-span-1 border p-2 bg-blueSpace'>ویرایش</div>
        <div className='col-span-1 border p-2 bg-blueSpace'>حذف</div>
      </div>
      <div className='grid grid-cols-9'>
        <div className='col-span-1 border p-2'> شماره </div>
        <div className='col-span-2 border p-2'>نام کاربر</div>
        <div className='col-span-2 border p-2'> ایمیل </div>
        <div className='col-span-2 border p-2'>موبایل</div>
        <div className='col-span-1 border p-2'>ویرایش</div>
        <div className='col-span-1 border p-2'>حذف</div>
      </div>
     
    </>
  )
}

export default Users