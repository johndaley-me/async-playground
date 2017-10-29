async function forOf() {

  const values = [0, 1, 2, 3, 4];
  const promises = [];
  for (let i of values) {
    console.log(`Loop iteration ${i}`);
    const result = await Promise.resolve(i);
    promises.push(result);
    console.log(`result: ${result}`);
    console.log(`Finishing loop iteration ${i}`);
  }
  await Promise.all(promises);
}

forOf();
