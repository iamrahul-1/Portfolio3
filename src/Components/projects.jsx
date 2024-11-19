import img1 from "../assets/gradient.png";
import img2 from "../assets/shopping.png";
import img3 from "../assets/robo.png";
import img4 from "../assets/sb.png";
import img5 from "../assets/startup.png";
export default function Projects() {
  return (
    <div className="h-auto w-screen bg-[#FD8B51] flex items-center flex-col">
      <div className="mt-[6rem] md:mt-32 text-4xl md:text-7xl p-2 font-bold text-white fredericka-the-great-regular flex justify-center items-center">
        Projects
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-5 mt-5 justify-items-center">
        <div className="p-4 rounded transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
          <img
            className="h-40 rounded shadow w-auto mx-auto"
            src={img1}
            alt=""
          />
        </div>
        <div className="p-4 rounded transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
          <img
            className="h-40 rounded shadow w-auto mx-auto"
            src={img2}
            alt=""
          />
        </div>
        <div className="p-4 rounded transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
          <img
            className="h-40 rounded shadow w-auto mx-auto"
            src={img3}
            alt=""
          />
        </div>
        <div className="p-4 rounded transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
          <img
            className="h-40 rounded shadow w-auto mx-auto"
            src={img4}
            alt=""
          />
        </div>
        <div className="p-4 rounded transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
          <img
            className="h-40 rounded shadow w-auto mx-auto"
            src={img5}
            alt=""
          />
        </div>
        <div className="p-4 rounded md:text-5xl fredericka-the-great-regular transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 text-center">
          Coming Soon
        </div>
      </div>
    </div>
  );
}
