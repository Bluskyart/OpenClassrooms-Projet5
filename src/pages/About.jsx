import React from "react";
import Collapse from "../components/Collapse.jsx"
import CollapseData from "../Datas/collapse.json";
import '../styles/collapse.scss';

function About() {
    return (
    <div className="about">
      <main>
        <div className="collapsibles">
          <div className="collapse__dropdown">
            {CollapseData.map((item) => {
              return (
                <div key={item.id}>
                  <Collapse content={item.content} title={item.title} />
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
};

  export default About;