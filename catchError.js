module.exports = catchError;

function catchError (err) {
  if (!(err instanceof Error)) return;
  process.stderr.write(err);
  process.exit(1);
}