gdjs.Untitled_32sceneCode = {};
gdjs.Untitled_32sceneCode.localVariables = [];
gdjs.Untitled_32sceneCode.GDapplejackObjects1_1final = [];

gdjs.Untitled_32sceneCode.GDfloorObjects1_1final = [];

gdjs.Untitled_32sceneCode.GDpipeObjects1_1final = [];

gdjs.Untitled_32sceneCode.GDapplejackObjects1= [];
gdjs.Untitled_32sceneCode.GDapplejackObjects2= [];
gdjs.Untitled_32sceneCode.GDpipeObjects1= [];
gdjs.Untitled_32sceneCode.GDpipeObjects2= [];
gdjs.Untitled_32sceneCode.GDpointObjects1= [];
gdjs.Untitled_32sceneCode.GDpointObjects2= [];
gdjs.Untitled_32sceneCode.GDscoreTextObjects1= [];
gdjs.Untitled_32sceneCode.GDscoreTextObjects2= [];
gdjs.Untitled_32sceneCode.GDbgObjects1= [];
gdjs.Untitled_32sceneCode.GDbgObjects2= [];
gdjs.Untitled_32sceneCode.GDfloorObjects1= [];
gdjs.Untitled_32sceneCode.GDfloorObjects2= [];


gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDapplejackObjects1Objects = Hashtable.newFrom({"applejack": gdjs.Untitled_32sceneCode.GDapplejackObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDpipeObjects1Objects = Hashtable.newFrom({"pipe": gdjs.Untitled_32sceneCode.GDpipeObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDapplejackObjects2Objects = Hashtable.newFrom({"applejack": gdjs.Untitled_32sceneCode.GDapplejackObjects2});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDpipeObjects2Objects = Hashtable.newFrom({"pipe": gdjs.Untitled_32sceneCode.GDpipeObjects2});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDapplejackObjects2Objects = Hashtable.newFrom({"applejack": gdjs.Untitled_32sceneCode.GDapplejackObjects2});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDfloorObjects2Objects = Hashtable.newFrom({"floor": gdjs.Untitled_32sceneCode.GDfloorObjects2});
gdjs.Untitled_32sceneCode.asyncCallback8410036 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Untitled_32sceneCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game Over", true);
}gdjs.Untitled_32sceneCode.localVariables.length = 0;
}
gdjs.Untitled_32sceneCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Untitled_32sceneCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.Untitled_32sceneCode.asyncCallback8410036(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDapplejackObjects1Objects = Hashtable.newFrom({"applejack": gdjs.Untitled_32sceneCode.GDapplejackObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDpointObjects1Objects = Hashtable.newFrom({"point": gdjs.Untitled_32sceneCode.GDpointObjects1});
gdjs.Untitled_32sceneCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "pipe");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("applejack"), gdjs.Untitled_32sceneCode.GDapplejackObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDapplejackObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDapplejackObjects1[i].getBehavior("PlatformerObject").setCanJump();
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDapplejackObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDapplejackObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("applejack"), gdjs.Untitled_32sceneCode.GDapplejackObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDapplejackObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDapplejackObjects1[i].getBehavior("PlatformerObject").isJumping() ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDapplejackObjects1[k] = gdjs.Untitled_32sceneCode.GDapplejackObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDapplejackObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDapplejackObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDapplejackObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDapplejackObjects1[i].rotateTowardAngle(-(45), 700, runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("applejack"), gdjs.Untitled_32sceneCode.GDapplejackObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDapplejackObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDapplejackObjects1[i].getBehavior("PlatformerObject").isFalling() ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDapplejackObjects1[k] = gdjs.Untitled_32sceneCode.GDapplejackObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDapplejackObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDapplejackObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDapplejackObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDapplejackObjects1[i].rotateTowardAngle(89, 240, runtimeScene);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "pipe") >= 1.8;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("applejack"), gdjs.Untitled_32sceneCode.GDapplejackObjects1);
{gdjs.evtTools.runtimeScene.createObjectsFromExternalLayout(runtimeScene, "pipes", (( gdjs.Untitled_32sceneCode.GDapplejackObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDapplejackObjects1[0].getPointX("")) + 800, 200 - gdjs.random(400), 0);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "pipe");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("applejack"), gdjs.Untitled_32sceneCode.GDapplejackObjects1);
gdjs.copyArray(runtimeScene.getObjects("pipe"), gdjs.Untitled_32sceneCode.GDpipeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDapplejackObjects1Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDpipeObjects1Objects, true, runtimeScene, true);
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDpipeObjects1 */
gdjs.copyArray(runtimeScene.getObjects("point"), gdjs.Untitled_32sceneCode.GDpointObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDpipeObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDpipeObjects1[i].addForce(-(300), 0, 0);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDpointObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDpointObjects1[i].addForce(-(300), 0, 0);
}
}}

}


{

gdjs.Untitled_32sceneCode.GDapplejackObjects1.length = 0;

gdjs.Untitled_32sceneCode.GDfloorObjects1.length = 0;

gdjs.Untitled_32sceneCode.GDpipeObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.Untitled_32sceneCode.GDapplejackObjects1_1final.length = 0;
gdjs.Untitled_32sceneCode.GDfloorObjects1_1final.length = 0;
gdjs.Untitled_32sceneCode.GDpipeObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("applejack"), gdjs.Untitled_32sceneCode.GDapplejackObjects2);
gdjs.copyArray(runtimeScene.getObjects("pipe"), gdjs.Untitled_32sceneCode.GDpipeObjects2);
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDapplejackObjects2Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDpipeObjects2Objects, false, runtimeScene, true);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Untitled_32sceneCode.GDapplejackObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Untitled_32sceneCode.GDapplejackObjects1_1final.indexOf(gdjs.Untitled_32sceneCode.GDapplejackObjects2[j]) === -1 )
            gdjs.Untitled_32sceneCode.GDapplejackObjects1_1final.push(gdjs.Untitled_32sceneCode.GDapplejackObjects2[j]);
    }
    for (let j = 0, jLen = gdjs.Untitled_32sceneCode.GDpipeObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Untitled_32sceneCode.GDpipeObjects1_1final.indexOf(gdjs.Untitled_32sceneCode.GDpipeObjects2[j]) === -1 )
            gdjs.Untitled_32sceneCode.GDpipeObjects1_1final.push(gdjs.Untitled_32sceneCode.GDpipeObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("applejack"), gdjs.Untitled_32sceneCode.GDapplejackObjects2);
gdjs.copyArray(runtimeScene.getObjects("floor"), gdjs.Untitled_32sceneCode.GDfloorObjects2);
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDapplejackObjects2Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDfloorObjects2Objects, false, runtimeScene, true);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Untitled_32sceneCode.GDapplejackObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Untitled_32sceneCode.GDapplejackObjects1_1final.indexOf(gdjs.Untitled_32sceneCode.GDapplejackObjects2[j]) === -1 )
            gdjs.Untitled_32sceneCode.GDapplejackObjects1_1final.push(gdjs.Untitled_32sceneCode.GDapplejackObjects2[j]);
    }
    for (let j = 0, jLen = gdjs.Untitled_32sceneCode.GDfloorObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Untitled_32sceneCode.GDfloorObjects1_1final.indexOf(gdjs.Untitled_32sceneCode.GDfloorObjects2[j]) === -1 )
            gdjs.Untitled_32sceneCode.GDfloorObjects1_1final.push(gdjs.Untitled_32sceneCode.GDfloorObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Untitled_32sceneCode.GDapplejackObjects1_1final, gdjs.Untitled_32sceneCode.GDapplejackObjects1);
gdjs.copyArray(gdjs.Untitled_32sceneCode.GDfloorObjects1_1final, gdjs.Untitled_32sceneCode.GDfloorObjects1);
gdjs.copyArray(gdjs.Untitled_32sceneCode.GDpipeObjects1_1final, gdjs.Untitled_32sceneCode.GDpipeObjects1);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDapplejackObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDapplejackObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDapplejackObjects1[i].deleteFromScene(runtimeScene);
}
}
{ //Subevents
gdjs.Untitled_32sceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("applejack"), gdjs.Untitled_32sceneCode.GDapplejackObjects1);
gdjs.copyArray(runtimeScene.getObjects("point"), gdjs.Untitled_32sceneCode.GDpointObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDapplejackObjects1Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDpointObjects1Objects, false, runtimeScene, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9442524);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("scoreText"), gdjs.Untitled_32sceneCode.GDscoreTextObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDscoreTextObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDscoreTextObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0))));
}
}}

}


};

gdjs.Untitled_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32sceneCode.GDapplejackObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDapplejackObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDpipeObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDpipeObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDpointObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDpointObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDscoreTextObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDscoreTextObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDbgObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDbgObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDfloorObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDfloorObjects2.length = 0;

gdjs.Untitled_32sceneCode.eventsList1(runtimeScene);
gdjs.Untitled_32sceneCode.GDapplejackObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDapplejackObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDpipeObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDpipeObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDpointObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDpointObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDscoreTextObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDscoreTextObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDbgObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDbgObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDfloorObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDfloorObjects2.length = 0;


return;

}

gdjs['Untitled_32sceneCode'] = gdjs.Untitled_32sceneCode;
