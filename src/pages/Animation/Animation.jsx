// import React from 'react'
import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import AnimationCard from "../../components/AnimationCard/AnimationCard";
import AddMovieModal from "../../components/AddMovieModal/AddMovieModal";
import { getAnimationsFromServer } from "../../redux/animationsSlice";

const Animation = () => {
  // const allAnimation = useSelector((state) => state.animation);
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(getAnimationsFromServer());
   }, []);
  return (
    <div>
         <div className=" px-5 flex items-center justify-between">
            <h2 className="font-MorabbaMedium text-2xl">همه انیمیشن ها</h2>
            <AddMovieModal/>
         </div>
         <div className="moviesWrapper min-h-screen flex justify-center items-center py-5">
            <div className="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0">
               {/* {console.log("page movies =>", allAnimation)}
               {allAnimation.map((animation) => (
                  <AnimationCard key={animation.id} {...animation} />
               ))} */}
            </div>
         </div>
      </div>
  )
}

export default Animation