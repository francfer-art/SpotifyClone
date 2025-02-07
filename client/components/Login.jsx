import React from "react";
import { Button, Container } from "react-bootstrap";
import "./login.css";

const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=300a9ada598b45828e99b994f7bc86eb&response_type=code&redirect_uri=http://localhost:5173&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state";

export const Login = () => {
  return (
    <Container className="button-container">
      <Button href={AUTH_URL} variant="success" size="lg">
          Login With Spotify
      </Button>
    </Container>
  );
};
