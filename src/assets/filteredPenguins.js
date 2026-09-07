import rawPenguins from './penguins.json';

export const penguins = rawPenguins.map(p => ({
  species: p.species,
  flipper_length_mm: p.flipper_length_mm,
  body_mass_g: p.body_mass_g
})).filter(p => p.flipper_length_mm && p.body_mass_g); 