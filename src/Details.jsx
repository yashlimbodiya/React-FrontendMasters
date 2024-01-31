import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetchPet from "./fetchPet";

const Details = () => {
  const { id } = useParams();

  const results = useQuery(["details", id], fetchPet);
  //useQuery search for "details" with given id if it found in cache(in-memory) it proceeds ahead
  //otherwise call the api definded in the third parameter

  //Below code will render till fetchPet api completes
  if (results.isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">Loading...</h2>
      </div>
    );
  }

  if (results.isError) {
    return <h1>Something went wrong</h1>;
  }

  //This code will run after fectAPI complete successfully
  const pet = results.data.pets[0];

  return (
    <div className="details">
      <div>
        <h1>{pet.name}</h1>
        <h1>
          {pet.animal} - {pet.breed} - {pet.city},{pet.state}
          <button>Adopt {pet.name}</button>
          <p>{pet.description}</p>
        </h1>
      </div>
    </div>
  );
};

export default Details;
