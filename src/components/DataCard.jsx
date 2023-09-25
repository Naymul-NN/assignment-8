/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const DataCard = ({ card }) => {
  const { id, picture, title, category, card_bg,category_bg } = card || {};
  const custombackgroundcolor = `${card_bg}`;
  const categoryBg = `${category_bg}`
  console.log(custombackgroundcolor);

  return (
    <div>
      <Link to={`/details/${id}`}>
        <div className={`rounded-xl w-72 ${custombackgroundcolor}`}>
          <figure>
            <img src={picture} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className={`text-red-400 font-bold w-20 rounded-md ${categoryBg}}`}>{category}</h2>
            <p className="">{title}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default DataCard;
