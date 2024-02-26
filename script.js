function add(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        }
       
    }
}

let result = add(2)(3)(4);
result;