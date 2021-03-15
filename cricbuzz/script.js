require("chromedriver");
let wd = require("selenium-webdriver");
let browser = new wd.Builder().forBrowser("chrome").build();
let matchId = 30880;
let innings = 1;
// let res = [];
// let strings = ["playerName", "out", "runs", "ballsPlayed", "fours", "sixes", "strikeRate"];
// async function main() {
//     //open site from browser
//     await browser.get('https://www.cricbuzz.com/live-cricket-scores/' + matchId);
//     await browser.wait(wd.until.elementLocated(wd.By.css(".cb-nav-bar a")));
//     //find all navbar buttons
//     let buttons = await browser.findElements(wd.By.css(".cb-nav-bar a"));
//     //click scoreboard button
//     await buttons[1].click();
//     //find all tables for both innings
//     let tables = await (await browser).findElements(wd.By.css(`#innings_${innings} .cb-col.cb-col-100.cb-ltst-wgt-hdr`));
//     //find innings data separately
//     let inning1BatsmanRow = await tables[0].findElements(wd.By.css(".cb-col.cb-col-100.cb-scrd-itms"));
//     for (let i = 0; i < inning1BatsmanRow.length - 3; i++) {
//         let columns = await inning1BatsmanRow[i].findElements(wd.By.css("div"));
//         let data = [];
//         for (let j in columns) {
//             if (j != 1) {
//                 data[strings[j]] = await columns[j].getAttribute("innerText");
//             }
//         }
//         res.push(data);
//     }
//     console.log(res);

// }
// main();

