import "bootstrap-icons/font/bootstrap-icons.css";
import "./card.css";

export function Card({ cardIcon, title, description }) {
  return (
    <div className="card bg-light border-0 h-100">
      <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
        <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4 fs-2">
          <i className={cardIcon}></i>
        </div>
        <h2 className="fs-4 fw-bold">{title}</h2>
        <p className="mb-0">{description}</p>
      </div>
    </div>
  );
}
