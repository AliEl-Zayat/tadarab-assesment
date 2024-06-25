import styles from "./styles.module.scss";

const StarRating = ({ rating }: { rating: number }) => {
  const fullStars = Math.floor(rating);
  const partialStar = rating - fullStars;
  const starsArray = [];

  for (let i = 0; i < 5; i++) {
    if (i < fullStars) {
      starsArray.push(
        <span key={i} className={`${styles.star} ${styles.full}`}>
          ★
        </span>
      );
    } else if (i === fullStars && partialStar > 0) {
      starsArray.push(
        <span key={i} className={styles.star}>
          ★
          <span
            className={styles["partial-star"]}
            style={{ width: `${partialStar * 100}%` }}
          >
            ★
          </span>
        </span>
      );
    } else {
      starsArray.push(
        <span key={i} className={styles.star}>
          ★
        </span>
      );
    }
  }

  return <div className={styles["star-wrapper"]}>{starsArray}</div>;
};

export default StarRating;
