import { vnew } from "../../lib/math/vector-type";
import { createPlayerObj, playerObj } from "../objects/obj-player";
import { objPipe, objPipeSlope, objSolidBlock, objSolidSlope } from "../objects/obj-terrain";
import { OgmoFactory } from "./factory";

export const OgmoEntityResolvers = {
    "Player": (entity) => createOrConfigurePlayerObj(entity),
    "Block": objSolidBlock,
    "Slope": objSolidSlope,
    "Pipe": objPipe,
    "PipeSlope": objPipeSlope,
} satisfies Record<string, (e: OgmoFactory.Entity) => unknown>;

function createOrConfigurePlayerObj(entity: OgmoFactory.Entity, checkpointName?: string) {
    if (!playerObj || playerObj.destroyed) {
        createPlayerObj().show();
    }

    playerObj.at(entity);

    return entity;
}
