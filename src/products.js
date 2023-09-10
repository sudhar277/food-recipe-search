import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const products = ({ data }) => {
  return (
    <div >
      <div className="row row-cols-1 row-cols-md-3">
        {data.map((item, index) => (
          <div className="col mb-4" key={index}>
            <div className="card" style={{ width: "18rem" ,borderRadius:"45px"}}>
              <img
                className="card-img-top"
                style={{ borderTopLeftRadius: "45px", borderTopRightRadius: "45px" }}
                src={item.recipe.image}
                alt="Card image cap"
              />
              <div className="card-body">
                <center>
                  <h5 className="card-title">{item.recipe.label}</h5>
                  <p className="card-text">
                    <b>Total Amount Of Calories:</b> {Math.round(item.recipe.calories)} kcal<br />
                    <b>Total Weight:</b> {Math.round(item.recipe.totalWeight)}g<br />
                    <a href={item.recipe.url}>Recipe Link</a>
                  </p>
                </center>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default products;
