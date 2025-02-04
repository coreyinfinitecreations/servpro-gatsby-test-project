import { jsx as _jsx, jsxs as _jsxs } from "@emotion/react/jsx-runtime";
import { useStaticQuery, graphql } from "gatsby";
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
    return (_jsxs("div", { css: {
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
        }, children: [_jsx("h2", { children: "Star Wars Characters" }), _jsx("ul", { children: data.allStarWarsPerson.nodes.map((person) => (_jsxs("li", { children: [_jsxs("p", { children: ["Name: ", person.name] }), _jsxs("p", { children: ["Hair Color: ", person.hair_color] }), _jsxs("p", { children: ["Eye Color: ", person.eye_color] }), _jsxs("p", { children: ["Height: ", person.height] }), _jsxs("p", { children: ["Birth Year: ", person.birth_year] })] }, person.name))) })] }));
};
export default StarWarsPeople;
