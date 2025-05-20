import './header.css'
import Logo from '../Resources/logo.jpg'
export const Header = () =>{
    return <>
    <div className="container-fluid header mb-4 ps-3 pe-3">
    <header className="d-flex flex-wrap justify-content-center py-2 border-bottom" style={{maxHeight:"2.5%"}}>
      <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
        <img src={Logo} className="bi me-2" width="100" height="40"/>

      </a>

    </header>
  </div>
    </>
}