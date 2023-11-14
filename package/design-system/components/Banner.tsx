import styled from "styled-components";
import React from "react";

const BannerStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-size: cover;
    background-color: ${props => props.theme.primaries.brightBlue};
    background-image: url("https://s3-alpha-sig.figma.com/img/7f93/cdbc/bce06e04817f9f340547b026237bf05e?Expires=1700438400&Signature=PguxkqmD0Iq~cO9YIH~61XCUbwzIwgsZLniQoFjDuch9KEUOjbKATgDaABlUvgE8mOAUQXPnqGIRIUjihPEHpXx0aVXyfItmycVTNzR7x28ZS1ZyHf5ea4u3E0jfJYjCnwj~NJMM5lF5bFDF2jPUni5EHzYEgKynNS1RKKYLcJ2IyhoV3yhcVe1D~4-e6cO71AfkYD8oYYfSdYYdIQ5PRgf~D4G1z6Tx8uUmKIYe-CGw6-Y3VMVeqwqJFP4SmKLgYu~IaZtmNMCZiOPKzzDyNAwY6tEeUgGtj9jJiEIyLb1Ho-OWEhwBdAVkRyb-WQ9G1jFgEm95YHQ3kemnHG~yFQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4");
    height: 400px;
    .rapaz{
        position: relative;
        top: 40px;
        width: 200px;
    }
    .moca{
        position: relative;
        top:46px;
        right: 145px;
        width: 200px;
    }
    h2{
        color: ${props => props.theme.secondaries.white};
        width: 35%;
    }
    @media(max-width: 400px){
    .rapaz{
        position: relative;
        top: 40px;
        width: 200px;
    }
    .moca{
        position: relative;
        top:46px;
        right: 40px;
        width: 200px;
    }
    }
    @media(max-width: 500px){
        display: none;
    }
`

export default function Banner({ children }) {
    return (
        <BannerStyled>
            <h2> Encontre profissionais de diversas especialidades e agende sua consulta com facilidade!</h2>
            {children}
        </BannerStyled>
    )
}
