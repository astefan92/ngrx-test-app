import { Superhero } from './superhero.model';

export const superheroes: Superhero[] = [
    {
        id: 1,
        name: 'Iron Man',
        description: `
            American comic book superhero,
            a mainstay of Marvel Comics,
            who first appeared in 1963 in Tales of Suspense no. 39.
        `
    },
    {
        id: 2,
        name: 'Spider-Man',
        description: `
            A comic-book character who was the original everyman superhero.
            In Spider-Man’s first story, in Marvel Comics’ Amazing Fantasy,
            no. 15 (1962), American teenager Peter Parker, a poor sickly orphan,
            is bitten by a radioactive spider
        `
    },
    {
        id: 3,
        name: 'Superman',
        description: `
            American comic strip superhero created for DC Comics by
            writer Jerry Siegel and artist Joe Shuster.
            Superman first appeared in Action Comics, no. 1 (June 1938).
        `
    }
];
