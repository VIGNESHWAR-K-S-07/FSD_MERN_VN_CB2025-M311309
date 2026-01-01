import React from 'react'
import { useState } from 'react'
const ToUpdateProfile = () => {
    const [profile, setProfile] = useState({
      name: "Viki",
      email: "viki@mail.com",
      phone: "123",
    });
  return (
    <div>
      <input
        value={profile.name}
        onChange={(e) => setProfile({ ...profile, name: e.target.value })}
      />
      <input
        value={profile.email}
        onChange={(e) => setProfile({ ...profile, email: e.target.value })}
      />
      <input
        value={profile.phone}
        onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
      />
      <p>
        {profile.name} - {profile.email} - {profile.phone}
      </p>
    </div>
  );
}

export default ToUpdateProfile
