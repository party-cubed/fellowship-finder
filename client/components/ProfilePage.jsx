import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';


const ProfilePage = () => {
  const { user } = useParams();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const { data } = await axios.get(`http://localhost:7000/api/users/${user}`);
        setProfile(data);
      } catch (err) {
        console.error("Error fetching user data: ", err);
      }
    };
    fetchProfile();
  }, [user]);
  // useEffect(() => {
  //   const fetchProfile = async () => {
  //     try {
  //       const { data } = await axios.get(`http://localhost:7000/api/users/${user}`);
  //       setProfile(data);
  //     } catch (err) {
  //       console.error("Error fetching user data: ", err);
  //     }
  //   };
  //   fetchProfile();
  // }, [user]);

  if (!profile) return <p>Loading...</p>;

  return (
    <div>
      <h1>{profile.name}</h1>
      <p>{profile.bio}</p>
      <h2>Age: {profile.age}</h2>
      <h2>City: {profile.city}</h2>
      <h2>maxTravelDist: {profile.maxTravelDist}</h2>
      <h2>Alcohol/drug friendly?: {profile.sober}</h2>
      <h2>Ability to host: {profile.canHost}</h2>
      <h2>DM: {profile.DM}</h2>
      <h2>combatHeaviness: {profile.combatHeaviness}</h2>
      <h2>strategyHeaviness: {profile.strategyHeaviness}</h2>
      <h2>roleplayFocus: {profile.roleplayFocus}</h2>
      <h2>storyFocus: {profile.storyFocus}</h2>
    </div>
  );
};

export default ProfilePage;
