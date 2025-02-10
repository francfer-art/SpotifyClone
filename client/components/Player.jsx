import React, { useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-node";

const spotifyApi = new SpotifyWebApi({
    redirectUri: 'http://localhost:5173',
    clientId: '300a9ada598b45828e99b994f7bc86eb',
    clientSecret: 'cdb71bbb9237460ea296488cc0b61469'
  });

export const Player = ({ accessToken, trackId }) => {
  useEffect(() => {
    if (!accessToken || !trackId) return;
    spotifyApi.setAccessToken(accessToken);

    spotifyApi.getAudioFeaturesForTrack(trackId)
      .then(data => {
        console.log("Características del track:", data.body);
      })
      .catch(err => {
        console.error("Error obteniendo características del track:", err);
      });

  }, [accessToken, trackId]);

  if (!accessToken) return null;

  return (
    <div>
      Testing
    </div>
  );
};
