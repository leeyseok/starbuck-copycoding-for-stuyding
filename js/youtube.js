 // 2. This code loads the IFrame Player API code asynchronously.
 var tag = document.createElement('script');

 tag.src = "https://www.youtube.com/iframe_api";
 var firstScriptTag = document.getElementsByTagName('script')[0];
 firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

 // 3. This function creates an <iframe> (and YouTube player)
 //    after the API code downloads.
 function onYouTubeIframeAPIReady() {
     //'player' = <div> id=player 의 플레이어 </div>
   new YT.Player('player', {
     videoId: 'An6LvWQuj_8', //최초 재생할 유튜브 영상 id
     playerVars : {
         autoplay : true,
         loop : true, //반복재생유무
         playlist : 'An6LvWQuj_8' 
     },
     events : {
         onReady: function (event) {
             event.target.mute();
            // nNAOVSj87mc
            // event.target.setVolume(10);
            // event.target.playVideo();
         }
     }
   });
 }
