const fullScreen = function () {
  var docElm = document.documentElement
  if (docElm.requestFullscreen) {
    // W3C
    docElm.requestFullscreen()
  } else if (docElm.mozRequestFullScreen) {
    // FireFox
    docElm.mozRequestFullScreen()
  } else if (docElm.webkitRequestFullScreen) {
    // Chrome等
    console.log('test')
    docElm.webkitRequestFullScreen()
  } else if (docElm.msRequestFullscreen) {
    docElm.msRequestFullscreen()
  }
}
export default fullScreen
