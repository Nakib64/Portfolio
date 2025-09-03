"use client";

import CountUp from "react-countup";
import { useEffect, useState } from "react";

const stats = [
  { num: 1, text: "Years of experience" },
  { num: 15, text: "Projects Completed" },
  { num: 8, text: "Technologies mastered" },
];

const Stats = () => {
  const [commits, setCommits] = useState('');

  useEffect(() => {
    const fetchCommits = async () => {
      try {
        const res = await fetch("https://github-contributions-api.jogruber.de/v4/Nakib64");
        const data = await res.json();
        setCommits(data.total["2025"]);
      } catch (error) {
        console.error("Error fetching commits:", error);
      }
    };
    fetchCommits();
  }, []);

  return (
    <section className="container mx-auto px-4">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 items-center justify-center">
        {stats.map((item, index) => (
          <div key={index} className="flex items-center justify-center md:justify-start gap-2">
            <CountUp
              end={item.num}
              duration={3}
              className="text-4xl md:text-6xl font-extrabold"
            />
            <p>{item.text}</p>
          </div>
        ))}

        {/* GitHub commits */}
        <div className="flex items-center justify-center md:justify-start gap-2">
          <CountUp
            end={commits}
            duration={3}
            className="text-4xl md:text-6xl font-extrabold"
          />
          <p>Code commits</p>
        </div>
      </div>
    </section>
  );
};

export default Stats;
