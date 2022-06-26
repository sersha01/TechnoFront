import Header from "../../Common/Header/Header";
import AuthContext from "../../../Context/AuthContext";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AdminHome = () => {
  const { leads, getLeads, deleteLead } = useContext(AuthContext);

  useEffect(() => {
    getLeads();
  }, []);


  return (
    <>
      <div className="container-fluid p-0 m-0 " style={{ height: "100vh" }}>

        <div className="container" style={{ marginTop: "100px" }}>
          <table
            className="table text-center"
            style={{
              marginTop: "150px",
              borderRadius: "2px",
              boxShadow: "rgba(100, 100, 111, 0.4) 0px 7px 29px 0px",
            }}
          >
            <thead className="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Username</th>
                <th scope="col">
                  <Link to="/admin/create/lead">
                    <button className="btn btn-dark px-3">+ Add User</button>
                  </Link>
                </th>
              </tr>
            </thead>
            <tbody>
              {leads &&
                leads.map((lead, index) => {
                  return (
                    <tr key={index}>
                      <th scope="row">{lead.id}</th>
                      <td>{lead.name}</td>
                      <td>{lead.user.username}</td>
                      <td className="d-flex justify-content-center">
                        <div className="d-flex">
                          <button
                            type="button"
                            className="btn btn-outline-danger"
                            onClick={() => {deleteLead(lead.id)}}
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AdminHome;