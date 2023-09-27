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
            setNofound('no donation yet')
        }
        
    },[])
console.log(donation)
const handleRemove = () =>{
     localStorage.clear()
     setDonation([])
     setNofound('no donation yet');
}

const bgcolor = `${donation.card_bg}`;

    return (
            <div>{noFound ? <p className="text-center text-3xl font-bold text-red-500 pt-64">{noFound}</p> : 
            <div>
                { donation.length > 0 && <button onClick={handleRemove} className="px-5 bg-green-300 block mx-auto">Delet all donation</button>}
                <div>
                    {
                         <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                         {
                            isSee? donation.map(money => (
                                 <div key={money.id} >
                                     <div style={{ backgroundColor: bgcolor }} className="items-center mt-6 flex ">
                                   <figure><img src={money.picture} alt="Shoes" /></figure>
                                   <div className="pl-5">
                                    <button style={{color:money.text_color,backgroundColor:money.text_button_bg }} className="py-1 px-1">{money.category}</button>
                                   <p>{money.title}</p>
                                   <p style={{color:money.text_color}}>{money.price}</p>
                                    <div className="card-actions justify-start">
                                    <Link to = {`/details/${money.id}`}><button style={{backgroundColor:money.text_color}} className=" py-2 px-1 rounded-md"> see details</button></Link>
                                     </div>
                                     </div>
                                  </div>
             
                                 </div>
                             )) 
                            : donation.slice(0,4).map(money => (
                                <div key={money.id} >
                                    <div style={{backgroundColor:money.card_bg}} className= "items-center mt-6 flex ">
                                  <figure><img src={money.picture} alt="Shoes" /></figure>
                                  <div className="pl-5">
                                  <button style={{color:money.text_color,backgroundColor:money.text_button_bg }} className="flex justify-start rounded-md py-1 px-1">{money.category}</button>
                                  <p>{money.title}</p>
                                  <p style={{color:money.text_color}}>{money.price}</p>
                                   <div className="card-actions justify-start">
                                   <Link to = {`/details/${money.id}`}><button style={{backgroundColor:money.text_color}} className=" py-2 px-1 rounded-md"> see details</button></Link>
                                    </div>
                                    </div>
                                 </div>
            
                                </div>
                            )) 
                         }
                     </div>
                     
                    }
                      {donation.length > 4 &&  <button onClick={()=> setIsSee(!isSee)} className="px-5 my-8 bg-green-300 block mx-auto">{!isSee? "see all": "see less"}</button>}
                </div>
            </div>
            
            }

            </div>
    );
};

export default Donation;