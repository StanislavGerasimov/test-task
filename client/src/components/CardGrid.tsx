import React from "react";
import "../styles/CardGrid.css";

interface Property {
  id: number;
  name: string;
  price: string;
  yield: string;
  sold: number;
  ticket: string;
  daysLeft: number;
  photo: string;
}

interface CardGridProps {
  properties: Property[];
}

const CardGrid: React.FC<CardGridProps> = ({ properties }) => {
  return (
    <div className="cardGrid">
      {properties.map((property) => {
        const filename = property.photo.split("/").pop();
        const imageUrl = `http://localhost:5000/cards/${filename}`;

        return (
          <div
            key={property.id}
            className="card"
            style={{
              backgroundImage: `url(${imageUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="cardContent"></div>
            <div className="cardFooter">
              <div className="row footerTitle">{property.name}</div>
              <div className="row footerStats">
                <span>{property.price} Dhs</span>
                <span>Yield {property.yield}%</span>
                <span>{property.sold}%</span>
              </div>
              <div className="row footerMeta">
                <span>Ticket - {property.ticket} Dhs</span>
                <span>Days Left: {property.daysLeft}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CardGrid;
