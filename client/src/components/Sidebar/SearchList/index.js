import { Search as SearchSU } from "semantic-ui-react";

import "./SearchList.css";

export default function SearchList() {
  return (
    <div className="search-List">
      <SearchSU
        className="search-users"
        input={{ icon: "search", iconPosition: "left" }}
      />
    </div>
  );
}
