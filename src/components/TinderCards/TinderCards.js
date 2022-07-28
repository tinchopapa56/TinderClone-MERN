import React, {useEffect, useState} from 'react'
import TarjetaPersona from 'react-tinder-card';
import "./TinderCards.css"
import axios from "../axios"

function TinderCards() {

    const[people,setPeople] = useState([]);

    useEffect( ()=>{
       const fetchData = async ()=>{
        const req = await axios.get("/tinder/cards")

        setPeople(req.data)
       }
       fetchData();
    }, [])

    console.log(people)
    

  return (
    <div className="tinderCards">
        <div className="tinderCards__cardContainer">
            {people.map (person => (

            <TarjetaPersona
                className="swipe"
                key={person.name}
                preventSwipe={['up','down']}
            >
                <div 
                    className="card"
                    style={{backgroundImage:`url(${person.url})`}}
                >
                    <h3>{person.name}</h3>
                </div>
            </TarjetaPersona>
            ))
            }   
        </div>
    </div>
  )
}

export default TinderCards

/*
{
            name: "BIDEN",
            url: "https://pbs.twimg.com/profile_images/669103856106668033/UF3cgUk4_400x400.jpg"
        },
        {
            name: "ellen",
            url: "https://pbs.twimg.com/profile_images/669103856106668033/UF3cgUk4_400x400.jpg"
        },
        {
                name: "Jeff bezos",
                url: "https://pbs.twimg.com/profile_images/669103856106668033/UF3cgUk4_400x400.jpg"
        }
*/