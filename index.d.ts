declare module '@ltv/leaflet-pixi-overlay' {
  import L, { Map, Layer, LatLng, PointTuple, Point } from 'leaflet';
  import { Container, WebGLRenderer, CanvasRenderer } from 'pixi.js';

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

  export interface PixiOverlayUtils {
    latLngToLayerPoint(latLng: LatLng, zoom?: number): Point;
    layerPointToLatLng(
      point: PointTuple | { x: number; y: number },
      zoom?: number
    ): LatLng;
    getScale(zoom?: number): number;
    getRenderer(): WebGLRenderer | CanvasRenderer;
    getContainer(): Container;
    getMap(): Map;
  }

  export type PixiDrawCallback = (utils: PixiOverlayUtils, event?: any) => void;

  export class PixiOverlay extends Layer {
    options: PixiOverlayOptions;

    initialize(
      drawCallback: PixiDrawCallback,
      pixiContainer: Container,
      options?: PixiOverlayOptions
    ): void;

    redraw(data: any): PixiOverlay;
  }

  export function createPixiOverlay(
    drawCallback: PixiDrawCallback,
    pixiContainer: Container,
    options?: PixiOverlayOptions
  ): PixiOverlay;
}
