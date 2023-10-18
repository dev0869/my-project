import logo from "../assets/images/logo.png";
const Header = () => {
  return (
    <div className="w-full flex justify-between items-center pt-4 px-4">
      <div className="flex items-center gap-4 md:gap-10 ">
        <img
          src={logo}
          className="w-[60px]"
          alt="logo"
          style={{ }}
        />
        <p className="font-[400] font-[italic] text-[32px] text-gray almuni">
          CAR SERVICE
        </p>
      </div>
      <div className="flex gap-12">
        <p className="navlink">Spares </p>
        <p className="navlink">Blog </p>
        <p className="navlink">More </p>
      </div>
      
    </div>
  );
};

export default Header;
