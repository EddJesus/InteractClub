import styled, { css } from 'styled-components'

const dragActive = css`
  border-color: #78e5d5;
`

const dragReject = css`
  border-color: #e57878;
`

export const DropContainer = styled.div `

border: 1px dashed #ddd;
  border-radius: 10px;
  cursor:pointer;

  padding: 20px;
  margin-bottom: 10px;
  transition: height 0.2s ease;

`