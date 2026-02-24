let a = [1,2,3,4,5,6,7];

for (let i = 0; i < a.length; i++) {
    let p = true;          
    let num = a[i];

    if (num <= 1) {
        p = false;
    } else {
        for (let j = 2; j < num; j++) {
            if (num % j === 0) {
                p = false;
                break;
            }
        }
    }

    if (p) {
        console.log(num.toString())   
    }
}