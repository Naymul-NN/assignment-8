/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const DataCard = ({ card }) => {
  const { id, picture, title, category, card_bg,text_color,text_button_bg } = card || {};
  const custombackgroundcolor = `${card_bg}`;
  //console.log(custombackgroundcolor);

  return (
    <div className="pt-10">
      <Link to={`/details/${id}`}>
        <div style={{ backgroundColor: custombackgroundcolor }} className={`rounded-xl w-72 `}>
          <figure>
            <img src={picture} alt="Shoes" />
          </figure>
          <div className="pl-3 pt-3">   
           <button style={{backgroundColor:text_button_bg,color:text_color}} className="py-1 px-1 flex justify-start rounded-md">{category}</button>
            <p style={{color:text_color}} className="text-xl py-3">{title}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default DataCard;
