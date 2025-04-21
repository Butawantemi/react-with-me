import useFetch from ".";

const UseFetchHookTestText = () => {
  const { data, error, pending } = useFetch("https://dummyjson.com/products");

  return (
    <div>
      <h1>Use Fetch Hook</h1>

      {pending && <h2>Pending! Please wait...</h2>}
      {error && <h2 style={{ color: "red" }}>{error}</h2>}

      {data?.products?.length > 0 && (
        <div>
          {data.products.map((productItem) => (
            <p key={productItem.id}>{productItem.title}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default UseFetchHookTestText;
