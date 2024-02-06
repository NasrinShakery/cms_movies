import  { useState } from "react";
import { addMoviesToServer } from "../../redux/moviesSlice";
import { useDispatch } from "react-redux";

const AddMovieModal = () => {
   const [showModal, setShowModal] = useState(false);
   const [newMovie, setNewMovie] = useState({
      movieName: "",
      movieYear: ''
   })
   const dispatch = useDispatch()

   const newMovieHandler = (e) => {
      const { name, value } = e.target;
      setNewMovie((prevMovie) => ({
        ...prevMovie,
        [name]: value,
      }));
    };

   const addMovieHandler = ()=>{
      setShowModal(false)
      dispatch(addMoviesToServer(newMovie))
   }
   return (
      <>
         <button
            className="flex items-center justify-between p-2 w-32 h-10 bg-pink-600 rounded-lg shadow hover:shadow-lg outline-none focus:outline-none"
            type="button"
            onClick={() => setShowModal(true)}
         >
            <span className="block w-6 h-6 text-xl font-Dana border rounded-md">
               +
            </span>

            <span>افزودن</span>
         </button>
         {showModal ? (
            <>
               <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                  <div className="relative w-auto my-6 mx-auto max-w-3xl">
                     <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                           <h3 className="text-3xl font=semibold">
                              General Info
                           </h3>
                           <button
                              className="bg-transparent border-0 text-black float-right"
                              onClick={() => setShowModal(false)}
                           >
                              <span className="text-black opacity-7 h-6 w-6 text-xl block bg-gray-400 py-0 rounded-full">
                                 x
                              </span>
                           </button>
                        </div>
                        <div className="relative p-6 flex-auto">
                           <form className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full">
                              {/* <label className="block text-black text-sm font-bold mb-1">
                                 پوستر
                              </label> */}
                              {/* <input type="text" name="poster" onChange={(e)=>newMovieHandler(e)} className="shadow appearance-none border rounded w-full py-2 px-1 text-black" /> */}
                              <label className="block text-black text-sm font-bold mb-1">
                                 نام فیلم
                              </label>
                              <input type="text" name="movieName" value={newMovie.movieName} onChange={newMovieHandler} className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
                              <label className="block text-black text-sm font-bold mb-1">
                                 سال ساخت
                              </label>
                              <input type="text" name="movieYear" value={newMovie.movieYear} onChange={newMovieHandler} className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
                           </form>
                        </div>
                        <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                           <button
                              className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                              type="button"
                              onClick={() => setShowModal(false)}
                           >
                              Close
                           </button>
                           <button
                              className="text-white bg-green-500 active:bg-green-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                              type="button"
                              onClick={addMovieHandler}
                           >
                              Submit
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
            </>
         ) : null}
      </>
   );
};

export default AddMovieModal;