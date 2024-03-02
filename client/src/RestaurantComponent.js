import './App.css';

export default function RestaurantComponent({title, description, foodType,location}) {

    return (
        <div className="block">
            <div className="image">
                 <img src="" alt=""></img>
            </div>     
            <div className="texts">
                <h2 style={{fontSize: '50px'}}>{title}</h2>
                <p style={{fontSize: '25px'}}> {foodType}</p>
                <p style={{fontSize: '17px'}}>{description}</p>
                <p style={{fontSize: '17px'}}>{location}</p>
            </div>
    </div>
    )
}