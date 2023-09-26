import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Banner = () => {

    const [jsonData, setJsonData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [isCleared, setIsCleared] = useState(false);

    useEffect(() => {
      fetch('/cardData.json')
        .then((response) => response.json())
        .then((data) => setJsonData(data))
        .catch((error) => console.error('Error fetching JSON:', error));
    }, []);
    const filteredData = jsonData.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const clearSearch = () => {
    setSearchTerm('');
    setIsCleared(true);
  };

  const toggleClear = () => {
    if (isCleared) {
      setSearchTerm('');
    }
    setIsCleared(!isCleared);
  };

    return (
        <div>
            <div className="relative h-[400px] bg-no-repeat	bg-cover bg-[url('https://i.ibb.co/48w1dfd/b4.jpg')]">
             <div className="absolute inset-0 bg-white bg-opacity-50"></div>
            </div>
           <div className="relative mt-[-150px]">  
           <h1 className="pl-36 text-3xl font-bold text-black">Humenity is love So spread the love</h1> 
            <input className="border border-sky-200 ml-60 mt-3 py-2 pr-24 rounded-l-lg" 
            type="text"
             placeholder="shearce here ..."
             value={searchTerm}
             onChange={(e) => setSearchTerm(e.target.value)}
             />
             <button onClick={toggleClear}
             className="px-4 py-2 bg-red-500 rounded-r-lg"> {isCleared ? 'Clear':'Search'}</button>     
            </div>

            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5  pt-12">
                {
                   filteredData.map(data=> (
                    <div key={data.id} className="pt-10">
                   <Link to={`/details/${data.id}`}>
                     <div style={{ backgroundColor: data.card_bg }} className={`rounded-xl w-72 `}>
                       <figure>
                         <img src={data.picture} alt="Shoes" />
                       </figure>
                       <div className="pl-3 pt-3">   
                        <button style={{backgroundColor:data.text_button_bg,color:data.text_color}} className="py-1 px-1 flex justify-start rounded-md">{data.category}</button>
                         <p style={{color:data.text_color}} className="text-xl py-3">{data.title}</p>
                       </div>
                     </div>
                   </Link>
                 </div>
                   ))
                }
            </div>
        </div>
    );
};

export default Banner;