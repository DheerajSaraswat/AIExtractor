import logo from "../assets/Gemini.png"

function Footer() {
  return (
    <div className="flex flex-col items-center mt-4 text-center px-4">
      <p className="flex flex-col items-center">
        Powered by Google Gemini 
        <img 
          src={logo} 
          alt="logo" 
          className="w-[150px] md:w-[190px] mt-2" 
        />
      </p>
    </div>
  );
}
export default Footer