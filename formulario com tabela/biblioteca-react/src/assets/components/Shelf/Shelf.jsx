import styles from "./Shelf.module.css";

export default function Shelf({ books }) {
  if (!books.length) {
    return <p className={styles.empty}>Sua estante está vazia.</p>;
  }

  return (
    <div className={styles.grid}>
      {books.map((book) => (
        <div key={book.id} className={styles.item}>
          <img
            src={book.thumbnail || "https://via.placeholder.com/150x220?text=Sem+Capa"}
            alt={book.title}
          />
          <h4>{book.title}</h4>
          <p className={styles.author}>{book.authors.join(", ")}</p>
        </div>
      ))}
    </div>
  );
}
