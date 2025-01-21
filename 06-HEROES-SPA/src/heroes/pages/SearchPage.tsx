import queryString from "query-string";
import { useLocation, useNavigate } from "react-router";
import { useForm } from "../../hooks/useForm";
import { HeroCard } from "../components/HeroCard";
import { getHeroByName } from "../helpers/getHeroByName";

export const SearchPage = () => {

    const navigate = useNavigate();
    const location = useLocation();
    // ? Es opcional por eso le doy un valor por defecto
    const { q = '' } = queryString.parse(location.search);
    const heroes = getHeroByName(`${q}`);

    const showSearch = (q?.length === 0);
    // ? Tiene un query pero no regreso nada
    const showError = (q !== null && q.length > 0) && heroes.length === 0;
    const { searchText, onInputChange } = useForm({ searchText: `${q}` });
    // console.log(location.search);


    //    ? Alternativas para obtener los query params SIN PAQUETES
    //     const sParams = new URLSearchParams(location.search)
    //     const params = Object.fromEntries(sParams.entries())
    //     console.log({ params });
    //     const [searchParams, setSearchParams] = useSearchParams();
    // console.log(searchParams.get('q'));
    // console.log(Object.fromEntries(searchParams.entries()));



    const onSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // if (searchText.trim().length <= 1) return;
        navigate(`?q=${searchText}`);
    }

    return (
        <>
            <h1>Search</h1>
            <hr />
            <div className="row">
                <div className="col-5">
                    <h4>Searching</h4>
                    <hr />
                    <form onSubmit={(e) => onSearchSubmit(e)}>
                        <input type="text"
                            placeholder="Search hero..."
                            className="form-control"
                            name="searchText"
                            autoComplete="off"
                            value={searchText}
                            onChange={onInputChange}
                        />
                        <button
                            className="btn btn-outline-primary mt-2">Search</button>
                    </form>
                </div>
                <div className="col-7">
                    <h4>Results</h4>
                    <hr />
                    {/* {
                        (q === '')
                            ? (<div className="alert alert-primary">
                                Search Hero
                            </div>
                            )
                            : (heroes.length === 0) && (
                                <div className="alert alert-danger">
                                    No hero with <b>{q}</b>
                                </div>
                            )
                    } */}
                    <div className="alert alert-primary animate__animated animate__fadeIn"
                        style={{ display: showSearch ? '' : 'none' }}>
                        Search Hero
                    </div>
                    <div className="alert alert-danger animate__animated animate__fadeIn"
                        style={{ display: showError ? '' : 'none' }}>
                        No hero with <b>{q}</b>
                    </div>

                    {
                        heroes.map(hero => (
                            <HeroCard
                                key={hero.id}
                                {...hero}
                            >

                            </HeroCard>
                        ))
                    }
                    {/* <HeroCard /> */}
                </div>
            </div>
        </>
    )
}
