const fetchAll = async function (query) {
  let data = await fetch(`${process.env.PUBLIC_URL}/api/products.json`, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  let actualdata = await data.json();

  return actualdata;
};
export default fetchAll;
