const FetchAll = async ({ queryKey }) => {
  const name = queryKey[1];
  console.log('my queryKey', name);

  const res = await fetch(`http://localhost:3000/details/${name}`);

  if (!res.ok) {
    throw new Error (`Error fetching ${name}`);
  }

  console.log('my returned data: ', res);
  return res.json();
};

export default FetchAll;