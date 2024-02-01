import { useParams } from "react-router-dom";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import fetchPet from "./fetchPet";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import Modal from "./Modal";

const Details = () => {
  const { id } = useParams();
  const [showModal, setShowModal] = useState(false);

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
      <Carousel images={pet.images} />
      <div>
        <h1>{pet.name}</h1>
        <h1>
          {pet.animal} - {pet.breed} - {pet.city},{pet.state}
        </h1>
        <button
          onClick={() => {
            setShowModal(!showModal);
          }}
        >
          Adopt {pet.name}
        </button>
        <p>{pet.description}</p>
        {showModal ? (
          <Modal>
            <div>
              <h1>Would you like to adopt {pet.name}?</h1>
              <div className="buttons">
                <button>Yes</button>
                <button
                  onClick={() => {
                    setShowModal(false);
                  }}
                >
                  No
                </button>
              </div>
            </div>
          </Modal>
        ) : null}
      </div>
    </div>
  );
};

export default function DetailsErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <Details {...props} />
    </ErrorBoundary>
  );
}
