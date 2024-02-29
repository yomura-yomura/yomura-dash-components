import styled, {keyframes} from "styled-components"
import React from "react";
import {DashComponentProps} from "../../props";


export const Messages = styled.div`
    flex: 1 1 auto;
    color: rgba(255, 255, 255, 0.5);
    overflow: hidden;
    position: relative;
    width: 100%;
`

export const MessageTimestamp = styled.div`
    position: absolute;
    font-size: 0.8em;
    color: rgba(255, 255, 255, 0.3);
    white-space: nowrap;
    left: 5%;
    top: 100%        
`

export const MessageBotIcon = styled.figure<{rootWidth: number}>`
    position: absolute !important;
    z-index: 1 !important;
    bottom: -15px !important;
    left: ${({rootWidth}) => `${-0.11 * rootWidth}px`} !important;
    border-radius: 30px !important;
    width: ${({rootWidth}) => `${0.1 * rootWidth}px`} !important;
    aspect-ratio: 1 / 1 !important;
    overflow: hidden !important;
    margin: 0 !important;
    padding: 0 !important;
    border: 2px solid rgba(255, 255, 255, 0.24) !important;
    & img {
      width: 100% !important;
      height: auto !important;  
    }
`

export const LinkInMessage = styled.a`
    color: skyblue !important;
    text-decoration: underline !important;
`

const bounce = keyframes`
  0% {
    transform: matrix3d(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  4.7% {
    transform: matrix3d(0.45, 0, 0, 0, 0, 0.45, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  9.41% {
    transform: matrix3d(0.883, 0, 0, 0, 0, 0.883, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  14.11% {
    transform: matrix3d(1.141, 0, 0, 0, 0, 1.141, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  18.72% {
    transform: matrix3d(1.212, 0, 0, 0, 0, 1.212, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  24.32% {
    transform: matrix3d(1.151, 0, 0, 0, 0, 1.151, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  29.93% {
    transform: matrix3d(1.048, 0, 0, 0, 0, 1.048, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  35.54% {
    transform: matrix3d(0.979, 0, 0, 0, 0, 0.979, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  41.04% {
    transform: matrix3d(0.961, 0, 0, 0, 0, 0.961, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  52.15% {
    transform: matrix3d(0.991, 0, 0, 0, 0, 0.991, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  63.26% {
    transform: matrix3d(1.007, 0, 0, 0, 0, 1.007, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  85.49% {
    transform: matrix3d(0.999, 0, 0, 0, 0, 0.999, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  100% {
    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
`

const ball = keyframes`
  from {
    transform: translateY(0) scaleY(0.8);
  }
  to {
    transform: translateY(-10px);
  }    
`

const Content = styled.div`
    clear: both;   
    position: relative;
  
    word-break: break-word;
    white-space: pre-wrap;
  
    &:last-child {
      margin-bottom: 30px !important;
    }  
`

const Message = styled(Content)`
    margin: 3% 3% 2% calc(3% + 10%);
  
    padding: 6px 10px 7px 10px;
    font-size: 0.7em;
    line-height: 1.4;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
`

const UserMessage = styled(Message)`
    float: right;
    color: #fff;
    text-align: right;
    background: linear-gradient(120deg, #248A52, #257287);
    border-radius: 10px 10px 0 10px;
  
    &:before {
        content: "";
        position: absolute;
        bottom: -4px;
        border-top: 4px solid #257287;
        right: 0;
        border-left: 5px solid transparent;
    }
`

export const NewUserMessage = styled(UserMessage)`
  transform: scale(0);
  transform-origin: 0 0;
  animation: ${bounce} 500ms linear both;
`


const BotMessage = styled(Message)`
    float: left;
    background: rgba(0, 0, 0, 0.3);
    border-radius: 10px 10px 10px 0;
  
    &:before {
      content: "";
      position: absolute;
      bottom: -6px;
      border-top: 6px solid rgba(0, 0, 0, 0.3);
      left: 0;
      border-right: 7px solid transparent;      
    }
`

export const NewBotMessage = styled(BotMessage)`
  transform: scale(0);
  transform-origin: 0 0;
  animation: ${bounce} 500ms linear both;
`

export const LoadingNewBotMessage = styled(BotMessage)`
  :before, span:before, span:after {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    content: "";
    display: block;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.5);
    z-index: 2;
    margin-top: 4px;
    animation: ${ball} 0.45s cubic-bezier(0, 0, 0.15, 1) alternate infinite;
  }
  
  :before {
    border: none;
    animation-delay: 0.15s;    
  }
  
  span:before {
    margin-left: -7px;
  }
  
  span:after {
    margin-left: 7px;
    animation-delay: 0.3s;
  }
  
  span {
    display: block;
    font-size: 0;
    width: 20px;
    height: 10px;
    position: relative;            
  }
`

export const BotAction = styled(Content)`
    float: left;
    font-size: 0.5em;
    //padding: 6px 10px 7px 10px;
    padding: 0;
    margin: 3% 30% 0 5%;

    & + & {
      margin-top: 0;
    }
    & + :not(&) {
      margin-top: calc(3% + 2%);
    }
`

export const NewBotAction = styled(BotAction)`
  transform: scale(0);
  transform-origin: 0 0;
  animation: ${bounce} 500ms linear both;
`
