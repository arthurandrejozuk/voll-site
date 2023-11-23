import styled from "styled-components"
import Textos from "@art/design-system/components/Textos";


const DepoimentosStyled = styled.div`
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 36px;
`

export default function Depoimentos(){
    return(
        <DepoimentosStyled>
            <Textos pessoa="Júlio, 40 anos, São Paulo/SP" title="Depoimentos" >
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
            </Textos>
            <Textos pessoa="Júlio, 40 anos, São Paulo/SP" >
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
            </Textos>
            <Textos pessoa="Júlio, 40 anos, São Paulo/SP" >
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
            </Textos>
        </DepoimentosStyled>
    )
}