import { useLoaderData } from "react-router-dom";
import { SearchLoaderResult } from "./searchLoader";
import PackageListItem from "../../components/PackageListItem";

function SearchPage() {
  const { searchResults } = useLoaderData() as SearchLoaderResult;

  const renderedResults = searchResults.map((result) => {
    return <PackageListItem pack={result} key={result.name} />;
  });

  return (
    <div>
      <h2 className="text-2xl font-bold my-6">Search Page</h2>
      <div className="space-y-4 mt-4">{renderedResults}</div>
    </div>
  );
}

export default SearchPage;
