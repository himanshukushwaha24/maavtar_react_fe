import React from "react";

import "../assets/styles/LeaderBoard.css";
import user from "../assets/images/user.png";
import badge from "../assets/images/Badge.jpg";

const leaderBoard = () => {
  const players = [
    {
      rank: "001",
      playerName: "LOVERLS_PLAYER",
      playerImage: require('../assets/images/user.png'), 
      twitterHandle: "@flc_name",
      badgeImage: badge, 
      xp: "1140",
    },
    {
      rank: "002",
      playerName: "LOVERLS_PLAYER",
      playerImage: user, // Replace with actual image path
      twitterHandle: "@flc_name",
      badgeImage: badge, // Replace with actual image path
      xp: "1140",
    },
    {
      rank: "003",
      playerName: "LOVERLS_PLAYER",
      playerImage: user, // Replace with actual image path
      twitterHandle: "@flc_name",
      badgeImage: badge, // Replace with actual image path
      xp: "1140",
    },
    {
      rank: "004",
      playerName: "LOVERLS_PLAYER",
      playerImage: user, // Replace with actual image path
      twitterHandle: "@flc_name",
      badgeImage: badge, // Replace with actual image path
      xp: "1140",
    },
    {
      rank: "005",
      playerName: "LOVERLS_PLAYER",
      playerImage: user, // Replace with actual image path
      twitterHandle: "@flc_name",
      badgeImage: badge, // Replace with actual image path
      xp: "1140",
    },
    {
      rank: "006",
      playerName: "LOVERLS_PLAYER",
      playerImage: user, // Replace with actual image path
      twitterHandle: "@flc_name",
      badgeImage: badge, // Replace with actual image path
      xp: "1140",
    },
    {
      rank: "007",
      playerName: "LOVERLS_PLAYER",
      playerImage: user, // Replace with actual image path
      twitterHandle: "@flc_name",
      badgeImage: badge, // Replace with actual image path
      xp: "1140",
    },
    {
      rank: "008",
      playerName: "LOVERLS_PLAYER",
      playerImage: user, // Replace with actual image path
      twitterHandle: "@flc_name",
      badgeImage: badge, // Replace with actual image path
      xp: "1140",
    },
  ];

  return (
    <div className="leaderboard">
      <div className="leaderboard-header">
        <div>RANK</div>
        <div>PLAYER</div>
        <div>BADGE</div>
        <div>XP</div>
      </div>
      {players.map((player, index) => (
        <div className="leaderboard-row" key={index}>
          <div className="rank">
            {index < 3 ? (
              <img
                src={`path-to-trophy-${index + 1}.png`}
                alt={`Trophy ${index + 1}`}
              /> // Replace with trophy image paths
            ) : (
              <span>{player.rank}</span>
            )}
          </div>
          <div className="player">
            <img
              className="player-image"
              src={player.playerImage}
              alt="Player"
            />
            <div className="player-details">
              <span className="player-name">{player.playerName}</span>
              <span className="twitter-handle">
                <i className="fab fa-twitter"></i> {player.twitterHandle}
              </span>
            </div>
          </div>
          <div className="badge">
            <img src={player.badgeImage} alt="Badge" />
          </div>
          <div className="xp">{player.xp}</div>
        </div>
      ))}
    </div>
  );
};

export default leaderBoard;
