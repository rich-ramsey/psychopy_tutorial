# Generating Stimuli via Code, and Updating Each Frame

*By Andrew Wildman*

---

This project is a little more haphazard than the other three, as I realised part-way that there currently isn't a way to get the current slider position online. As a result, I included some Python-only code components to have the experiment behave differently online vs. offline, so where the local Python experiment has the stimuli update according to both the slider and mouse position, the online version only responds to mouse position.

The Experiment Information dialog can be used to specify the number of crossees to be generated, the radius of the overall array of stimuli, and the size of each individual cross. Moving the mouse/slider (as described above) will cause the entire array of crosses to rotate, while each individual cross is set to rotate automatically by 1 degree per frame. Two clocks are drawn to the screen via a textbox component, the first showing the seconds passed since the experiment began, and the second showing the time since last reset. Pressing the "reset" button will end the routine, and therefore reset the stimuli to their default value specified in the "Begin Routine" tab

I would suggest avoiding running the experiment in local Python for too long at once, as all of the frame-by-frame updates seem to generate readout which populates into the runner log upon exiting the experiment (causing PsychoPy to freeze). Online, the expeirment runs alot more smoothly too, which seems to be typical of tasks involving updates to stimuli at the "Each Frame" level.