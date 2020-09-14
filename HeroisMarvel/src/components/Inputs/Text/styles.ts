import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 50px;
  background: #232129;
  border-radius: 10px;
  padding: 0 16px;
  margin-bottom: 8px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
export const TextInput = styled.TextInput`
  flex: 1;
  color: #fff;
  font-size: 16px;
  font-family: 'RobotoSlab-Regular';
  margin-left: 15px;
  ::placeholder {
    color: #666360;
    font-size: 16px;
    font-family: 'RobotoSlab-Regular';
  }
`;
