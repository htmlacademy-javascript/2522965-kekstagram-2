import { generatePhotos } from "./data.js";
import { renderCards } from "./render.js";

const data = generatePhotos();
renderCards(data);


