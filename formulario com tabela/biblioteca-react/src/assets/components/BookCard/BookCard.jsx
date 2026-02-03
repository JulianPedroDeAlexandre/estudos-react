import styles from "./BookCard.module.css";

export default function BookCard({ book, onAdd }) {
  return (
    <div className={styles.card}>
      <img
        src={book.thumbnail || "https://via.placeholder.com/150x220?text=Sem+Capa"}
        alt={book.title}
      />
      <div className={styles.content}>
        <h3>{book.title}</h3>
        <p className={styles.author}>{book.authors.join(", ")}</p>
        <button onClick={() => onAdd(book)}>Adicionar à estante</button>
      </div>
    </div>
  );
}
