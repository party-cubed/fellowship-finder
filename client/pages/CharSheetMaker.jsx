import React, { useState } from 'react';
import {
  TextField,
  FormControl,
  FormGroup,
  InputLabel,
  Button,
  Select,
  MenuItem,
} from '@mui/material';

export default function CharSheetMaker() {
  const [charName, setCharName] = useState('');
  const [charRace, setCharRace] = useState('');
  const [charClass, setCharClass] = useState('');
  const [str, setStre] = useState(1);
  const [dex, setDex] = useState(1);
  const [con, setCon] = useState(1);
  const [int, setInt] = useState(1);
  const [wis, setWis] = useState(1);
  const [cha, setCha] = useState(1);
  const [charDesc, setDesc] = useState('');

  const numArr = [];

  for (let i = 1; i <= 20; i++) {
    numArr.push(i);
  }

  return (
    <div>
      <FormGroup>
        <TextField
          id="character-name"
          variant="filled"
          placeholder="character name"
          onChange={(e) => setCharName(e.target.value)}
        />

        <TextField
          id="character-race"
          variant="filled"
          placeholder="character race"
          onChange={(e) => setCharRace(e.target.value)}
        />

        <TextField
          id="character-class"
          variant="filled"
          placeholder="character class"
          onChange={(e) => setCharClass(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <div>
          <FormControl style={{ margin: 10, width: 300 }}>
            <InputLabel>STRENGTH</InputLabel>
            <Select
              value={str}
              label="STRENGTH"
              onChange={(e) => setStr(e.target.value)}
            >
              {numArr.map((num) => (
                <MenuItem
                  key={`${num}-str`}
                  value={num}
                >
                  {num}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl style={{ margin: 10, width: 300 }}>
            <InputLabel>DEXTERITY</InputLabel>
            <Select
              value={dex}
              label="DEXTERITY"
              onChange={(e) => setDex(e.target.value)}
            >
              {numArr.map((num) => (
                <MenuItem
                  key={`${num}-dex`}
                  value={num}
                >
                  {num}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl style={{ margin: 10, width: 300 }}>
            <InputLabel>CONSTITUTION</InputLabel>
            <Select
              value={con}
              label="CONSTITUTION"
              onChange={(e) => setCon(e.target.value)}
            >
              {numArr.map((num) => (
                <MenuItem
                  key={`${num}-con`}
                  value={num}
                >
                  {num}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>

        <div>
          <FormControl style={{ margin: 10, width: 300 }}>
            <InputLabel>INTELLEGENCE</InputLabel>
            <Select
              value={int}
              label="INTELLEGENCE"
              onChange={(e) => setInt(e.target.value)}
            >
              {numArr.map((num) => (
                <MenuItem
                  key={`${num}-int`}
                  value={num}
                >
                  {num}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl style={{ margin: 10, width: 300 }}>
            <InputLabel>WISDOM</InputLabel>
            <Select
              value={wis}
              label="WISDOM"
              onChange={(e) => setWis(e.target.value)}
            >
              {numArr.map((num) => (
                <MenuItem
                  key={`${num}-wis`}
                  value={num}
                >
                  {num}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl style={{ margin: 10, width: 300 }}>
            <InputLabel>CHARISMA</InputLabel>
            <Select
              value={cha}
              label="CHARISMA"
              onChange={(e) => setCha(e.target.value)}
            >
              {numArr.map((num) => (
                <MenuItem
                  key={`${num}-cha`}
                  value={num}
                >
                  {num}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      </FormGroup>
      <FormGroup>
        <TextField
          id="character-name"
          variant="filled"
          placeholder="character name"
          onChange={(e) => setDesc(e.target.value)}
        />
      </FormGroup>
      <Button
        onClick={() => console.log({
          charName,
          charRace,
          charClass,
          str,
          dex,
          con,
          int,
          wis,
          cha,
          charDesc,
        })}
      >
        Create
      </Button>
    </div>
  );
}
