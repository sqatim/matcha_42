import React, { useState } from "react";
import styled from "styled-components";

const names = ["Details", "Galery", "Map", "History"];

export default function ProfileBar({ choice, setChoise }) {
  return (
    <ProfileBarStyle>
      <ul>
        {names.map((element, key) => (
          <ProfileBarItemsStyle
            key={key}
            check={choice == element}
            onClick={() => setChoise(element)}
          >
            {element}
            <hr />
          </ProfileBarItemsStyle>
        ))}
      </ul>
    </ProfileBarStyle>
  );
}

const ProfileBarStyle = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.12);
  border-radius: 23px;
  ul {
    width: 100%;
    height: 100%;
    margin-bottom: 0;
    list-style-type: none;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  /* gap: 1rem; */
  /* margin-bottom: .5rem; */
`;

const ProfileBarItemsStyle = styled.li`
  color: ${({ check }) => (!check ? "#2B2938" : "#0C7FDA")};
  cursor: pointer;
  font-size: 18px;
  min-width: 90px;
  text-align: center;
  hr {
    border: none;
    height: 4px;
    background-color: #0c7fda;
    opacity: ${({ check }) => (!check ? "0" : "1")};
  }
  ${({ check }) => check && `font-weight: 700;`}
`;
