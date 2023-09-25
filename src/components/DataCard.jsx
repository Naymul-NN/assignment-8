/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const DataCard = ({ card }) => {
  const { id, picture, title, category, card_bg,text_color } = card || {};
  const custombackgroundcolor = `${card_bg}`;
  //console.log(custombackgroundcolor);

  return (
    <div className="pt-10">
      <Link to={`/details/${id}`}>
        <div style={{ backgroundColor: custombackgroundcolor }} className={`rounded-xl w-72 `}>
          <figure>
            <img src={picture} alt="Shoes" />
          </figure>
          <div className="card-body">   
           <h2 style={{color: text_color}} >{category}</h2>
            <p style={{color:text_color}} className="text-xl">{title}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default DataCard;
