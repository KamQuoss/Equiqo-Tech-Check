import styled from 'styled-components'

const colorPrimary = "#5656A5";
const colorSecondary = "#358138";
const border = `2px solid ${colorPrimary}`

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: ${colorPrimary};
`;

export const Main = styled.main`
  min-height: 100vh;
  padding: 4rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
    background: ${props => props.filled ? colorPrimary: "white"};
    color: ${ props => props.filled ? "white" : colorPrimary };
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: ${ border };
    border-radius: 3px;
    `;

export const Input = styled.input`
    font-size: 1rem;
    padding: 0.3rem;
    font-family: monospace;
    border: ${ border };
    border-radius: 3px;
`;

export const GridContainer = styled.div`
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 1200px;
`;

export const Card = styled.div`
    margin: 1rem;
    padding: 1rem;
    text-align: left;
    color: ${ colorPrimary };
    text-decoration: none;
    border: 1px solid ${ colorPrimary };
    border-radius: 10px;
    transition: color 0.15s ease, border-color 0.15s ease;
    max-width: 300px;
        &:hover {
        color: ${ colorSecondary };
        border-color: ${ colorSecondary };
    }
        &:focus {
        color: ${ colorSecondary };
        border-color: ${ colorSecondary };
    }
        &:active {
        color: ${ colorSecondary };
        border-color: ${ colorSecondary };
    } `;

export const CardExtended = styled(Card)`
    margin: auto;
    max-width: 800px;
    display: grid;
    grid-template-columns: 260px 1fr;
    .padding-left {
        padding-left: 1rem;
    }
    `

export const CardHeader = styled.h3`
    margin: 0 0 1rem 0;
    font-size: 1.5rem;
    font-weight: bold;
    text-transform: uppercase
    `

export const CardHeaderSecondary = styled(CardHeader)`
    font-size: 1.3rem;
    font-weight: normal;
    text-transform: none
    `

export const CardParagraph = styled.p`
    margin: 0;
    font-size: 1.05rem;
    line-height: 1.25;
`
