import React, { useEffect, useState } from "react";


const Modal = ({ character }) => {
    const [selectedCharacter, setSelectedCharacter] = useState(null);
    const modalId = `staticBackdrop-${character.id}`;

    return (
        <>
            {/* trigger modal */}
            <a data-bs-toggle="modal" href={`#${modalId}`}>
                <img src={character.image} className="image-custom" onClick={() => setSelectedCharacter(character)} alt="..." />
            </a>

            {/* Modal */}
            <div className="modal fade text-dark" id={modalId} data-bs-keyboard="false" tabIndex="-1" aria-labelledby={`${modalId}Label`} aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id={`${modalId}Label`}>Character Details</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="d-flex justify-content-center border border-danger mb-3">
                                <img src={selectedCharacter?.image} className="" alt="..." />
                            </div>
                            <h6>Name: {selectedCharacter?.name}</h6>
                            <h6>Status: {selectedCharacter?.status}</h6>
                            <h6>Specie: {selectedCharacter?.species}</h6>
                            <h6>Type: {selectedCharacter?.type}</h6>
                            <h6>Gender: {selectedCharacter?.gender}</h6>
                            <h6>Origin: {selectedCharacter?.origin?.name}</h6>
                            <h6>Location: {selectedCharacter?.location?.name}</h6>
                            <h6>Created: {selectedCharacter?.created}</h6>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;