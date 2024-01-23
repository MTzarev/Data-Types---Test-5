function ages(num) {
    let age = ""
    if (num >= 0 && num <= 2) {
        age = "baby"
    } if (num >= 3 && num <= 13) {
        age = "child";
    } if (num >= 14 && num <= 19) {
        age = "teenager";
    } if (num >= 20 && num <= 65) {
        age = "adult"
    } if (num >= 66) {
        age = "elder"
    } if (num < 0) {
        age = "out of bounds"
    }

    console.log(age);
}
ages(20);
ages(1);
ages(100);
ages(-1);
