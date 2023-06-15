import styled from "styled-components"


export const Title = styled.div`
    flex: 0 1 10%;
    position: relative;
    z-index: 2;
    background: rgba(0, 0, 0, 0.2);
    color: #fff;
    /*text-transform: uppercase;*/
    text-align: left;
    padding: 10px 10px 10px 15%;
`
export const Header = styled.p`
    font-weight: normal;
    font-size: 100%;
    margin: 0 !important;
    padding: 0;
`

export const TitleBotIcon = styled.figure`
    position: absolute;
    z-index: 1;
    top: 10%;
    left: 3%;
    border-radius: 30px;
    max-width: 10%;
    max-height: 80%;
    aspect-ratio: 1 / 1;
    overflow: hidden;
    margin: 0;
    padding: 0;
    border: 2px solid rgba(255, 255, 255, 0.24);
    & img {
      width: 100%;
      height: auto;  
    }
`
