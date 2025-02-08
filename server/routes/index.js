import express from "express";
import SpotifyWebApi from 'spotify-web-api-node';

const router = express.Router();

router.post('/login', (req,res) => {
  const code = req.body.code;
  const spotifyApi = new SpotifyWebApi({
    redirectUri: 'http://localhost:5173',
    clientId: '300a9ada598b45828e99b994f7bc86eb',
    clientSecret: 'cdb71bbb9237460ea296488cc0b61469'
  });

  spotifyApi.authorizationCodeGrant(code).then(data => {
    res.json({
      accessToken: data.body.access_token,
      refreshToken: data.body.refresh_token,
      expiresIn: data.body.expires_in
    })
  }).catch((err) => {
    console.log(err);
    res.json(err);
  })
})

router.post('/refresh', (req,res) => {
  const refreshToken = req.body.refreshToken;
  const spotifyApi = new SpotifyWebApi({
    redirectUri: 'http://localhost:5173',
    clientId: '300a9ada598b45828e99b994f7bc86eb',
    clientSecret: 'cdb71bbb9237460ea296488cc0b61469',
    refreshToken
  });

  spotifyApi
    .refreshAccessToken()
    .then(data => {
      res.json({
        accessToken: data.body.accessToken,
        expiresIn: data.body.expiresIn,
      })
    })
    .catch(err => {
      console.log(err)
      res.sendStatus(400)
    })
})
export default router;

