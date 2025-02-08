import React from "react";
import SpotifyWebPlayer from "react-spotify-web-playback";

export const Player = ({ accessToken, trackUri }) => {
  if (!accessToken) return null;
  return (
    <SpotifyWebPlayer
      token={accessToken}
      showSaveIcon
      uris={trackUri ? [trackUri] : []}
      styles={{
        bgColor: "#333",
        color: "#fff",
        loaderColor: "#fff",
        sliderColor: "#1cb954",
        savedColor: "#fff",
        trackArtistColor: "#ccc",
        trackNameColor: "#fff",
      }}
    />
  );
};
