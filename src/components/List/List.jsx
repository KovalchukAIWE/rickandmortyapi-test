import { useState } from 'react';
import Likes from '../Likes';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './List.module.scss';

const List = ({ results, page }) => {
  let display;
  const [likedCharacters, setLikedCharacters] = useState([]);

  if(results){
    display = results.map(el => {
      const { id, name, status } = el;

      return (
        <div className={styles.wrapper}>
        <Likes 
        name = {name} 
        setLikedCharacters={setLikedCharacters}
        likedCharacters={likedCharacters}/>
          <Link
            to={`${page}${id}`}
            key={id}
            className={styles.list}>
            <div>{name}</div>
            {(() => {
              if (status === "Dead") {
                return (
                  <div className={styles.list__dead}>{status}</div>
                );
              }
              else if (status === "Alive") {
                return (
                  <div className={styles.list__alive}>{status}</div>
                );
              }
              else {
                return (
                  <div className={styles.list__unknown}>{status}</div>
                );
              }
            })()}
          </Link>
        </div>
      )
    })
  } else {
    display = "Character not found";
  }
  return (
    <>
      <div>{display}</div>
      <div>
        <h2>Liked list:</h2>
        <ol className={styles.likes}>
          {likedCharacters.map(name => (
            <li className={styles.likes__list} key={name}>{name}</li>
          ))}
        </ol>
      </div>
    </>
  );
};

export default List;
