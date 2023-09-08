import { Link } from 'react-router-dom'
import Log from "../assets/logo.png"
import "./footer.css"
const Foaterbar = () => {
  return (
    <>
      <div className="FoaterContainer">
        <div className="FoaterContent">
        <Link to="/">
        <img src={Log} alt="" className='log'  />
        </Link>
          <div className="FoaterIcon">
          
          </div>
          <div className="FoaterIcon">
          <Link to="/">
            <span className='Copyright'>TM & © Lucasfilm Ltd. All Rights Reserved</span>
            </Link>
          </div>
          
         
        </div>
      </div>
    </>
  );
};

export default Foaterbar;
