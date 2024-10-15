import React from "react";
import { useParams } from "react-router-dom";
import Collapse from "../components/Collapse.jsx"
import Data from "../Datas/logements.json";
import '../styles/collapse.scss';


function Logement() {
    const { id } = useParams();

    const logement = Data.find((item) => item.id === id);

    return (
        <div className="logement">
            <main>
                <div className="collapsibles ">
                    <div className="collapse__dropdown">
                        <div key={logement.id}>
                            <h2>{logement.title}</h2>
                            <div>
                                <img src={logement.host.picture} alt="portrait"/>
                                <h2>{logement.host.name}</h2>
                            </div>
                            <h2>{logement.location}</h2>
                            <h2>{logement.tags}</h2>
                            <div>
                                <Collapse content={logement.description} title="Description" />
                                <Collapse content={logement.equipments} title="Equipements" />
                            </div>
                            
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Logement;