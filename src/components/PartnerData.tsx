// PartnerData.js

// C-shaped Icon for the purple panel
// This SVG aims to replicate the thin, open circle 'C' from the video.
export const CIcon = () => (
  <svg
    className="w-10 h-10 sm:w-12 sm:h-12 mb-3 text-white" // Adjusted margin
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="1.75" // Adjust for desired thickness
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Draws an arc that forms most of a circle, leaving a gap on the right, resembling a 'C' */}
    <path d="M19.523 5.057A9 9 0 104.477 18.943M19.523 5.057A9 9 0 004.477 5.057" />
    {/* An alternative for a more explicit C opening right */}
    {/* <path d="M15.75 5.25A8.25 8.25 0 007.5 12a8.25 8.25 0 008.25 6.75" /> */}
  </svg>
);

// Double Arrow Icon (>>) for the tab strips
export const DoubleArrowIcon = ({ colorClass = "text-gray-700" }) => (
  <svg
    className={`w-5 h-5 sm:w-6 sm:h-6 ${colorClass}`}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.5} // Slightly thicker for visibility
      d="M13 5l7 7-7 7M5 5l7 7-7 7"
    />
  </svg>
);

// Data for each partner item/tab
// Background colors match the shades in the video
export const partnerItems = [
  {
    id: 1,
    tabLabel: "Digital Agencies",
    description:
      "Digital Agencies looking to expand their service offerings without the overhead of in-house hiring.",
    bgColor: "bg-white",
    textColor: "text-gray-800", // Dark text for light background
    arrowColor: "text-gray-500", // Color for the arrow
  },
  {
    id: 2,
    tabLabel: "Product Teams",
    description:
      "Product Teams in need of specialized skills or burst capacity to meet tight deadlines and innovate faster.",
    bgColor: "bg-gray-100", // Slightly darker than white
    textColor: "text-gray-800",
    arrowColor: "text-gray-500",
  },
  {
    id: 3,
    tabLabel: "CTOs",
    description:
      "CTOs seeking reliable, expert development partners to scale their tech infrastructure or build new products efficiently.",
    bgColor: "bg-gray-200", // Progressively darker
    textColor: "text-gray-700",
    arrowColor: "text-gray-500",
  },
  {
    id: 4,
    tabLabel: "System Integrators",
    description:
      "System Integrators requiring niche expertise or additional development power for complex client projects.",
    bgColor: "bg-gray-300",
    textColor: "text-gray-700", // Ensure contrast
    arrowColor: "text-gray-500",
  },
  {
    id: 5,
    tabLabel: "Startup MVPs",
    description:
      "Startups aiming to quickly build and launch Minimum Viable Products with a skilled, agile, and cost-effective team.",
    bgColor: "bg-gray-400", // Darkest tab background
    textColor: "text-gray-100", // Light text for dark background
    arrowColor: "text-gray-200", // Lighter arrow for dark background
  },
];

// Make sure your tailwind.config.js includes these (JIT usually handles it):
// bg-white, bg-gray-100, bg-gray-200, bg-gray-300, bg-gray-400
// text-gray-800, text-gray-700, text-gray-100
// text-gray-500, text-gray-200
// And for the purple panel: bg-indigo-600
