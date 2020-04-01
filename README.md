# test automator on appium server
* edit ~/.zshrc (depends your shell, e.g. ~/.bashrc, ~/.bash_profile)
```
export JAVA_HOME="/Library/Java/JavaVirtualMachines/jdk1.8.0_111.jdk/Contents/Home"

```
* after edit .zshrc, open another tab or source .zshrc for refreshing terminal config

* install appium (need node 10+, use nvm)
```
npm install -g appium
```
* Or install appium desktop
* make working directory
```
mkdir ~/appium/test && cd "$_"
npm init -y
```
* install UiAutomator2Driver for android test
```
npm install appium-uiautomator2-driver
npm install webdriverio
```
* download demo android app [androidapp](https://github.com/appium/appium/raw/master/sample-code/apps/ApiDemos-debug.apk)
* run appium server
```
appium
```
* edit index.js
```
const wdio = require("webdriverio");
const assert = require("assert");

const opts = {
  hostname: "localhost",
  port: 4723,
  path: "/wd/hub/",
  capabilities: {
    platformName: "Android",
    platformVersion: "8",
    deviceName: "Android Emulator",
    app: "/your_home_dir/Downloads/ApiDemos-debug.apk",
    appPackage: "io.appium.android.apis",
    appActivity: ".view.TextFields",
    automationName: "UiAutomator2"
  }
};

async function main () {
  const client = await wdio.remote(opts);

  const field = await client.$("android.widget.EditText");
  await field.setValue("Hello World!");
  const value = await field.getText();
  assert.equal(value,"Hello World!");

  await client.deleteSession();
}

main();

```
* run node index for testing with appium server.
```
node index
```
# test automator on appium desktop
* install appium desktop and click edit configurations
![img](./img/1.png)
* edit as your config
![img](./img/2.png)
* click start server button and click red circle below image.
![img](./img/3.png)
* add params on Desired Capabilities with
```
    platformName: "Android",
    platformVersion: "8",
    deviceName: "Android Emulator",
    app: "/your_home_dir/Downloads/ApiDemos-debug.apk",
    appPackage: "io.appium.android.apis",
    appActivity: ".view.TextFields",
    automationName: "UiAutomator2"
```
* and save as , result will be like below
![img](./img/5.png)
* and click start session