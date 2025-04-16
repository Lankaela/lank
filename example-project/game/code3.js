gdjs.Game_322Code = {};
gdjs.Game_322Code.localVariables = [];
gdjs.Game_322Code.GDPlatformer_9595CharacterObjects1= [];
gdjs.Game_322Code.GDPlatformer_9595CharacterObjects2= [];
gdjs.Game_322Code.GDPlatform_9595GroundObjects1= [];
gdjs.Game_322Code.GDPlatform_9595GroundObjects2= [];
gdjs.Game_322Code.GDBackgroundObjects1= [];
gdjs.Game_322Code.GDBackgroundObjects2= [];
gdjs.Game_322Code.GDCoinsObjects1= [];
gdjs.Game_322Code.GDCoinsObjects2= [];
gdjs.Game_322Code.GDNewSpriteObjects1= [];
gdjs.Game_322Code.GDNewSpriteObjects2= [];
gdjs.Game_322Code.GDNewSprite2Objects1= [];
gdjs.Game_322Code.GDNewSprite2Objects2= [];
gdjs.Game_322Code.GDNewSprite3Objects1= [];
gdjs.Game_322Code.GDNewSprite3Objects2= [];
gdjs.Game_322Code.GDNewSprite4Objects1= [];
gdjs.Game_322Code.GDNewSprite4Objects2= [];
gdjs.Game_322Code.GDJoystickObjects1= [];
gdjs.Game_322Code.GDJoystickObjects2= [];
gdjs.Game_322Code.GDJumpButtonObjects1= [];
gdjs.Game_322Code.GDJumpButtonObjects2= [];


gdjs.Game_322Code.mapOfGDgdjs_9546Game_9595322Code_9546GDNewSprite3Objects1Objects = Hashtable.newFrom({"NewSprite3": gdjs.Game_322Code.GDNewSprite3Objects1});
gdjs.Game_322Code.mapOfEmptyGDCoinsObjects = Hashtable.newFrom({"Coins": []});
gdjs.Game_322Code.mapOfGDgdjs_9546Game_9595322Code_9546GDPlatformer_95959595CharacterObjects1Objects = Hashtable.newFrom({"Platformer_Character": gdjs.Game_322Code.GDPlatformer_9595CharacterObjects1});
gdjs.Game_322Code.mapOfGDgdjs_9546Game_9595322Code_9546GDCoinsObjects1Objects = Hashtable.newFrom({"Coins": gdjs.Game_322Code.GDCoinsObjects1});
gdjs.Game_322Code.mapOfGDgdjs_9546Game_9595322Code_9546GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs.Game_322Code.GDNewSpriteObjects1});
gdjs.Game_322Code.mapOfGDgdjs_9546Game_9595322Code_9546GDPlatformer_95959595CharacterObjects1Objects = Hashtable.newFrom({"Platformer_Character": gdjs.Game_322Code.GDPlatformer_9595CharacterObjects1});
gdjs.Game_322Code.mapOfGDgdjs_9546Game_9595322Code_9546GDNewSprite4Objects1Objects = Hashtable.newFrom({"NewSprite4": gdjs.Game_322Code.GDNewSprite4Objects1});
gdjs.Game_322Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Game_322Code.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.Game_322Code.GDNewSprite3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs.Game_322Code.GDNewSprite4Objects1);
{for(var i = 0, len = gdjs.Game_322Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Game_322Code.GDNewSprite2Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Game_322Code.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.Game_322Code.GDNewSprite3Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Game_322Code.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.Game_322Code.GDNewSprite4Objects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.Game_322Code.GDNewSprite3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Game_322Code.mapOfGDgdjs_9546Game_9595322Code_9546GDNewSprite3Objects1Objects, runtimeScene, false, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_322Code.GDNewSprite3Objects1.length;i<l;++i) {
    if ( gdjs.Game_322Code.GDNewSprite3Objects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Game_322Code.GDNewSprite3Objects1[k] = gdjs.Game_322Code.GDNewSprite3Objects1[i];
        ++k;
    }
}
gdjs.Game_322Code.GDNewSprite3Objects1.length = k;
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Game 3");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getSceneInstancesCount((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Game_322Code.mapOfEmptyGDCoinsObjects) == 0;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Game_322Code.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.Game_322Code.GDNewSprite3Objects1);
{for(var i = 0, len = gdjs.Game_322Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Game_322Code.GDNewSprite2Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Game_322Code.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.Game_322Code.GDNewSprite3Objects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Coins"), gdjs.Game_322Code.GDCoinsObjects1);
gdjs.copyArray(runtimeScene.getObjects("Platformer_Character"), gdjs.Game_322Code.GDPlatformer_9595CharacterObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_322Code.mapOfGDgdjs_9546Game_9595322Code_9546GDPlatformer_95959595CharacterObjects1Objects, gdjs.Game_322Code.mapOfGDgdjs_9546Game_9595322Code_9546GDCoinsObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Game_322Code.GDCoinsObjects1 */
{for(var i = 0, len = gdjs.Game_322Code.GDCoinsObjects1.length ;i < len;++i) {
    gdjs.Game_322Code.GDCoinsObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "PickupCoin", false, 80, gdjs.randomFloatInRange(1, 1.1));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.Game_322Code.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("Platformer_Character"), gdjs.Game_322Code.GDPlatformer_9595CharacterObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_322Code.mapOfGDgdjs_9546Game_9595322Code_9546GDNewSpriteObjects1Objects, gdjs.Game_322Code.mapOfGDgdjs_9546Game_9595322Code_9546GDPlatformer_95959595CharacterObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Game_322Code.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs.Game_322Code.GDNewSprite4Objects1);
/* Reuse gdjs.Game_322Code.GDPlatformer_9595CharacterObjects1 */
{for(var i = 0, len = gdjs.Game_322Code.GDPlatformer_9595CharacterObjects1.length ;i < len;++i) {
    gdjs.Game_322Code.GDPlatformer_9595CharacterObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Game_322Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Game_322Code.GDNewSprite2Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Game_322Code.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.Game_322Code.GDNewSprite4Objects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs.Game_322Code.GDNewSprite4Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Game_322Code.mapOfGDgdjs_9546Game_9595322Code_9546GDNewSprite4Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_322Code.GDNewSprite4Objects1.length;i<l;++i) {
    if ( gdjs.Game_322Code.GDNewSprite4Objects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Game_322Code.GDNewSprite4Objects1[k] = gdjs.Game_322Code.GDNewSprite4Objects1[i];
        ++k;
    }
}
gdjs.Game_322Code.GDNewSprite4Objects1.length = k;
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game 2", false);
}}

}


};

gdjs.Game_322Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_322Code.GDPlatformer_9595CharacterObjects1.length = 0;
gdjs.Game_322Code.GDPlatformer_9595CharacterObjects2.length = 0;
gdjs.Game_322Code.GDPlatform_9595GroundObjects1.length = 0;
gdjs.Game_322Code.GDPlatform_9595GroundObjects2.length = 0;
gdjs.Game_322Code.GDBackgroundObjects1.length = 0;
gdjs.Game_322Code.GDBackgroundObjects2.length = 0;
gdjs.Game_322Code.GDCoinsObjects1.length = 0;
gdjs.Game_322Code.GDCoinsObjects2.length = 0;
gdjs.Game_322Code.GDNewSpriteObjects1.length = 0;
gdjs.Game_322Code.GDNewSpriteObjects2.length = 0;
gdjs.Game_322Code.GDNewSprite2Objects1.length = 0;
gdjs.Game_322Code.GDNewSprite2Objects2.length = 0;
gdjs.Game_322Code.GDNewSprite3Objects1.length = 0;
gdjs.Game_322Code.GDNewSprite3Objects2.length = 0;
gdjs.Game_322Code.GDNewSprite4Objects1.length = 0;
gdjs.Game_322Code.GDNewSprite4Objects2.length = 0;
gdjs.Game_322Code.GDJoystickObjects1.length = 0;
gdjs.Game_322Code.GDJoystickObjects2.length = 0;
gdjs.Game_322Code.GDJumpButtonObjects1.length = 0;
gdjs.Game_322Code.GDJumpButtonObjects2.length = 0;

gdjs.Game_322Code.eventsList0(runtimeScene);
gdjs.Game_322Code.GDPlatformer_9595CharacterObjects1.length = 0;
gdjs.Game_322Code.GDPlatformer_9595CharacterObjects2.length = 0;
gdjs.Game_322Code.GDPlatform_9595GroundObjects1.length = 0;
gdjs.Game_322Code.GDPlatform_9595GroundObjects2.length = 0;
gdjs.Game_322Code.GDBackgroundObjects1.length = 0;
gdjs.Game_322Code.GDBackgroundObjects2.length = 0;
gdjs.Game_322Code.GDCoinsObjects1.length = 0;
gdjs.Game_322Code.GDCoinsObjects2.length = 0;
gdjs.Game_322Code.GDNewSpriteObjects1.length = 0;
gdjs.Game_322Code.GDNewSpriteObjects2.length = 0;
gdjs.Game_322Code.GDNewSprite2Objects1.length = 0;
gdjs.Game_322Code.GDNewSprite2Objects2.length = 0;
gdjs.Game_322Code.GDNewSprite3Objects1.length = 0;
gdjs.Game_322Code.GDNewSprite3Objects2.length = 0;
gdjs.Game_322Code.GDNewSprite4Objects1.length = 0;
gdjs.Game_322Code.GDNewSprite4Objects2.length = 0;
gdjs.Game_322Code.GDJoystickObjects1.length = 0;
gdjs.Game_322Code.GDJoystickObjects2.length = 0;
gdjs.Game_322Code.GDJumpButtonObjects1.length = 0;
gdjs.Game_322Code.GDJumpButtonObjects2.length = 0;


return;

}

gdjs['Game_322Code'] = gdjs.Game_322Code;
