import { React, useState} from 'react'
import './resourcesButton.css'
import LeavePage from '../modals/LeavePage';

function ResourcesButton() {
    const [isModalOpen, setModalOpen] = useState(false);

    const handleReadMoreClick = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };
  return (
    <div>
            <div className="read-more-class resourceButtonStyle" onClick={handleReadMoreClick}>
                <h3>Explore more resources</h3>
            </div>
        {isModalOpen && <LeavePage onClose={handleCloseModal} />}
    </div>

  )
}

export default ResourcesButton