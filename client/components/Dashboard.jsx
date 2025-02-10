import { useEffect, useState } from "react";
import axios from "axios";
import useAuth from "./useAuth";
import SpotifyWebApi from "spotify-web-api-node";
import { Container, Form } from "react-bootstrap";
import "./login.css";
import { TrackResult } from "./TrackResult";
import { Player } from "./Player";


const spotifyApi = new SpotifyWebApi({
  clientId: "300a9ada598b45828e99b994f7bc86eb",
});


export const Dashboard = ({ code }) => {
  const accessToken = useAuth(code);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([])
  const [playingTrack, setPlayingTrack] = useState();


  // useEffect(() => {
  //   const fetchAccessToken = async () => {
  //     const token = await useAuth(code);
  //     if (token) {
  //       setAccessToken(token);
  //     } else {
  //       console.error("Error al obtener el access token");
  //     }
  //   };

  //   fetchAccessToken();
  // }, [code]);
  const chooseTrack = (track) => {
    setPlayingTrack(track);
    setSearch('');
  }

  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
  }, [accessToken]);

  useEffect(() => {
    if (!search) return setSearchResults([]);
    if (!accessToken) return;

    let cancel = false;

    spotifyApi.searchTracks(search).then(res => {
      if (cancel) return;
      console.log(res.body);
      
      setSearchResults(res.body.tracks.items.map(track => {
        
        const smallestImg = track.album.images.reduce((smallest, current) => {
          if (current.height < smallest.height) return current;
          return smallest;
        },track.album.images[0]);

        return{
          trackId: track.id,
          artist: track.artists[0].name,
          title: track.name,
          uri: track.uri,
          albumUrl: smallestImg.url
        }
      }))
    })

    return () => cancel = true;
  }, [search, accessToken])


  if (!accessToken) return <div>Loading...</div>
  return (
    <Container
      className="d-flex flex-column py-2"
      style={{ height: "90vh", width: "100vw" }}
    >
      <Form.Control
        className="searchbar"
        type="search"
        placeholder="🔎 Search Songs/Artists"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      ></Form.Control>
      <div className="flex grow-1 my-2" style={{overflowY: 'auto'}}>
        {searchResults.map((track) => {
          return(
            <TrackResult key={track.uri} track={track} chooseTrack={chooseTrack}/>
          )
        })}
      </div>
      <div>
        <Player accessToken={accessToken} trackId={playingTrack?.trackId}/>
      </div>
    </Container>
  );
};
