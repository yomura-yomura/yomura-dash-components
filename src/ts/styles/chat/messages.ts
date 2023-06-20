/**
 * Copyright (c) 2023 by Fabio Ottaviani (https://codepen.io/supah/pen/jqOBqp)
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
import styled, {keyframes} from "styled-components"


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

const Message = styled.div`
    clear: both;

    padding: 6px 10px 7px;
    font-size: 0.7em;
    line-height: 1.4;
    margin: 3% 3% 2% calc(3% + 10%);
    position: relative;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
    max-width: 80%;
    word-break: break-word;
    white-space: pre-wrap;
  
    &:last-child {
      margin-bottom: 30px;
    }
`

const UserMessage = styled(Message)`
    float: right;
    color: #fff;
    text-align: right;
    background: linear-gradient(120deg, #248A52, #257287);
    border-radius: 10px 10px 0 10px;
  
    &:before {
        left: auto;
        right: 0;
        border-right: none;
        border-left: 5px solid transparent;
        border-top: 4px solid #257287;
        bottom: -4px;      
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
