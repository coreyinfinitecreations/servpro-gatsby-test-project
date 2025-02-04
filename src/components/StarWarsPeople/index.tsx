/** @jsxImportSource @emotion/react */
import React from "react";
import { useStaticQuery, graphql } from "gatsby";

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
    <div
      css={{
        maxWidth: "1440px",
        padding: "40px",
        margin: "auto",
        ul: {
          listStyleType: "initial",
        },
        li: {
          marginBottom: "8px",
          maxWidth: "1200px",
        },
        p: {
          marginBottom: "12px",
          maxWidth: "600px",
        },
        code: {
          backgroundColor: "#eee",
          borderRadius: "4px",
          padding: "2px",
        },
        a: {
          color: "orange",
        },
      }}
    >
      <h2>Star Wars Characters</h2>
      <ul>
        {data.allStarWarsPerson.nodes.map((person: StarWarsPerson) => (
          <li key={person.name}>
            <p>Name: {person.name}</p>
            <p>Hair Color: {person.hair_color}</p>
            <p>Eye Color: {person.eye_color}</p>
            <p>Height: {person.height}</p>
            <p>Birth Year: {person.birth_year}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StarWarsPeople;
