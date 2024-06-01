import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="h-screen w-full">
      <Navbar />
      <div className="flex flex-col-reverse md:flex-row justify-around  items-center">
        <div className="text-white">
          <h1 className="md:text-5xl text-3xl">Coffinggx</h1>
          <h2 className="md:text-3xl md:ml-8 ml-3 mt-1 md:mt-3 text-2xl">
            Full Stack Web Developer
          </h2>
          <button className="bg-blue-600 text-white rounded-2xl p-2 text-2xl ml-6 mt-3">
            Hire me
          </button>
        </div>
        <div className="md:h-2/5 md:w-2/5  wi-[190px] ">
          <img src="../../public/luffy-gear-5-colored.png" />
        </div>
      </div>
    </div>
  );
};

export default Home;
