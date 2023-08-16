import Common from './common.js';
import {a} from './a.js';

Common.b_property = "added by b.js";


export function b(){
    console.log('b() called.');
    console.log(Common);
    console.log("b() calling a()...");
    a();
    return Common;
}