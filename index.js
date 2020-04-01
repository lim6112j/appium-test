const wdio = require("webdriverio");
// const UiAutomator2 = require(`appium-uiautomator2-driver`);
const assert = require("assert");
// javascript
const opts = {
  hostname: "localhost",
  port: 4723,
  path: "/wd/hub/",
  capabilities: {
    platformName: "Android",
    platformVersion: "8",
    deviceName: "Android Emulator",
    app: "/Users/byeongcheollim/Downloads/ApiDemos-debug.apk",
    appPackage: "io.appium.android.apis",
    appActivity: ".view.TextFields",
    automationName: "UiAutomator2"
  }
};

async function main () {
  //   let driver = new UiAutomator2.AndroidUiautomator2Driver();
  // await driver.createSession(opts.capabilities);
  const client = await wdio.remote(opts);


  const field = await client.$("android.widget.EditText");
  await field.setValue("Hello World!");
  const value = await field.getText();
  assert.equal(value,"Hello World!");

  await client.deleteSession();
}

main();
