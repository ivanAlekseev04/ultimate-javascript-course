function test() {
    if (1 === 1)
        var a = 5;
    
    console.log(a); // 5 instead of error

    for (var i = 0; i < 7; i++) {

    }

    console.log(i); // 7 instead of error
}

test();