import { CDN_URL } from "../utils/constants";
const cardStyle = {
    backgroundColor: "#f0f0f0"
}

const RestaurantCard = (props) =>{
    const {resData} = props;
    console.log(resData);
    const {
        cloudinaryImageId,
        name,
        avgRating,
        cuisines,
        costForTwo,
        deliveryTime
    } = resData?.info;

    return (
        <div className='res-card' style={cardStyle}>
            <img className='res-logo' alt='res-logo' src={CDN_URL+cloudinaryImageId}></img>
            <h3>{name}</h3>
            <h4>{cuisines.join(', ')}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo/100} FOR TWO</h4>
            <h4>{deliveryTime} minutes</h4>
        </div>
    );
}

export default RestaurantCard;