import { NavLink } from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";

import "./style.css";

const UserProfile = ({ profile }) => {
  return (
    <div className="profilContainer">
      <NavLink to="/">
        <Button variant="contained" color="primary">
          Back to home
        </Button>
      </NavLink>
      <h3>Profile:</h3>
      <div className="detailsContainer">
        <ListItem button>
          <ListItemText
            style={{ textTransform: "capitalize" }}
            primary={`name: ${profile.name}`}
          />
        </ListItem>
        <ListItem button>
          <ListItemText
            style={{ textTransform: "capitalize" }}
            primary={`surname: ${profile.surname}`}
          />
        </ListItem>
        <ListItem button>
          <ListItemText
            style={{ textTransform: "capitalize" }}
            primary={`profession: ${profile.details.profession}`}
          />
        </ListItem>
      </div>
    </div>
  );
};

export default UserProfile;
