import React,{useState} from "react";
import { deleteMoviesFromServer } from "../../redux/moviesSlice";
import {useDispatch, useSelector } from "react-redux";
import Swal from 'sweetalert2'
import EditMovieModal from "../EditMovieModal/EditMovieModal";

const MovieCard = ({ id, movieName, movieYear, movieGenre, movieCountry, moviePoster }) => {

  const dispatch = useDispatch()
   const [isOpeneditModal, setIsopenEditModal]= useState(false)

  const deleteMovieHandler = () => {
   Swal.fire({
      title: 'حذف!',
      text: 'آیا از حذف این فیلم مطمدن هستید ؟',
      icon: 'warning',
      confirmButtonText: 'حذف کن',
      confirmButtonColor: "#d33",
      showCancelButton: true,
      cancelButtonText: 'لغو',
      cancelButtonColor: "#3085d6",
    }).then((result) => {
      if (result.isConfirmed) {
         dispatch(deleteMoviesFromServer(id))
        Swal.fire({
          title: "حذف شد!",
          text: "حذف با موفقیت انجام شد",
          icon: "success"
        });
      }
    });
  }
  const updateMovieHandler = () => {
   //  dispatch(updateMovieHandler(id))
   console.log('update cliked...');
   console.log('setState EditModal = TRUE...');
   setIsopenEditModal(true)
   console.log('CARD :  Modal Will OPENED...', movieName);

  }

   return (
      <>
         {console.log("Card =>",id, movieName)}
         <div className="max-w-sm bg-blueSpace-dark  px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
            <h3 className="mb-3 text-xl font-bold text-white">{movieName}</h3>
            <div className="relative">
               <img
                  className="w-full rounded-xl"
                  src={`./images/moviePosters/${moviePoster}.jpg`}
                  alt="Colors"
               />
               <p className="absolute top-0 bg-yellow-300 text-gray-800 font-MorabbaLight py-1 px-3 rounded-br-lg rounded-tl-lg">
                  IMDb : 5.8 (13802)
               </p>
            </div>
            <h4 className="mt-4 text-cornflowerBlue-light text-sm font-DanaMedium cursor-pointer">
               ژانر : <span>{movieGenre}</span>
            </h4>
            <div className="my-4 font-DanaMedium text-sm text-cornflowerBlue-light">
               <div className="flex  gap-x-2 items-center mb-1">
                  <span>
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-cornflowerBlue-purple"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                     >
                        <path
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           strokeWidth="2"
                           d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                     </svg>
                  </span>
                  <p className=""> مدت زمان:</p>
                  <span>1:34:23 </span>
                  <span>دقیقه</span>
               </div>
               <div className="flex  gap-x-2  items-center mb-1">
                  <span>
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-cornflowerBlue-purple"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                     >
                        <path
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           strokeWidth="2"
                           d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                     </svg>
                  </span>
                  <p className="">زبان اصلی :</p>
                  <span>انگلیسی</span>
               </div>
               <div className="flex gap-x-2 items-center mb-1">
                  <p>کشور سازنده : </p>
                  <span>{movieCountry}</span>
               </div>
               <div className="flex gap-x-2 items-center mb-1">
                  <p> تاریخ اکران : </p>
                  <span>{movieYear}</span>
               </div>
               <div className="flex gap-2 mt-4">
                  <button onClick={updateMovieHandler} className=" text-sm w-full text-white bg-indigo-600 py-2 rounded-xl shadow-lg">
                     ویرایش
                  </button>
                  <button onClick={deleteMovieHandler} className=" text-sm w-full text-white bg-indigo-600 py-2 rounded-xl shadow-lg">
                     حذف
                  </button>
               </div>
            </div>
         {isOpeneditModal ? <EditMovieModal setIsopenEditModal={setIsopenEditModal}  id={id} movieName={movieName} movieYear={movieYear} movieGenre={movieGenre} moviePoster={moviePoster}/> : null}
         </div>
      </>
   );
};

export default MovieCard;
