import React from "react";
import styled from "styled-components";

export default function NotificationsSvg({ check }) {
  return (
    <ContenStyle
      check={check}
      width="19"
      height="19"
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.50033 17.4165C10.3712 17.4165 11.0837 16.704 11.0837 15.8332H7.91699C7.91699 16.704 8.62949 17.4165 9.50033 17.4165ZM14.2503 12.6665V8.70817C14.2503 6.27775 12.9599 4.24317 10.6878 3.70484V3.1665C10.6878 2.50942 10.1574 1.979 9.50033 1.979C8.84324 1.979 8.31283 2.50942 8.31283 3.1665V3.70484C6.04866 4.24317 4.75033 6.26984 4.75033 8.70817V12.6665L3.16699 14.2498V15.0415H15.8337V14.2498L14.2503 12.6665ZM12.667 13.4582H6.33366V8.70817C6.33366 6.74484 7.52908 5.14567 9.50033 5.14567C11.4716 5.14567 12.667 6.74484 12.667 8.70817V13.4582Z"
        fill="currentColor"
      />
    </ContenStyle>
  );
}

const ContenStyle = styled.svg`
  path {
    fill: ${({ check }) => (!check ? "#838696" : "#0C7FDA")};
  }
`;
