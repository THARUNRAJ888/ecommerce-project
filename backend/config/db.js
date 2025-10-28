function containsPlaceholder(uri) {
  return !uri || uri.includes('<db_password>') || uri.includes('<password>');
}

function buildFromParts() {
  const user = process.env.MONGO_USER;
  const pass = process.env.MONGO_PASS;
  const host = process.env.MONGO_HOST || 'cluster0.tkqidqm.mongodb.net';
  const db = process.env.MONGO_DB || 'ecommerce';
  const params = process.env.MONGO_PARAMS || 'retryWrites=true&w=majority';

  if (!user || !pass) return null;

  const u = encodeURIComponent(user);
  const p = encodeURIComponent(pass);

  // If user supplied a full host like 'mongodb+srv://...' just use it.
  if (host.startsWith('mongodb')) {
    // Ensure it ends with /<db>?params
    if (host.includes('/')) {
      return ` ${host}`; // unexpected format; fall back to null so caller can handle
    }
  }

  return `mongodb+srv://${u}:${p}@${host}/${db}?${params}`;
}

function getMongoURI() {
  const envUri = process.env.MONGO_URI;
  if (envUri && !containsPlaceholder(envUri)) return envUri;

  const built = buildFromParts();
  if (built) return built;

  return null;
}

module.exports = { getMongoURI, containsPlaceholder };