async function throwsError() {
  throw new Error('some error');
}

async function unhandled() {
  try {
    throwsError();
  } catch (err) {
    console.log(err);
  }
}

unhandled();
