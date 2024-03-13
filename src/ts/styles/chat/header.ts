import styled from "styled-components"

export const Header = styled.div`
    flex: 0 1 10% !important;
    background: rgba(0, 0, 0, 0.2) !important;
    color: rgb(255, 255, 255) !important;
    text-align: left !important;
    padding: 10px !important;
  
    display: flex !important;
    justify-content: flex-start !important;
    flex-direction: row !important;
    align-items: center !important;
`

export const TitleBotIcon = styled.figure<{rootHeight: number, rootWidth: number}>`
    border-radius: 30px !important;
    max-width: ${({rootWidth}) => `${0.2 * rootWidth}px`} !important;
    max-height: ${({rootHeight}) => `${0.08 * rootHeight}px`} !important;
    aspect-ratio: 1 / 1 !important;
    overflow: hidden !important;
    margin: 0 !important;
    padding: 0 !important;
    border: 2px solid rgba(255, 255, 255, 0.24) !important;
    & img {
      width: 100% !important;
      height: auto !important;
      vertical-align: top !important;
    }
`


export const Title = styled.div`
    margin-left: 10px !important;
    padding: 0 !important;
  
    display: flex !important;
    justify-content: center; !important;
    flex-direction: column; !important;
`

export const AssistantName = styled.p`
    font-weight: normal !important;
    font-size: 1em !important;
    margin: 0 !important;
`