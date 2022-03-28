import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 18px;
  background-color: white;
  width: 330px;
  min-height: 450px;
  margin: 20vh auto;
  padding: 45px;
  border-radius: 25px;
`;
export const Button = styled.button`
  margin: 0 auto;
  display: block;
  padding: 5px;
  width: 100px;
  background-color: #f79114;
  border: none;
  margin-bottom: 15px;
  border-radius: 7px;
  :hover {
    filter: brightness(0.7);
  }
`;
