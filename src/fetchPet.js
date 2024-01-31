const fetchPet = async ({ queryKey }) => {
  const id = queryKey[1];

  const response = await fetch(`http://pets-v2.dev-apis.com/pets?id=${id}`);

  if (!response.ok) {
    return new Error(`details/${id} fetch unsuccessful`);
  }

  return response.json(); //React-query returns Promise
};

export default fetchPet;
