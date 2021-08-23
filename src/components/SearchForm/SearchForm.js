import React from "react";
import { useForm } from "react-hook-form";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import ClearIcon from "@material-ui/icons/Clear";
import "./style.css";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

const UserSearch = ({ showUsers, clearSearch }) => {
  const classes = useStyles();

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    showUsers(data.search.toLowerCase());
  };

  const clear = () => {
    clearSearch();
    reset();
  };

  return (
    <div className="formContainer">
      <Paper
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        className={classes.root}
      >
        <InputBase
          {...register("search", { required: true, min: 2 })}
          className={classes.input}
          placeholder="Search users by name or surname"
          inputProps={{ "aria-label": "search google maps" }}
        />
        <Divider className={classes.divider} orientation="vertical" />

        <IconButton
          type="submit"
          className={classes.iconButton}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
        <Divider className={classes.divider} orientation="vertical" />
        <IconButton
          onClick={clear}
          className={classes.iconButton}
          aria-label="clear"
        >
          <ClearIcon />
        </IconButton>
      </Paper>
    </div>
  );
};

export default UserSearch;
