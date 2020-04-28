export function baseApi() {
  if (process.env.NODE_ENV === "development") {
    return "http://localhost:8080";
  }
  if (process.env.NODE_ENV === "staging") {
    return "https://staging-save-this-job.herokuapp.com";
  }
  if (process.env.NODE_ENV === "production") {
    return "https://save-this-job.herokuapp.com";
  }
}
