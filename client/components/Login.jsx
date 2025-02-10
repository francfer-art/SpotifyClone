import React from "react";
import { Button, Container } from "react-bootstrap";
import "./login.css";

const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=300a9ada598b45828e99b994f7bc86eb&response_type=code&redirect_uri=http://localhost:5173&scope=user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-top-read%20playlist-read-private%20playlist-read-collaborative%20playlist-modify-public%20playlist-modify-private%20streaming%20user-read-playback-state%20user-modify-playback-state%20app-remote-control%20user-follow-read%20user-follow-modify";


export const Login = () => {
  return (
    <Container className="button-container">
      <Button href={AUTH_URL} variant="success" size="lg">
          Login With Spotify
      </Button>
    </Container>
  );
};
