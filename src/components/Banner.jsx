
const Banner = () => {
    return (
        <div>
            <div className="relative h-[400px] bg-no-repeat	bg-cover bg-[url('https://i.ibb.co/48w1dfd/b4.jpg')]">
             <div className="absolute inset-0 bg-white bg-opacity-50"></div>
            </div>
           <div className="relative mt-[-150px]">  
           <h1 className="pl-36 text-3xl font-bold text-black">Humenity is love So spread the love</h1> 
            <input className="border border-sky-200 ml-60 mt-3 py-2 pr-24 rounded-l-lg" type="text" placeholder="shearce here ..."/>
             <button className="px-4 py-2 bg-red-500 rounded-r-lg">sherch</button>     
            </div>

        
        </div>
    );
};

export default Banner;