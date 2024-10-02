function round(int) {
    let isnegative = false;
    if (int < 0) {
        isnegative = true;
        int = -int;
    }
    let count = 0;
    while (!(int < 1 && int > -1)) {
        int -= 1;
        count++;
    }
    if (int < 0.5) {
        if (isnegative) {
            return -count;
        } else {
            return count;
        }
    } else {
        if (isnegative) {
            return -count - 1;
        } else {
            return count + 1;
        }
    }
}

function floor(int) {
    let isnegative = false;
    if (int < 0) {
        isnegative = true;
        int = -int;
    }
    let numcopy = int;
    let count = 0;
    while (!(numcopy < 1 && numcopy > -1)) {
        numcopy -= 1;
        count++;
    }
    if (isnegative) {
        return -count - 1;
    } else {
        return count;
    }
}

function ceil(int) {
    if (!int) return 0;
    let isnegative = false;
    if (int < 0) {
        isnegative = true;
        int = -int;
    }
    let numcopy = int;
    let count = 0;
    while (!(numcopy < 1 && numcopy >= 0)) {
        numcopy -= 1;
        count++;
    }
    if (isnegative) {
        return -count;
    } else {
        return count + 1;
    }
}

function trunc(int) {
    let count = 0;
    if (int > 0xfffffffff) {
        int -= 0xfffffffff;
        count += 0xfffffffff;
    }
    let isnegative = false;
    if (int < 0) {
        isnegative = true;
        int = -int;
    }
    let numcopy = int;
    while (!(numcopy < 1 && numcopy > -1)) {
        numcopy -= 1;
        count++;
    }
    if (isnegative) {
        return -count;
    }
    return count;
}