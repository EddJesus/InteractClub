import styled, { css } from "styled-components";

const dragActive = css`
  border-color: #78e5d5;
`;

const dragReject = css`
  border-color: #8b0f0f;
`;

type IDropContainer = {
  isDragActive?: boolean;
  isDragReject?: boolean;
};

export const DropContainer = styled.div<IDropContainer>`
  border: 2px dashed #ddd;
  border-radius: 10px;
  cursor: pointer;

  padding: 20px;
  margin-bottom: 10px;
  transition: height 0.2s ease;

  ${(props: any) => props.isDragActive && dragActive};
  ${(props: any) => props.isDragReject && dragReject};
`;

const messageColors = {
  default: "#ffff",
  error: "#8b0f0f",
  success: "#78e5d5",
};

interface ITypeMessageColor {
  type?: "default" | "error" | "success";
}

export const UploadMessage = styled.p<ITypeMessageColor>`
  display: flex;
  color: ${(props) => messageColors[props.type || "default"]}!important;
  border: black!important;
  justify-content: center;
  align-items: center;
  padding: 15px 0;
`;
