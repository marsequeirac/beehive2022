/**
 * @name main.js
 * @file Add a small description for this file
 * @author Maria Sequeira
 * @version 1.0.0
 */


'use strict';

import { AppManager } from "./managers/appManager.js";

//Inicializa la aplicacion
window.addEventListener('load', init, false);

function init() {
   const appManager = new AppManager();
}