/*************** 
 * Coding *
 ***************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2023.2.3.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'coding';  // from the Builder filename that created this script
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
    'how many crosses?': '10',
    'radius': '0.4',
    'cross size': '0.05',
};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([-1,-1,-1]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(setupRoutineBegin());
flowScheduler.add(setupRoutineEachFrame());
flowScheduler.add(setupRoutineEnd());
const trials_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_loopLoopBegin(trials_loopLoopScheduler));
flowScheduler.add(trials_loopLoopScheduler);
flowScheduler.add(trials_loopLoopEnd);


flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2023.2.3';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var setupClock;
var radius;
var crossSize;
var nCrosses;
var resetSize;
var resetPos;
var spinOri;
var ori;
var cross;
var angle;
var trialClock;
var main_clock;
var crosses;
var trial_slider;
var trial_mouse;
var trial_textbox;
var trial_reset;
var trial_reset_text;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "setup"
  setupClock = new util.Clock();
  // Run 'Begin Experiment' code from setup_code
  radius = Number.parseFloat(expInfo["radius"]);
  crossSize = expInfo["cross size"];
  nCrosses = Number.parseInt(expInfo["how many crosses?"]);
  resetSize = [0.15, 0.1];
  resetPos = [0.5, (- 0.4)];
  spinOri = 0;
  ori = 0;
  cross = 0;
  angle = 0;
  
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  // Run 'Begin Experiment' code from trial_clock
  main_clock = new util.Clock();
  
  // Run 'Begin Experiment' code from trial_crosses
  crosses = [];
  for (var i, _pj_c = 0, _pj_a = util.range(nCrosses), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
      i = _pj_a[_pj_c];
      cross = new visual.ShapeStim({"win": psychoJS.window, "name": i.toString(), "size": crossSize, "vertices": "cross", "ori": 0, "pos": [0, 0], "anchor": "center", "lineWidth": 1.0, "colorSpace": "rgb", "lineColor": "white", "fillColor": "white", "opacity": null, "depth": (- 6.0), "interpolate": true});
      crosses.push(cross);
      crosses[i].setAutoDraw(true);
  }
  
  trial_slider = new visual.Slider({
    win: psychoJS.window, name: 'trial_slider',
    startValue: 0,
    size: [0.5, 0.05], pos: [0, (- 0.2)], ori: 0.0, units: psychoJS.window.units,
    labels: undefined, fontSize: 0.05, ticks: [0, 1],
    granularity: 0.0, style: ["RATING"],
    color: new util.Color('LightGray'), markerColor: new util.Color('White'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -6, 
    flip: false,
  });
  
  trial_mouse = new core.Mouse({
    win: psychoJS.window,
  });
  trial_mouse.mouseClock = new util.Clock();
  trial_textbox = new visual.TextBox({
    win: psychoJS.window,
    name: 'trial_textbox',
    text: '',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [0, 0], 
    letterHeight: 0.05,
    lineSpacing: 0.5,
    size: [0.6, 0.2],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center-left',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -8.0 
  });
  
  trial_reset = new visual.Rect ({
    win: psychoJS.window, name: 'trial_reset', 
    width: resetSize[0], height: resetSize[1],
    ori: 0.0, pos: resetPos,
    anchor: 'center',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('blue'),
    fillColor: new util.Color('blue'),
    opacity: undefined, depth: -9, interpolate: true,
  });
  
  trial_reset_text = new visual.TextBox({
    win: psychoJS.window,
    name: 'trial_reset_text',
    text: 'reset',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: resetPos, 
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: resetSize,  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -10.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var setupComponents;
function setupRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'setup' ---
    t = 0;
    setupClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('setup.started', globalClock.getTime());
    // keep track of which components have finished
    setupComponents = [];
    
    for (const thisComponent of setupComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function setupRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'setup' ---
    // get current time
    t = setupClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of setupComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function setupRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'setup' ---
    for (const thisComponent of setupComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('setup.stopped', globalClock.getTime());
    // the Routine "setup" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trials_loop;
function trials_loopLoopBegin(trials_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 9999, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'trials_loop'
    });
    psychoJS.experiment.addLoop(trials_loop); // add the loop to the experiment
    currentLoop = trials_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrials_loop of trials_loop) {
      snapshot = trials_loop.getSnapshot();
      trials_loopLoopScheduler.add(importConditions(snapshot));
      trials_loopLoopScheduler.add(trialRoutineBegin(snapshot));
      trials_loopLoopScheduler.add(trialRoutineEachFrame());
      trials_loopLoopScheduler.add(trialRoutineEnd(snapshot));
      trials_loopLoopScheduler.add(trials_loopLoopEndIteration(trials_loopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_loopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var currentTime;
var clockText;
var gotValidClick;
var trialComponents;
function trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial' ---
    t = 0;
    trialClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('trial.started', globalClock.getTime());
    // Run 'Begin Routine' code from trial_clock
    currentTime = main_clock.getTime().toString();
    clockText = "";
    
    trial_slider.reset()
    // setup some python lists for storing info about the trial_mouse
    // current position of the mouse:
    trial_mouse.x = [];
    trial_mouse.y = [];
    trial_mouse.leftButton = [];
    trial_mouse.midButton = [];
    trial_mouse.rightButton = [];
    trial_mouse.time = [];
    trial_mouse.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    trialComponents = [];
    trialComponents.push(trial_slider);
    trialComponents.push(trial_mouse);
    trialComponents.push(trial_textbox);
    trialComponents.push(trial_reset);
    trialComponents.push(trial_reset_text);
    
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var sinceReset;
var crossPositions;
var prevButtonState;
var _mouseButtons;
var _mouseXYs;
function trialRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial' ---
    // get current time
    t = trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from trial_clock
    currentTime = util.round(main_clock.getTime(), 2).toString();
    sinceReset = util.round(t, 2).toString();
    clockText = (((("Time since start: " + currentTime.toString()) + "\nSince refresh: ") + sinceReset.toString()) + "\nPosition: ");
    
    ori += (trial_mouse.getPos()[0] + (trial_mouse.getPos()[1] % 360));
    
    // Run 'Each Frame' code from trial_trig
    crossPositions = [];
    for (var i, _pj_c = 0, _pj_a = util.range(crosses.length), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        i = _pj_a[_pj_c];
        angle = (360 / crosses.length);
        crossPositions.push([(radius * Math.sin((((((i * angle) + ori) % 360) * Math.PI) / 180))), (radius * Math.cos((((((i * angle) + ori) % 360) * Math.PI) / 180)))]);
    }
    
    // Run 'Each Frame' code from trial_crosses
    for (var i, _pj_c = 0, _pj_a = util.range(crosses.length), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        i = _pj_a[_pj_c];
        crosses[i].pos = crossPositions[i];
        crosses[i].ori = spinOri;
    }
    spinOri += 1;
    spinOri = (spinOri % 360);
    
    
    // *trial_slider* updates
    if (t >= 0.0 && trial_slider.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trial_slider.tStart = t;  // (not accounting for frame time here)
      trial_slider.frameNStart = frameN;  // exact frame index
      
      trial_slider.setAutoDraw(true);
    }
    
    // *trial_mouse* updates
    if (t >= 0.0 && trial_mouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trial_mouse.tStart = t;  // (not accounting for frame time here)
      trial_mouse.frameNStart = frameN;  // exact frame index
      
      trial_mouse.status = PsychoJS.Status.STARTED;
      trial_mouse.mouseClock.reset();
      prevButtonState = trial_mouse.getPressed();  // if button is down already this ISN'T a new click
      }
    if (trial_mouse.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = trial_mouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [trial_reset]) {
            if (obj.contains(trial_mouse)) {
              gotValidClick = true;
              trial_mouse.clicked_name.push(obj.name)
            }
          }
          _mouseXYs = trial_mouse.getPos();
          trial_mouse.x.push(_mouseXYs[0]);
          trial_mouse.y.push(_mouseXYs[1]);
          trial_mouse.leftButton.push(_mouseButtons[0]);
          trial_mouse.midButton.push(_mouseButtons[1]);
          trial_mouse.rightButton.push(_mouseButtons[2]);
          trial_mouse.time.push(trial_mouse.mouseClock.getTime());
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    
    if (trial_textbox.status === PsychoJS.Status.STARTED){ // only update if being drawn
      trial_textbox.setText(clockText, false);
    }
    
    // *trial_textbox* updates
    if (t >= 0.0 && trial_textbox.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trial_textbox.tStart = t;  // (not accounting for frame time here)
      trial_textbox.frameNStart = frameN;  // exact frame index
      
      trial_textbox.setAutoDraw(true);
    }
    
    
    // *trial_reset* updates
    if (t >= 0.0 && trial_reset.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trial_reset.tStart = t;  // (not accounting for frame time here)
      trial_reset.frameNStart = frameN;  // exact frame index
      
      trial_reset.setAutoDraw(true);
    }
    
    
    // *trial_reset_text* updates
    if (t >= 0.0 && trial_reset_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trial_reset_text.tStart = t;  // (not accounting for frame time here)
      trial_reset_text.frameNStart = frameN;  // exact frame index
      
      trial_reset_text.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trialRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial' ---
    for (const thisComponent of trialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('trial.stopped', globalClock.getTime());
    psychoJS.experiment.addData('trial_slider.response', trial_slider.getRating());
    psychoJS.experiment.addData('trial_slider.rt', trial_slider.getRT());
    // store data for psychoJS.experiment (ExperimentHandler)
    if (trial_mouse.x) {  psychoJS.experiment.addData('trial_mouse.x', trial_mouse.x[0])};
    if (trial_mouse.y) {  psychoJS.experiment.addData('trial_mouse.y', trial_mouse.y[0])};
    if (trial_mouse.leftButton) {  psychoJS.experiment.addData('trial_mouse.leftButton', trial_mouse.leftButton[0])};
    if (trial_mouse.midButton) {  psychoJS.experiment.addData('trial_mouse.midButton', trial_mouse.midButton[0])};
    if (trial_mouse.rightButton) {  psychoJS.experiment.addData('trial_mouse.rightButton', trial_mouse.rightButton[0])};
    if (trial_mouse.time) {  psychoJS.experiment.addData('trial_mouse.time', trial_mouse.time[0])};
    if (trial_mouse.clicked_name) {  psychoJS.experiment.addData('trial_mouse.clicked_name', trial_mouse.clicked_name[0])};
    
    // the Routine "trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
