import profile from "../../assets/images/profile.png";

const Header = () => {
  return (
    <header className="container mx-auto flex justify-between items-center p-4 my-6 border-b-2">
      <h1 className="text-4xl font-bold">knowledge cafe</h1>
      <img src={profile}></img>
    </header>
  );
};

export default Header;
