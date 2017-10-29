
async function forLoop() {

  const promises = [];
  for (let i = 0; i < 5; i++) {
    console.log(`Loop iteration ${i}`);
    const result = await Promise.resolve(i);
    promises.push(result);
    console.log(`result: ${result}`);
    console.log(`Finishing loop iteration ${i}`);
  }
  await Promise.all(promises);
}

forLoop();
