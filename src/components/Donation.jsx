import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Donation = () => {
       
    const [donation, setDonation ] = useState([]);

    const [noFound, setNofound] = useState('');

    const [isSee, setIsSee] = useState(false);


    useEffect(()=>{

        const donationMony = JSON.parse(localStorage.getItem('donations'));
        
        if(donationMony){

            setDonation(donationMony);

        }else{
            setNofound('no data yet')
        }
        
    },[])
console.log(donation)
const handleRemove = () =>{
     localStorage.clear()
     setDonation([])
     setNofound('no data yet');
}

    return (
            <div>{noFound ? <p className="text-center pt-64">{noFound}</p> : 
            <div>
                { donation.length > 0 && <button onClick={handleRemove} className="px-5 bg-green-300 block mx-auto">Delet all donation</button>}
                <div>
                    {
                         <div className="grid grid-cols-2 gap-5">
                         {
                            isSee? donation.map(money => (
                                 <div key={money.id} >
                                     <div className= {`items-center mt-6 flex bg-green-200`}>
                                   <figure><img src={money.picture} alt="Shoes" /></figure>
                                   <div className="card-body">
                                    <h2 className="card-title text-blue-600">{money.category}</h2>
                                   <p>{money.title}</p>
                                    <div className="card-actions justify-start">
                                    <Link to = {`/details/${money.id}`}><button className="btn "> see details</button></Link>
                                     </div>
                                     </div>
                                  </div>
             
                                 </div>
                             )) 
                            : donation.slice(0,4).map(money => (
                                <div key={money.id} >
                                    <div className= {`items-center mt-6 flex bg-green-200`}>
                                  <figure><img src={money.picture} alt="Shoes" /></figure>
                                  <div className="card-body">
                                   <h2 className="card-title text-blue-600">{money.category}</h2>
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
                     <button onClick={()=> setIsSee(!isSee)} className="px-5 mt-8 bg-green-300 block mx-auto">{!isSee? "see all": "see less"}</button>
                </div>
            </div>
            
            }

            </div>
    );
};

export default Donation;