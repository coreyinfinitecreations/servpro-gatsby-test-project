import { GatsbyNode } from "gatsby";
import fetch from "node-fetch";

export const sourceNodes: GatsbyNode["sourceNodes"] = async ({
  actions,
  createNodeId,
  createContentDigest,
  reporter,
}) => {
  const { createNode } = actions;

  const fetchPeople = async (url: string) => {
    const response = await fetch(url);
    const result: { results: any[]; next: string | null } =
      (await response.json()) as { results: any[]; next: string | null };
    return result;
  };

  let currentPage = 1;
  let allPeople: any[] = [];

  try {
    while (allPeople.length < 12) {
      const url = `https://swapi.py4e.com/api/people/?page=${currentPage}`;
      const result = await fetchPeople(url);

      allPeople.push(...result.results);

      if (result.next) {
        currentPage++;
      } else {
        break;
      }
    }

    const limitedPeople = allPeople.slice(0, 12);

    limitedPeople.forEach((person) => {
      const nodeContent = JSON.stringify(person);
      const nodeMeta = {
        id: createNodeId(`star-wars-person-${person.name}`),
        parent: null,
        children: [],
        internal: {
          type: "StarWarsPerson",
          mediaType: "application/json",
          content: nodeContent,
          contentDigest: createContentDigest(person),
        },
      };

      const node = Object.assign({}, person, nodeMeta);
      createNode(node);
    });

    reporter.info(`Successfully fetched and processed data from SWAPI`);
  } catch (error) {
    reporter.error(`Error fetching data from SWAPI`, error as Error);
  }
};

export const createSchemaCustomization: GatsbyNode["createSchemaCustomization"] =
  ({ actions }) => {
    const { createTypes } = actions;
    createTypes(`
    type StarWarsPerson implements Node {
      name: String
      height: String
      mass: String
      hair_color: String
      skin_color: String
      eye_color: String
      birth_year: String
      gender: String
      homeworld: String
      films: [String]
      species: [String]
      vehicles: [String]
      starships: [String]
      created: Date @dateformat
      edited: Date @dateformat
      url: String
    }
  `);
  };
