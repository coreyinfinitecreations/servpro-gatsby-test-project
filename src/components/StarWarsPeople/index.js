import { jsx as _jsx } from "@emotion/react/jsx-runtime";
import Card from "../Card";
import { useStaticQuery, graphql } from "gatsby";
import { css } from "@emotion/react";
const flexContainer = css `
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const cardStyle = css `
  flex: 1 1 calc(33.333% - 40px);
  margin: 20px;
`;
const StarWarsPeople = () => {
    const data = useStaticQuery(graphql `
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
    console.log(`Number of people returned: ${data.allStarWarsPerson.nodes.length}`);
    return (_jsx("div", { css: flexContainer, children: data.allStarWarsPerson.nodes.map((person) => (_jsx("div", { css: cardStyle, children: _jsx(Card, { name: person.name, hairColor: person.hair_color, eyeColor: person.eye_color, height: person.height, birthYear: person.birth_year }) }, person.name))) }));
};
export default StarWarsPeople;
