var delay, tween;
var loop_counter = 1;
var loop_counterMax = 3;

function loop() {
    TweenLite.set(banner, {visibility: "visible"});
    
    delay = 0
    
    tween = new TimelineLite({onComplete: function (){ tween.restart(); }});
    
    tween.from(background, 1.25, {alpha: 0, ease: Power4.easeInOut}, delay);
    tween.from(background, 2.25, {x: "-=65", y: "-=20", scaleX: 1, scaleY: 1, ease: Power4.easeInOut}, delay + 0.75);
    
    delay += 1.00;
    
    tween.from(logoWitcher, 0.50, {alpha: 0, ease: Power4.easeInOut}, delay);
    tween.from(logoWitcher, 0.50, {scaleX: 2, scaleY: 2, ease: Back.easeOut.config(1.50)}, delay);
    
    delay += 0.75;
    
    tween.from(CTA, 0.75, {alpha: 0, ease: Power4.easeInOut}, delay);
    
    delay += 0.25;
    
    tween.from(partners_CDPR, 0.75, {alpha: 0, y: "+=25", ease: Back.easeInOut}, delay);
    
    delay += 0.25;
    
    tween.from(partners, 0.75, {alpha: 0, y: "+=25", ease: Back.easeInOut}, delay);
    
    delay += 0.25;
    
    tween.from(ratings, 0.75, {alpha: 0, y: "+=25", ease: Back.easeInOut}, delay);
    
    delay += 1.00;
    
    tween.to(logoWitcher, 0.50, {scaleX: 1.10, scaleY: 1.10, ease: Power2.easeInOut}, delay);
    tween.to(logoWitcher, 0.50, {scaleX: 1, scaleY: 1, ease: Bounce.easeOut}, delay + 0.50);
    
    delay += 5.00;
    
    tween.call(loop_check, [], this, delay - 1.00);
    
    tween.to(background, 1.00, {alpha: 0, ease: Power4.easeInOut}, delay);
    tween.to(logoWitcher, 1.00, {alpha: 0, ease: Power4.easeInOut}, delay);
    tween.to(CTA, 1.00, {alpha: 0, ease: Power4.easeInOut}, delay);
    tween.to(partners_CDPR, 1.00, {alpha: 0, ease: Power4.easeInOut}, delay);
    tween.to(partners, 1.00, {alpha: 0, ease: Power4.easeInOut}, delay);
    tween.to(ratings, 1.00, {alpha: 0, ease: Power4.easeInOut}, delay);
}

function loop_check() {
    if (loop_counter == loop_counterMax) {
        CTA_tween.eventCallback("onComplete", null);
        tween.kill();
    } else {
        loop_counter += 1;
    }
}

/* -------------------------------------------------- */
var CTA_tween = TweenLite.to(CTA, 0.50, {
    scaleX: 0.95, scaleY: 0.95,
    ease: Sine.easeInOut,
    onComplete: function() { CTA_tween.reverse(); },
    onReverseComplete: function() { CTA_tween.restart(); }
});

/* -------------------------------------------------- */
logoWitcher.shadow = new createjs.Shadow("#ffffff", 0, -2, 20);

/* -------------------------------------------------- */
var CTA_shadow = new createjs.Shadow("rgba(255, 255, 255, 1)", 0, 0, 20);
CTA.shadow = CTA_shadow;

banner.onmouseover = function() {
    TweenLite.to(CTA_shadow, 0.50, {color: "rgba(255, 50, 50, 0.75)", ease: Power4.easeInOut});
}

banner.onmouseout = function() {
    TweenLite.to(CTA_shadow, 0.50, {color: "rgba(255, 255, 255, 1)", ease: Power2.easeInOut});
}

/* -------------------------------------------------- */
TweenLite.ticker.addEventListener("tick", stage.update, stage);
TweenLite.delayedCall(0.10, loop);