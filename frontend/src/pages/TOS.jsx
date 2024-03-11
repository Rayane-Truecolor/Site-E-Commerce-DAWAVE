import React, { useState } from 'react';

export default function TOS({ onClose }) { // Déstructuration de onClose comme un objet
  const [accepted, setAccepted] = useState(false);

  const handleAccept = () => {
    setAccepted(true);
    onClose(); // Appel de la fonction onClose pour fermer le bloc
  };

  const handleDecline = () => {
    setAccepted(false);
    onClose(); // Appel de la fonction onClose pour fermer le bloc
  };

  return (
    <div className="wrapper flex_align_justify">
      <div className="terms_service">
        <div className="tc_item tc_head flex_align_justify">
          <div className="icon flex_align_justify">
          </div>
          <div className="text">
            <h2>TERMS OF SERVICE</h2>
            <p>Last updated on September 12 2022</p>
          </div>
        </div>
        <div className="tc_item tc_body">
          <ol>
            <li>
              <h3>Terms of use</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, quidem doloribus cumque vero, culpa voluptates dolorum reprehenderit nihil nisi odit necessitatibus voluptate voluptatibus magni ducimus sed accusamus illo nobis veniam.</p>
            </li>
            <li>
              <h3>Intellectual property rights</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, quidem doloribus cumque vero, culpa voluptates dolorum reprehenderit nihil nisi odit necessitatibus voluptate voluptatibus magni ducimus sed accusamus illo nobis veniam.</p>
            </li>
            <li>
              <h3>Prohibited activities</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, quidem doloribus cumque vero, culpa voluptates dolorum reprehenderit nihil nisi odit necessitatibus voluptate voluptatibus magni ducimus sed accusamus illo nobis veniam.</p>
            </li>
            <li>
              <h3>Termination clause</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, quidem doloribus cumque vero, culpa voluptates dolorum reprehenderit nihil nisi odit necessitatibus voluptate voluptatibus magni ducimus sed accusamus illo nobis veniam.</p>
            </li>
            <li>
              <h3>Governing law</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, quidem doloribus cumque vero, culpa voluptates dolorum reprehenderit nihil nisi odit necessitatibus voluptate voluptatibus magni ducimus sed accusamus illo nobis veniam.</p>
            </li>
          </ol>
        </div>
        <div className="tc_item tc_foot flex_align">
          <button className="decline_btn" onClick={handleDecline}>Decline</button>
          <button className="accept_btn" onClick={handleAccept} disabled={accepted}>Accept</button>
        </div>
      </div>
    </div>
  );
}