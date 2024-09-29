import styled from 'styled-components';

const AllTags = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;   
    justify-content: center;
    padding: 1%;
    margin: 1%;
    font: small-caps bold calc(2px + 1vw) "Spiegel", Serif;

`;

const TagWrapper = styled.div`
    display: flex;
    padding: 1% 
    margin: 1%
`;

const Tag = styled.div<{ tagtype: string }>`
    padding: 0.04em 0.2em 0.2em 0.2em;
    margin: 0.1em 0.2em;
    border-radius: 4px;
    color: white;     
    background-color: ${({ tagtype }) => {
        switch (tagtype) {
            case 'Fighter':
                return '#ef476f';
            case 'Mage':
                return '#118ab2';
            case 'Support':
                return '#048b67';
            case 'Marksman':
                return '#341671'
            case 'Tank':
                return '#073b4c'
            case 'Assassin':
                return '#FFB60A'
            default:
                return 'gray';
        }
    }};
`;

export default function Tags(props: { data: string[] }) {
    return (
        <AllTags>
            {
                props.data.map((tag, index) => (
                    <TagWrapper key={index}>
                        <Tag tagtype={tag}>
                            {tag.toLowerCase()}
                        </Tag>
                    </TagWrapper>
                ))
            }
        </AllTags>
    );
}
