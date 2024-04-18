import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createWallet } from "../../../actions/projectActions"; // Adjust the path as necessary
import Nav1 from "../../shared/Nav1";

function CreateWallet() {
  const [name, setName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");

  const { userId } = useParams();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submitHandler = (event) => {
    event.preventDefault();

    console.log(userId);
    const newWallet = { name, accountNumber, description, priority };
    dispatch(createWallet(newWallet, navigate, userId));
  };

  return (
    <div>
      <Nav1 />
      <div className="project">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <Link to={`/${userId}`} className="btn btn-info btn-lg">
                Back to Dashboard
              </Link>
              <h5 className="display-4 text-center">Create Wallet</h5>
              <hr />
              <form onSubmit={submitHandler}>
                <div className="form-group">
                  <input
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    className="form-control form-control-lg"
                    placeholder="Account Name"
                  />
                </div>
                <br />
                <div className="form-group">
                  <input
                    type="text"
                    onChange={(e) => setAccountNumber(e.target.value)}
                    className="form-control form-control-lg"
                    placeholder="Account No"
                  />
                </div>
                <br />
                <div className="form-group">
                  <textarea
                    className="form-control form-control-lg"
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Description"
                  ></textarea>
                </div>
                <br />
                <div className="form-group">
                  <select
                    className="form-control form-control-lg"
                    onChange={(e) => setPriority(e.target.value)}
                    name="priority"
                  >
                    <option value="">Display Priority</option>
                    <option value="1">High</option>
                    <option value="2">Medium</option>
                    <option value="3">Low</option>
                  </select>
                </div>
                <br />
                <input
                  type="submit"
                  className="btn btn-primary btn-block mt-4"
                  value="Create"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateWallet;
