import { useState } from "react";
import { useDebounce } from "../hooks/useDebounce";
import { useFetch } from "../hooks/useFetch";
import MenuList from "../components/MenuList";

function MenuPage() {
  const [query, setQuery] = useState("");
  const debounced = useDebounce(query, 400);
  const { data: dishes, isLoading, error } = useFetch("/menu.json");

  const filtered = (dishes || []).filter((d) =>
    d.name.toLowerCase().includes(debounced.toLowerCase())
  );

  if (isLoading) return <p className="empty-state">Loading menu…</p>;
  if (error) return <p className="empty-state">Could not load menu: {error}</p>;

  return (
    <div className="page-card">
      <div className="page-header">
        <h1>Campus Eats Menu</h1>
        <p>Search for your favorite dish and place an order quickly.</p>
      </div>
      <input
        className="search-box"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search dishes..."
      />
      <MenuList dishes={filtered} />
    </div>
  );
}

export default MenuPage;