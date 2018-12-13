declare module '@ltv/leaflet-pixi-overlay' {
  import L, { Map, Layer } from 'leaflet';
  import { Container } from 'pixi.js';

  export interface PixiOverlayOptions {
    // @option padding: Number = 0.1
    // How much to extend the clip area around the map view (relative to its size)
    // e.g. 0.1 would be 10% of map view in each direction
    padding: number;
    // @option forceCanvas: Boolean = false
    // Force use of a 2d-canvas
    forceCanvas: boolean;
    // @option doubleBuffering: Boolean = false
    // Help to prevent flicker when refreshing display on some devices (e.g. iOS devices)
    // It is ignored if rendering is done with 2d-canvas
    doubleBuffering: boolean;
    // @option resolution: Number = 1
    // Resolution of the renderer canvas
    resolution: number;
    // @option projectionZoom(map: map): Number
    // return the layer projection zoom level
    projectionZoom(map: Map): number;
    // @option destroyInteractionManager:  Boolean = false
    // Destroy PIXI Interaction Manager
    destroyInteractionManager: boolean;
    // @option
    // Customize PIXI Interaction Manager autoPreventDefault property
    // This option is ignored if destroyInteractionManager is set
    autoPreventDefault: boolean;
    // @option resolution: Boolean = false
    // Enables drawing buffer preservation
    preserveDrawingBuffer: boolean;
    // @option resolution: Boolean = true
    // Clear the canvas before the new render pass
    clearBeforeRender: boolean;
  }
  export class PixiOverlay extends Layer {
    options: PixiOverlayOptions;

    initialize(
      drawCallback: Function,
      pixiContainer: Container,
      options?: PixiOverlayOptions
    ): void;
  }
  export function createPixiOverlay(
    drawCallback: Function,
    pixiContainer: Container,
    options?: PixiOverlayOptions
  ): PixiOverlay;
}
