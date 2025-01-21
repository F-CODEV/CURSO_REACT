import { Link } from "react-router";
import { HeroI } from "../data/heroes";
import './HeroCard.css';

export const HeroCard = ({
    id, superhero, alter_ego, publisher, characters, first_appearance
}: HeroI) => {

    return (
        <Link to={`/hero/${id}`} className="my-card animate__animated animate__fadeIn">
            <img
                src={`./assets/heroes/${id}.jpg`}
                className="img img-responsive"
                alt={superhero}
            />
            <div className="profile-name">{superhero}</div>
            <div className="profile-position">{alter_ego}</div>
            <div className="profile-overview">
                <div className="profile-overview">
                    <div className="row">
                        <div className="col-ms-4">
                            <h3>{publisher}</h3>
                            <p>Primera aparición: <br />{first_appearance}</p>
                            {
                                (alter_ego !== characters)
                                && <p>{characters}</p>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}
