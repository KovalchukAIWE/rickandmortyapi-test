import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Card } from '@mui/material';
import styles from './Profile.module.scss';

const Profile = () => {
  let { id } = useParams();

  let [fetchedData, updateFetchedData] = useState([]);
  let { name, location, episode, gender, image, status, species, created } = fetchedData;

  let api = `https://rickandmortyapi.com/api/character/${id}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);

  return (
    <div className={styles.wrapper}>
      <Link to="/" className={styles.header}>Rick & Morty</Link>
      <Card className = {styles.card}>
        <h1>{name}</h1>
        <img src={image} alt="character" />
        {(() => {
            if (status === "Dead") {
              return (
                <div className={styles.card__dead}>{status}</div>
              )
            }
            else if (status === "Alive") {
              return (
                <div className={styles.card__alive}>{status}</div>
              )
            }
            else {
              return (
                <div className={styles.card__unknown}>{status}</div>
              )
            }
          })()}
        <div>
          <div>
            <span className = {styles.card__title}>Species: </span>
            {species}
          </div>
          <div>
            <span className = {styles.card__title}>Gender : </span>
            {gender}
          </div>
          <div>
            <span className = {styles.card__title}>Location: </span>
            {location?.name}
          </div>
          <div>
            <span className = {styles.card__title}>Episode: </span>
            {episode}
          </div>
          <div>
            <span className = {styles.card__title}>Created: </span>
            {created}
          </div>
        </div>
    </Card>
    <Link to="/" className={styles.back}>Back</Link>
    </div>
  );
};

export default Profile;