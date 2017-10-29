async function map() {

  const values = [0, 1, 2, 3, 4];
  const promises = values.map(async (x, i) => {
    console.log(`map index ${i} start`);
    const result = await Promise.resolve(i);
    console.log(`map index ${i} stop`);
    console.log(result);
    return result;
  });
  await Promise.all(promises);
}

map();
