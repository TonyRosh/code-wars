// Here you have a connected to a socket, and the data looks very strange. It seems to be separated by a random special character! Oh No! We need your help to find the special character, parse the data, and return it translated! There isn't much time, hurry we need your help!

// assert.deepEqual(wordSplitter("11:11:11:11:11"), ["11","11","11","11","11"]);
//    assert.deepEqual(wordSplitter("RADIO+FREQ+12500+NW+1600+END"), ["RADIO","FREQ","12500","NW","1600","END"]);
//    assert.deepEqual(wordSplitter("CODE*SEVEN|FOURTY#THREE&HUNDRED"), ["CODE","SEVEN","FOURTY","THREE","HUNDRED"]);
//    assert.deepEqual(wordSplitter("56&SHORT!BEACH+WEST=HOUSE"), ["56","SHORT","BEACH", "WEST","HOUSE"]);
//    assert.deepEqual(wordSplitter("320000;56C*7200RPM#MODE%65>LATCH?ON"), ["320000","56C","7200RPM","MODE","65","LATCH","ON"]);
//    assert.deepEqual(wordSplitter("320000;56C:7200RPM#MODE%65>LATCH?ON"), ["320000","56C","7200RPM","MODE","65","LATCH","ON"]);
//    assert.deepEqual(wordSplitter("32.0500;-6C:PITCH=-72#ROLL!21.3*REGISTER:90.345689&ARMED?-25"), ["32.0500","-6C","PITCH","-72","ROLL", "21.3","REGISTER","90.345689","ARMED","-25"]);

// 7kyu


let wordSplitter = string => string.replace(/[`~!@#$%^&*()_|+\=?;:'",<>\{\}\[\]\\\/]/gi, ' ').split(' ')