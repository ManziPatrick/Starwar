import {useState,useEffect}from "react"
import "./lister.css"
import Avenger from "../assets/Avengers.jpg"
import MainLayout from "../componet/layout"
import { Link, useParams } from "react-router-dom";
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
      <MainLayout>
        <div className="body">
          <div className="characterDetail">
            <h1>{character.name}</h1>
            <p>Gender: {character.gender}</p>
            <p>Height: {character.height}</p>
            <p>Mass: {character.mass}</p>
            <p> </p>
            <Link to="/">Back to List</Link>
          </div>
        </div>
      </MainLayout>
    );
  };
  
  const Lister = () => {
    const [Characters, setCharacters] = useState<Character[]>([]);
    const [Search, setSearch] = useState<string>('');
    const [currentPage, setCurrentPage] = useState<number>(1);
    const itemsPerPage = 10;
  
    useEffect(() => {
      const fetchCharacters = async () => {
        try {
          const response = await fetch("https://swapi.dev/api/people/");
          const data = await response.json();
          setCharacters(data.results);
        } catch (error) {
          console.error("Error fetching characters:", error);
        }
      };
  
      fetchCharacters();
    }, []);
  
    const filteredCharacters = Characters.filter((character) =>
      character.name.toLowerCase().includes(Search.toLowerCase())
    );
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
  
    const currentCharacters = filteredCharacters.slice(startIndex, endIndex);
  
    return (
      <MainLayout>
        <div className="body">
          <nav className="subNav">
            <a href="#">popular</a>
            <a href="#">season</a>
            <a href="#">season2</a>
            <a href="#">season3</a>
            <a href="#">season4</a>
            <a href="#">season5</a>
            <div className="input">
            <input
              type="text"
              placeholder="search character"
              value={Search}
              onChange={(e) => setSearch(e.target.value)}
              name=""
              id=""
            />
            </div>
          </nav>
          <div className="ListerCards">
            {currentCharacters.map((character, index) => (
              <Link key={index} to={`/character/${index + 1}`}> 
                <div className="cardConteiner">
                  <img src={Avenger} alt="" />
                  <div className="Mdec">
                    <h1>{character.name}</h1>
                    <p>{character.height}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="pagination">
            {Array.from({ length: Math.ceil(filteredCharacters.length / itemsPerPage) }, (_, i) => (
              <button key={i} onClick={() => setCurrentPage(i + 1)}>
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      </MainLayout>
    );
  };
  
  export default Lister;