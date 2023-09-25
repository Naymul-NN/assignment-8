import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import DataCard from "./DataCard";
const Home = () => {
     
    const cards = useLoaderData()

    return (
        <div>
            <Banner></Banner>

            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5  pt-12">
                {
                    cards?.map(card => <DataCard key={card.id} card={card}></DataCard>)
                }
            </div>
        </div>
    );
};

export default Home;