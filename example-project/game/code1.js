gdjs.Game_32OverCode = {};
gdjs.Game_32OverCode.localVariables = [];
gdjs.Game_32OverCode.GDbg2Objects1= [];
gdjs.Game_32OverCode.GDbg2Objects2= [];
gdjs.Game_32OverCode.GDGameOverSpriteObjects1= [];
gdjs.Game_32OverCode.GDGameOverSpriteObjects2= [];
gdjs.Game_32OverCode.GDretryObjects1= [];
gdjs.Game_32OverCode.GDretryObjects2= [];


gdjs.Game_32OverCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Untitled scene", false);
}}

}


};

gdjs.Game_32OverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_32OverCode.GDbg2Objects1.length = 0;
gdjs.Game_32OverCode.GDbg2Objects2.length = 0;
gdjs.Game_32OverCode.GDGameOverSpriteObjects1.length = 0;
gdjs.Game_32OverCode.GDGameOverSpriteObjects2.length = 0;
gdjs.Game_32OverCode.GDretryObjects1.length = 0;
gdjs.Game_32OverCode.GDretryObjects2.length = 0;

gdjs.Game_32OverCode.eventsList0(runtimeScene);
gdjs.Game_32OverCode.GDbg2Objects1.length = 0;
gdjs.Game_32OverCode.GDbg2Objects2.length = 0;
gdjs.Game_32OverCode.GDGameOverSpriteObjects1.length = 0;
gdjs.Game_32OverCode.GDGameOverSpriteObjects2.length = 0;
gdjs.Game_32OverCode.GDretryObjects1.length = 0;
gdjs.Game_32OverCode.GDretryObjects2.length = 0;


return;

}

gdjs['Game_32OverCode'] = gdjs.Game_32OverCode;
