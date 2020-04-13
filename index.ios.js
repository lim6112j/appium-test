const wdio = require("webdriverio");
const assert = require("chai").assert;
const readline = require('readline')
const opts = {
  hostname: "localhost",
  port: 4723,
  path: "/wd/hub/",
  capabilities: {
    "platformName": "iOS",
    "platformVersion": "12.1",
    "deviceName": "iPhone 8",
    "app": "/Users/byeongcheollim/Downloads/Defora.app",
    "automationName": "XCUITest",
    "noReset": true,
    "showIOSLog": true,
    "showXcodeLog": true
  }
};
async function main() {
  const client = await wdio.remote(opts);
  client.setImplicitTimeout(30000);
  const res = await client.status();
  assert.isObject(res.build, "client.status() is made");

  const element = await client.findElement('class name', 'XCUIElementTypeApplication');
  await client.getElementAttribute(element.ELEMENT, 'name').then((attr) => {
    assert.equal(attr, 'Defora', "test success");
  });
  // const el1 = await client.$('(//XCUIElementTypeOther[@name="SKIP"])[2]');
  // await el1.click();
  // const el2 = await client.$('//XCUIElementTypeOther[@name="This is my first time here"]');
  // await el2.click();
  // await client.getElementAttribute(el1.ELEMENT, 'name').then((attr) => {
  //   assert.equal(attr, 'SKIP');
  // });
  let el1 = await client.$(`(//XCUIElementTypeOther[@name="Enter PIN Enter your Defora PIN I forgot my PIN"])[10]/XCUIElementTypeOther[2]/XCUIElementTypeOther[1]`);
  await el1.setValue(0)
  el1 = await client.$(`(//XCUIElementTypeOther[@name="Enter PIN Enter your Defora PIN I forgot my PIN"])[10]/XCUIElementTypeOther[2]/XCUIElementTypeOther[3]`);
  await el1.setValue(0);
  el1 = await client.$(`(//XCUIElementTypeOther[@name="Enter PIN Enter your Defora PIN I forgot my PIN"])[10]/XCUIElementTypeOther[2]/XCUIElementTypeOther[4]`);
  await el1.setValue(0);
  el1 = await client.$(`(//XCUIElementTypeOther[@name=\"Enter PIN Enter your Defora PIN I forgot my PIN\"])[10]/XCUIElementTypeOther[2]/XCUIElementTypeOther[5]`);
  await el1.setValue(0);
  el1 = await client.$(`(//XCUIElementTypeOther[@name="Enter PIN Enter your Defora PIN I forgot my PIN"])[10]/XCUIElementTypeOther[2]/XCUIElementTypeOther[6]`);
  await el1.setValue(0);
  el1 = await client.$(`(//XCUIElementTypeOther[@name="Enter PIN Enter your Defora PIN I forgot my PIN"])[10]/XCUIElementTypeOther[2]/XCUIElementTypeOther[7]`)
  await el1.setValue(0);
  // el1 = await client.$(`(//XCUIElementTypeOther[@name="Defora Group D - 10 Defora 첫인상 리뷰 🤩 11 10000"])[2]`);
  // await el1.click();
  // await client.touchAction({action: 'tap', x: 108, y: 629})
  // await client.touchAction({action: 'tap', x: 112, y: 632})
  el1 = await client.$(`(//XCUIElementTypeOther[@name=\"Activity\"])[1]/XCUIElementTypeOther[3]`);
  await el1.click();
  el1 = await client.$(`(//XCUIElementTypeOther[@name=\"Popular\"])[1]/XCUIElementTypeOther[2]`);
  await el1.click();

  el1 = await client.$(`(//XCUIElementTypeOther[@name="Create group"])[1]`);
  await el1.click();
  // el1 = await client.$(`(//XCUIElementTypeOther[@name=\"Popular\"])[1]/XCUIElementTypeOther[2]`);
  // await el1.click();
  // await client.touchAction({action: 'tap', x: 120, y: 570})

    // 종료 프로세스
    readline.emitKeypressEvents(process.stdin);
    process.stdin.setRawMode(true);
    console.log(` ########## press any key for exit ##########`);
    process.stdin.on('keypress', async (str, key) => {
      if (key !== undefined) {
        await client.deleteSession().catch(err => process.exit());
        process.exit();
      }
    })
}

main()