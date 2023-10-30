const { defineConfig } = require("cypress")
const { beforeRunHook, afterRunHook } = require("cypress-mochawesome-reporter/lib")
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')



module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",

  video: true,
  videoCompression:10, //lower the number higher the quality. Can be set from 1 -55
  viewportWidth:1080,
  viewportHeight: 720,
  
  reporterOptions: {
    charts: true,
    reportPageTitle: "custom-title",
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    reportDir: "orange_hrm/reports",
    override: true,
  },

  fixturesFolder: "orange_hrm/fixtures",
  screenshotsFolder: "orange_hrm/screenshots",
  reportDir: "orange_hrm/reports",
  videosFolder:"orange_hrm/video",

  e2e: {
    baseUrl: "https://opensource-demo.orangehrmlive.com",
    userName: "Admin",
    password:
      "73884defd0b7bf9a01abdc8a2b341e6b048f3efb0009d025d67279a9716cdad312c9e610476bb454e7452f937322aea3IZppvoTY7c2q2PcncNnNLw==",
    specPattern: "orange_hrm/specs/*",
    supportFile: "orange_hrm/support/e2e.js",
    


    setupNodeEvents(on) {
      require("cypress-mochawesome-reporter/plugin")(on)
      on("before:run", async details => {
        console.log("override before:run")
        await beforeRunHook(details)
      })

      on("after:run", async () => {
        console.log("override after:run")
        await afterRunHook()
      })
      on('task', {downloadFile})
    },
  },

  env: {
    infor: "real secret keys should be long and random",
    userName: "Admin",
    password:
      "73884defd0b7bf9a01abdc8a2b341e6b048f3efb0009d025d67279a9716cdad312c9e610476bb454e7452f937322aea3IZppvoTY7c2q2PcncNnNLw==",
  },
  //fixturesFolder: "orange_hrm/fixtures",
})
