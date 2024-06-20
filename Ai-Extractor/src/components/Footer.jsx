import logo from "../assets/openai.png"

function Footer() {
  return (
    <div className="flex mt-4">
        <img src={logo} alt="logo" width={25}/>
        <p>Powered by OpenAI</p>
    </div>
  )
}
export default Footer