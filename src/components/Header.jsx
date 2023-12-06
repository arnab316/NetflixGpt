import { logo } from "../assets/index";
const Header = () => {
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10">
      <img className="w-36" src={logo} alt="logo" />
      <h1>Header</h1>
    </div>
  );
};

export default Header;
