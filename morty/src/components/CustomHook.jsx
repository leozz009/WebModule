import { useFetch } from "../hooks/useFetch";
import { useCounter } from "../hooks/useCounter";
import { LoadingMessage } from "./LoadingMessage";
import { CharacterCard } from "./CharacterCard";

export const CustomHook = () => {
  const { counter, decrement, increment } = useCounter(1);

  const { data, isLoading, hasError } = useFetch(
    `https://rickandmortyapi.com/api/character/${counter}`
  );

  return (
    <>
      <h1>Rick and Morty</h1>
      <hr />

      {hasError && <p className="alert alert-danger">Error: {hasError}</p>}

      {isLoading ? (
        <LoadingMessage />
      ) : (
        <CharacterCard id={data.id} name={data.name} image={data.image} />
      )}
        <div className="m-3">
            <button className="btn btn-primary m-3" onClick={() => decrement()}>
                Anterior
            </button>
            <button className="btn btn-primary m-3" onClick={() => increment()}>
                Siguiente
            </button>
        </div>
    </>
  );
};
