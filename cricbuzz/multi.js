require("chromedriver");
let wd = require("selenium-webdriver");
let browser = new wd.Builder().forBrowser("chrome").build();
let matchId = 30880;
let innings = 1;

//PROFILE FOR ALL PLAYERS
async function main() {
    //open site from browser
    await browser.get('https://www.cricbuzz.com/live-cricket-scores/' + matchId);
    await browser.wait(wd.until.elementLocated(wd.By.css(".cb-nav-bar a")));
    //find all navbar buttons
    let buttons = await browser.findElements(wd.By.css(".cb-nav-bar a"));
    //click scoreboard button
    await buttons[1].click();

    let anchorBatsman = await browser.findElements(wd.By.css("#innings_1 .cb-col.cb-col-27 a"));
    let anchorBowler = await browser.findElements(wd.By.css("#innings_1 .cb-col.cb-col-40 a"));
    let anchors = anchorBatsman.concat(anchorBowler);
    let url = [];
    for (let i = 0; i < anchors.length; i++) {
        url.push(anchors[i].getAttribute("href"));
    }
    console.log(url);
}
main();