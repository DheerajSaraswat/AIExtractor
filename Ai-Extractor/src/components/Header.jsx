import logo from "../assets/bulb.svg"

function Header() {
  return (
    <>
        <img src={logo} alt="logo" width={80} />
        <p className="text-2xl font-semibold">AI Keyword Extractor</p>
        <p className="mb-4">Paste your text here and we will extract keywords for you.</p>
    </>
  )
}
export default Header