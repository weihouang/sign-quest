import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const loveYouSign = new GestureDescription('I Love You');

//Thumb
loveYouSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
loveYouSign.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.70);

//Index
loveYouSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
loveYouSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.70);

//Middle
loveYouSign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
loveYouSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);

//Ring
loveYouSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
loveYouSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);

//Pinky
loveYouSign.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1);
loveYouSign.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.70);
