import Common from './common.js';
Common.property = 'changed by a.js';

export function a(){
    console.log('a() called, Common:');
    console.log(Common);
    return Common;
}