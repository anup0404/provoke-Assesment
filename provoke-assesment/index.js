const apiKey = "AIzaSyCrdA006WZz9gxyiv7v0Ro_VgxaBAenoyY";
const videoId = "9gy5TSasQzs";

const scriptTag = document.createElement("script");
scriptTag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(scriptTag, firstScriptTag);

let player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player("player", {
    height: "360",
    width: "640",
    videoId: videoId,
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange,
    },
  });
}

function onPlayerReady(event) {
  event.target.playVideo();
}

function onPlayerStateChange(event) {}
