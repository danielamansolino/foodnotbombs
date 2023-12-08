import React, {useState} from "react";
import LeavePage from '../modals/LeavePage';
import "./GuidingPrinciples.css";

const GuidingPrinciples = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    const handleReadMoreClick = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };
  return (
    <div className="frame">
      <div className="text-wrapper">Guiding Principles</div>
      <div className="content">
        <div className="vegan">
          <img className="img" alt="Leaf" src="https://imgur.com/n1iSMjh.png" />
          <div className="div">Always Vegan</div>
          <p className="p">
            Our food reflects our values of nonviolence and sustainability. Plant- based products are both less violent
            to produce and less prone to spoilage.
          </p>
        </div>
        <div className="yellow-line" alt="|" />
        <div className="autonomous">
          <img className="img" alt="House" src="https://imgur.com/QiTAusK.png" />
          <div className="text-wrapper-2">Indepently Operated Chapters</div>
          <p className="text-wrapper-3">
            Each of our chapters is autonomous and uses consensus to make decisions–no presidents or headquarters
            necessary.
          </p>
        </div>
        <div className="yellow-line" alt="|" />
        <div className="solidarity">
          <img className="img" alt="Clenched fist" src="https://imgur.com/ahtwElp.png" />
          <div className="div">Solidarity, not Charity</div>
          <p className="text-wrapper-4">
            We are not a charity, rather a team of volunteers dedicated to using nonviolent direct action to eliminate
            hunger.
          </p>
        </div>
      </div>
      <div className="read-more-class">
        <img 
            className="read-more" 
            src={'https://imgur.com/Ai37QYH.png'} 
            alt={'READ MORE'} 
            onClick={handleReadMoreClick}
            />
      </div>
      {isModalOpen && <LeavePage onClose={handleCloseModal} />}
    </div>
  );
};


export default GuidingPrinciples;
