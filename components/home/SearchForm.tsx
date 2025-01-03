import { Search } from "lucide-react";
import SearchFormReset from "./SearchFormReset";

const SearchForm = ({ query }: { query?: string }) => {
  return (
    <form
      action="/"
      // scroll={false}
      className="search-form"
    >
      <input
        name="query"
        defaultValue={query}
        className="search-input"
        placeholder="Search Startups"
      />

      <div className="flex gap-2">{query && <SearchFormReset />}</div>
      <button type="submit" className="search-btn text-white">
        <Search className="size-5" />
      </button>
    </form>
  );
};

export default SearchForm;
