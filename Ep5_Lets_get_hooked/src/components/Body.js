import RestaurantCard from './RestaurantCard';
import resList from '../utils/mockData';
import {useState} from 'react'

const Body = () =>{
    let listOfRestaurantJS = [
        {
            "type": "restaurant",
            "data": {
              "type": "F",
              "id": "660675",
              "name": "Cafe Amudham",
              "uuid": "748db01d-25af-41a8-b012-ce948960efcb",
              "city": "1",
              "area": "Koramangala",
              "totalRatingsString": "1000+ ratings",
              "cloudinaryImageId": "c4314ce3710e1cc462cef8d978a58ffc",
              "cuisines": [
                "South Indian"
              ],
              "tags": [
                
              ],
              "costForTwo": 20000,
              "costForTwoString": "₹200 FOR TWO",
              "deliveryTime": 19,
              "minDeliveryTime": 19,
              "maxDeliveryTime": 19,
              "slaString": "19 MINS",
              "lastMileTravel": 1,
              "slugs": {
                "restaurant": "cafe-amudham-koramangala-koramangala",
                "city": "bangalore"
              },
              "cityState": "1",
              "address": "No. 146, 5th Block, Koramangala, Bangalore, BTM Layout , B.B.M.P South, Karnataka-560095",
              "locality": "5th Block Kormangala",
              "parentId": 396620,
              "unserviceable": false,
              "veg": false,
              "select": false,
              "favorite": false,
              "tradeCampaignHeaders": [
                
              ],
              "ribbon": [
                {
                  "type": "PROMOTED"
                }
              ],
              "chain": [
                
              ],
              "feeDetails": {
                "fees": [
                  {
                    "name": "distance",
                    "fee": 2700,
                    "message": ""
                  },
                  {
                    "name": "time",
                    "fee": 0,
                    "message": ""
                  },
                  {
                    "name": "special",
                    "fee": 0,
                    "message": ""
                  }
                ],
                "totalFees": 2700,
                "message": "",
                "title": "Delivery Charge",
                "amount": "2700",
                "icon": ""
              },
              "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
              },
              "longDistanceEnabled": 0,
              "rainMode": "NONE",
              "thirdPartyAddress": false,
              "thirdPartyVendor": "",
              "adTrackingID": "cid=7076522~p=1~eid=00000188-adaf-4117-1431-3a9f005c0100",
              "badges": {
                "imageBased": [
                  
                ],
                "textBased": [
                  
                ],
                "textExtendedBadges": [
                  
                ]
              },
              "lastMileTravelString": "1 kms",
              "hasSurge": false,
              "aggregatedDiscountInfoV3": {
                "header": "20% OFF",
                "subHeader": "UPTO ₹50",
                "discountTag": "",
                "headerTypeV2": 0
              },
              "sla": {
                "restaurantId": "660675",
                "deliveryTime": 19,
                "minDeliveryTime": 19,
                "maxDeliveryTime": 19,
                "lastMileTravel": 1,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
              },
              "promoted": true,
              "avgRating": "4.6",
              "totalRatings": 1000,
              "new": false
            },
            "subtype": "basic"
          },
          {
            "type": "restaurant",
            "data": {
              "type": "F",
              "id": "660676",
              "name": "Cafe Amudham 2",
              "uuid": "748db01d-25af-41a8-b012-ce948960efcb",
              "city": "1",
              "area": "Koramangala",
              "totalRatingsString": "1000+ ratings",
              "cloudinaryImageId": "c4314ce3710e1cc462cef8d978a58ffc",
              "cuisines": [
                "South Indian"
              ],
              "tags": [
                
              ],
              "costForTwo": 20000,
              "costForTwoString": "₹200 FOR TWO",
              "deliveryTime": 19,
              "minDeliveryTime": 19,
              "maxDeliveryTime": 19,
              "slaString": "19 MINS",
              "lastMileTravel": 1,
              "slugs": {
                "restaurant": "cafe-amudham-koramangala-koramangala",
                "city": "bangalore"
              },
              "cityState": "1",
              "address": "No. 146, 5th Block, Koramangala, Bangalore, BTM Layout , B.B.M.P South, Karnataka-560095",
              "locality": "5th Block Kormangala",
              "parentId": 396620,
              "unserviceable": false,
              "veg": false,
              "select": false,
              "favorite": false,
              "tradeCampaignHeaders": [
                
              ],
              "ribbon": [
                {
                  "type": "PROMOTED"
                }
              ],
              "chain": [
                
              ],
              "feeDetails": {
                "fees": [
                  {
                    "name": "distance",
                    "fee": 2700,
                    "message": ""
                  },
                  {
                    "name": "time",
                    "fee": 0,
                    "message": ""
                  },
                  {
                    "name": "special",
                    "fee": 0,
                    "message": ""
                  }
                ],
                "totalFees": 2700,
                "message": "",
                "title": "Delivery Charge",
                "amount": "2700",
                "icon": ""
              },
              "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
              },
              "longDistanceEnabled": 0,
              "rainMode": "NONE",
              "thirdPartyAddress": false,
              "thirdPartyVendor": "",
              "adTrackingID": "cid=7076522~p=1~eid=00000188-adaf-4117-1431-3a9f005c0100",
              "badges": {
                "imageBased": [
                  
                ],
                "textBased": [
                  
                ],
                "textExtendedBadges": [
                  
                ]
              },
              "lastMileTravelString": "1 kms",
              "hasSurge": false,
              "aggregatedDiscountInfoV3": {
                "header": "20% OFF",
                "subHeader": "UPTO ₹50",
                "discountTag": "",
                "headerTypeV2": 0
              },
              "sla": {
                "restaurantId": "660675",
                "deliveryTime": 19,
                "minDeliveryTime": 19,
                "maxDeliveryTime": 19,
                "lastMileTravel": 1,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
              },
              "promoted": true,
              "avgRating": "3.6",
              "totalRatings": 1000,
              "new": false
            },
            "subtype": "basic"
          },
    ];
    const [listOfRestaurant, setListOfRestaurant] = useState(resList);
    return (
        <div className='Body'>
            <div className='filter'>
                <button className='filter-btn' onClick={()=>{const filteredRes = listOfRestaurant.filter((res) => res.data.avgRating > 4);console.log(listOfRestaurant);
                setListOfRestaurant(filteredRes)}}>Top rated restaurant</button>
            </div>
            <div className='res-container'>
                {listOfRestaurant.map((restaurant)=> (<RestaurantCard key={restaurant.restaurantId} resData={restaurant}/>))}
            </div>
        </div>
    );
}
export default Body;