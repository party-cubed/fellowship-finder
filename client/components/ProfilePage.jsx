import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';


const ProfilePage = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await axios.get(`/user/${id}`);
        setUser(data);
      } catch (err) {
        console.error("Error fetching user data: ", err);
      }
    };
    fetchUser();
  }, [id]);

  return user ? (
    <div>
      <h1>{user.name}</h1>
      <p>{user.bio}</p>
      <h2>Age: {user.age}</h2>
      <h2>City: {user.city}</h2>
      <h2>maxTravelDist: {user.maxTravelDist}</h2>
      <h2>Alcohol/drug friendly?: {user.sober}</h2>
      <h2>Ability to host: {user.canHost}</h2>
      <h2>DM: {user.DM}</h2>
      <h2>combatHeaviness: {user.combatHeaviness}</h2>
      <h2>strategyHeaviness: {user.strategyHeaviness}</h2>
      <h2>roleplayFocus: {user.roleplayFocus}</h2>
      <h2>storyFocus: {user.storyFocus}</h2>
    </div>
  ) : (
    <h1>Loading Profile...</h1>
  );
};

export default ProfilePage;
