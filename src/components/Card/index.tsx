import React from "react";
import { css } from "@emotion/react";

interface CardProps {
  name: string;
  hairColor: string;
  eyeColor: string;
  height: string;
  birthYear: string;
}

const formatString = (string: string) => {
  if (string.toUpperCase() === "N/A") {
    return string.toUpperCase();
  }
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const cardStyle = css`
  padding: 20px;
  background: linear-gradient(to right, #ffffff, rgb(246, 246, 246));
  border-radius: 10px;
  box-shadow: 0 5px 7px rgba(0, 0, 0, 0.1);
`;

const flexRow = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
`;

const Card: React.FC<CardProps> = ({
  name,
  hairColor,
  eyeColor,
  height,
  birthYear,
}) => {
  return (
    <div
      css={{
        maxWidth: "1440px",
        margin: "auto",
        fontWeight: "500",
        h1: {
          fontSize: "24px",
          fontWeight: "700",
          marginBottom: "12px",
          color: "#000000",
        },
        p: {
          fontWeight: "400",
          color: "#2ebb3e",
        },
      }}
    >
      <div css={cardStyle}>
        <h1>{name}</h1>
        <div css={flexRow}>
          Hair Color<p>{formatString(hairColor)}</p>
        </div>
        <div css={flexRow}>
          Eye Color<p>{formatString(eyeColor)}</p>
        </div>
        <div css={flexRow}>
          Height<p>{height}</p>
        </div>
        <div css={flexRow}>
          Birth Year<p>{birthYear}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
