import SearchForm from "../../components/home/SearchForm";

// export default function Home({searchParams}: {searchParams: Promise<{ query?: string }>}) {
export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;
  return (
    <>
      <section className="pink_container">
        <h1 className="heading">Launch your project to a new era</h1>
        <p className="sub-heading !max-w-3xl">
          Present your project, vote on projects and get noticed in virtual
          realm.
        </p>
        <SearchForm query={query} />
      </section>
    </>
  );
}
