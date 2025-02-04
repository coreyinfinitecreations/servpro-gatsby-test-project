import { jsx as _jsx, jsxs as _jsxs } from "@emotion/react/jsx-runtime";
import { css } from "@emotion/react";
const formatString = (string) => {
    if (string.toUpperCase() === "N/A") {
        return string.toUpperCase();
    }
    return string.charAt(0).toUpperCase() + string.slice(1);
};
const cardStyle = css `
  padding: 20px;
  background: linear-gradient(to right, #ffffff, rgb(246, 246, 246));
  border-radius: 10px;
  box-shadow: 0 5px 7px rgba(0, 0, 0, 0.1);
`;
const flexRow = css `
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
`;
const Card = ({ name, hairColor, eyeColor, height, birthYear, }) => {
    return (_jsx("div", { css: {
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
        }, children: _jsxs("div", { css: cardStyle, children: [_jsx("h1", { children: name }), _jsxs("div", { css: flexRow, children: ["Hair Color", _jsx("p", { children: formatString(hairColor) })] }), _jsxs("div", { css: flexRow, children: ["Eye Color", _jsx("p", { children: formatString(eyeColor) })] }), _jsxs("div", { css: flexRow, children: ["Height", _jsx("p", { children: height })] }), _jsxs("div", { css: flexRow, children: ["Birth Year", _jsx("p", { children: birthYear })] })] }) }));
};
export default Card;
