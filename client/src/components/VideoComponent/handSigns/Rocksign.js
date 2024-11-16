import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const rockGesture = new GestureDescription('Rock');

//Thumb
// Index finger
rockGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
rockGesture.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);

// Pinky finger
rockGesture.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
rockGesture.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1.0);

// Middle and Ring fingers curled
[ Finger.Middle, Finger.Ring ].forEach(finger => {
    rockGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
});

// Thumb can be out to the side
rockGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
rockGesture.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 1.0);
rockGesture.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 1.0);
