// import React, { useState } from "react";
import cramExam from "../../assets/images/placeholder-project-3.PNG";
import pizzaHunt from "../../assets/images/pizza-hunt.PNG";
import runBuddy from "../../assets/images/run-buddy.PNG";
import recipeMe from "../../assets/images/recipe-me.PNG";
import plannerApp from "../../assets/images/work-day-scheduler.PNG";
import endless from "../../assets/images/endless.PNG";

function Portfolio() {
  const portfolio = [
    {
      name: "Exam Cram",
      imgsrc: cramExam,
      link: "https://dashboard.heroku.com/apps/exam-cram",
      repo: "https://github.com/lundbmp/flash-cards",
    },
    {
      name: "Pizza Hunt",
      imgsrc: pizzaHunt,
      repo: "https://github.com/Boots808/ecommerce-back-end",
    },
    {
      name: "Run Buddy",
      imgsrc: runBuddy,
      link: "https://boots808.github.io/run-buddy/",
      repo: "https://github.com/Boots808/run-buddy",
    },
    {
      name: "Recipe Me",
      imgsrc: recipeMe,
      link: "https://community-recipe-calendar.herokuapp.com/",
      repo: "https://github.com/Boots808/Community-Recipe-Calendar",
    },
    {
      name: "Planner App",
      imgsrc: plannerApp,
      link: "https://boots808.github.io/red-cardinal-bird/",
      repo: "https://github.com/Boots808/red-cardinal-bird",
    },
    {
      name: "Endless Pawsibilities",
      imgsrc: endless,
      link: "https://boots808.github.io/fur-ever-home/",
      repo: "https://github.com/Boots808/fur-ever-home",
    },
  ];

  return (
    <div>
      <Portfolio>
        <h2>My Portfolio Gallery</h2>
      </Portfolio>
      <div id="gallery">
        {portfolio.map((portfolio) => (
          <div key={portfolio.name}>
            <div
              className="card"
              style={{ backgroundImage: `url(${portfolio.imgsrc})` }}
            >
              <a href={portfolio.link}>{portfolio.name}</a>
              <a href={portfolio.repo}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
