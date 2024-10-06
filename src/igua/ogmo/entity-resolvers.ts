import { vnew } from "../../lib/math/vector-type";
import { objGate } from "../objects/obj-gate";
import { objNpc } from "../objects/obj-npc";
import { createPlayerObj, playerObj } from "../objects/obj-player";
import { objPipe, objPipeSlope, objSolidBlock, objSolidSlope } from "../objects/obj-terrain";
import { OgmoFactory } from "./factory";

export const OgmoEntityResolvers = {
    "Player": (entity) => createOrConfigurePlayerObj(entity),
    "Block": objSolidBlock,
    "Slope": objSolidSlope,
    "Pipe": objPipe,
    "PipeSlope": objPipeSlope,
    "Gate": (e) => objGate(e.values as any),
    "Npc": (e) =>
        objNpc({
            style: e.values.style,
            message: (e.values.message as string).replaceAll("@", "\n"),
            messageAlign: e.values.messageAlign,
        }),
} satisfies Record<string, (e: OgmoFactory.Entity) => unknown>;

function createOrConfigurePlayerObj(entity: OgmoFactory.Entity, checkpointName?: string) {
    if (!playerObj || playerObj.destroyed) {
        createPlayerObj().show();
    }

    playerObj.at(entity);

    return entity;
}
