function LoadingSkeleton() {
  return (
    <div className="row g-4">
      {[1, 2, 3, 4].map((item) => (
        <div className="col-md-6 col-lg-4" key={item}>
          <div className="card shadow-sm">
            <div className="card-body">
              <div className="placeholder-glow">
                <span className="placeholder col-6 mb-3"></span>

                <span className="placeholder col-4 mb-2"></span>

                <span className="placeholder col-8 mb-2"></span>

                <span className="placeholder col-5 mb-4"></span>

                <span className="placeholder btn btn-primary col-12"></span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default LoadingSkeleton;