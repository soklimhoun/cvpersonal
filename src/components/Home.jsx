import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebook, FaLocationDot, FaTelegram } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import img from '../assets/img.jpeg'
import html from '../assets/html.jpg'
import css from '../assets/css.jpg'
import react from '../assets/react.jpg'
import javascript from '../assets/javascript.jpg'
import laravel from '../assets/laravel.jpg'
import personal from '../assets/personal.png'

function Home() {
  return (
<>
    <div className="flex flex-col-reverse sm:flex-row items-center sm:items-stretch justify-between gap-6 p-6">
      {/* Text section */}
      <div className="sm:w-1/2 flex items-center justify-center">
        <div className="space-y-4 max-w-md text-left">
          <h1 className="text-3xl font-bold">I AM</h1>
          <p className="text-2xl font-semibold text-indigo-700">SOK LIMHOUN</p>
          <p className="text-lg">WEB DEVELOPER</p>
          <button className="bg-gray-300 px-6 py-2 rounded mt-6 hover:bg-gray-400 transition">
            HIRE ME
          </button>
        </div>
      </div>

      {/* Image section */}
      <div className="sm:w-1/2">
        <img
          className="w-full rounded-lg border-2 border-indigo-500/50 shadow-lg"
          src={img}
          alt="Banner"
        />
      </div>
    </div>


    <h1 className="text-center mt-10 mb-10 sm:mb-30sm:mt-30 text-3xl font-semibold underline ">About Me</h1>
   
<div className="flex flex-col sm:flex-row justify-between text-center p-6">
  <div className="bg-gray-200 w-full sm:w-1/3 p-4 flex justify-center items-center flex-col">
    <img
      className="rounded-full w-70 h-70 sm:w-60 sm:h-60 object-cover border-3 border-indigo-500/50 shadow-lg"
      src={personal}
      alt="Profile"
    />
    <h1 className="mt-10 bg-gray-400 w-full p-4 rounded-md mb-10 ">PERSONAL </h1>
    <p><span className="text-indigo-700">DATE OF BITH: </span>21,12,200</p>
    <p><span className="text-indigo-700">GENDER: </span>MALE</p>
    <p><span className="text-indigo-700" >MATERIAL STATE: </span>Single</p>
    <p><span className="text-indigo-700">PLACE OF BIRTH: </span> KAMPONG CHAM PROVINCE</p>

      <h1 className="mt-10 bg-gray-400 w-full p-4 rounded-md mb-10 ">EDUCATION </h1>
      <p><span className="text-indigo-700">HIGH SCHOOL:</span> soramrith high school <span>2019-2022</span> </p>
      <p><span className="text-indigo-700">UNOVERCITY:</span> BELTEI UNIVERCITY <span>2024-2025</span> </p>
      <p><span className="text-indigo-700">SHORT COURSE:</span> BELTEI UNIVERCITY <span>2024-2025</span> </p>
  </div>
  <div className="bg-gray-500 w-full sm:w-1/3 p-4 text-center text-white">
  <h1 className="mt-10 bg-gray-400 w-full p-4 rounded-md mb-10 ">TRAINNING COURSES </h1>

  <li><span>TRAINNIGN : </span> at Beltei univercity year 1 Semester 1</li>
  <li><span>TRAINNIGN : </span> at Beltei univercity year 1 Semester 2</li>
  <li><span>TRAINNIGN : </span> at Beltei univercity year 2 Semester 1</li>
  <li><span>TRAINNIGN : </span> at Beltei univercity year2 Semester 2</li>
  <li><span>TRAINNIGN : </span> at ONLINE COURSE</li>

 <h1 className="mt-10 bg-gray-400 w-full p-4 rounded-md mb-10 ">LANGAUGES </h1>
  <li><span>KHMER   : </span> Native</li>
  <li><span>ENGLISH : </span>Meduim</li>

 <h1 className="mt-10 bg-gray-400 w-full p-4 rounded-md mb-10 ">WORK EXPERIANCE  </h1>
 <li><span> EXPERIANCE : </span>No Experiance with Real Project / Company</li>
 <li><span> EXPERIANCE : </span>Teach at ReanClass </li>

</div>
  <div className="bg-gray-800 w-full sm:w-1/3 p-4 text-white text-center">
 <h1 className="mt-10 bg-gray-400 w-full p-4 rounded-md mb-20 ">SKILLS </h1>
 <h1 className="mt-10 bg-gray-400 w-70 p-4 rounded-md  m-auto sm:w-50 lg:w-80 ">Front End </h1>
  <div className="flex gap-20 sm:gap-5 lg:gap-30">
 <img
      className="rounded-full w-30 h-30 object-cover mt-10 border-3 border-indigo-500/50 shadow-lg md:w-25 md:h-25 lg:w-30 lg:h-30"
      src={html}
      alt="Profile"
    />
    <h1 className="flex justify-center items-center mt-10 ">HTML</h1>
</div>
 <div className="flex gap-10 sm:gap-2 lg:gap-20">
 <img
      className="rounded-full w-30 h-30 object-cover mt-10 border-3 border-indigo-500/50 shadow-lg md:w-25 md:h-25 lg:w-30 lg:h-30"
      src={css}
      alt="Profile"
    />
    <h1 className="flex justify-center items-center mt-10  ">CSS / BOOTSTRAP / TAILWIND</h1>
</div>

 <div className="flex gap-20 sm:gap-5 lg:gap-20">
 <img
      className="rounded-full w-30 h-30 object-cover mt-10 border-3 border-indigo-500/50 shadow-lg md:w-25 md:h-25 lg:w-30 lg:h-30"
      src={javascript}
      alt="Profile"
    />
    <h1 className="flex justify-center items-center mt-10 ">JAVASCRIPT</h1>
</div>
 <div className="flex gap-20 sm:gap-5 lg:gap-20">
 <img
      className="rounded-full w-30 h-30 object-cover mt-10 border-3 border-indigo-500/50 shadow-lg md:w-25 md:h-25 lg:w-30 lg:h-30"
      src={react}
      alt="Profile"
    />
    <h1 className="flex justify-center items-center mt-10 ">REACT JS</h1>
</div>
 <h1 className="mt-10 bg-gray-400 w-70 p-4 rounded-md  m-auto sm:w-50  lg:w-80">Back End </h1>
 <div className="flex gap-10 sm:gap-2 lg:gap-20">
 <img
      className="rounded-full w-30 h-30 object-cover mt-10 border-3 border-indigo-500/50 shadow-lg md:w-25 md:h-25 lg:w-30 lg:h-30"
      src={laravel}
      alt="Profile"
    />
    <h1 className="flex justify-center items-center mt-10   ">PHP / LARAVEL / DATABASE</h1>
</div>
</div>
</div>


   <div className="bg-red-900 py-6 px-4 flex items-center justify-center text-white">
      <div className="w-full max-w-6xl flex flex-col sm:flex-row sm:justify-between gap-6">
        {/* Contact Info */}
        <div className="space-y-2 text-sm sm:text-base">
          <p className="flex items-center gap-2"><FaPhoneAlt /> <span>0883893940</span></p>
          <p className="flex items-center gap-2"><MdOutlineMailOutline /> Chhumbaray@gmail.com</p>
          <p className="flex items-center gap-2"><FaLocationDot /> 51 street, home 18, Beng Keng Kong 1, Phnom Penh</p>
          <hr/>
        </div>

        {/* Social Links */}
        <div className=" text-3xl">
          <h1 className="text-sm">FIND AND CONTACT ME ON SOCAL MEDAI</h1>
           <div className="flex gap-6 text-3xl justify-start sm:justify-end mt-7 mr-20">
              <a className="hover:text-gray-400" href="https://t.me/limhoun"><FaTelegram /></a>
              <a className="hover:text-gray-400" href="https://web.facebook.com/sok.limhuon.5"><FaFacebook /></a>
           </div>
        </div>
      </div>
    </div>


</>
  );
}

export default Home;
