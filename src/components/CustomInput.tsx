import { Input } from "antd";
import styled from "styled-components";

const baseInputStyles = `
  border: 2px solid #d9d9d9;
  transition: border-color 0.3s;

  &:focus {
    border-color: #1890ff;
    box-shadow: 0 0 5px rgba(24, 144, 255, 0.5);
  }

  &:hover {
    border-color: #40a9ff;
  }

  &.ant-input-disabled {
    background-color: #f5f5f5;
  }

  &.ant-input-status-error {
    border-color: #ff4d4f;
  }
`;

const CustomInput = styled(Input)`
  ${baseInputStyles}
`;

// Кастомизированный компонент TextArea
const CustomTextArea = styled(Input.TextArea)`
  ${baseInputStyles}
`;

// Экспорт компонентов
export { CustomInput, CustomTextArea };
