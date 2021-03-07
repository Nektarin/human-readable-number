module.exports = function toReadable(number) {
    if (number == 0) return "zero";

    let arr = number.toString().split("");
    let resultStr = " ";
    const arrLength = arr.length;

    let map = new Map([
        [1, "one"],
        [2, "two"],
        [3, "three"],
        [4, "four"],
        [5, "five"],
        [6, "six"],
        [7, "seven"],
        [8, "eight"],
        [9, "nine"],
        [0, " "],
    ]);

    map.set(10, "ten");
    map.set(11, "eleven");
    map.set(12, "twelve");
    map.set(13, "thirteen");
    map.set(14, "fourteen");
    map.set(15, "fifteen");
    map.set(16, "sixteen");
    map.set(17, "seventeen");
    map.set(18, "eighteen");
    map.set(19, "nineteen");
    map.set(20, "twenty");
    map.set(30, "thirty");
    map.set(40, "forty");
    map.set(50, "fifty");
    map.set(80, "eighty");

    let letters = ["", "thousand", "million"];
    let counter = 0;
    for (let index = arrLength - 1; index >= 0; index--) {
        if (counter == 3) {
            arr[index] += ",";
            counter = 0;
        }

        counter++;
    }

    let arr2 = arr.join("").split(",");
    console.log(arr2);
    arr2.reverse();

    for (let index = arr2.length - 1; index >= 0; index--) {
        if (arr2[index] < 10) {
            resultStr += map.get(Number(arr2[index])) + " ";
        } else {
            if (arr2[index] > 99) {
                // 3 numbers
                resultStr += map.get(Number(arr2[index][0])) + " hundred" + " ";

                if (map.has(Number(arr2[index][1] + arr2[index][2]))) {
                    // rest part is in map
                    resultStr +=
                        map.get(Number(arr2[index][1] + arr2[index][2])) + " ";
                } else {
                    if (map.has(Number(arr2[index][1] + 0))) {
                        resultStr +=
                            map.get(Number(arr2[index][1] + 0)) +
                            " " +
                            map.get(Number(arr2[index][2])) +
                            " ";
                    } else {
                        resultStr +=
                            map.get(Number(arr2[index][1])) +
                            "ty " +
                            map.get(Number(arr2[index][2])) +
                            " ";
                    }
                }
            } else {
                if (map.has(Number(arr2[index][0] + arr2[index][1]))) {
                    // rest part is in map
                    resultStr +=
                        map.get(Number(arr2[index][0] + arr2[index][1])) + " ";
                } else {
                    if (map.has(Number(arr2[index][0] + 0))) {
                        resultStr +=
                            map.get(Number(arr2[index][0] + 0)) +
                            " " +
                            map.get(Number(arr2[index][1])) +
                            " ";
                    } else {
                        resultStr +=
                            map.get(Number(arr2[index][0])) +
                            "ty " +
                            map.get(Number(arr2[index][1])) +
                            " ";
                    }
                }
            }
        }

        resultStr += letters[index] + " ";
    }

    return resultStr.trim();
};
