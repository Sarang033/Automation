const puppeteer=require("puppeteer");
let page;
const BrowserOpenpromise=puppeteer.launch({headless:false,
    defaultViewport:null,
    args:["--start-maximized"]
});
BrowserOpenpromise.then(function(browser){
    const PagesArrpromise=browser.pages();
    return PagesArrpromise;
}).then(function(browserPages){
    page=browserPages[0];
    let gotoPromise=page.goto("https://www.google.co.in");
    return gotoPromise;
}).then(function(){
    let elemWaitPromise=page.waitForSelector("input[type='text']",{visible:true});
    return elemWaitPromise;
})
.then(function(){
    let pageSearch=page.keyboard.type('pepcoding',"input[type='text']",);  // console.log("Reached google home page");
    return pageSearch;
}).then(function(){
    let enterPressed=page.keyboard.press("Enter");
    return enterPressed;
}).then(function(){
    let elemWaitPromise=page.waitForSelector("h3.LC20lb.DKV0Md",{visible:true});    
    return elemWaitPromise;
}).then(function(){
    let clickPromise=page.click("h3.LC20lb.DKV0Md")
})
.catch(function(err){
    console.log(err);
});
console.log("After");
//