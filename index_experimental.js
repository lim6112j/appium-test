const wdio = require("webdriverio");
const readline = require('readline');
// const UiAutomator2 = require(`appium-uiautomator2-driver`);
const assert = require("assert");
// javascript
const opts = {
  hostname: "localhost",
  port: 4723,
  path: "/wd/hub/",
  capabilities: {
    "platformName": "Android",
    "platformVersion": "8",
    "deviceName": "Android Emulator",
    "app": "/Users/byeongcheollim/Downloads/app-beta-release.apk",
    "appWaitPackage": "com.deforav2.beta",
    "automationName": "UiAutomator2",
    "appWaitDuration": 50000,
    "noReset": true,
    "appWaitActivity": "com.deforav2.MainActivity"
  }
};

async function main () {
  //   let driver = new UiAutomator2.AndroidUiautomator2Driver();
  // await driver.createSession(opts.capabilities);

  const client = await wdio.remote(opts);
  client.setImplicitTimeout(30000);
  let selector = 'new UiSelector().text("Enter PIN").className("android.widget.TextView")';
  let el1 = await client.$(`android=${selector}`)



  const value = await el1.getText();

  assert.equal(value, "Enter PIN");


  // pinEle.waitForVisible();
  await client.pressKeyCode(7); // presss 0 key
  await client.pressKeyCode(7);
  await client.pressKeyCode(7);
  await client.pressKeyCode(7);
  await client.pressKeyCode(7);
  await client.pressKeyCode(7);

  selector = 'new UiSelector().resourceId("com.deforav2.beta:id/b79b4d84-b216-4c15-b46a-756f94d02419").className("android.widget.ImageView")';
  el1 = await client.$(`android=${selector}`)
  await el1.click()

  // await client.touchAction({action: 'tap', x: 314, y: 1692})

  readline.emitKeypressEvents(process.stdin);
  process.stdin.setRawMode(true);
  console.log(` ########## press any key for exit ##########`);
  process.stdin.on('keypress', async (str, key) => {
    if (key !== undefined) {
      await client.deleteSession().catch(err => process.exit());
      process.exit();
    }
  })
  // await client.deleteSession();
}

main();
