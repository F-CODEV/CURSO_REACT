import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router";
import { getHeroById } from "../helpers/getHeroById";

export const Hero = () => {
    // ? Para obtener los segmentos de la url
    const { id } = useParams();
    // ? Cuando el id cambie se ejecutará la funcion
    const hero = useMemo(() => getHeroById(id ?? ''), [id]);
    const navigate = useNavigate();
    const onNavigateBack = () => {
        // ? Navegar en el historial hacia atras
        // ! Puede sacar al usuario de la app
        navigate("/marvel");
    }
    if (!hero) {
        // return <h1>Hero not found</h1>;
        return <Navigate to="/marvel" />
    }


    return (
        <div className="row mt-5">
            <div className="col-4">
                <img
                    src={`/heroes/${hero.id}.jpg`}
                    alt={hero.superhero}
                    className="img-thumbnail animate__animated animate__fadeInLeft"
                />
            </div>
            <div className="col-8">
                <h3>{hero.superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"> <b>Alter ego: </b>{hero.alter_ego} </li>
                    <li className="list-group-item"> <b>Publisher: </b>{hero.publisher} </li>
                    <li className="list-group-item"> <b>First Appearence: </b>{hero.first_appearance} </li>
                </ul>
                <h5 className="mt-3">Characters</h5>
                <p>{hero.characters}</p>
                <button className="btn btn-outline-primary"
                    onClick={(e) => onNavigateBack()}
                >Back</button>
            </div>
        </div>
    )
}
