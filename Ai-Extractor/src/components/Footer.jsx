import logo from "../assets/Gemini.png"

function Footer() {
  return (
    <div className="flex flex-col mt-4 text-center">
      <p>
        Powered by Google Gemini <img src={logo} alt="logo" className="mt-[-2rem]" width={190} />{" "}
      </p>
    </div>
  );
}
export default Footer