import React from 'react'

const ProfileCard = ({ name, role, image }) => {
  return (
    <div>
      <img src={image} alt={name} width="100" />
      <h3>{name}</h3>
      <p>{role}</p>
    </div>
  );
};

export default ProfileCard
