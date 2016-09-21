TweenLite.set(banner, {
    pointerEvents: "auto", cursor: "pointer", 
    backgroundColor: "#ffffff", 
    position: "absolute", width: 300, height: 250, 
    transformOrigin: "0px 0px", 
    overflow: "hidden", 
    visibility: "hidden", 
});

/* -------------------------------------------------- */
var stage = new createjs.Stage("banner");
stage.enableMouseOver();

/* -------------------------------------------------- */
var background = new createjs.Bitmap("background.png");
background.mouseEnabled = false;
background.setBounds(-220, -180, 440, 360);
background.x = 150;
background.y = 125;
background.regX = 220;
background.regY = 180;
background.scaleX = 0.7;
background.scaleY = 0.7;
stage.addChild(background);

/* -------------------------------------------------- */
var logoWitcher = new createjs.Bitmap("logoWitcher.png");
logoWitcher.mouseEnabled = false;
logoWitcher.setBounds(-80, -50, 160, 100);
logoWitcher.x = 85;
logoWitcher.y = 55;
logoWitcher.regX = 80;
logoWitcher.regY = 50;
stage.addChild(logoWitcher);

/* -------------------------------------------------- */
var CTA = new createjs.Bitmap("CTA.png");
CTA.mouseEnabled = false;
CTA.setBounds(-75, -40, 150, 80);
CTA.x = 85;
CTA.y = 145;
CTA.regX = 75;
CTA.regY = 40;
stage.addChild(CTA);

/* -------------------------------------------------- */
var partners_CDPR = new createjs.Bitmap("partners_CDPR.png");
partners_CDPR.mouseEnabled = false;
partners_CDPR.setBounds(0, 0, 65, 35);
partners_CDPR.x = 10;
partners_CDPR.y = 205;
partners_CDPR.regX = 0;
partners_CDPR.regY = 0;
stage.addChild(partners_CDPR);

/* -------------------------------------------------- */
var partners = new createjs.Bitmap("partners.png");
partners.mouseEnabled = false;
partners.setBounds(0, 0, 40, 35);
partners.x = 85;
partners.y = 205;
partners.regX = 0;
partners.regY = 0;
stage.addChild(partners);

/* -------------------------------------------------- */
var ratings = new createjs.Bitmap("ratings.png");
ratings.mouseEnabled = false;
ratings.setBounds(0, 0, 30, 35);
ratings.x = 135;
ratings.y = 205;
ratings.regX = 0;
ratings.regY = 0;
stage.addChild(ratings);