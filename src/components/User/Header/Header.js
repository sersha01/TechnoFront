//Bootstrap
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// icons
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import ForumRoundedIcon from "@mui/icons-material/ForumRounded";
import BookmarkRoundedIcon from "@mui/icons-material/BookmarkRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
// import style from Header.module.css
import style from "./Header.module.css";
import light from "./light.jpg";

function Header() {
  return (
    <Row className={`mx-0 px-5 bs py-2 ${style.header}`}>
      <Col md={6}>
        <Row className="m-0">
          <Col md={5}>
            <img src={light} width="55%" height="100%" className="cp"></img>
          </Col>
          <Col md={7} className="d-flex justify-contend-start">
            <HomeRoundedIcon
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
            />
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
          <Col md={4} className="p-0">
            <FavoriteRoundedIcon
              className={`p-2 rounded-3 mx-2 ${style.opIcons}`}
              sx={{ fontSize: 40 }}
            />
            <NotificationsRoundedIcon
              className={`p-2 rounded-3 mx-2 ${style.opIcons}`}
              sx={{ fontSize: 40 }}
            />
          </Col>
          <Col md={2} className=" px-3 p-0">
            <svg height={40} width={40}>
              <circle cx="20" cy="20" r="20" fill="#334A52" />
            </svg>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default Header;
