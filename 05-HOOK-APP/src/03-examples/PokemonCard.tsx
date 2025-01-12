import { useLayoutEffect, useRef, useState } from "react";

export interface PokemonCardProps {
    id: string,
    name: string,
    sprites: string[]
}

export const PokemonCard = ({ id, name, sprites = [] }: PokemonCardProps) => {

    const h2Ref = useRef<HTMLHeadingElement>((<h2 />).type);
    const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });
    // ? Cuando el nombre del pokemon cambia
    // ? NOTA: Aunque no es del todo necesario
    useLayoutEffect(() => {
        const { height, width } = h2Ref.current!.getBoundingClientRect();
        // console.log({ height, width });
        setBoxSize({ width, height });

    }, [name])



    return (
        <section style={{
            height: 200,
            display: 'flex',
            flexDirection: 'row'
        }}>
            <h2 ref={h2Ref}
                className="text-capitalize">#{id} - {name} </h2>
            {/* Images */}
            <div>
                {sprites.map((s) => (
                    <img key={s} src={s} alt={name} />
                )
                )}
            </div>
            <pre>
                {JSON.stringify(boxSize)}
            </pre>
        </section>
    )
}
