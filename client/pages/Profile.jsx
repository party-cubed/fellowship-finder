import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Typography, Grid, Container, Chip, Avatar } from "@mui/material";
import CharSheet from "./CharSheet.jsx";
import profilepic from "../assets/profilepic.jpg";
import { UserContext } from "../components/UserProvider";
import PhotoUpload from './PhotoUpload.jsx';

const Profile = () => {
  const { activeUser, setActiveUser } = useContext(UserContext);
  const { file, setFile } = useState('');
  const { id } = useParams();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [sheets, setSheets] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await axios.get(`api/user/${id}`);
        setUser(data);
      } catch (err) {
        console.error("Error fetching user data: ", err);
      }
    };
    fetchUser();
  }, [id]);

  useEffect(() => {
    axios
      .get(`/sheet/${id}`)
      .then(({ data }) => {
        setSheets(data);
      })
      .catch((err) => console.error(err));
  }, [id]);

  return (
    <Container>
      <Avatar
        sx={{
          width: 150,
          height: 150,
          position: "relative",
          top: "-50px",
          left: "-20%",
          margin: "0 auto",
        }}
        alt="Marvy Warvy"
        src={user.image ? user.image : profilepic}
      />
      <Grid container>
        <Grid
          item
          xs={12}
          sm={8}
          md={6}
          lg={4}
          xl={3}
        >
          <Typography variant="h2">{user ? user.username : ""}</Typography>
          <Chip
            label={`Email: ${user ? user.email : ""}`}
            variant="outlined"
          />
          <Chip
            label={`Companions: ${user.friends ? user.friends : "Nary a one"}`}
            variant="outlined"
          />
          <Chip
            label={`Combat Heaviness: ${user ? user.combatHeaviness : ""}`}
            variant="outlined"
          />
          <Chip
            label={`Strategy Heaviness: ${user ? user.strategyHeaviness : ""}`}
            variant="outlined"
          />
          <Chip
            label={`Roleplay Focus: ${user ? user.roleplayFocus : ""}`}
            variant="outlined"
          />
          <Chip
            label={`Story Focus: ${user ? user.storyFocus : ""}`}
            variant="outlined"
          />
        </Grid>
      </Grid>

      <Grid container>
        {sheets.map((sheet) => (
          <Grid>
            <CharSheet
              sheet={sheet}
              key={sheet.id}
            />
          </Grid>
        ))}
      </Grid>
      <PhotoUpload
        user={user}
      />
    </Container>
  );
};

export default Profile;
