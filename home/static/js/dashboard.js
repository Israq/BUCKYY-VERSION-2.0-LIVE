//Profile Section

var userProfileSection = document.getElementsByClassName("user-profile-section")[0];
userProfileSection.addEventListener("load", showAvailableBalance());

function showAvailableBalance() {
    var availableBalance = Math.floor(Math.random() * 19999) + 1;
    var availableBalanceElement = document.getElementsByClassName("green-text")[0];

    availableBalanceElement.innerHTML = availableBalance;
}

var userProfileSection = document.getElementsByClassName("user-profile-section")[0];
userProfileSection.addEventListener("load", showDueBalance());

function showDueBalance() {
    var dueBalance = Math.floor(Math.random() * 19999) + 1;
    var dueBalanceElement = document.getElementsByClassName("green-text")[1];

    dueBalanceElement.innerHTML = dueBalance;
}

//end

//Bar Chart

var barChart = document.getElementById("bar-chart");

barChart.addEventListener('load', showBarChart());

function showBarChart() {
    const yValues = [];
    var barColors = [];
    var xValues = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];
    for (var i = 0; i < 7; i++) {
        yValues.push(Math.floor(Math.random() * 100) + 1);
        barColors.push("#6cc8ae");
    }

    new Chart("bar-chart", {
        type: "bar",
        data: {
            labels: xValues,
            datasets: [{
                backgroundColor: barColors,
                data: yValues
            }]
        },
        options: {
            legend: { display: false },
            title: {
                display: true,
            }
        }
    });
}

//end

//Recent Transaction Section

var recentTransactions = document.getElementsByClassName("recent-transactions-section")[0];
recentTransactions.addEventListener("load", showRecentTransaction());

function showRecentTransaction() {
    var shopName = ["", "Yellow Clothing", "Easy", "Freeland", "Infinity", "Aarong", "Rich man", "Lubnan", "Bata", "Apex", "Grameen UNIQLO"];
    var shopIcons = ["", "images/yellow.jfif", "images/easy.jfif", "images/freeland.png", "images/infinity.png", "images/aarong.webp", "images/infinity.png", "images/lubnan.jfif", "images/bata.png", "images/apex.jpg", "images/grameen.jpg"];
    var ids = ["", "0011001100", "0011001101", "0011001102", "0011001103", "0011001104", "0011001105", "0011001106", "0011001107", "0011001108", "0011001109"];
    var refs = ["", "Ref: Buckky100", "Ref: Buckky200", "Ref: Buckky300", "Ref: Buckky400", "Ref: Buckky500", "Ref: Buckky600", "Ref: Buckky700", "Ref: Buckky800", "Ref: Buckky900", "Ref: Buckky001"];
    var timestamps = ["", "12:01am 01/04/2022", "01:01pm 01/01/2022", "02:01pm 01/02/2022", "03:01pm 01/03/2022", "04:01pm 01/04/2021", "05:01pm 01/01/2021", "06:01pm 01/02/2021", "07:01pm 01/03/2021", "08:01pm 01/04/2021", "08:01pm 01/05/2021"];
    var amounts = ["", "1000", "2000", "3500", "4020", "6002", "8090", "4100", "1000", "200", "500"];

    var store = document.getElementsByClassName("shop-name");
    var icon = document.getElementsByClassName("store-icon");
    var id = document.getElementsByClassName("id");
    var reference = document.getElementsByClassName("reference");
    var timestamp = document.getElementsByClassName("timestamp");
    var amount = document.getElementsByClassName("amount-of-money");

    for (var i = 0; i < 3; i++) {
        var randomNum = Math.floor(Math.random() * 10) + 1;
        store[i].innerHTML = shopName[randomNum];
        icon[i].src = shopIcons[randomNum];
        id[i].innerHTML = ids[Math.floor(Math.random() * 10) + 1];
        reference[i].innerHTML = refs[Math.floor(Math.random() * 10) + 1];
        timestamp[i].innerHTML = timestamps[Math.floor(Math.random() * 10) + 1];
        amount[i].innerHTML = amounts[Math.floor(Math.random() * 10) + 1];
    }
}

//end


//Tips Section 

var tipsSection = document.getElementsByClassName("tips-section")[0];
tipsSection.addEventListener("load", showTips());

function showTips() {
    var randomNum = Math.floor(Math.random() * (5 - 0) + 0);
    var firstHalfOfTips =
        ["If you’re lucky, your parents taught you this skill when you were a kid.",
            "If you don’t learn to manage your money, then other people will find ways to mismanage it for you.",
            "Once you’ve gone through a few personal finance books, you’ll realize how important it is to make sure that your expenses aren’t exceeding your income.",
            "One of personal finance’s most-repeated mantras is “pay yourself first.”",
            "Just as your parents probably sent you off to kindergarten with high hopes of preparing you for success in a world that seemed eons away."]

    var secondHalfOfTips =
        ["If not, keep in mind that the sooner you learn the fine art of delaying gratification, the sooner you’ll find it easy to keep your personal finances in order.",
            "Some of these people may be ill-intentioned, like unscrupulous, commission-based financial planners.",
            "The best way to do this is by budgeting.Once you’ve gone through a few personal finance books, you’ll realize how important it is to make sure that your expenses aren’t exceeding your income.",
            "No matter how much you owe in student loans or credit card debt, and no matter how low your salary may seem, it’s wise to find some amount—any amount—of money in your budget to sock away in an emergency fund every month.",
            " You need to plan for your retirement well in advance."];

    var firstHalfOfTip = document.getElementsByClassName("first-half-of-tip")[0];
    var secondHalfOfTip = document.getElementsByClassName("second-half-of-tip")[0];

    firstHalfOfTip.innerHTML = firstHalfOfTips[randomNum];
    secondHalfOfTip.innerHTML = secondHalfOfTips[randomNum];


}

//end


//Credit Score Section

var creditScoreSection = document.getElementsByClassName("credit-score-section");
creditScoreSection.addEventListener("load", showCreditScore());

function showCreditScore() {
    var creditScore = Math.floor(Math.random() * 1000) + 1;
    var creditScoreElement = document.getElementsByClassName("credit-score")[0];
    var comment = document.getElementsByClassName("comment")[0];

    creditScoreElement.innerHTML = creditScore;
    if (creditScore <= 330) {
        comment.innerHTML = "Bad";
    }
    else if (creditScore <= 660) {
        comment.innerHTML = "Good";
    }
    else {
        comment.innerHTML = "Excellent";
    }

    var creditScorePercentage = Math.floor(creditScore / 10);
    // Get the root element
    var r = document.documentElement;

    r.style.setProperty('--percentage', creditScorePercentage + "%");
}
//end


//Profile Section

var userProfileSection = document.getElementsByClassName("user-profile-section")[0];
userProfileSection.addEventListener("load", showAvailableBalance());

function showAvailableBalance() {
    var availableBalance = Math.floor(Math.random() * 19999) + 1;
    var availableBalanceElement = document.getElementsByClassName("green-text")[0];

    availableBalanceElement.innerHTML = availableBalance;
    console.log(availableBalance);
}

//end