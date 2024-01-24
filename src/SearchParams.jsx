import { useEffect, useState } from "react";
import Pet from "./Pet";
import useBreedList from "./Hooks/useBreedList";

const ANIMALS = ["dog", "cat", "bird", "reptile", "rabbit"];

const SearchParam = () => {
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [pets, setPets] = useState([]);
  const [BREEDS] = useBreedList(animal);

  useEffect(() => {
    requestPets();
  }, []);

  async function requestPets() {
    const response = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );

    const json = await response.json();
    if (json) {
      console.log(json);
    }
    setPets(json.pets);
  }
  console.log("Pets: " + pets);

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          requestPets();
        }}
      >
        <label htmlFor="location">
          <input
            id="location"
            value={location}
            placeholder="location"
            type="text"
            onChange={(e) => {
              setLocation(e.target.value);
            }}
          />
        </label>
        <label htmlFor="animal">
          <select
            id="animal"
            value={animal}
            onChange={(e) => {
              setAnimal(e.target.value);
              setBreed("");
            }}
          >
            <option />
            {ANIMALS.map((animal) => {
              return <option key={animal}>{animal}</option>;
            })}
          </select>
        </label>
        <label htmlFor="breed">
          <select
            id="breed"
            value={breed}
            disabled={BREEDS.length === 0}
            onChange={(e) => {
              setBreed(e.target.value);
            }}
          >
            <option />
            {BREEDS.map((breed) => {
              return <option key={breed}>{breed}</option>;
            })}
          </select>
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SearchParam;
