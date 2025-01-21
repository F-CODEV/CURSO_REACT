import { heroes } from '../data/heroes';

export const getHeroesByPublihser = (publisher: string) => {
    const validPublishers = ['DC Comics', 'Marvel Comics'];
    if (!validPublishers.includes(publisher)) {
        throw new Error(`${publisher} no es un publisher válido`);

    }
    return heroes.filter((hero) => hero.publisher === publisher);
}
