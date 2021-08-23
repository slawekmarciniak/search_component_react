import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { NavLink } from "react-router-dom";

const User = ({ id, name, surname, findUser }) => {
  const handleClick = () => findUser(id);

  return (
    <NavLink
      exact
      to="user-profile"
      style={{ textDecoration: "none", color: "#2d3436" }}
    >
      <ListItem button onClick={handleClick}>
        <ListItemText
          style={{ textTransform: "capitalize" }}
          primary={`${name} ${surname}`}
        />
      </ListItem>
    </NavLink>
  );
};

export default User;
