import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Donation = () => {
       
    const [donation, setDonation ] = useState([]);

    const [noFound, setNofound] = useState('');


    useEffect(()=>{

        const donationMony = JSON.parse(localStorage.getItem('donations'));
        
        if(donationMony){

            setDonation(donationMony);

        }else{
            setNofound('no data yet')
        }
        
    },[])
console.log(donation)

    return (
            <div>{noFound ? <p>{noFound}</p> : 
            <div>
                <div>
                    {
                         <div className="grid grid-cols-2 gap-5">
                         {
                             donation.map(money => (
                                 <div key={money.id} >
                                     <div className= {`items-center mt-6 flex bg-[#3b82f6]`}>
                                   <figure><img src={money.picture} alt="Shoes" /></figure>
                                   <div className="card-body">
                                    <h2 className="card-title">{money.category}</h2>
                                   <p>{money.title}</p>
                                    <div className="card-actions justify-start">
                                    <Link to = {`/details/${money.id}`}><button className="btn "> see details</button></Link>
                                     </div>
                                     </div>
                                  </div>
             
                                 </div>
                             ))
                         }
                     </div>
                    }
                </div>
            </div>
            
            }

            </div>
    );
};

export default Donation;