import React from "react";
import { useParams, Navigate } from "react-router-dom";
import Collapse from "../components/Collapse.jsx"
import Data from "../Datas/logements.json";
import '../styles/collapse.scss';
import '../styles/logement.scss';
import Slideshow from '../components/Slideshow.jsx';


function Logement() {
    const { id } = useParams();
    const ficheLogement = Data.find((logement) => logement.id === id);
    const logement = Data.find((item) => item.id === id);
    const arrayStars = [1, 2, 3, 4, 5]

    return (
        <>
        {ficheLogement ? (
            <div className="logement">
                <main>
                    <div>
                        <div>
                            <div key={logement.id}>
                                <Slideshow slides={logement.pictures} />
                                <div className="logement_and_host">
                                    <div className="logement_infos">
                                        <h2 className="logement_title">{logement.title}</h2>
                                        <h2 className="logement_location">{logement.location}</h2>
                                    </div>
                                    <div className="host_identity">
                                        <img className="host_picture" src={logement.host.picture} alt="portrait"/>
                                        <h2 className="host_name">{logement.host.name}</h2>
                                    </div>
                                </div>
                                <div className="logement_tags_and_stars">
                                    <h2 className="logement_all_tags">{logement.tags.map((element, index) => {
                                    return(<p className='logement_tags' key={"tags-"+index}>{element}</p>)})}
                                    </h2>
                                    <div className='stars'>
                                    {
                                        arrayStars.map(element => {
                                            const nbreEtoiles = parseInt(logement.rating)
                                            return(<span key={"star-"+element} className={element <= nbreEtoiles ? 'star_lighted' : 'star_dimmed'}>★</span>)
                                        })
                                    }
                                    </div>
                                </div>
                                <div className="collapsibles">
                                    <Collapse content={logement.description} title="Description" />
                                    <Collapse content={logement.equipments} title="Equipements" />
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        ) : (<Navigate replace to="/404" />)}
        </>
    );
};

export default Logement;