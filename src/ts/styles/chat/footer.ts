import styled from "styled-components"
import ComponentProp from "./header"


export const MessageBox = styled.div`
  flex: 0 1 ${(prop: ComponentProp) => prop.rootHeight / 12 + "px"} !important;
  width: 100% !important;
  background: rgba(0, 0, 0, 0.3) !important;
  padding: 10px 10px 10px 10px !important;
  
  display: flex !important;
  flex-direction: row !important;
  align-items: center !important;
`
export const MessageInput = styled.textarea`
  background: none !important;
  border: none !important;
  outline: none !important;
  resize: none !important;
  color: rgba(255, 255, 255, 0.7) !important;
  font-size: 0.8em !important;
  margin: 0 !important;
  width: 100% !important;
  min-height: 17px !important;
  overflow: hidden !important;
`
export const MessageSubmit = styled.button`
  color: rgb(255, 255, 255) !important;
  border: none !important;
  background: rgb(36, 138, 82) !important;
  font-size: 0.7em !important;
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
  
  min-height: 0 !important;
  
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
