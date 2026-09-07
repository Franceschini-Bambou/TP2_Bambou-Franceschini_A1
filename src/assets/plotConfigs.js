import * as Plot from '@observablehq/plot';
import { penguins } from './filteredPenguins.js';

export const plotConfigs = [
  {
    slug: 'masse-taille-nageoires',
    title: 'Masse et taille des nageoires',
    hook: 'Observez le lien entre la longueur des nageoires et le poids des pingouins.',
    options: {
      title: 'Masse des pingouins selon la taille de leurs nageoires',
      subtitle: 'Données de l’archipel Palmer',
      caption: 'Nuage de points illustrant la corrélation entre la masse et la taille des nageoires selon l’espèce.',
      ariaLabel: 'Nuage de points montrant la masse des pingouins selon la longueur de leurs nageoires.',
      marginLeft: 70,
      grid: true,
      x: { label: 'Longueur des nageoires (mm)' },
      y: { label: 'Masse corporelle (g)' },
      color: { legend: true },
      marks: [
        Plot.dot(penguins, {
          x: 'flipper_length_mm',
          y: 'body_mass_g',
          stroke: 'species',
          tip: true
        })
      ]
    }
  },
  {
    slug: 'masse-moyenne-espece',
    title: 'La masse moyenne par espèce',
    hook: 'Comparez en un coup d’œil le poids moyen des trois espèces étudiées.',
    options: {
      title: 'Masse moyenne des pingouins par espèce',
      subtitle: 'Données de l’archipel Palmer',
      caption: 'Diagramme en barres de la masse corporelle moyenne pour chaque espèce.',
      ariaLabel: 'Diagramme en barres comparant la masse corporelle moyenne des espèces.',
      marginLeft: 70,
      y: { label: 'Masse moyenne (g)', grid: true },
      x: { label: 'Espèce' },
      marks: [
        Plot.barY(penguins, Plot.groupX({ y: 'mean' }, { x: 'species', y: 'body_mass_g', fill: 'species', tip: true })),
        Plot.ruleY([0])
      ]
    }
  },
  {
    slug: 'distribution-masses',
    title: 'La distribution des masses',
    hook: 'Découvrez la dispersion des poids et les différences entre les espèces.',
    options: {
      title: 'Distribution des masses par espèce',
      subtitle: 'Données de l’archipel Palmer',
      caption: 'Diagramme en boîtes montrant la répartition de la masse corporelle selon l’espèce.',
      ariaLabel: 'Diagramme en boîtes montrant la distribution des masses par espèce.',
      marginLeft: 70,
      y: { label: 'Masse corporelle (g)', grid: true },
      x: { label: 'Espèce' },
      marks: [
        Plot.boxY(penguins, { x: 'species', y: 'body_mass_g', fill: 'species', tip: true })
      ]
    }
  }
];

export function getPlotConfig(slug) {
  return plotConfigs.find((plot) => plot.slug === slug);
}
