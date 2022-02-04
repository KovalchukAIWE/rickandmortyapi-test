import React, { useState } from "react";
import styles from './Likes.module.scss';

const Likes = ({name, likedCharacters, setLikedCharacters}) => {
  const [isLiked, updateLike] = useState(false);

  const handleLike = () => {
    let currentLikedCharacters = likedCharacters;
    if (!isLiked) {
      updateLike(true);
      if (!currentLikedCharacters.includes(name))
      setLikedCharacters([...currentLikedCharacters, name]);
    } else {
      updateLike(false);
      if (currentLikedCharacters.includes(name))
      setLikedCharacters(currentLikedCharacters.filter(band => band !== name));
    }
  };

  return (
    <div>
      <div>
        <button className={styles.btn} onClick={handleLike}>
          👍
        </button>
      </div>
    </div>
  );
};

export default Likes;
