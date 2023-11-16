import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {
  Typography,
  Grid,
  Container,
  Chip,
  Avatar,
  Table,
  TableHead,
  TableContainer,
  TableRow,
  TableCell,
  Paper,
} from '@mui/material';
import profilepic from '../assets/profilepic.jpg';
import { UserContext } from '../components/UserProvider';

const Profile = () => {
  const { activeUser, setActiveUser } = useContext(UserContext);
  const { id } = useParams();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
  const [sheets, setSheets] = useState([]);

  useEffect(() => {
    console.log('imo', user)
    const fetchUser = async () => {
      try {
        const { data } = await axios.get(`api/user/${id}`);
        setUser(data);
      } catch (err) {
        console.error('Error fetching user data: ', err);
      }
    };
    fetchUser();
  }, [id]);

  useEffect(() => {
    axios
      .get(`/sheet/${activeUser.id}`)
      .then(({ data }) => {
        setSheets(data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <Container>
      <Avatar
        sx={{
          width: 150,
          height: 150,
          position: 'relative',
          top: '-50px',
          left: '-20%',
          margin: '0 auto',
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
          <Typography variant="h2">{user ? user.username : ''}</Typography>
          <Chip
            label={`Email: ${user ? user.email : ''}`}
            variant="outlined"
          />
          <Chip
            label={`Companions: ${user.friends ? user.friends : 'Nary a one'}`}
            variant="outlined"
          />
          <Chip
            label={`Combat Heaviness: ${user ? user.combatHeaviness : ''}`}
            variant="outlined"
          />
          <Chip
            label={`Strategy Heaviness: ${user ? user.strategyHeaviness : ''}`}
            variant="outlined"
          />
          <Chip
            label={`Roleplay Focus: ${user ? user.roleplayFocus : ''}`}
            variant="outlined"
          />
          <Chip
            label={`Story Focus: ${user ? user.storyFocus : ''}`}
            variant="outlined"
          />
        </Grid>
      </Grid>

      {sheets.map((sheet) => (
        <TableContainer key={sheet.id} component={Paper} style={{margin: '100px', border: '10px white solid round' }}>
          {/* refactor to dividers */}
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name: {sheet.charName}</TableCell>
                <TableCell>Race: {sheet.charRace}</TableCell>
                <TableCell>Class: {sheet.charClass}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>STRENGTH: {sheet.str}</TableCell>
                <TableCell>DEXTERITY: {sheet.dex}</TableCell>
                <TableCell>CONSTITUTION: {sheet.con}</TableCell>
                <TableCell>INTELLEGENCE: {sheet.int}</TableCell>
                <TableCell>WISDOM: {sheet.wis}</TableCell>
                <TableCell>CHARISMA: {sheet.cha}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Character Description: {sheet.charDesc}</TableCell>
              </TableRow>
            </TableHead>
          </Table>
        </TableContainer>
      ))}
    </Container>
  );
};

export default Profile;
