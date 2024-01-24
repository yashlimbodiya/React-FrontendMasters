import { useEffect, useState } from "react";

const localCache = {};

const useBreedList = (animal) => {
  const [breedList, setBreedList] = useState([]);
  const [status, setStatus] = useState("unloaded");

  useEffect(() => {
    if (!animal) {
      setBreedList([]);
    } else if (localCache[animal]) {
      setBreedList[localCache[animal]];
    } else {
      requestBreedList();
    }

    async function requestBreedList() {
      setBreedList([]);
      setStatus("loading");

      const res = await fetch(
        `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
      );

      const resJson = await res.json();

      localCache[animal] = resJson.breeds || [];

      setStatus("loaded");

      setBreedList(localCache[animal]);
    }
  }, [animal]);

  return [breedList, status];
};

export default useBreedList;
