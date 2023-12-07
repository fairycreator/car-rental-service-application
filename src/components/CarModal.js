import React from "react";

const CarModal = ({ car, onClose }) => {
  const handleClose = (e) => {
    if (e.target.id === "backdrop" || e.target.className === "close") {
      onClose();
    }
  };

  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  if (!car) {
    return null;
  }

  return (
    <div id="backdrop" className="car-modal-backdrop" onClick={handleClose}>
      <div className="car-modal-content">
        <span className="close" onClick={handleClose}>
          &times;
        </span>
        <img src={car.image} alt={`${car.make} ${car.model}`} />
        <h3>{`${car.make} ${car.model}, ${car.year}`}</h3>
        <p>{car.description}</p>
        {/* ... інші деталі ... */}
        <button onClick={handleClose}>Rental car</button>
      </div>
    </div>
  );
};

export default CarModal;
