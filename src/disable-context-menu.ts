import { CustomLayer, MouseEventCoordinatesInterface, OnContextMenuResult } from "@navvis/indoorviewer";

export class DisableContextMenu extends CustomLayer {

    public onContextMenu(pos: MouseEventCoordinatesInterface): OnContextMenuResult {
        return false;
    }
}