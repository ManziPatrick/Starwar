import React, { useState, useEffect } from "react";

import Avenger from "../assets/Avengers.jpg";
import Character from "./information.tsx"
import MainLayout from "../componet/layout";
import { Link, useParams } from "react-router-dom";
import "./lister.css";

interface Character {
  name: string;
  gender: string;
  height: string;
  mass: string;
  url: string;
}

const CharacterDetail = () => {
  const { characterId }: { characterId: string } = useParams(); 
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
        <div className="characterDetail">
          <h1>{character.name}</h1>
          <p>Gender: {character.gender}</p>
          <p>Height: {character.height}</p>
          <p>Mass: {character.mass}</p>
          <Link to="/">Back to List</Link>
        </div>
      </div>
     
    </MainLayout></>
  );
};

export default CharacterDetail;
