import Link from "next/link";


const EventItem = (props) => {
    const {title, id, details, date, image}=props
    const ExploreLink = `/event/${id}`;
    return (
        
        <div className="m-16 flex shadow-2xl ">
           <div className="w-4/12">
           <img className="w-96 h-72 rounded-lg "   src={image} alt={title} />
           </div>
       
            <div className=" mt-6 w-8/12">
                <h2 className="font-bold text-3xl">{title}</h2>
                <p className="mt-6">{date}</p>
                <p className="text-xl w-full mt-6">{details}</p>
                <button className="mt-10 border rounded-lg p-2 hover:bg-white hover:text-black hover:font-bold">
                <Link href={ExploreLink}>Explore More...</Link>
            </button>
            </div>
            
        
        </div>
    );
};

export default EventItem;