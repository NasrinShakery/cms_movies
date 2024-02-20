import { useState } from "react";
import  { deleteAnimationFromServer } from "../../redux/animationsSlice";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import EditMovieModal from "../EditMovieModal/EditMovieModal";

const AnimationCard = ({
   id,
   animationName,
   animationPoster,
   animationGenre,
   animationTime,
   animationLanguage,
   animationIsDubbed,
   animationHasSubtitles,
   animationCountry,
   animationYear,
}) => {
   const dispatch = useDispatch();
   const [isOpeneditModal, setIsopenEditModal] = useState(false);

   const deleteAnimationHandler = () => {
      Swal.fire({
         title: "حذف!",
         text: "آیا از حذف این انیمیشن مطمدن هستید ؟",
         icon: "warning",
         confirmButtonText: "حذف کن",
         confirmButtonColor: "#d33",
         showCancelButton: true,
         cancelButtonText: "لغو",
         cancelButtonColor: "#3085d6",
      }).then((result) => {
         if (result.isConfirmed) {
            dispatch(deleteAnimationFromServer(id));
            Swal.fire({
               title: "حذف شد!",
               text: "حذف با موفقیت انجام شد",
               icon: "success",
            });
         }
      });
   };
   const updateAnimationHandler = () => {
      console.log("update cliked...");
      console.log("setState EditModal = TRUE...");
      setIsopenEditModal(true);
      console.log("CARD :  Modal Will OPENED...", animationName);
   };

   return (
      <>
         {console.log("Card =>", id, animationName)}
         <div className="max-w-sm bg-blueSpace-dark  px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
            <h3 className="mb-3 text-xl font-bold text-white">{animationName}</h3>
            <div className="relative">
               <img
                  className="w-full rounded-xl"
                  src={`./images/moviePosters/${animationPoster}.jpg`}
                  alt="Colors"
               />
               <p className="absolute top-0 bg-yellow-300 text-gray-800 font-MorabbaLight py-1 px-3 rounded-br-lg rounded-tl-lg">
                  IMDb : 5.8 (13802)
               </p>
            </div>
            <h4 className="mt-4 text-cornflowerBlue-light text-sm font-DanaMedium cursor-pointer">
               ژانر : <span>{animationGenre}</span>
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
                  <span>{animationTime}</span>
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
                  <span>{animationLanguage}</span>
               </div>
               <div className="flex  gap-x-2  items-center mb-1">
                  <span>
                     <svg
                        className="h-6 w-6 text-cornflowerBlue-purple"
                        viewBox="0 0 512 512"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <title>language</title>
                        <g
                           id="Page-1"
                           stroke="none"
                           strokeWidth="1"
                           fill="none"
                           fillRule="evenodd"
                        >
                           <g
                              id="icon"
                              fill="#767BFA"
                              transform="translate(42.666667, 85.333333)"
                           >
                              <path
                                 d="M426.666667,85.3333333 L426.666667,341.333333 L362.626302,341.333333 L362.666667,405.333333 L256,341.333333 L170.666667,341.333333 L170.666667,85.3333333 L426.666667,85.3333333 Z M256,1.42108547e-14 L256,64 L213.333,64 L213.333333,42.6666667 L42.6666667,42.6666667 L42.6666667,213.333333 L149.333,213.333 L149.333,268.8 L64,320 L64.0403648,256 L6.39488462e-14,256 L6.39488462e-14,1.42108547e-14 L256,1.42108547e-14 Z M384,128 L213.333333,128 L213.333333,298.666667 L384,298.666667 L384,128 Z M311.198683,149.333333 L359.616467,277.333333 L335.768901,277.333333 L322.580475,240.658669 L274.524018,240.658669 L261.425923,277.333333 L238.933333,277.333333 L286.267137,149.333333 L311.198683,149.333333 Z M298.552247,170.741943 C296.817878,176.812232 294.528512,183.826018 291.684148,191.7833 L291.325712,192.782875 L280.576241,223.134321 L316.43792,223.134321 L305.68845,192.782875 L304.747024,190.067278 C302.566831,183.717713 300.501905,177.275935 298.552247,170.741943 Z M138.364283,55.8724491 L138.363691,66.5384491 L149.332691,66.5384491 L149.334032,145.217282 C147.846623,148.082062 146.253419,150.895209 144.554383,153.656286 C146.072758,154.996689 147.66531,156.330498 149.332056,157.657476 L149.332744,183.9067 C142.782625,179.623374 136.879514,175.218148 131.623873,170.685181 C117.063661,186.063317 97.230366,196.963418 72.3795207,203.419113 L66.0115407,204.951778 L61.383691,184.126454 C85.6428706,178.735525 103.970928,169.143885 116.711981,155.39526 C105.111587,141.185042 96.9168733,125.119906 92.1670974,107.291622 L90.6021236,100.779065 L111.459775,96.2991661 C114.703867,111.403107 120.706878,124.963276 129.507523,137.067333 C137.440289,122.406679 142.049701,106.041819 143.329049,87.8734181 L63.6976158,87.8724491 L63.6976158,66.5391157 L117.030691,66.5384491 L117.030949,55.8724491 L138.364283,55.8724491 Z"
                                 id="Combined-Shape"
                              ></path>
                           </g>
                        </g>
                     </svg>
                  </span>
                  {animationIsDubbed ? (
                     <span className="text-xs">دوبله شده</span>
                  ) : null}
                  {animationHasSubtitles ? (
                     <span className="text-xs">زیرنویس فارسی</span>
                  ) : null}
               </div>
               <div className="flex gap-x-2 items-center mb-1">
                  <span>
                     <svg
                        className="h-6 w-6 text-cornflowerBlue-purple"
                        viewBox="0 0 24 24"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <title>world_2_line</title>
                        <g
                           id="qqqqq"
                           stroke="none"
                           strokeWidth="1"
                           fill="none"
                           fillRule="evenodd"
                        >
                           <g
                              id="Map"
                              transform="translate(-336.000000, 0.000000)"
                           >
                              <g
                                 id="world_2_line"
                                 transform="translate(336.000000, 0.000000)"
                              >
                                 <path
                                    d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z"
                                    id="MingCute"
                                    fillRule="nonzero"
                                 ></path>
                                 <path
                                    d="M15.4781,21.3785 C19.2863,19.9657 22,16.2998 22,12 C22,6.47715 17.5228,2 12,2 C6.47715,2 2,6.47715 2,12 C2,17.5228 6.47715,22 12,22 C13.1118,22 14.1812,21.8186 15.1802,21.4837 C15.2117,21.4779 15.2433,21.4705 15.2747,21.4615 C15.3468,21.4409 15.4148,21.4129 15.4781,21.3785 Z M12,4 C10.3287,4 8.77718,4.51247 7.49389,5.38885 C7.49792,5.42534 7.5,5.46243 7.5,5.5 L7.5,9.02029 C7.5,9.45991 7.78711,9.84797 8.20749,9.97656 L9.49809,10.3713 L9.32338,9.32305 C9.0624,7.75715 10.0665,6.25901 11.6141,5.90528 L12.0155,5.81353 C12.3994,5.72578 12.696,5.42092 12.7732,5.03479 L12.9686,4.05804 C12.6511,4.01972 12.3278,4 12,4 Z M5.5,9.02029 L5.5,7.33528 C4.55596,8.64841 4,10.2593 4,12 C4,16.4183 7.58172,20 12,20 C12.6052,20 13.1948,19.9328 13.7615,19.8054 L13.1809,17.773 C13.1342,17.6096 13.0466,17.4608 12.9264,17.3406 L11.6879,16.1021 C11.0557,15.47 11.1134,14.4286 11.8115,13.8702 L13.3757,12.6188 C13.9848,12.1315 14.8218,12.0428 15.5195,12.3917 L16.9898,13.1269 C17.887,13.5755 18.5006,14.4428 18.625,15.4381 L18.7352,16.319 C19.5357,15.0732 20,13.5908 20,12 C20,8.6086 17.8897,5.71009 14.9106,4.54596 L14.7344,5.42702 C14.5027,6.58542 13.6128,7.50001 12.4611,7.76325 L12.0597,7.85499 C11.5439,7.9729 11.2092,8.47229 11.2962,8.99425 L11.4709,10.0425 C11.7151,11.5076 10.3334,12.7183 8.91309,12.2839 L7.62249,11.8891 C6.36132,11.5033 5.5,10.3391 5.5,9.02029 Z M16.964,18.2741 C16.5553,18.5979 16.1142,18.8826 15.6465,19.1225 L15.1039,17.2236 C14.9638,16.7334 14.7012,16.2869 14.3406,15.9264 L13.4971,15.0829 L14.6251,14.1806 L16.0954,14.9157 C16.3945,15.0653 16.599,15.3544 16.6405,15.6861 L16.964,18.2741 Z"
                                    id="qqq"
                                    fill="#767BFA"
                                 ></path>
                              </g>
                           </g>
                        </g>
                     </svg>
                  </span>
                  <p>کشور سازنده : </p>
                  <span>{animationCountry}</span>
               </div>
               <div className="flex gap-x-2 items-center mb-1">
                  <span>
                     <svg
                        className="h-6 w-6 text-cornflowerBlue-purple"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <path
                           d="M20 10V7C20 5.89543 19.1046 5 18 5H6C4.89543 5 4 5.89543 4 7V10M20 10V19C20 20.1046 19.1046 21 18 21H6C4.89543 21 4 20.1046 4 19V10M20 10H4M8 3V7M16 3V7"
                           stroke="#767BFA"
                           strokeWidth="2"
                           strokeLinecap="round"
                        />
                        <rect
                           x="6"
                           y="12"
                           width="3"
                           height="3"
                           rx="0.5"
                           fill="#767BFA"
                        />
                        <rect
                           x="10.5"
                           y="12"
                           width="3"
                           height="3"
                           rx="0.5"
                           fill="#767BFA"
                        />
                        <rect
                           x="15"
                           y="12"
                           width="3"
                           height="3"
                           rx="0.#767BFA"
                        />
                     </svg>
                  </span>
                  <p> تاریخ اکران : </p>
                  <span>{animationYear}</span>
               </div>
               <div className="flex gap-2 mt-4">
                  <button
                     onClick={updateAnimationHandler}
                     className=" text-sm w-full text-white bg-indigo-600 py-2 rounded-xl shadow-lg"
                  >
                     ویرایش
                  </button>
                  <button
                     onClick={deleteAnimationHandler}
                     className=" text-sm w-full text-white bg-indigo-600 py-2 rounded-xl shadow-lg"
                  >
                     حذف
                  </button>
               </div>
            </div>
         </div>
            {isOpeneditModal ? (
               <EditMovieModal
                  setIsopenEditModal={setIsopenEditModal}
                  id={id}
                  animationName={animationName}
                  animationPoster={animationPoster}
                  animationGenre={animationGenre}
                  animationTime={animationTime}
                  animationLanguage={animationLanguage}
                  animationIsDubbed={animationIsDubbed}
                  animationHasSubtitles={animationHasSubtitles}
                  animationCountry={animationCountry}
                  animationYear={animationYear}
               />
            ) : null}
      </>
   );
};

export default AnimationCard;
