import { fitToMask } from 'react-masked';

export function capitalizeFirstLetter(string) {
  if (typeof(string) != 'string') return;

  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function addCommaBeforeLastNumber(number) {
  if (number == null) return;
  const string = number.toString();
  if (string.length === 1) return fitToMask(string, '0.9');
  if (string.length === 2) return fitToMask(string, '9.9');
  if (string.length === 3) return fitToMask(string, '99.9');
  if (string.length === 4) return fitToMask(string, '999.9');
}

export function formatID(id) {
  if (id == null) return;

  const string = id.toString();
  if (string.length === 1) return fitToMask(string, '009');
  if (string.length === 2) return fitToMask(string, '099');
  if (string.length >= 3) return string;
}

// Object containing all the pokemon type colors
const typeColors = {
  bug: "#73a040",
  dragon1: "#53a4cf",
  dragon2: "#f16e57",
  fairy: "#fdb9e9",
  fire: "#fd7d24",
  ghost: "#7b62a3",
  ground1: "#f7de3f",
  ground2: "#ab9842",
  normal: "#a4acaf",
  psychic: "#f366b9",
  steel: "#9eb7b8",
  dark: "#707070",
  electric: "#eed535",
  fight: "#d56723",
  flying1: "#3dc7ef",
  flying2: "#bebab9",
  grass: "#9ccd51",
  ice: "#51c4e7",
  poison: "#b97fc9",
  rock: "#a38c21",
  water: "#4592c4",
};

// This function should be used in a style prop to set the background color depending on the type parameter
export function setTypeBackgroundColor(type = "") {
  if (type === (null || "")) return;

  if (type === "bug") return { background: typeColors.bug };

  if (type === "dragon") return {background: `linear-gradient(to bottom, ${typeColors.dragon1} 50%, ${typeColors.dragon2} 50%)`};

  if (type === "fairy") return { background: typeColors.fairy };

  if (type === "fire") return { background: typeColors.fire };

  if (type === "ghost") return { background: typeColors.ghost };

  if (type === "ground") return { background: `linear-gradient(to bottom, ${typeColors.ground1} 50%, ${typeColors.ground2} 50%)`};

  if (type === "normal") return { background: typeColors.normal };

  if (type === "psychic") return { background: typeColors.psychic };

  if (type === "steel") return { background: typeColors.steel };

  if (type === "dark") return { background: typeColors.dark };

  if (type === "electric") return { background: typeColors.electric };

  if (type === "fighting") return { background: typeColors.fight };

  if (type === "flying") return { background: `linear-gradient(to bottom, ${typeColors.flying1} 50%, ${typeColors.flying2} 50%)`};

  if (type === "grass") return { background: typeColors.grass };

  if (type === "ice") return { background: typeColors.ice };

  if (type === "poison") return { background: typeColors.poison };

  if (type === "rock") return { background: typeColors.rock };

  if (type === "water") return { background: typeColors.water };
};