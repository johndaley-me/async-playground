async function throwsError() {
  throw new Error('some error');
}

async function handle() {
  try {
    await throwsError();
  } catch (err) {
    console.log(err);
  }
}

handle();
