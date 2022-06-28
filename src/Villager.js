import React from 'react';
import { Link } from 'react-router-dom';

export default function Villager({ Name, image, id }) {
  const urlA = image.replace('=IMAGE("', '');
  const imageURL = urlA.replace('")', '');
  

  return (
    <Link to={`/villager/${id}`}>
      <div className="villager">
        <h4>{Name}</h4>
        <img src={imageURL} />
      </div>
    </Link>
  );
}
