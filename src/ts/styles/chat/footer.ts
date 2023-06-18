import styled from "styled-components"


export const MessageBox = styled.div`
  flex: 0 1 8% !important;
  width: 100% !important;
  background: rgba(0, 0, 0, 0.3) !important;
  padding: 10px !important;
  position: relative !important;
  /*min-height: 30px;*/
`
export const MessageInput = styled.textarea`
  background: none !important;
  border: none !important;
  outline: none !important;
  resize: none !important;
  color: rgba(255, 255, 255, 0.7) !important;
  font-size: 100% !important;
  /*height: 100% !important;*/
  margin: 0 !important;
  padding-right: 15% !important;
  width: 100% !important;
  min-height: 17px !important;
  overflow: hidden !important;
`
export const MessageSubmit = styled.button`
  position: absolute !important;
  z-index: 1 !important;
  /*top: 20% !important;*/
  right: 3% !important;
  color: rgb(255, 255, 255);
  border: none !important;
  background: rgb(36, 138, 82);
  font-size: 100% !important;
  text-transform: uppercase !important;
  line-height: 1 !important;
  padding: 6px 10px !important;
  border-radius: 10px !important;
  outline: none !important;
  transition: background 0.2s ease !important;
  /*height: 50%*/
  /*min-height: 0 !important;*/
  &:hover&:not([disabled]) {
    background: #1D7745 !important;
  }
  &:disabled {
    background: rgb(126 213 165);
    color: rgb(219, 219, 219);
  }
`
