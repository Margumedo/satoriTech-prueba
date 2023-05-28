import React, { useEffect, useState } from "react";

import '../../styles/index.css'
import Modal from "./Modal.jsx";

const Rick = () => {

    const urlBase = 'https://rickandmortyapi.com/api/location/'
    let id = 1
    const [location, setLocation] = useState([])
    const [characters, setCharacters] = useState([])


    const getLocation = async () => {
        try {
            let response = await fetch(`${urlBase}${id}`)
            let data = await response.json()

            if (response.ok) {
                setLocation(data.residents)
            }

            let character = []
            for (let i = 0; i < 5; i++) {
                try {
                    let response = await fetch(data.residents[i])
                    let dataCharacter = await response.json()
                    if (response.ok) {
                        character.push(dataCharacter)
                    }
                } catch (error) {
                    console.log(`(Ha ocurrido un error: ${error})`)
                }
            }
            setCharacters(character)
        } catch (error) {
            console.log(`(Ha ocurrido un error: ${error})`)
        }
    }


    useEffect(() => {
        getLocation()
    }, [])

    return (
        <>
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-6 d-flex">
                        <input className="form-control bg-custom border-custom" type="text" placeholder="id location" />
                        <i className="fas fa-search fa-2x ms-3"></i>
                    </div>
                </div>
            </div>
            <div className="container bg-custom vh-100" >
                <div className="row row-cols-1 row-cols-md-3 row-cols-lg-5 g-4 mt-0 mx-2">
                    {characters.map((character) => {
                        return (
                            <div key={character.id} className="col text-white px-4">
                                <div className={`card h-100 ${character.id < 50 ? 'bg bg-success' : (character.id > 50 && character.id < 80 ? "bg bg-primary" : (character.id > 80 ? "bg bg-danger" : 'color-custom'))} border-custom text-custom pt-3`}>
                                    <div className="container d-flex ">
                                        <div className=" d-flex align-items-center justify-content-center">
                                            <Modal character={character} />
                                        </div>
                                        <div className="d-flex flex-column justify-content-center">
                                            <p className="card-text mb-0 ps-2"> <small>Name: {character.name}</small> </p>
                                            <p className="card-text mb-0 ps-2"> <small>Status: {character.status}</small> </p>
                                            <p className="card-text mb-0 ps-2"> <small>Specie: {character.species}</small> </p>
                                            <p className="card-text mb-0 ps-2"> <small>Origin: {character.origin.name}</small>  </p>
                                        </div>
                                    </div>
                                    <div className="card-body mb-4">
                                        <p className="card-title text2-custom">Episodios</p>
                                        {character.episode.slice(0, 3).map((item, index) => {
                                            return (
                                                <a key={`character-episodio${index}`} className="card-text text-white"> <small>{item}</small> </a>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <br /><br /><br /><br /><br /><br />
        </>
    );

};

export default Rick;