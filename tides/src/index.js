import { TidalSimulation } from './tides';
export var tides = null;
//export var uiController : UiController | null = null
export function createTidalSimulation(config) {
    var canvas = document.getElementById(config.cvid);
    if (canvas == null) {
        throw Error('createTidalSimulation: There is no canvas object with such an id!');
    }
    return new TidalSimulation(config);
}
try {
    //    uiController = new UiController(galaxy);
}
catch (Error) {
    alert(Error.message);
}
//# sourceMappingURL=index.js.map