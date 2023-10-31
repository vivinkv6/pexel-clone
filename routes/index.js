var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Free Stock Photos Royalty free images shared by creators',img:'https://images.pexels.com/photos/18760211/pexels-photo-18760211.jpeg' });
});

router.get('/videos',function(req,res) {
  res.render('pages/videos',{title:'Free Stock Videos Royalty free videos shared by creators',video:'https://player.vimeo.com/progressive_redirect/playback/850743621/rendition/360p/file.mp4?loc=external&oauth2_token_id=57447761&signature=3bd92faae4d3e3d58d081c4dee9bb31cd0e64fc1d4c9fb5f1deebee26961762c'})
})

module.exports = router;
