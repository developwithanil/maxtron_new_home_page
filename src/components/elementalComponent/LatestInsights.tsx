import React from "react";
import InsightCard from "./InsightCard";
import { Link } from "react-router-dom";

const insightsData = [
  {
    imageUrl: "/path-to-image1.jpg",
    category: "Technology",
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    authorName: "Tracey Wilson",
    date: "July 02, 2024",
  },
  {
    imageUrl: "/path-to-image2.jpg",
    category: "Technology",
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    authorName: "Jason Francisco",
    date: "July 02, 2024",
  },
  {
    imageUrl: "/path-to-image3.jpg",
    category: "Technology",
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    authorName: "Elizabeth Slavin",
    date: "July 02, 2024",
  },
];

const LatestInsights: React.FC = () => {
  return (
    <section className="py-12 px-4 bg-gradient-to-r from-purple-700 to-purple-900 text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-8">Latest Insights</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {insightsData.map((insight, index) => (
            <InsightCard
              key={index}
              imageUrl={insight.imageUrl}
              category={insight.category}
              title={insight.title}
              authorName={insight.authorName}
              date={insight.date}
            />
          ))}
        </div>
        <div className="mt-8">
          <Link to="/posts" className="text-white underline">
            View All Posts &gt;
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestInsights;
