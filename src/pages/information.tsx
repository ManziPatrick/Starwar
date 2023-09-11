import  { useState, useEffect } from "react";
import movis from "../assets/movis.png"

import Character from "./information"
import MainLayout from "../componet/layout";
import { Link, useParams } from "react-router-dom";
import "./inf.css";

interface Character {
  name: string;
  gender: string;
  height: string;
  mass: string;
  url: string;
}

const CharacterDetail = () => {
  const { characterId }: { characterId?: string } = useParams();

  console.log('characterId:', characterId);
  const [character, setCharacter] = useState<Character | null>(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const response = await fetch(`https://swapi.dev/api/people/${characterId}/`);
        const data = await response.json();
        setCharacter(data);
      } catch (error) {
        console.error("Error fetching character:", error);
      }
    };

    fetchCharacter();
  }, [characterId]);

  if (!character) {
    return <div>Loading...</div>;
  }

  return (
    <><MainLayout>
      <div className="body">
        <div className="Fcontair"> 
        <div className="intro">
        <h1>Name:{character.name}</h1>
        <h2>played by:</h2>
        
        <div className="characterDetail">
        <div className="Iage">
        <p><h1>{character.height}</h1>
         Height</p>
         <div className="line">
         </div>
         <p><h1>{character.mass}</h1>
         mass</p>
         <div className="line">
         </div>
         <p><h1>{character.mass}</h1>
         mass</p>
         </div>

          <p>Gender: {character.gender}</p>
          
          <p>skin color: {character.mass}</p>
          <p>Eye Color: {character.gender}</p>
          
          <p>Hair color: {character.mass}</p>
          <p>Gender: {character.gender}</p>
          
          <p>home wold: {character.mass}</p>
          <p> Species: {character.mass}</p>

          <div className="head"><div className="line">
         </div><h1 > Vehicles</h1></div>
        

         <p><div className="circe"></div>lorem ipsum</p>
         
          <Link to="/">Back to List</Link>
        </div>
        </div>
        <div className="image">
<img src={movis} alt=""  />
        </div>
        </div>
      </div>
     
    </MainLayout></>
  );
};

export default CharacterDetail;
