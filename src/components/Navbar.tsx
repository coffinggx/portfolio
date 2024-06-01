import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="flex shadow-2xl  gap-4 p-5 justify-between items-center md:justify-between bg-black text-white">
      <div>
        <Link className="  title md:text-3xl text-2xl uppercase" to={"/"}>
          Coffinggx
        </Link>
      </div>
      <div className="flex gap-3">
        <Link to={"/about"}> About</Link>
        <Link to={"/projects"}> Projects</Link>
        <Link to={"/blog"}> Blog</Link>
        <Link to={"/contact"}> Contact</Link>
      </div>
    </div>
  );
};

export default Navbar;
