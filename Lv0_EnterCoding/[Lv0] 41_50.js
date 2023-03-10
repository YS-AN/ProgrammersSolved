//41.직각삼각형 출력하기
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    //입력받은 값 처리
    input = line.split(' ');
}).on('close', function () {
    //결과 값 출력
    print(Number(input[0]));
});

function print(num) {
    for (let i = 1; i <= num; i++) {
        console.log('*'.repeat(i));
    }
}

//42.순서쌍의 개수
function sol_GetFactors(n) {
    var factors = [];
    for (let i = 1; i <= Math.sqrt(n); i++) {
        if (n % i == 0) {
            factors.push(i);
        }
    }

    var len = factors.length;
    return factors[len - 1] * factors[len - 1] == n ? (len - 1) * 2 + 1 : len * 2;
}

//43.숨어있는 숫자의 덧셈 (1)
function sol_HideAdd1(my_string) {
    var answer = 0;
    [...my_string].map(item => isNaN(item) ? answer += 0 : answer += parseInt(item));
    return answer;
}

//44.숨어있는 숫자의 덧셈 (2)
function sol_HideAdd2(my_string) {
    var answer = 0;
    [...my_string.replace(/[a-zA-Z]/g, ' ').split(' ')].map(x =>
        answer += (x != '' ? parseInt(x) : 0));

    return answer;
}

//45.외계행성의 나이
function sol_NumToAlphabet(age) {
    return [...age.toString()].map(val => String.fromCharCode(Number(val) + 97)).join('');
}

//46.진로 순서 정하기
function sol_SortIndex(emergency) {
    var sortArr = emergency.filter(() => true).sort((a, b) => b - a);
    return emergency.map(item => sortArr.findIndex(val => val == item) + 1);
}

//47.자릿수 더하기
function sol_AddNum(n) {
    return [...n.toString()].reduce((acc, val) => acc + parseInt(val), 0);
}

//48.개미 군단
function sol_Ants(hp) {
    var answer = 0;
    let power = [5, 3, 1];

    power.map(p => {
        var cnt = Math.floor(hp / p);
        answer += cnt;
        hp -= (cnt * p);
    });
    return answer;
}

//48_1.개미 군단 (나머지 활용법)
function sol_Ants_1(hp) {
    return Math.floor(hp / 5) + Math.floor((hp % 5) / 3) + (hp % 5) % 3;
}

//49.모스부호
function sol_morse(letter) {
    var answer = '';
    var morse = {
        '.-': 'a', '-...': 'b', '-.-.': 'c', '-..': 'd', '.': 'e', '..-.': 'f',
        '--.': 'g', '....': 'h', '..': 'i', '.---': 'j', '-.-': 'k', '.-..': 'l',
        '--': 'm', '-.': 'n', '---': 'o', '.--.': 'p', '--.-': 'q', '.-.': 'r',
        '...': 's', '-': 't', '..-': 'u', '...-': 'v', '.--': 'w', '-..-': 'x',
        '-.--': 'y', '--..': 'z'
    }
    letter.split(' ').map(item => answer += morse[item]);
    return answer;
}

//50.가위 바위 보
function sol_GetWinRSP(rsp) {
    var retRsp = { 2: 0, 0: 5, 5: 2 };
    return [...rsp].map(x => retRsp[x]).join('');
}