// src/ViewMoreDetails.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import shoesData from "../Datas/shoesdata.json"; // Import the JSON data directly
import '../StyleSheets/MoreDetailsStyle.css'; // Import the CSS file

function ViewMoreDetails() {
  const { ShoesName } = useParams();
  const [shoeData, setShoeData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);
    const filteredData = shoesData.ShoesData.filter((shoe) => shoe.Name === ShoesName);

    if (filteredData.length > 0) {
      setShoeData(filteredData[0]);
    } else {
      setError('Shoe not found');
    }

    setLoading(false);
  }, [ShoesName]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!shoeData) {
    return <p>No details available.</p>;
  }
  const sizeOptions = Array.isArray(shoeData.sizeOptions) ? shoeData.sizeOptions : [];

  return (
    <div className="shoe-details">
      <h1>{shoeData.Name}</h1>
      <img src={shoeData.ImgUrl} alt={shoeData.Name} />
      <p>Price: ${shoeData.Price}</p>
      <p>Discount: ${shoeData.Discount}</p>
      <p>Description: {shoeData.description}</p>
      <p>Material: {shoeData.material}</p>
      <h3>Available Sizes:</h3>
      <ul>
        {sizeOptions.length > 0 ? (
          sizeOptions.map((size, index) => (
            <li key={index}>{size}</li>
          ))
        ) : (
          <li className="no-options">No size options available.</li>
        )}
      </ul>
      <p>Rating: {shoeData.rating}</p>
    </div>
  );
}

export default ViewMoreDetails;
