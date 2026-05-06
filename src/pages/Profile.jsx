import { useState } from 'react';
import Button from '../components/ui/Button';

export default function Profile() {
  const [user] = useState({
    name: 'Fashion Designer',
    email: 'designer@example.com',
    bio: 'Passionate about creating emotional fashion designs',
    designs: 15,
    followers: 250,
    following: 180
  });

  const userDesigns = [
    { id: 1, title: 'Design 1', date: '2024-01-15' },
    { id: 2, title: 'Design 2', date: '2024-01-14' },
    { id: 3, title: 'Design 3', date: '2024-01-13' },
    { id: 4, title: 'Design 4', date: '2024-01-12' },
  ];

  return (
    <div className="profile-page">
      <div className="profile-header">
        <div className="container">
          <div className="profile-card">
            <div className="profile-avatar">
              <div className="avatar-placeholder">👤</div>
            </div>

            <div className="profile-info">
              <h1>{user.name}</h1>
              <p className="email">{user.email}</p>
              <p className="bio">{user.bio}</p>

              <div className="profile-stats">
                <div className="stat">
                  <h3>{user.designs}</h3>
                  <p>Designs</p>
                </div>
                <div className="stat">
                  <h3>{user.followers}</h3>
                  <p>Followers</p>
                </div>
                <div className="stat">
                  <h3>{user.following}</h3>
                  <p>Following</p>
                </div>
              </div>

              <div className="profile-actions">
                <Button variant="primary">Edit Profile</Button>
                <Button variant="secondary">Settings</Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container profile-container">
        <div className="designs-section">
          <h2>My Designs</h2>
          <div className="designs-list">
            {userDesigns.map(design => (
              <div key={design.id} className="design-item">
                <div className="design-thumbnail"></div>
                <div className="design-details">
                  <h3>{design.title}</h3>
                  <p>{design.date}</p>
                </div>
                <div className="design-actions">
                  <button className="action-btn">Edit</button>
                  <button className="action-btn delete">Delete</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
