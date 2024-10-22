import React from "react";
import Collapse from "../components/Collapse.jsx"
import CollapseData from "../Datas/collapse.json";
import '../styles/collapse.scss';
import '../styles/about.scss';

function About() {
    return (
    <div className="about">
      <main>
          <div className="collapse__dropdown">
            {CollapseData.map((item) => {
              return (
                  <Collapse key={item.id} content={item.content} title={item.title} />
              );
            })}
          </div>
      </main>
    </div>
  );
};

  export default About;