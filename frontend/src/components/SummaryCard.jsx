function SummaryCard({ title, value }) {
  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <h6>{title}</h6>
        <h3>{value}</h3>
      </div>
    </div>
  );
}

export default SummaryCard;