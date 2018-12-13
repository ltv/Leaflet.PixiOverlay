const L = require('leaflet');
const PixiOverlay = require('./PixiOverlay');

const PixiOverlayLayer = L.Layer.extend(PixiOverlay);
L.PixiOverlay = PixiOverlay;

// @factory L.pixiOverlay(drawCallback: function, pixiContainer: PIXI.Container, options?: L.PixiOverlay options)
// Creates a PixiOverlay with the given arguments.
function createPixiOverlay(drawCallback, pixiContainer, options) {
  return L.Browser.canvas
    ? new L.PixiOverlay(drawCallback, pixiContainer, options)
    : null;
}

module.exports = {
  PixiOverlay: PixiOverlayLayer,
  createPixiOverlay
};
