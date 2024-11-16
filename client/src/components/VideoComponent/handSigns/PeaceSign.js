import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const peaceGesture = new GestureDescription('Peace');

// Index finger
peaceGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
peaceGesture.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);

// Middle finger
peaceGesture.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
peaceGesture.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1.0);

// Thumb, Ring, and Pinky fingers curled
[ Finger.Thumb, Finger.Ring, Finger.Pinky ].forEach(finger => {
    peaceGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
});
