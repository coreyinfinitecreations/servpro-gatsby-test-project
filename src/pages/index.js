import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "@emotion/react/jsx-runtime";
import "../reset.css";
import StarWarsPeople from "../components/StarWarsPeople";
import { css } from "@emotion/react";
const boldHeading = css `
  font-weight: 400;
  color: rgb(67, 67, 67);
`;
const headingCard = css `
  margin: 20px;
  padding: 60px 20px;
  background: linear-gradient(to right, #ffffff, rgb(219, 219, 219));
  border-radius: 10px;
  box-shadow: 0 5px 7px rgba(0, 0, 0, 0.1);
`;
const Index = () => {
    return (_jsxs(_Fragment, { children: [_jsx("div", { css: headingCard, children: _jsx("h1", { css: boldHeading, children: "Galactic Employees Dashboard" }) }), _jsx(StarWarsPeople, {})] }));
};
export default Index;
