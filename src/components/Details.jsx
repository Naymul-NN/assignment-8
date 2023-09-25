import { useLoaderData, useParams } from "react-router-dom";
import swal from "sweetalert";

const Details = () => {

   
    const cards = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const card = cards.find ( job => job.id === idInt);


    const handleAddToDonation = () =>{

        const addedDonation = [];
      const donationMony = JSON.parse(localStorage.getItem('donations'));
        
      if(!donationMony){
           addedDonation.push(card);
           localStorage.setItem("donations",JSON.stringify(addedDonation));
           swal("Good job!", "You donate successfully!", "success");
        }
        
        else
        
        
        {
             const isExist = donationMony.find(donation => donation.id === card.id)

             if(!isExist){

                addedDonation.push(...donationMony,card);
                localStorage.setItem("donations",JSON.stringify(addedDonation));
                swal("Good job!", "You donate successfully!", "success");

             }
             else{
                swal("error!", "you already add this!" , "error",);
            }

        
      }

    }
    return (
        <div>
            <div className="card w-[400px] mx-auto bg-base-100 shadow-xl flex">
           
           <figure ><img src={card.details_pic} alt="Shoes" height="300px" width="400px"/></figure>
            <div className="card-actions justify-start">
            <button onClick={handleAddToDonation} className="btn bg-red-300 mt-[-50px]">donate {card.price}</button>
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