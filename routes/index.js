var express = require("express");
var router = express.Router();
require("dotenv").config();
const axios=require('axios');
const extractQueryParams=require('../utils/extractQuery');



/* GET home page. */
router.get("/", async function (req, res, next) {
  try {
    const response = await axios.get('https://api.pexels.com/v1/popular?page=1&per_page=60',{
      headers:{
        'Authorization':`${process.env.API_KEY}`
      }
    });
    
    const {page}=extractQueryParams(response.data.next_page)
    console.log(page);
    res.render("index", {
      title: "Free Stock Photos Royalty free images shared by creators",
      img: "https://images.pexels.com/photos/18760211/pexels-photo-18760211.jpeg",
      result: response.data.photos,
      pages:page,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// GET video section

router.get("/videos", function (req, res) {
  res.render("pages/videos", {
    title: "Free Stock Videos Royalty free videos shared by creators",
    video:
      "https://player.vimeo.com/progressive_redirect/playback/850743621/rendition/360p/file.mp4?loc=external&oauth2_token_id=57447761&signature=3bd92faae4d3e3d58d081c4dee9bb31cd0e64fc1d4c9fb5f1deebee26961762c",
  });
});

// dynamic pages of photos

router.get("/:pages", async function (req, res, next) {
  try {
    const {pages}=req.params;
    const response = await axios.get(`https://api.pexels.com/v1/popular?page=${pages}&per_page=60`,{
      headers:{
        'Authorization':`${process.env.API_KEY}`
      }
    });
    
    const {page}=extractQueryParams(response.data.next_page)
    console.log(page);
    res.render("pages/pages", {
      title: "Free Stock Photos Royalty free images shared by creators",
      img: "https://images.pexels.com/photos/18760211/pexels-photo-18760211.jpeg",
      result: response.data.photos,
      pages:page,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
});




module.exports = router;
