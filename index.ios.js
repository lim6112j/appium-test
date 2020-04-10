const wdio = require("webdriverio");
const assert = require("chai").assert;
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
  const el1 = await client.$('(//XCUIElementTypeOther[@name="SKIP"])[2]');

  // await client.getElementAttribute(el1.ELEMENT, 'name').then((attr) => {
  //   assert.equal(attr, 'SKIP');
  // });
  const destroySession = await client.deleteSession();
  assert.isNull(destroySession, "sessiong destroyed successfully");
}

main()