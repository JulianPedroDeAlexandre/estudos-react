export async function searchBooks(query) {
  const url = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}&maxResults=20`;
  const res = await fetch(url);
  const data = await res.json();
  return (data.items || []).map(item => {
    const v = item.volumeInfo || {};
    return {
      id: item.id,
      title: v.title || "Título desconhecido",
      authors: v.authors || ["Autor desconhecido"],
      thumbnail: v.imageLinks?.thumbnail || "",
      description: v.description || ""
    };
  });
}
