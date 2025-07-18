import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
const Problem = ({ heading, subheading, points }) => {
    console.log("points", points);
    return (_jsxs("div", { className: "flex flex-col md:flex-row w-full mx-auto max-w-[88rem] items-center gap-5 px-[30px] py-7 md:py-10 lg:py-12", children: [_jsx("div", { className: "w-full md:w-1/4 flex items-start justify-start self-start ", children: _jsxs("p", { className: "text-[#595959] [font-family:Switzer] text-xl font-medium leading-[160%] uppercase", children: ["The ", heading] }) }), _jsxs("div", { className: "flex-1 flex items-start w-full flex-col gap-5", children: [subheading && (_jsx("p", { className: "font-openSansHebrew text-lg md:text-xl font-bold tracking-[0.02em] leading-[160%]", children: subheading })), _jsx("p", { className: "font-openSansHebrew text-[#595959] text-lg md:text-xl tracking-[0.02em] leading-[160%]", children: points?.join(" ") })] })] }));
};
export default Problem;
