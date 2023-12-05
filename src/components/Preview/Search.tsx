interface SearchProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

export default function Search({ search, setSearch }: SearchProps) {
  return (
    <>
      <label htmlFor="category-search">Search</label>
      <input
        className="px-2 py-1 flex-grow min-w-0 text-xl text-white border-none rounded-sm outline-none [&::-webkit-search-cancel-button]:appearance-none bg-slate-800 focus-within:outline-1 focus-within:outline-white"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="search"
        id="category-search"
      />
    </>
  );
}
