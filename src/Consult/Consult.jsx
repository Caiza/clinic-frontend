import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export function Consult() {
  return (
    <div>
      <div>
        <h1>Consult Page</h1>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Name
        </label>
        <input
          type="Name"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Name"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Description
        </label>
        <textarea
          className="form-control"
          placeholder="Description"
          rows="3"
        ></textarea>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Price
        </label>
        <input
          type="Price"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Price"
        />
      </div>
      <div className="mb-3">
        <input class="btn btn-primary" type="submit" value="Submit"></input>
      </div>
    </div>
  );
}
