import React from "react";
import Card from "../Card";
import { useStaticQuery, graphql } from "gatsby";
import { css } from "@emotion/react";

const flexContainer = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const cardStyle = css`
  flex: 1 1 calc(33.333% - 40px);
  margin: 20px;
`;

type StarWarsPerson = {
  name: string;
  hair_color: string;
  eye_color: string;
  height: string;
  birth_year: string;
};

const StarWarsPeople = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allStarWarsPerson {
        nodes {
          name
          hair_color
          eye_color
          height
          birth_year
        }
      }
    }
  `);

  console.log(
    `Number of people returned: ${data.allStarWarsPerson.nodes.length}`
  );

  return (
    <div css={flexContainer}>
      {data.allStarWarsPerson.nodes.map((person: StarWarsPerson) => (
        <div css={cardStyle} key={person.name}>
          <Card
            name={person.name}
            hairColor={person.hair_color}
            eyeColor={person.eye_color}
            height={person.height}
            birthYear={person.birth_year}
          />
        </div>
      ))}
    </div>
  );
};

export default StarWarsPeople;
