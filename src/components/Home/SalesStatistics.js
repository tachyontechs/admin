import React from "react";
import cart1 from "../../assets/chart1.jpg"
const SaleStatistics = () => {
    return (
        <div className="col-xl-6 col-lg-12">
            <div className="card mb-4 shadow-sm">
                <article className="card-body">
                    <h5 className="card-title"> Vacancy Stats </h5>{" "}
                    <img
                        style={{
                            width: "100%",
                            height: "350px",
                            objectFit: "contain",
                        }}
                        src={cart1}
                    />
                </article>{" "}
            </div>{" "}
        </div>
    );
};

export default SaleStatistics;
