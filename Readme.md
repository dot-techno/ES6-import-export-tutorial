## Import and Export in ES6

Using import to incorporate functionality and objects defined in different modules is handled so that multiple import statements in multiple files do not create multiple copies. It seems that JS has a store/cache of a file that is imported and that same object is used anywhere else the same file is imported.

### Illustrative Example
#### Source files
common.js defines an object 'Common'.
```
const Common = { property: 'initial prop by Common.js' };
export default Common;
```

a.js imports and changes the value of a property of the Common object that is imported. It also defines a method that returns the instance of Common seen inside a.js
```
import Common from './common.js';
Common.property = 'changed by a.js';

export function a(){
    console.log(Common);
    return Common;
}
```

b.js imports and modifies Common by adding a new property to it. It also defines a method that returns the instance of Common seen inside b.js
```
import Common from './common.js';
Common.b_property = "added by b.js";

export function b(){
    console.log(Common);
    return Common;
}
```

#### Main app file
The main JS file app.js imports all three: common.js, a.js and b.js. So does it get 3 common objects? or just one? Let's see.
app.js code
```
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
```
#### Output
Output of node app.js (note: create package.json and add {"type": "module"} to it).
```
{ property: 'changed by a.js', b_property: 'added by b.js' }
{ property: 'changed by a.js', b_property: 'added by b.js' }
a and b match:
        Importing a and b that each import Common yielded one (and the same) Common object.
All 3 match:
        Import of common.js, a.js and b.js yielded one and the same Common object!

```
