export let BASE_API_URL;
if (process.env.NODE_ENV === "development") {
  return (BASE_API_URL = "http://localhost:8080");
}
if (process.env.NODE_ENV === "staging") {
  return (BASE_API_URL = "https://staging-save-this-job.herokuapp.com");
}
if (process.env.NODE_ENV === "production") {
  return (BASE_API_URL = "https://save-this-job.herokuapp.com");
}
