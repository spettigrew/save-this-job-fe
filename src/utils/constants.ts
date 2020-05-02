export function baseApi() {
  const ENV = {
    development: "http://localhost:8080",
    staging: "https://staging-save-this-job.herokuapp.com",
    production: "https://save-this-job.herokuapp.com"
  };
  return ENV[process.env.NODE_ENV];
}
