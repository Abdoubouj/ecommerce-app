import logo from "../../assets/logo.svg"
const Header = () => {
  return (
    <header className="app-header border-b-2 border-light">
        <div className="header-top">
            <div className="logo">
               <img src={logo} alt="#" width={100} />
            </div>
        </div>
    </header>
  )
}

export default Header