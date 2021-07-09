//Ex2.1
function checkPrime(x) 
{
    if (x <= 2)
    {
        return false;
    }
    for (i = 2; i < x; i++)
    {
        if ( x % i == 0)
        {
            return false;
        }
    }
    return true;
}

function getcp_value()
{
    let inputVal = document.getElementById("cp_value").value;

    let res = checkPrime(inputVal);
    if(res === true)
    {
        document.getElementById("cp_res").innerHTML = `Number ${inputVal} <b> IS </b> prime.`;
    }
    else
    {
        document.getElementById("cp_res").innerHTML = `Number ${inputVal} is <b> NOT </b> prime`;
    }
}

// Ex2.2
function checkRangePrime()
{
    document.getElementById("cpr_res").innerHTML = "Result: "; 
    let inputStartVal = document.getElementById("startcpr_value").value;
    let inputEndVal = document.getElementById("endcpr_value").value;
    let rangeStart = parseInt(inputStartVal);
    let rangeEnd = parseInt(inputEndVal);


    if (rangeStart > rangeEnd)
    {
        [rangeStart, rangeEnd] = [rangeEnd, rangeStart]
    }
    while (rangeStart <= rangeEnd)
    {
        if (checkPrime(rangeStart) == true)
        {
            document.getElementById("cpr_res").innerHTML += rangeStart + ", ";
        }
        rangeStart++;
    }
}

// Ex2.4
function convertStr()
{
    let str = document.getElementById("convStrTxt_value").value;
    let num = document.getElementById("convStrNum_value").value;
    num = parseInt(num);
    switch(num) 
    {
        case 1:
            str = str.toUpperCase();
            break;
        case 2:
            str = str.toLowerCase();
            break;
        case 3:
            let res = "";
            let strHelp = str.toLowerCase();
            for (i=0; i<strHelp.length; i++)
            {
                if (i % 2 == 0)
                {
                    res += strHelp[i].toUpperCase();
                }
                else
                {
                    res += strHelp[i];
                }
            }
            str = res;
    }
    document.getElementById("convStr_res").innerHTML = str;
}

// Ex.2.5
function sumRange()
{
    let rangeStart = parseInt(document.getElementById("startsr_value").value);
    let rangeEnd = parseInt(document.getElementById("endsr_value").value);
    rangeStart = Math.round(rangeStart);
    rangeEnd = Math.round(rangeEnd);

    let calc = (function() {
        if (rangeStart > rangeEnd) {
            [rangeStart, rangeEnd] = [rangeEnd, rangeStart];
        }
        if(document.getElementById("sr_for_radio").checked)
        {
            console.log("sr_for");
            for (var sum = 0; rangeStart <= rangeEnd; rangeStart++)
            {
                sum += rangeStart;
            }
            return sum;
        }
        else
        {
            console.log("sr_while");
            let sumAlt = 0;
            while (rangeStart<=rangeEnd)
            {
                sumAlt += rangeStart;
                rangeStart++;
            }
            return sumAlt;
        }
    })(rangeStart, rangeEnd);

    document.getElementById("sumRange_res").innerHTML = calc;
}

// Ex.2.6
function fancyStr()
{
    let fanStr = document.getElementById("fancyStr_value").value;
    if (fanStr.length < 8)
    {
        return document.getElementById("fancyStr_res").innerHTML = "Incorrect character length";
    }
    let res = fanStr.substring(0,3);
    res += fanStr[fanStr.length-2];
    res += fanStr.substring(fanStr.length-4,fanStr.length);

    let strHelp = fanStr.substring(1, fanStr.length-1);
    for (i=strHelp.length-1; i>=0; i--)
    {
        res += strHelp[i];
    }

    document.getElementById("fancyStr_res").innerHTML = res;
}

// Ex.1.2
function connectStr()
{
    let string1 = document.getElementById("connectStr1_value").value;
    let string2 = document.getElementById("connectStr2_value").value;
    let string3 = document.getElementById("connectStr3_value").value;
    let connectString = string1+string2+string3;
    document.getElementById("connectStr_res").innerHTML = connectString;
}
// Ex.1.8
function randomNums()
{
    let n = document.getElementById("nRand_value").value;
    let a = Math.ceil(document.getElementById("aRand_value").value);
    let b = Math.floor(document.getElementById("bRand_value").value);

    if (n <= 0)
        return document.getElementById("randomNums_res").innerHTML = "Incorrect N value";
    if (a > b) 
        [a, b] = [b, a];
    
    let arrRandomNums = [];
    for(i=0; i < n; i++)
        arrRandomNums.push(Math.floor(Math.random() * (b-a + 1)) + a);
    
    document.getElementById("randomNums_res").innerHTML = `${n} random numbers between ${a} and ${b}: ${arrRandomNums}`;
}

// Ex.3.4
function aboutDates()
{
    const d = new Date();
    document.getElementById("todayDate").innerHTML = `Today's date: ${d.getDate()}/${d.getMonth()+1}/${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}`;
    document.getElementById("weekAgoDate").innerHTML = `One week's ago date: ${d.getDate()-7}/${d.getMonth()+1}/${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}`;
    if (d.getHours() < 12)
        document.getElementById("monthLaterDate").innerHTML = `One month's and 12 hours' from now, date: ${d.getDate()}/${d.getMonth()+2}/${d.getFullYear()} ${d.getHours()+12}:${d.getMinutes()}`;
    else
    {
        let hourBox = (d.getHours()+12) % 24;
        document.getElementById("monthLaterDate").innerHTML = `One month's and 12 hours' from now, date: ${d.getDate()+1}/${d.getMonth()+2}/${d.getFullYear()} ${hourBox}:${d.getMinutes()}`;
    }
}