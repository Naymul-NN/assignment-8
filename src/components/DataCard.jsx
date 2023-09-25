/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const DataCard = ({card}) => {

     const {id, picture, title, category, card_bg} = card || { }

    return (
        <div >
       <Link to ={`/details/${id}`}>
       <div className={`card w-72  shadow-xl bg-blue-200`}>
       <figure><img src={picture} alt="Shoes" /></figure>
      <div className="card-body">
      <h2 className="card-title">{category}</h2>
      <p>{title}</p>
    
      </div>
     </div>
       </Link>
        </div>
    );
};

export default DataCard;