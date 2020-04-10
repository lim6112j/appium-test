const wdio = require("webdriverio");
const assert = require('chai').assert;
const opts = {
  hostname: "localhost",
  port: 4723,
  path: "/wd/hub/",
  capabilities: {
    "platformName": "iOS",
    "platformVersion": "12.1",
    "deviceName": "iPhone 8 Simulator",
    "app": "/Users/byeongcheollim/Downloads/Defora.app",
    "automationName": "XCUITest",
    "noReset": false,
    "showIOSLog": true,
    "showXcodeLog": true
  }
};
describe('Basic IOS Interaction', function() {
  let client;
  beforeEach(async function () {
    client = await wdio.remote(opts);
  });
  afterEach(async function (){
    await client.deleteSession();
  });
  it('should send keys to inputs', async function (done) {
    const res = await client.status();
    assert.isObject(res.build, "client.status() is made");
  
    const element = await client.findElement('class name', 'XCUIElementTypeApplication');
    await client.getElementAttribute(element.ELEMENT, 'name').then((attr) => {
      assert.equal(attr, 'Defora', "test success");
    });
  
    const destroySession = await client.deleteSession();
    assert.isNull(destroySession, "sessiong destroyed successfully");
  });


})
