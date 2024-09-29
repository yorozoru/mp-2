import styled from 'styled-components'
import { Summoners } from '../interfaces/Summoners'
import Tags from './Tags';


const AllChampsDiv=styled.div`
    display: flex;
    flex-flow: row wrap;    
    justify-content: space-evenly;
    background-color: #C89B3C;
`;

const SingleChampDiv=styled.div`
    display: flex;
    flex-direction: column;   
    justify-content: center;
    max-width: 30%;
    padding: 2%;
    margin: 1%;
    font: small-caps bold calc(2px + 1vw) "Beaufort for LOL", Serif;
    text-align: center;
    border-radius: 15px;
    background-color:#F0E6D2;
`;

const BoxyImg = styled.img`
    border-radius: 15px;

`;

const image_processor = (champ_id: string) => {
    return `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champ_id}_0.jpg`;
};

export default function Champions(props : {data:Summoners[]}){
    return(
        <AllChampsDiv>
            {
                props.data.map((champ: Summoners) =>
                    <SingleChampDiv key = {champ.key}>
                        <h1>{champ.name.toUpperCase()}</h1>
                        <h3>{champ.title.toLowerCase()}</h3>
                        <Tags data = {champ.tags}></Tags>
                        <BoxyImg src={image_processor(champ.id)} alt={`image of ${champ.name}`} />
                    </SingleChampDiv>
                )
            }
        </AllChampsDiv>
    )
}