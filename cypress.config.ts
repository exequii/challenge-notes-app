import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://127.0.0.1:5173/",
    //aca le digo la URL a donde le va a pegar los test, es decir a nuestra ip del run dev
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
