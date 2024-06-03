import {getComic, getDc} from "./api.js"
import { getComicCards, getDcCards } from "./cards.js";
import { enviarDatos } from "./operaciones.js";




getComic();

getComicCards();

getDc();

getDcCards();

enviarDatos();
