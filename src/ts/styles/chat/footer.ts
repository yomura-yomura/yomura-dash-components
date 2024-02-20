import styled from "styled-components"


export const MessageBox = styled.div<{rootHeight: number}>`
  flex: 0 1 ${({rootHeight}) => `${rootHeight / 12}px`} !important;
  width: 100% !important;
  background: rgba(0, 0, 0, 0.3) !important;
  
  display: flex !important;
  flex-direction: row !important;
  align-items: flex-end !important;
`
export const MessageInput = styled.textarea<{rootHeight: number, rootWidth: number}>`
  background: none !important;
  border: none !important;
  outline: none !important;
  resize: none !important;
  color: rgba(255, 255, 255, 0.7) !important;
  font-size: 0.8em !important;
  margin: ${({rootWidth, rootHeight}) => `${0.03 * rootHeight}px ${0.03 * rootWidth}px ${0.03 * rootHeight}px ${0.03 * rootWidth}px`} !important;
  width: 100% !important;
  min-height: 17px !important;
  overflow: hidden !important;
  line-height: 1.3 !important;
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.3) !important;
  }
  &:disabled::placeholder {
    color: rgb(255, 255, 255, 0) !important;    
  }
  &:disabled&:hover {
    cursor: not-allowed;
  }
`
export const MessageSubmit = styled.button<{rootHeight: number, rootWidth: number}>`
  color: rgb(255, 255, 255) !important;
  border: none !important;
  background: rgb(36, 138, 82) !important;
  font-size: 0.9em !important;
  line-height: 0.7em !important;
  text-transform: uppercase !important;
  padding: 0.5em !important;
  border-radius: 10px !important;
  outline: none !important;
  transition: background 0.2s ease !important;
  text-overflow: unset !important;
  white-space: nowrap !important;
  
  overflow: unset !important;
  letter-spacing: 0 !important;
  font-weight: normal !important;
  font-family: inherit !important;
  
  margin: ${({rootWidth, rootHeight}) => `${0.03 * rootHeight}px ${0.03 * rootWidth}px ${0.03 * rootHeight}px ${0.03 * rootWidth}px`} !important;
  
  min-height: 17px !important;
  
  &:not([disabled])&:hover {
    background: #1D7745 !important;
    cursor: pointer;
  }
  &:disabled {
    background: rgb(126 213 165) !important;
    color: rgb(219, 219, 219) !important;    
  }
  &:disabled&:hover {
    cursor: not-allowed;
  }
`
