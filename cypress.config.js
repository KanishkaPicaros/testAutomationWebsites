const { defineConfig } = require("cypress");

module.exports = defineConfig({
  
  
  e2e: {
    baseUrl: "https://opensource-demo.orangehrmlive.com",
    userName: "Admin",
    password: "73884defd0b7bf9a01abdc8a2b341e6b048f3efb0009d025d67279a9716cdad312c9e610476bb454e7452f937322aea3IZppvoTY7c2q2PcncNnNLw==",
    specPattern: "orange_hrm/specs/*",
    supportFile: "orange_hrm/support/e2e.js",
    setupNodeEvents() {
      // implement node event listeners here
    },
  },

  env:{
    infor: 'real secret keys should be long and random',
    userName: "Admin",
    password: "73884defd0b7bf9a01abdc8a2b341e6b048f3efb0009d025d67279a9716cdad312c9e610476bb454e7452f937322aea3IZppvoTY7c2q2PcncNnNLw==",

  },
  fixturesFolder:"orange_hrm/fixtures"
});
