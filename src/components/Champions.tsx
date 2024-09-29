import styled from 'styled-components'
import { Summoners } from '../interfaces/Summoners'


const AllChampsDiv=styled.div`
    display: flex;
    flex-flow: row wrap;    
    justify-content: space-evenly;
    background-color: bisque;
`;

const SingleChampDiv=styled.div`
    display: flex;
    flex-direction: column;   
    justify-content: center;
    max-width: 30%;
    padding: 2%;
    margin: 1%;
    font: italic small-caps bold calc(2px + 1vw) Papyrus, fantasy;
    text-align: center;
`;

const image_processor = (champ_id: string) => {
    return `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champ_id}_0.jpg`;
};

// background-color: ${(props)=>(props.status === "Alive" ? 'darkorange' : 'black')};
// color: ${(props) => (props.status !== "Alive" ? 'white' : 'black')};
// border: 3px darkred solid;
// font: italic small-caps bold calc(2px + 1vw) Papyrus, fantasy;
// text-align: center;

export default function Champions(props : {data:Summoners[]}){
    return(
        <AllChampsDiv>
            {
                props.data.map((champ: Summoners) =>
                    <SingleChampDiv key = {champ.key}>
                        <h1>{champ.name}</h1>
                        <h2>{champ.title}</h2>
                        <h3>{champ.tags}</h3>
                        <img src={image_processor(champ.id)} alt={`image of ${champ.name}`} />
                    </SingleChampDiv>
                )
            }
        </AllChampsDiv>
    )
}