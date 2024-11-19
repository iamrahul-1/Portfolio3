import Waves from "../assets/waves.svg";
export default function FirstPage() {
  return (
    <div className="h-auto md:h-screen w-screen bg-[#257180] flex items-center justify-center">
      <h1 className="text-4xl mt-[10rem] md:mt-32 mb-[7rem] md:text-7xl p-2 font-bold text-white fredericka-the-great-regular">
        Hi, I'm Rahul Chauhan.
        <br /> A FullStack Web Developer.
      </h1>
      <img
        className="absolute w-full h-14 top-[65vh] left-0 md:hidden"
        src={Waves}
        alt="Waves"
      />
    </div>
  );
}
