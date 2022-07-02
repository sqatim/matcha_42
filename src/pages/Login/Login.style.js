import styled from "styled-components";

export const ContainerStyle = styled.div`
  display: flex;
  width: 100%;
`;

export const LeftStyle = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1110px){
    width: 100%;
  }
`;

export const RightStyle = styled.div`
  width: 50%;
  background: linear-gradient(314.4deg, #ffffff -17.42%, #aca9bb 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  img{
    max-width: max-content;
    width: 100%;
  }
  @media screen and (max-width: 1110px){
    display: none;
    
  }
`;
