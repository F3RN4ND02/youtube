import "./product.css";

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
    </div>
  );
};

export default Product;
