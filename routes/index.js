var express = require("express");
var router = express.Router();
require("dotenv").config();
const axios=require('axios');



/* GET home page. */
router.get("/", async function (req, res, next) {
  try {
    const response = await axios.get('https://api.pexels.com/v1/popular?page=1&per_page=60',{
      headers:{
        'Authorization':`${process.env.API_KEY}`
      }
    });
    console.log(response.data.photos);
    res.render("index", {
      title: "Free Stock Photos Royalty free images shared by creators",
      img: "https://images.pexels.com/photos/18760211/pexels-photo-18760211.jpeg",
      result: response.data.photos
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
});



router.get("/videos", function (req, res) {
  res.render("pages/videos", {
    title: "Free Stock Videos Royalty free videos shared by creators",
    video:
      "https://player.vimeo.com/progressive_redirect/playback/850743621/rendition/360p/file.mp4?loc=external&oauth2_token_id=57447761&signature=3bd92faae4d3e3d58d081c4dee9bb31cd0e64fc1d4c9fb5f1deebee26961762c",
  });
});

module.exports = router;
