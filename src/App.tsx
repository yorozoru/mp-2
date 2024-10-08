import { useEffect, useState } from 'react'
import styled from "styled-components";
import Champions from './components/Champions';
import { Summoners } from './interfaces/Summoners';


const ParentDiv=styled.div`
    width: 100;
    margin: auto;
    border: 10px #1E2328 solid;
`;


export default function App(){

  const [data, setData] = useState<Summoners[]>([]);

  useEffect(() =>{
    async function fetchData(): Promise<void> {
      const rawData = await fetch("https://ddragon.leagueoflegends.com/cdn/14.3.1/data/en_US/champion.json");
      const result = await rawData.json();
      const championsData = Object.values(result.data).map((champ: any) => ({
        name: champ.name,
        id: champ.id,
        key: champ.key,
        title: champ.title,
        tags: champ.tags,
    }));
      setData(championsData);
  }
  fetchData()
      .then(() => console.log("Data fetched successfully"))
      .catch((e: Error) => console.log("There was the error: " + e));
    }, [data.length]);

return(
  <ParentDiv>
      <Champions data={data}/>
  </ParentDiv>
)
}