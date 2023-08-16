import Common from './common.js';
import {a} from './a.js';
import {b} from './b.js';

let ret_a = a();
let ret_b = b();
if( ret_a === ret_b){
    console.log("a and b match:\n\tImporting a and b that each import Common yielded one (and the same) Common object.");

}else{
    console.log("a and b are different:\n\tImporting a and b led to different Common objects.")
}

if( Common === ret_a && Common == ret_b){
    console.log("All 3 match:\n\tImport of common.js, a.js and b.js yielded one and the same Common object!")
}