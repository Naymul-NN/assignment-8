import { useLoaderData, useParams } from "react-router-dom";

const Details = () => {

   
    const cards = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const card = cards.find ( job => job.id === idInt);
    return (
        <div>
            <div className="card w-[400px] mx-auto bg-base-100 shadow-xl">
            <figure className="w-full"><img src={card.details_pic} alt="Shoes" height="300px" width="400px"/></figure>
            <div className="card-actions justify-start">
            <button className="btn bg-red-300 mt-[-50px]">donate {card.price}</button>
            </div>
            <div className="card-body">
             <h2 className="card-title">{card.category}</h2>
             <p>{card.description}</p>
            
          </div>
          </div>
        </div>
    );
};

export default Details;