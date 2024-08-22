import React from 'react';
import '../styles/selectarea.css';

const areas = [
  { id: 1, name: 'Eğitim', image: 'education.png' },
  { id: 2, name: 'Sağlık', image: 'health.png' },
  { id: 3, name: 'Gıda', image: 'food.png' },
  { id: 4, name: 'Barınma', image: 'shelter.png' },
  { id: 5, name: 'Temizlik', image: 'cleaning.png' },
  { id: 6, name: 'Kıyafet', image: 'clothing.png' },
  { id: 7, name: 'Kütüphane', image: 'library.png' },
  { id: 8, name: 'Diğer', image: 'other.png' },
];

function SelectArea() {
  const handleSelect = (id) => {
    window.location.href = `/donation?area=${id}`;
  };

  return (
    <div className="page-container">
      <div className="background-container" />
      <div className="area-container">
        {areas.map(area => (
          <div key={area.id} className="area-box" onClick={() => handleSelect(area.id)}>
            <img src={`../images/${area.image}`} alt={area.name} className="area-image" />
            <p className="area-name">{area.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SelectArea;
