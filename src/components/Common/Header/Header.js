//Bootstrap
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
// import style from Header.module.css
import style from "./Header.module.css";
import light from "./light.jpg";
import { useContext } from "react";
import AuthContext from "../../../AuthContext/AuthContext";
import Button from "@mui/material/Button";



function Header() {

  const { logoutUser, user } = useContext(AuthContext);

  const handleDarkMode = (e) => {
    if (e.target.checked) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  };

  return (
    <Row className={`mx-0 d-none d-lg-flex px-5 bs py-2 ${style.header}`}>
      <Col md={6}>
        <Row className="m-0">
          <Col md={6} className="d-flex">
            <img src={light} width="35%" className="cp me-2"></img>
            <h3>BROCAMP</h3>
          </Col>
          <Col md={6} className="d-flex displayname">  
            {user && <h3 className="ms-5">Hello {user.username}</h3>}
          </Col>
        </Row>
      </Col>
      <Col md={6}>
        <Row className="m-0">
          <Col md={6} className="p-0">
            <Row className={`m-0 d-flex rounded-3 ${style.search}`}>
              <Col xs={10} className="p-0 py-2 ps-3">
                <input
                  type="text"
                  className={`w-100 ${style.searchBar}`}
                  id=""
                />
              </Col>
              <Col xs={2} className="p-0">
                <SearchRoundedIcon
                  className={`p-2 rounded ${style.searchIcon}`}
                  sx={{ fontSize: 40 }}
                />
              </Col>
            </Row>
          </Col>
          
          <Col md={6} className="d-flex justify-content-between px-3 p-0">
            <svg height={40} width={40} onClick={ logoutUser }>
              <circle cx="20" cy="20" r="20" fill="#334A52" />
            </svg>
            <input type="checkbox" id="checkbox" onChange={handleDarkMode} />
          </Col>
        </Row>
      </Col>
      
    </Row>
  );
}

export default Header;

// icons
// import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
// import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
// import ForumRoundedIcon from "@mui/icons-material/ForumRounded";
// import BookmarkRoundedIcon from "@mui/icons-material/BookmarkRounded";

{
  /* <HomeRoundedIcon
              className={`cp p-2 rounded-3 mx-2 ${style.icons}`}
              sx={{ fontSize: 40 }}
            />
            <GroupsRoundedIcon
              className={`cp p-2 rounded-3 mx-2 ${style.icons}`}
              sx={{ fontSize: 40 }}
            />
            <ForumRoundedIcon
              className={`cp p-2 rounded-3 mx-2 ${style.icons}`}
              sx={{ fontSize: 40 }}
            />
            <BookmarkRoundedIcon
              className={`cp p-2 rounded-3 mx-2 ${style.icons}`}
              sx={{ fontSize: 40 }}
            /> */
}
