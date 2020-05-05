export function baseApi() {
  const ENV = {
    development: "https://staging-save-this-job.herokuapp.com",
    staging: "https://staging-save-this-job.herokuapp.com",
    production: "https://save-this-job.herokuapp.com"
  };
  return ENV[process.env.NODE_ENV];
}
