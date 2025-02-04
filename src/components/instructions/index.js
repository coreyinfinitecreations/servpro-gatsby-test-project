import { jsx as _jsx, jsxs as _jsxs } from "@emotion/react/jsx-runtime";
const Instructions = () => {
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
        }, children: [_jsx("h2", { css: {
                    fontSize: "24px",
                    fontWeight: "medium",
                    marginBottom: "12px",
                    marginTop: "24px",
                }, children: "Concept" }), _jsx("hr", { css: {
                    marginBottom: "24px",
                } }), _jsx("p", { children: _jsx("strong", { children: "SERVPRO uses Gatsby to power a portion of its front-end." }) }), _jsx("p", { children: "A member on your team has asked you to build a small dashboard based on a new endpoint. This new dashboard, which uses the Star Wars API, should take a small portion of the data when the Gatsby site builds and present it in a useful format - so your team member can see this data at a glance." }), _jsxs("p", { children: ["You are to build a Gatsby plugin, which will fetch this data and add it to Gatsby's internal store using the", " ", _jsx("a", { target: "_blank", href: "https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/#sourceNodes", children: "Source Nodes API" }), ". You will then need to consume it in the front end using Gatsby's", " ", _jsx("a", { target: "_blank", href: "https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/", children: "useStaticQuery" }), " ", "hook."] }), _jsxs("p", { children: ["You will then need to style this new dashboard based on the design", " ", _jsx("a", { target: "_blank", href: "https://www.figma.com/design/8jb3IaVwO6nGC6rDTrcLCl/SERVPRO-Dashboard-Take-Home", children: "found here" }), ". You should style this dashboard with ", _jsx("code", { children: "@emotion/react" }), ", using the ", _jsx("code", { children: "css" }), " prop's object styles. You can read about the", " ", _jsx("code", { children: "css" }), " prop", " ", _jsx("a", { target: "_blank", href: "https://emotion.sh/docs/css-prop#object-styles", children: "here" }), "."] }), _jsx("h2", { css: {
                    fontSize: "24px",
                    fontWeight: "medium",
                    marginBottom: "12px",
                    marginTop: "24px",
                }, children: "Files" }), _jsx("hr", { css: {
                    marginBottom: "24px",
                } }), _jsxs("p", { children: [_jsx("code", { children: "plugins/gatsby-star-wars-plugin/src/gatsby-node.ts" }), " - This is where you should code your Gatsby Plugin. You will need to run", " ", _jsx("code", { children: "yarn run develop" }), " to start the Typescript complation."] }), _jsxs("p", { children: [_jsx("code", { children: "src/pages/index.tsx" }), " - This is where you should build your dashboard front-end. Please create additional components and group them inside the components folder as necessary."] }), _jsx("h2", { css: {
                    fontSize: "24px",
                    fontWeight: "medium",
                    marginBottom: "12px",
                    marginTop: "24px",
                }, children: "Data Source to Implement" }), _jsx("hr", { css: {
                    marginBottom: "24px",
                } }), _jsx("ul", { children: _jsxs("li", { children: [_jsx("code", { children: "https://swapi.py4e.com/api/people/" }), " - This will provide you with a list of people. Please limit the amount you source to exactly ", _jsx("strong", { children: "12" }), "."] }) }), _jsx("h2", { css: {
                    fontSize: "24px",
                    fontWeight: "medium",
                    marginBottom: "12px",
                    marginTop: "24px",
                }, children: "Project Completion notes" }), _jsx("hr", { css: {
                    marginBottom: "24px",
                } }), _jsxs("ul", { children: [_jsx("li", { children: "You will have 72 hours to complete this task from the time that we share it with you." }), _jsxs("li", { children: ["Please publicly fork this project on Github, complete it, and then email back a link to your completed work on your fork.", " ", _jsx("strong", { children: "Make sure the link is public!" })] }), _jsx("li", { children: "The design implementation is important, but the logic implementation is more important. Please compromise on the design if you are running short on time." })] }), _jsx("h2", { css: {
                    fontSize: "24px",
                    fontWeight: "medium",
                    marginBottom: "12px",
                    marginTop: "24px",
                }, children: "Example of the final product" }), _jsx("hr", { css: {
                    marginBottom: "24px",
                } }), _jsx("img", { css: {
                    borderRadius: "1rem",
                    maxWidth: "1200px",
                    width: "100%",
                    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                    marginTop: "2rem",
                }, src: "/example.png", alt: "example" })] }));
};
export default Instructions;
