
const imageBanner = [
    "https://images.pexels.com/photos/8100784/pexels-photo-8100784.jpeg",
    "https://images.pexels.com/photos/18760211/pexels-photo-18760211.jpeg",
    "https://images.pexels.com/photos/5529540/pexels-photo-5529540.jpeg",
    "https://images.pexels.com/photos/7925938/pexels-photo-7925938.jpeg",
    "https://images.pexels.com/photos/4554150/pexels-photo-4554150.jpeg",
    "https://images.pexels.com/photos/6408291/pexels-photo-6408291.jpeg",
    "https://images.pexels.com/photos/9391321/pexels-photo-9391321.jpeg",
    "https://images.pexels.com/photos/5876380/pexels-photo-5876380.jpeg"
  ];

  const videoBanner=[
    "https://player.vimeo.com/external/517619950.sd.mp4?s=4c13e7d1fc58ecb1dabb5138cdef3c4e80e1094e&profile_id=164&oauth2_token_id=57447761",
    "https://player.vimeo.com/progressive_redirect/playback/850743621/rendition/360p/file.mp4?loc=external&oauth2_token_id=57447761&signature=3bd92faae4d3e3d58d081c4dee9bb31cd0e64fc1d4c9fb5f1deebee26961762c",
    "https://player.vimeo.com/external/517617017.sd.mp4?s=47e6f7f5c5c36daa23f27fd96a67cd97c6f7d695&profile_id=164&oauth2_token_id=57447761",
    "https://player.vimeo.com/external/517617268.sd.mp4?s=c5821b63bbb75996052ab42438c8e94ea035279c&profile_id=164&oauth2_token_id=57447761",
    "https://player.vimeo.com/external/517617850.sd.mp4?s=2c0f925850e42c4dcc7242d79aa9805eab6b6121&profile_id=164&oauth2_token_id=57447761",
    "https://player.vimeo.com/external/445774063.sd.mp4?s=3938be04eb3f8928c45a52e0d5047e908aa1e812&profile_id=164&oauth2_token_id=57447761"
  ]





const randomImages=()=>{
    const random=Math.floor(Math.random()*imageBanner.length);
   return imageBanner[random];
}

const randomVideos=()=>{
    const random=Math.floor(Math.random()*videoBanner.length)
return videoBanner[random];
}


module.exports={randomImages,randomVideos};