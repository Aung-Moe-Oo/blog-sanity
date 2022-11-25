import client from "@sanity/client";

export default client({
  projectId: "bhr4aqk9",
  dataset: "production",
  useCdn: true,
  apiVersion: "2022-11-21",
});
