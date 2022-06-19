import React, { useContext, useEffect } from "react";
import "./Pending.css";
import AuthContext from "../../../Context/AuthContext";

const Pending = () => {
  
  const { getPendings, pendings } = useContext(AuthContext);

  useEffect(() => {
    getPendings();
  },[])

  return (
    <div className="main-div">
      <div className="contain-div">
      { pendings.length > 0 ? <> 
        <div className="view-div">
          <h4 className="title-view">Pending</h4>
        </div>
        <div className="content-div">
           <h4 className="title-content">Pending</h4>
          {pendings.map((pending) => {
            return (<h6 key={pending.id}>{pending.taskname}</h6>
          )})}
        </div> </> :
        <div className="view-div-2">
            <h4 className="title-view">No Pendings</h4>
        </div> }
      </div>
    </div>
  );
};

export default Pending;
