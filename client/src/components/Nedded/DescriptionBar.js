import React from "react";
import styled from "styled-components";

export default function DescriptionBar({ name }) {
  return <DescriptionBarStyle>{name}</DescriptionBarStyle>;
}

const DescriptionBarStyle = styled.div`
  min-width: 300px;
  height: 70px;
  padding-left: 2rem;
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 20px;
  width: 100%;
  box-shadow: 0px 2px 5.27px rgba(0, 0, 0, 0.1);
  margin-bottom: 1.4rem;
  border-radius: 0 0 6px 6px;
`;
