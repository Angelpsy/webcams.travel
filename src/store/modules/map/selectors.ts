import {RootState as RootState} from "../../types";
import {Bounds, Coordinates, Zoom} from "../../../types/map";

export const getCoordinates = (state: RootState): Coordinates => state.map.coordinates;
export const getZoom = (state: RootState): Zoom => state.map.zoom;
export const getBounds = (state: RootState): Bounds => state.map.bounds;
