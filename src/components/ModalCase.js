import React from "react";

export default function ModalCase({setIsOpen, player} ){
    return(
        <div className="modal-show" onClick={() => setIsOpen(false)}>
            <div id="modal1" className="modal" style={{display: 'block', top: '35%'}}>
                <div className="modal-conent">
                    <h4>Video for {player.name}</h4>
                    <p><iframe width="100%" height='400px' src={player.clip} title={player.name} frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen/></p>
                </div>
                <div className="modal-footer">
                    <a className="modal-close red-text">Close</a>
                </div>
            </div>
        </div>
    )
}