import { editAnimationFromServer } from "../../redux/animationsSlice";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const EditAnimationModal = ({
   setIsopenEditModal,
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

   const schema = yup
      .object()
      .shape({
         animationName: yup.string().required("نام انیمیشن اجباری است"),
         animationPoster: yup.string().required("پوستر برای انیمیشن بگذارید"),
         animationGenre: yup.string().required("حداقل یک ژانر مشخص کنید"),
         animationTime: yup.string().required("مدت زمان انیمیشن را بنویسید"),
         animationLanguage: yup
            .string()
            .required("زبان اصلی انیمیشن را بنویسید"),
         animationIsDubbed: yup.boolean(),
         animationHasSubtitles: yup.boolean(),
         animationCountry: yup.string().required("انیمیشن ساخت کدام کشور است؟"),
         animationYear: yup.string().required("تاریخ اکران انیمیشن را بنویسید"),
      })
      .required();

   const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
   } = useForm({
      defaultValues: {
         id: id,
         animationName: animationName,
         animationPoster: animationPoster,
         animationGenre: animationGenre,
         animationTime: animationTime,
         animationLanguage: animationLanguage,
         animationIsDubbed: animationIsDubbed,
         animationHasSubtitles: animationHasSubtitles,
         animationCountry: animationCountry,
         animationYear: animationYear,
      },
      resolver: yupResolver(schema),
   });

   const handleFormSubmit = (data) => {
      console.log("submitted Data =>", data);
      dispatch(editAnimationFromServer(data));
      console.log("submit ADD MOVIES");
      closeModalHandler();
   };
   const closeModalHandler = () => {
      reset();
      setIsopenEditModal(false);
   };

   return (
      <>
         <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
               <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                     <h3 className="text-3xl text-gray-700">مشخصات فیلم</h3>
                     <button
                        className="bg-transparent border-0 text-black float-right"
                        onClick={() => closeModalHandler()}
                     >
                        <span className="text-black opacity-7 h-6 w-6 text-xl block bg-gray-400 py-0 rounded-full">
                           x
                        </span>
                     </button>
                  </div>
                  {/* Form START */}
                  <div className="relative p-6 flex-auto">
                     <form
                        onSubmit={handleSubmit(handleFormSubmit)}
                        className="md:grid grid-cols-2 gap-4 bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full"
                     >
                        {/* animation Name */}
                        <div>
                           <label
                              htmlFor="animationName"
                              className="block text-black text-sm font-bold mb-1"
                           >
                              نام انیمیشن
                           </label>
                           <input
                              type="text"
                              id="animationName"
                              {...register("animationName")}
                              className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                           />
                           {errors.animationName && (
                              <span className="text-red-500 text-xs">
                                 {errors.animationName.message}
                              </span>
                           )}
                        </div>
                        {/* animation Poster */}
                        <div>
                           <label className="block text-black text-sm font-bold mb-1">
                              پوستر
                           </label>
                           <input
                              type="text"
                              id="animationPoster"
                              {...register("animationPoster")}
                              className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                           />
                           {errors.animationPoster && (
                              <span className="text-red-500 text-xs">
                                 {errors.animationPoster.message}
                              </span>
                           )}
                        </div>
                        {/* animation Genre */}
                        <div>
                           <label
                              htmlFor="animationGenre"
                              className="block text-black text-sm font-bold mb-1"
                           >
                              ژانر
                           </label>
                           <input
                              type="text"
                              id="animationGenre"
                              {...register("animationGenre")}
                              className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                           />
                           {errors.animationGenre && (
                              <span className="text-red-500 text-xs">
                                 {errors.animationGenre.message}
                              </span>
                           )}
                        </div>
                        {/* animation Time */}
                        <div>
                           <label
                              htmlFor="animationTime"
                              className="block text-black text-sm font-bold mb-1"
                           >
                              مدت زمان
                           </label>
                           <input
                              type="text"
                              id="animationTime"
                              {...register("animationTime")}
                              className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                           />
                           {errors.animationTime && (
                              <span className="text-red-500 text-xs">
                                 {errors.animationTime.message}
                              </span>
                           )}
                        </div>
                        {/* animation Language */}
                        <div>
                           <label
                              htmlFor="animationLanguage"
                              className="block text-black text-sm font-bold mb-1"
                           >
                              زبان اصلی
                           </label>
                           <input
                              type="text"
                              id="animationLanguage"
                              {...register("animationLanguage")}
                              className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                           />
                           {errors.animationLanguage && (
                              <span className="text-red-500 text-xs">
                                 {errors.animationLanguage.message}
                              </span>
                           )}
                        </div>
                        {/* animation Translate */}
                        <div>
                           {/* animation IsDubbed */}
                           <label
                              htmlFor="animationIsDubbed"
                              className="block text-black text-sm font-bold mb-1"
                           >
                              دوبله فارسی
                           </label>
                           <input
                              type="checkbox"
                              id="animationIsDubbed"
                              {...register("animationIsDubbed")}
                              className=""
                           />
                           {/* animation HasSubtitles */}
                           <label
                              htmlFor="animationHasSubtitles"
                              className="block text-black text-sm font-bold mb-1"
                           >
                              زیرنویس
                           </label>
                           <input
                              type="checkbox"
                              id="animationHasSubtitles"
                              {...register("animationHasSubtitles")}
                              className=""
                           />
                        </div>
                        {/* animation Country */}
                        <div>
                           <label
                              htmlFor="animationCountry"
                              className="block text-black text-sm font-bold mb-1"
                           >
                              کشور سازنده
                           </label>
                           <select
                              className="form-select text-gray-800"
                              id="animationCountry"
                              {...register("")}
                           >
                              <option value="">country</option>
                              <option value="Afghanistan">Afghanistan</option>
                              <option value="Albania">Albania</option>
                              <option value="America">America</option>
                              <option value="Argentina">Argentina</option>
                              <option value="Armenia">Armenia</option>
                              <option value="Australia">Australia</option>
                              <option value="Austria">Austria</option>
                              <option value="Azerbaijan">Azerbaijan</option>
                              <option value="Bahrain">Bahrain</option>
                              <option value="Bangladesh">Bangladesh</option>
                              <option value="Barbados">Barbados</option>
                              <option value="Belarus">Belarus</option>
                              <option value="Bolivia">Bolivia</option>
                              <option value="Brazil">Brazil</option>
                              <option value="Cameroon">Cameroon</option>
                              <option value="Canada">Canada</option>
                              <option value="Chile">Chile</option>
                              <option value="China">China</option>
                              <option value="Cuba">Cuba</option>
                              <option value="Czech Republic">
                                 Czech Republic
                              </option>
                              <option value="Denmark">Denmark</option>
                              <option value="Ecuador">Ecuador</option>
                              <option value="Egypt">Egypt</option>
                              <option value="France">France</option>
                              <option value="Germany">Germany</option>
                              <option value="Greece">Greece</option>
                              <option value="Haiti">Haiti</option>
                              <option value="Hong Kong">Hong Kong</option>
                              <option value="Hungary">Hungary</option>
                              <option value="Iceland">Iceland</option>
                              <option value="India">India</option>
                              <option value="Indonesia">Indonesia</option>
                              <option value="Iran">Iran</option>
                              <option value="Iraq">Iraq</option>
                              <option value="Ireland">Ireland</option>
                              <option value="Israel">Israel</option>
                              <option value="Italy">Italy</option>
                              <option value="Jamaica">Jamaica</option>
                              <option value="Japan">Japan</option>
                              <option value="Kazakhstan">Kazakhstan</option>
                              <option value="Kenya">Kenya</option>
                              <option value="Korea">Korea</option>
                              <option value="Kuwait">Kuwait</option>
                              <option value="Kyrgyzstan">Kyrgyzstan</option>
                              <option value="Luxembourg">Luxembourg</option>
                              <option value="Macao">Macao</option>
                              <option value="Madagascar">Madagascar</option>
                              <option value="Malawi">Malawi</option>
                              <option value="Mexico">Mexico</option>
                              <option value="Monaco">Monaco</option>
                              <option value="Nepal">Nepal</option>
                              <option value="Netherlands">Netherlands</option>
                              <option value="New Zealand">New Zealand</option>
                              <option value="Nicaragua">Nicaragua</option>
                              <option value="Nigeria">Nigeria</option>
                              <option value="Oman">Oman</option>
                              <option value="Pakistan">Pakistan</option>
                              <option value="Panama">Panama</option>
                              <option value="Paraguay">Paraguay</option>
                              <option value="Peru">Peru</option>
                              <option value="Philippines">Philippines</option>
                              <option value="Poland">Poland</option>
                              <option value="Portugal">Portugal</option>
                              <option value="Qatar">Qatar</option>
                              <option value="Romania">Romania</option>
                              <option value="Russian">Russian</option>
                              <option value="Rwanda">Rwanda</option>
                              <option value="Saudi Arabia">Saudi Arabia</option>
                              <option value="Senegal">Senegal</option>
                              <option value="Serbia">Serbia</option>
                              <option value="Singapore">Singapore</option>
                              <option value="Slovakia">Slovakia</option>
                              <option value="South Africa">South Africa</option>
                              <option value="Spain">Spain</option>
                              <option value="Sri Lanka">Sri Lanka</option>
                              <option value="Sudan">Sudan</option>
                              <option value="Swaziland">Swaziland</option>
                              <option value="Sweden">Sweden</option>
                              <option value="Taiwan">Taiwan</option>
                              <option value="Tajikistan">Tajikistan</option>
                              <option value="Thailand">Thailand</option>
                              <option value="Turkey">Turkey</option>
                              <option value="Turkmenistan">Turkmenistan</option>
                              <option value="Ukraine">Ukraine</option>
                              <option value="United Arab Emirates">
                                 United Arab Emirates
                              </option>
                              <option value="United Kingdom">
                                 United Kingdom
                              </option>
                              <option value="United States">
                                 United States
                              </option>
                              <option value="Uruguay">Uruguay</option>
                              <option value="Uzbekistan">Uzbekistan</option>
                              <option value="Venezuela">Venezuela</option>
                              <option value="British">British</option>
                              <option value="Yemen">Yemen</option>
                              <option value="Zimbabwe">Zimbabwe</option>
                           </select>
                        </div>
                        {/* animation Year */}
                        <div>
                           <label
                              htmlFor="animationYear"
                              className="block text-black text-sm font-bold mb-1"
                           >
                              سال ساخت
                           </label>
                           <input
                              type="number"
                              id="animationYear"
                              {...register("animationYear")}
                              className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                           />
                           {errors.animationYear && (
                              <span className="text-red-500 text-xs">
                                 {errors.animationYear.message}
                              </span>
                           )}
                        </div>

                        <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                           <button
                              className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                              type="button"
                              onClick={() => closeModalHandler()}
                           >
                              بستن
                           </button>
                           <button
                              className="text-white bg-green-500 active:bg-green-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                              type="submit"
                           >
                              ثبت
                           </button>
                        </div>
                     </form>
                  </div>
                  {/* Form End */}
               </div>
            </div>
         </div>
      </>
   );
};

export default EditAnimationModal;
