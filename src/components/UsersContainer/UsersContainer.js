import { useEffect, useState } from "react";
import SearchForm from "../SearchForm";
import User from "./User";
import List from "@material-ui/core/List";
import { makeStyles } from "@material-ui/core/styles";
import "./style.css";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

const UserContainer = ({ setProfile }) => {
  const [usersList, setUsersList] = useState(null);
  const [findUserList, setFindUserList] = useState(null);
  const [isSearching, setIsSearching] = useState(false);

  const classes = useStyles();
  useEffect(() => {
    fetch("/users.json")
      .then((res) => res.json())
      .then((res) => {
        setUsersList(res.users);
      });
  }, []);

  const showSearchingUsers = (value) => {
    const newList = usersList.filter(
      (e) =>
        e.name.slice(0, value.length) === value ||
        e.surname.slice(0, value.length) === value
    );

    setFindUserList(newList);
    setIsSearching(true);
  };

  const clearSearch = () => {
    setFindUserList(null);
    setIsSearching(false);
  };

  const showUsers = () => {
    if (usersList && !isSearching) {
      return usersList.map((e) => (
        <User
          key={e.name}
          id={e.id}
          name={e.name}
          surname={e.surname}
          findUser={findUser}
        />
      ));
    } else if (isSearching && findUserList) {
      return findUserList.map((e) => (
        <User
          key={e.name}
          id={e.id}
          name={e.name}
          surname={e.surname}
          findUser={findUser}
        />
      ));
    }
  };

  const findUser = (id) => {
    const userWithDetails = usersList.filter((e) => e.id === id);
    setProfile(userWithDetails[0]);
  };

  const setNoResultInfo = () => {
    if (isSearching && findUserList.length === 0) {
      return (
        <div className="noResultsInfo">there are no results try again</div>
      );
    }
  };

  return (
    <div>
      <SearchForm showUsers={showSearchingUsers} clearSearch={clearSearch} />
      {setNoResultInfo()}
      <div className="listContainer">
        <div className={classes.root}>
          <List component="nav" aria-label="secondary mailbox folders">
            {showUsers()}
          </List>
        </div>
      </div>
    </div>
  );
};

export default UserContainer;
