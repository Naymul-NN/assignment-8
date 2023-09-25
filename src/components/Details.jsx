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
           
           <div className="relative"><img src={card.details_pic} alt="Shoes" height="300px" width="400px"/>
           <div className="absolute inset-0 mt-72 h-20 bg-black bg-opacity-50"></div>
           </div>
           
            <div className="relative mt-[-50px]">
            <button onClick={handleAddToDonation} className="py-2 rounded-xl px-1 bg-red-300 ">donate {card.price}</button>
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