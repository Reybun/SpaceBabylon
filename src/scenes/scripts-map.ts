import { ScriptMap } from "./tools";

/**
 * Defines the interface that exposes all exported scripts in this project.
 */
export interface ISceneScriptMap extends ScriptMap {
	"src/scenes/moon.ts": any;
	"src/scenes/skull.ts": any;
	"src/scenes/spin.ts": any;
}

/**
 * Defines the map of all available scripts in the project.
 */
export const scriptsMap: ISceneScriptMap = {
	"src/scenes/moon.ts": require("./moon"),
	"src/scenes/skull.ts": require("./skull"),
	"src/scenes/spin.ts": require("./spin"),
}
