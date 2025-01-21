import { useMemo } from 'react';
import { getHeroesByPublihser } from '../helpers/getHeroesByPublihser';
import { HeroCard } from './HeroCard';

export interface HeroListProps {
    publisher: string;
}

export const HeroList = ({ publisher }: HeroListProps) => {
    // ? Cuando el publisher cambie se ejecutará la funcion
    const heroes = useMemo(() => getHeroesByPublihser(publisher), [publisher]);
    return (
        <div className='row rows-cols-1 row-cols-md-3 g-3'>
            {
                heroes.map(hero => (
                    <HeroCard
                        key={hero.id}
                        id={hero.id}
                        alter_ego={hero.alter_ego}
                        characters={hero.characters}
                        first_appearance={hero.first_appearance}
                        publisher={hero.publisher}
                        superhero={hero.superhero}
                    />
                ))
            }
        </div>
    )
}
