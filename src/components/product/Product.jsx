import React,{ useContext } from "react";
import { ThemeContext } from '../../context'
import "./product.css";

<<<<<<< HEAD
const Product = ({link,name,language,pushed}) => {
const theme = useContext(ThemeContext);
const darkMode = theme.state.darkMode;
  return (
    <div className="p">
        <h4 className='title'>{name}</h4>
        <h6 className='pushed'>{pushed}</h6>
        <h6 className='language'>{language}</h6>


=======
const Product = ({img,link,name,created,about,pushed}) => {
  return (
    <div className="p">
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      <a href={link} target="_blank" rel="noreferrer">
        <h3 className='title'>{name}</h3>
        <h3 className='title'>{created}</h3>
        <p className='p-about'>{about}</p>
        <p className='p-pushed'>{pushed}</p>
        <img src={img} alt="" className="p-img" />
      </a>
>>>>>>> 66f542b275be94fc509f93d0e73dd2e412538a57
    </div>
  );
};

export default Product;