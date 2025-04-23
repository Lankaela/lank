gdjs.Start_32gameCode = {};
gdjs.Start_32gameCode.localVariables = [];
gdjs.Start_32gameCode.GDNewSpriteObjects1= [];
gdjs.Start_32gameCode.GDNewSpriteObjects2= [];
gdjs.Start_32gameCode.GDStartGametextObjects1= [];
gdjs.Start_32gameCode.GDStartGametextObjects2= [];
gdjs.Start_32gameCode.GDGreyButtonWithShadowObjects1= [];
gdjs.Start_32gameCode.GDGreyButtonWithShadowObjects2= [];


gdjs.Start_32gameCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("GreyButtonWithShadow"), gdjs.Start_32gameCode.GDGreyButtonWithShadowObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Start_32gameCode.GDGreyButtonWithShadowObjects1.length;i<l;++i) {
    if ( gdjs.Start_32gameCode.GDGreyButtonWithShadowObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Start_32gameCode.GDGreyButtonWithShadowObjects1[k] = gdjs.Start_32gameCode.GDGreyButtonWithShadowObjects1[i];
        ++k;
    }
}
gdjs.Start_32gameCode.GDGreyButtonWithShadowObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Untitled scene", false);
}}

}


};

gdjs.Start_32gameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Start_32gameCode.GDNewSpriteObjects1.length = 0;
gdjs.Start_32gameCode.GDNewSpriteObjects2.length = 0;
gdjs.Start_32gameCode.GDStartGametextObjects1.length = 0;
gdjs.Start_32gameCode.GDStartGametextObjects2.length = 0;
gdjs.Start_32gameCode.GDGreyButtonWithShadowObjects1.length = 0;
gdjs.Start_32gameCode.GDGreyButtonWithShadowObjects2.length = 0;

gdjs.Start_32gameCode.eventsList0(runtimeScene);
gdjs.Start_32gameCode.GDNewSpriteObjects1.length = 0;
gdjs.Start_32gameCode.GDNewSpriteObjects2.length = 0;
gdjs.Start_32gameCode.GDStartGametextObjects1.length = 0;
gdjs.Start_32gameCode.GDStartGametextObjects2.length = 0;
gdjs.Start_32gameCode.GDGreyButtonWithShadowObjects1.length = 0;
gdjs.Start_32gameCode.GDGreyButtonWithShadowObjects2.length = 0;


return;

}

gdjs['Start_32gameCode'] = gdjs.Start_32gameCode;
