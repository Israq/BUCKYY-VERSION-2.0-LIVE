$(document).ready(function () {
    // Add smooth scrolling to all links in navbar + footer link
    $(".navbar a, footer a[href='#myPage']").on('click', function (event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 900, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });

    $(window).scroll(function () {
        $(".slideanim").each(function () {
            var pos = $(this).offset().top;

            var winTop = $(window).scrollTop();
            if (pos < winTop + 600) {
                $(this).addClass("slide");
            }
        });
    });
})

//Log in popup

function logIn() {
    var overlayElement = document.getElementsByClassName('sign-in-popup');
    overlayElement[0].style.display = 'flex';
}

//end

function slide(step) {
    var stepBtn1 = document.getElementById("step-btn-1");
    var stepBtn2 = document.getElementById("step-btn-2");
    var stepBtn3 = document.getElementById("step-btn-3");
    var buyingCard = document.getElementsByClassName("process-section-card");
    var browserWidth = window.innerWidth;

    if (browserWidth >= 718) {
        if (step == 'step-1') {
            stepBtn2.removeAttribute("style");
            stepBtn3.removeAttribute("style");
            buyingCard[0].style.marginTop = "400";
            stepBtn2.style.fontSize = "18";
            stepBtn2.style.fontWeight = "100";
            stepBtn2.style.marginLeft = "0";
            stepBtn1.style.fontSize = "25";
            stepBtn1.style.fontWeight = "900";
            stepBtn1.style.marginLeft = "10";
        }
        else if (step == 'step-2') {
            buyingCard[0].style.marginTop = "13";
            buyingCard[2].style.display = "block";
            stepBtn1.removeAttribute("style");
            stepBtn3.removeAttribute("style");
            stepBtn2.style.fontSize = "25";
            stepBtn2.style.fontWeight = "900";
            stepBtn2.style.marginLeft = "10";
        }
        else {
            buyingCard[0].style.marginTop = "-365";
            buyingCard[2].style.display = "block";
            buyingCard[2].style.marginTop = "0";
            stepBtn1.removeAttribute("style");
            stepBtn2.removeAttribute("style");
            stepBtn2.style.fontSize = "18";
            stepBtn2.style.fontWeight = "100";
            stepBtn2.style.marginLeft = "0";
            stepBtn3.style.fontSize = "25";
            stepBtn3.style.fontWeight = "900";
            stepBtn3.style.marginLeft = "10";
        }
    }
}

function cardViewer(step) {
    var stepBtn1 = document.getElementById("step-btn-1");
    var stepBtn2 = document.getElementById("step-btn-2");
    var stepBtn3 = document.getElementById("step-btn-3");
    var cards = document.getElementsByClassName("process-section-card");
    var browserWidth = window.innerWidth;

    if (browserWidth <= 718) {
        if (step == 'step-1') {
            stepBtn2.removeAttribute("style");
            stepBtn3.removeAttribute("style");
            cards[0].style.zIndex = "2";
            cards[2].style.zIndex = "0";
            cards[1].style.zIndex = "1";
            stepBtn2.style.fontSize = "18";
            stepBtn2.style.fontWeight = "100";
            stepBtn2.style.marginLeft = "0";
            stepBtn1.style.fontSize = "25";
            stepBtn1.style.fontWeight = "900";
            stepBtn1.style.marginLeft = "10";
        }
        else if (step == 'step-2') {
            cards[1].style.zIndex = "2";
            cards[0].style.zIndex = "1";
            cards[2].style.zIndex = "1";
            stepBtn1.removeAttribute("style");
            stepBtn3.removeAttribute("style");
            stepBtn2.style.fontSize = "25";
            stepBtn2.style.fontWeight = "900";
            stepBtn2.style.marginLeft = "10";
        }
        else {
            cards[2].style.zIndex = "2";
            cards[0].style.zIndex = "0";
            cards[1].style.zIndex = "1";
            stepBtn1.removeAttribute("style");
            stepBtn2.removeAttribute("style");
            stepBtn2.style.fontSize = "18";
            stepBtn2.style.fontWeight = "100";
            stepBtn2.style.marginLeft = "0";
            stepBtn3.style.fontSize = "25";
            stepBtn3.style.fontWeight = "900";
            stepBtn3.style.marginLeft = "10";
        }
    }
}

var elem = document.getElementsByClassName("slider-card");
var num = 0;
var divWidth = document.getElementsByClassName("slider-card")[0].clientWidth;
document.getElementsByClassName("btn-card-left")[0].style.display = "none";

function horizontalCardSliderRight() {
    if (num == 0) {
    } else {
        num += divWidth;
        elem[0].style.marginLeft = num;
    }
}


function horizontalCardSliderLeft() {
    if (num < 0) {
        document.getElementsByClassName("btn-card-left")[0].style.display = "block";
    }
    if (num < -1670) {
    } else {
        num -= divWidth;
        elem[0].style.marginLeft = num;
    }
}

function isInViewPort(el) {
    const rect = el.getBoundingClientRect();

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

//------My Logic--------
//Works fine but there is a lag when scrolled up

/*var flag = 0;
function statsIncrementor() {
    var i = 0;
    const statsElem = document.getElementsByClassName("stats-section-overlay")[0];
    const messageText = isInViewPort(statsElem);
    console.log(messageText);
    if (messageText == true && flag == 0) {
        flag = 1;
        const interval = setInterval(function(){
            i ++;
            document.getElementsByClassName("stats-1-h1")[0].innerHTML = i;
            if (i==500) {
                clearInterval(interval);
            }
        }, );
        document.removeEventListener("scroll", statsIncrementor);
    }
}*/

$(function () {
    var fx = function fx() {
      var dfd = $(".counting").map(function (i, el) {
          var data = parseInt(this.dataset.n, 10);
          var props = {
            "from": {
                "count": 0
            },
            "to": {
                "count": data
            }
          };
        return $(props.from).animate(props.to, {
            duration: 1000 * 1,
            step: function (now, fx) {
                $(el).text(Math.ceil(now));
            },
            complete: function() {
               if (el.dataset.sym !== undefined) {
              el.textContent = el.textContent.concat(el.dataset.sym)
               }
            }
        }).promise();
    }).toArray();
        // return jQuery promise when all animations complete
        return $.when.apply($, dfd);
    };
    
    var reset = function reset() {
      // console.log($(this).scrollTop());
        // do stuff when window `.scrollTop()` > 75
    
        var statsSection = $(".stats-section").offset().top -300;
        
        if ($(this).scrollTop() > statsSection) {
          // turn off scroll event so `fx` not called
          // during ongoing animation
          $(this).off("scroll");
            // when all animations complete
            fx()
        }
    };
    // if `fx` should only be called once ,
    // change `.on()` to `.one()` ,
    // remove `.then()` callback following `fx()`
    // within `reset`
    $(window).on("scroll", reset);
});


//category changer function

var previousCategory;

function categoryChanger(category) {
    var currentCategory;

    if (previousSelection == undefined) {
        previousSelection = 0;
    }

    //Checks weather it is a one digit or two digit number
    if (category[category.length - 2] == " ") {
        currentCategory = category.slice(category.length - 1);
    }
    else {
        currentCategory = category.slice(category.length - 2);
    }
    //end

    const categoryArr = document.getElementsByClassName("category");
    const categoryHeaderArr = document.getElementsByClassName("category-header");

    categoryHeaderArr[0].innerHTML = category.slice(0, category.length - 2);
    categoryHeaderArr[1].innerHTML = category.slice(0, category.length - 2);
    categoryArr[previousSelection].classList.remove("active-li");
    categoryArr[currentCategory].classList.add("active-li");

    //Removes the styling for the previous item
    previousSelection = currentCategory;
    //end
}
//end



// page_1 slider


var dictKey = 1;
var previousSelection;

function horizoltalSlider(stepNo) {

    var steps = document.getElementsByClassName("step");
    var stepHeader = document.getElementsByClassName("step-header")[0];
    var stepDescription = document.getElementsByClassName("step-description")[0];
    var stepImage = document.getElementsByClassName("step-img")[0];
    var circles = document.getElementsByClassName("circle");
    var rightBtn = document.getElementsByClassName("btn-card-right")[0];
    var leftBtn = document.getElementsByClassName("btn-card-left")[0];

    const dict = {
        "step 1": ["Go shopping", "Shop your favorite stores online or in-store and pay later with Buckyy. You’ll see us at checkout, or you can scan our QR code at in-store checkout.", "static/images/step_1.png"],
        "step 2": ["Choose your payment terms", "You’re in control. Pick the payment option that works for you from our transparent payment options —from 4 interest-free payments every 2 weeks to paying the whole amount at once.", "static/images/step_2.png"],
        "step 3": ["Make your payments", "Manage your payments in your Buckyy account, and set up AutoPay so you don’t miss a payment.", "static/images/step_3.png"],
    }

    if (stepNo == 'step 1') {
        stepHeader.innerHTML = dict['step 1'][0];
        stepDescription.innerHTML = dict['step 1'][1];
        stepImage.src = dict['step 1'][2];

        steps[0].classList.add("step-focus");
        steps[1].classList.remove("step-focus");
        steps[2].classList.remove("step-focus");

        circles[0].style.opacity = "1";
        circles[1].style.opacity = "0.4";
        circles[2].style.opacity = "0.4";

        rightBtn.style.display = "block";
        leftBtn.style.display = "none";

        dictKey = 1;
    }
    else if (stepNo == 'step 2') {
        stepHeader.innerHTML = dict['step 2'][0];
        stepDescription.innerHTML = dict['step 2'][1];
        stepImage.src = dict['step 2'][2];

        steps[1].classList.add("step-focus");
        steps[0].classList.remove("step-focus");
        steps[2].classList.remove("step-focus");

        circles[1].style.opacity = "1";
        circles[0].style.opacity = "0.4";
        circles[2].style.opacity = "0.4";

        //if step 3 is on the screen then the right arrow button will disappear

        if (previousSelection == 'step 2' && stepNo == 'step 2') {
            rightBtn.style.display = "none";
            leftBtn.style.display = "block";
        }
        //if step 2 is on the screen then both the arrow buttons will appear

        else {
            rightBtn.style.display = "block";
            leftBtn.style.display = "block";
        }

        //end

        dictKey = 2;
    }
    else {
        stepHeader.innerHTML = dict[stepNo][0];
        stepDescription.innerHTML = dict[stepNo][1];
        stepImage.src = dict[stepNo][2];

        steps[2].classList.add("step-focus");
        steps[0].classList.remove("step-focus");
        steps[1].classList.remove("step-focus");

        circles[2].style.opacity = "1";
        circles[0].style.opacity = "0.4";
        circles[1].style.opacity = "0.4";

        rightBtn.style.display = "none";
        leftBtn.style.display = "block";

        dictKey = 3;
    }

    if (stepNo != "step 1") {
        document.getElementById("1st-circle").classList.remove("active-circle");
    }
}


function sliderUsingArrow(direction) {
    var previousKey;
    var steps = document.getElementsByClassName("step");
    var stepHeader = document.getElementsByClassName("step-header")[0];
    var stepDescription = document.getElementsByClassName("step-description")[0];
    var stepImage = document.getElementsByClassName("step-img")[0];
    var circles = document.getElementsByClassName("circle");
    var rightBtn = document.getElementsByClassName("btn-card-right")[0];
    var leftBtn = document.getElementsByClassName("btn-card-left")[0];

    const dict = {
        1: ["Go shopping", "Shop your favorite stores online or in-store and pay later with Buckyy. You’ll see us at checkout, or you can scan our QR code at in-store checkout.", "static/images/step_1.png"],
        2: ["Choose your payment terms", "You’re in control. Pick the payment option that works for you from our transparent payment options —from 4 interest-free payments every 2 weeks to paying the whole amount at once.", "static/images/step_2.png"],
        3: ["Make your payments", "Manage your payments in your Buckyy account, and set up AutoPay so you don’t miss a payment.", "static/images/step_3.png"],
    }

    if (dictKey == undefined) {
        dictKey = 1;
    }

    if (direction == 'right' && dictKey > 0 && dictKey < 3) {
        dictKey = dictKey + 1;

    }
    else if (direction == 'left' && dictKey > 0 && dictKey <= 3) {
        dictKey = dictKey - 1;
    }

    stepHeader.innerHTML = dict[dictKey][0];
    stepDescription.innerHTML = dict[dictKey][1];
    stepImage.src = dict[dictKey][2];

    steps[1].classList.add("step-focus");
    steps[0].classList.remove("step-focus");
    steps[2].classList.remove("step-focus");

    circles[1].style.opacity = "1";
    circles[0].style.opacity = "0.4";
    circles[2].style.opacity = "0.4";

    if (dictKey == 1) {
        steps[0].classList.add("step-focus");
        steps[1].classList.remove("step-focus");
        steps[2].classList.remove("step-focus");

        circles[0].style.opacity = "1";
        circles[1].style.opacity = "0.4";
        circles[2].style.opacity = "0.4";

        //Shows only the right button
        rightBtn.style.display = "block";
        leftBtn.style.display = "none";
        //end
    }
    else if (dictKey == 2) {
        steps[1].classList.add("step-focus");
        steps[0].classList.remove("step-focus");
        steps[2].classList.remove("step-focus");

        circles[1].style.opacity = "1";
        circles[0].style.opacity = "0.4";
        circles[2].style.opacity = "0.4";

        //Shows both the buttons
        rightBtn.style.display = "block";
        leftBtn.style.display = "block";
        //end
    }
    else {
        steps[2].classList.add("step-focus");
        steps[0].classList.remove("step-focus");
        steps[1].classList.remove("step-focus");

        circles[2].style.opacity = "1";
        circles[0].style.opacity = "0.4";
        circles[1].style.opacity = "0.4";

        //Shows only the left button
        rightBtn.style.display = "none";
        leftBtn.style.display = "block";
        //end
    }

}

//Collapsable Section's Arrow Position

var previousBtn;
var flag = 0;

function arrowRotation(btnNo) {
    const btnArr = document.getElementsByClassName("arrow");

    if (previousBtn == undefined) {
        previousBtn = btnArr[btnNo[btnNo.length - 1]];
    }

    //When the same button is clicked repeatedly
    if (previousBtn == btnArr[btnNo[btnNo.length - 1]]) {
        //flag is used to toggle between arrow positions
        if (flag == 0) {
            btnArr[btnNo[btnNo.length - 1]].style.transform = "rotate(45deg)";
            flag = 1;
        }
        else {
            btnArr[btnNo[btnNo.length - 1]].style.transform = "rotate(-45deg)";
            flag = 0;
        }
    }
    //When different buttons are clicked
    else {
        previousBtn.style.transform = "rotate(45deg)";
        btnArr[btnNo[btnNo.length - 1]].style.transform = "rotate(-45deg)";
        flag = 0;
    }
    //To change the position of the pervious arrow
    previousBtn = btnArr[btnNo[btnNo.length - 1]];

}

//Close log in 

function closePopup() {
    document.getElementsByClassName("sign-in-popup")[0].style.display = "none";
    document.getElementsByClassName("create-account-popup")[0].style.display = "none";
    document.getElementsByClassName("otp-popup")[0].style.display = "none";
}


// Opens Create Account Pop up

function openCreateAccountPopup() {
    document.getElementsByClassName("sign-in-popup")[0].style.display = "none";
    document.getElementsByClassName("create-account-popup")[0].style.display = "flex";
}

//end

//Opens OTP popup

function showOtpPopup() {
    document.getElementsByClassName("create-account-popup")[0].style.display = "none";
    document.getElementsByClassName("otp-popup")[0].style.display = "flex";
}

//end



// ekyc next page

var key = 1;
var name = "";
var email = "";
var address = "";
var dateOfBirth = "";
var previousIncomeKey = 0;
var nidFrontPage = "";
var nidBackPage = "";
var selfie = "";
var debitCreditCard = "";
var utilityBill = "";
var bankStatement = "";

function showEkycPage(move) {
    var j = 0;
    var confirmBtn = document.getElementById("confirm-btn");
    var nextBtn = document.getElementsByClassName("next-btn")[1];
    var thirdChildImgSubDiv = document.querySelector(".img-sub-div:nth-child(3)");
    var fifthChildImgSubDiv = document.querySelector(".img-sub-div:nth-child(5)");
    var imgSubDivArr = document.getElementsByClassName("img-sub-div");
    var termsAndConditionsPopupElement = document.getElementsByClassName("terms-and-conditions-popup")[0];
    var overviewArr = document.getElementsByClassName("overview-section")[0];
    var nameInput = document.getElementById("name-input");
    var emailInput = document.getElementById("email-input");
    var addressInput = document.getElementById("address-input");
    var genderInput = document.getElementById("gender-input");
    var professionInput = document.getElementById("profession-input");
    var sourceOfFundInput = document.getElementById("source-of-fund-input");
    var estimatedMonthlyIncomeInput = document.getElementById("estimated-monthly-income-input");
    var uploadArea = document.getElementsByClassName("upload-area");
    var verifyIdentitySection = document.getElementsByClassName("verify-identity-section");
    var uploadDocumentsSection = document.getElementsByClassName("upload-documents-section");
    var textInputSection = document.getElementsByClassName("text-input-section");
    var uploadAreaTitle = document.getElementsByClassName("upload-area__title");
    var fileDetailsTitle = document.getElementsByClassName("file-details__title");
    var uploadedFileName = document.getElementsByClassName("uploaded-file__name");
    var uploadedFileName1 = document.getElementsByClassName("uploaded-file__name1");
    var uploadedFileName2 = document.getElementsByClassName("uploaded-file__name2");
    var uploadedFileName3 = document.getElementsByClassName("uploaded-file__name3");
    var uploadedFileName4 = document.getElementsByClassName("uploaded-file__name4");
    var uploadedFileName5 = document.getElementsByClassName("uploaded-file__name5");
    var uploadedFileCounter = document.getElementsByClassName("uploaded-file__counter");
    var uploadedFileCounter1 = document.getElementsByClassName("uploaded-file__counter1");
    var uploadedFileCounter2 = document.getElementsByClassName("uploaded-file__counter2");
    var uploadedFileCounter3 = document.getElementsByClassName("uploaded-file__counter3");
    var uploadedFileCounter4 = document.getElementsByClassName("uploaded-file__counter4");
    var uploadedFileCounter5 = document.getElementsByClassName("uploaded-file__counter5");
    var verifingSection = document.getElementsByClassName("verifing-section");
    var btnContainer = document.getElementsByClassName("btn-container");
    var previousBtn = document.getElementById("previous-btn");
    var headings = document.getElementsByTagName("h1");

    const dict = {
        1: ["Let’s start by getting to know you better", "Name", "Enter your Name", "", "", "", "", ""],
        2: ["", "Email", "Enter your Email", "", "", "", "", ""],
        3: ["", "Address", "Enter your address", "", "", "", "", ""],
        4: ["", "Date of Birth", "00-00-1972", "", "", "", "", ""],
        5: ["", "Gender", "", "static/images/Male.png", "static/images/Female.png", "static/images/Others.png", "", ""],
        6: ["", "Profession", "", "static/images/Working Profession.png", "static/images/Business.png", "static/images/Student.png", "static/images/Self-Employed.png", "static/images/Retired.png"],
        7: ["", "Source of Fund", "", "static/images/Salary from Service.png", "static/images/Earnings from Business.png", "static/images/Personal Savings.png", "static/images/Inheritance.png", "static/images/Return on Asset or Investment.png"],
        8: ["", "Estimated Monthly Income", "Below BDT 1000", "BDT 1001 - 5000", "BDT 5001 -10000", "BDT 10,001 - 20,000", "BDT 20,001 - 50,000", "BDT 50,001 - 100,000", "BDT 100,001 - 200,000", "More than 200,000"],
        9: ["", "Verify Identity", "Your Selfie*", "Show user image", "NID Front Page*", "Upload your NID Front Page", "NID Back Page*", "Upload your NID Back Page"],
        10: ["", "Upload Documents", "Debit/Credit Card", "Upload your Debit/Credit Card", "Utility Bill", "Upload your Utility Bill", "Bank Statement", "Upload your Bank Statement", "", ""],
        11: ["", "Overview"],
        12: ["", "Verify"],
    };

    if (name == undefined) {
        name = "";
        email = "";
        address = "";
        dateOfBirth = "";
        incomeFlag = 0;
        nidFrontPage = "";
        nidBackPage = "";
        selfie = "";
        debitCreditCard = "";
        utilityBill = "";
        bankStatement = "";
    }

    var currentLabel = document.getElementById("lable").innerHTML;

    if (currentLabel == "Name") {
        name = document.getElementById("ekyc-input").value;
        document.getElementById("ekyc-input").value = "";
    }
    else if (currentLabel == "Email") {
        email = document.getElementById("ekyc-input").value;
        document.getElementById("ekyc-input").value = "";
    }
    else if (currentLabel == "Address") {
        address = document.getElementById("ekyc-input").value;
        document.getElementById("ekyc-input").value = "";
    }
    else if (currentLabel == "Date of Birth") {
        dateOfBirth = document.getElementById("ekyc-input").value;
        document.getElementById("ekyc-input").value = "";
    }
    if (currentLabel == "Verify Identity") {
        nidFrontPage = document.getElementById("fileInput").value;
        nidBackPage = document.getElementById("fileInput1").value;
        selfie = document.getElementById("fileInput2").value;
    }
    else if (currentLabel == "Upload Documents") {
        debitCreditCard = document.getElementById("fileInput3").value;
        utilityBill = document.getElementById("fileInput4").value;
        bankStatement = document.getElementById("fileInput5").value;
    }

    if (key == undefined) {
        key = 1;
    }

    if (move == 'next' && key < Object.keys(dict).length) {
        key += 1;
    }
    else if (move == 'previous' && key > 1) {
        key -= 1;
    }

    if(key == 1) {
        previousBtn.style.display = "none";
    }
    else {
        previousBtn.style.display = "block";
    }

    verifyIdentitySection[0].style.display = "none";
    uploadDocumentsSection[0].style.display = "none";
    document.getElementById("income-div").style.display = "none";

    if (key <= Object.keys(dict).length) {
        document.getElementById("text").innerHTML = dict[key][0];
        document.getElementById("lable").innerHTML = dict[key][1];

        if (dict[key][0] == "") {
            document.getElementById("text").style.marginBottom = "0";
        }
        else {
            document.getElementById("text").style.marginBottom = "100";
        }

        if (key == 8) {
            document.getElementById("ekyc-input").style.display = "none";
            document.getElementsByClassName("img-div")[0].style.display = "none";
            document.getElementById("income-div").style.display = "block";

            for (var i = 2; i < dict[key].length; i++) {
                document.getElementsByClassName("income-text")[j].innerHTML = dict[key][i];
                document.getElementsByClassName("income-text")[j].setAttribute('onclick', "set('" + dict[key][i] + "')" + "; monthlyIncomeModifier(this.id)");
                j++;
            }
            j = 0;
        }
        else if (key == 9) {
            for (var i = 2; i <= dict[key].length / 2 + 2; i = i + 2) {
                document.getElementsByClassName("upload-area__title")[j].innerHTML = dict[key][i];
                document.getElementsByClassName("drop-zoon__paragraph")[j].innerHTML = dict[key][i + 1];
                j++;
            }
            j = 0;

            document.getElementsByClassName("upload-area")[2].style.display = "inline";
            verifyIdentitySection[0].style.display = "flex";
            verifyIdentitySection[0].style.paddingBottom = "0";
            uploadDocumentsSection[0].style.display = "none";
            textInputSection[0].style.display = "none";
        }
        else if (key == 10) {
            document.getElementsByTagName("h1")[0].style.marginTop = "0";
            nextBtn.innerHTML = "Next";
            j = 3;
            for (var i = 2; i <= dict[key].length / 2 + 2; i = i + 2) {
                if (dict[key][i] != "") {
                    document.getElementsByClassName("upload-area__title")[j].innerHTML = dict[key][i];
                    document.getElementsByClassName("drop-zoon__paragraph")[j].innerHTML = dict[key][i + 1];
                    j++;
                }
            }
            j = 0;
            verifyIdentitySection[0].style.display = "none";
            uploadDocumentsSection[0].style.display = "flex";
            textInputSection[0].style.display = "none";
            uploadDocumentsSection[0].style.paddingBottom = "0";
            uploadArea[2].style.marginBottom = "7.5";

            for (var i = 0; i < uploadArea.length; i++) {
                uploadArea[i].style.background = "#fff";
                uploadAreaTitle[i].style.color = "#c4c4c4";
                fileDetailsTitle[i].style.color = "#c4c4c4";
            }

            uploadedFileName[0].style.color = "#C4C4C4";
            uploadedFileName1[0].style.color = "#C4C4C4";
            uploadedFileName2[0].style.color = "#C4C4C4";
            uploadedFileName3[0].style.color = "#C4C4C4";
            uploadedFileName4[0].style.color = "#C4C4C4";
            uploadedFileName5[0].style.color = "#C4C4C4";

            uploadedFileCounter[0].style.color = "#C4C4C4";
            uploadedFileCounter1[0].style.color = "#C4C4C4";
            uploadedFileCounter2[0].style.color = "#C4C4C4";
            uploadedFileCounter3[0].style.color = "#C4C4C4";
            uploadedFileCounter4[0].style.color = "#C4C4C4";
            uploadedFileCounter5[0].style.color = "#C4C4C4";

            nextBtn.style.display = "block";
            confirmBtn.style.display = "none";
        }
        else if (key == 11) {
            verifyIdentitySection[0].style.display = "flex";
            verifyIdentitySection[0].style.paddingBottom = "100";
            uploadDocumentsSection[0].style.display = "flex";
            uploadDocumentsSection[0].style.paddingBottom = "200";
            textInputSection[0].style.display = "block";
            document.getElementsByTagName("h1")[0].style.marginTop = "100";
            verifyIdentitySection[0].style.paddingBottom = "50";
            uploadArea[2].style.marginTop = "4";
            uploadArea[2].style.marginBottom = "4";

            uploadedFileName[0].style.color = "#fff";
            uploadedFileName1[0].style.color = "#fff";
            uploadedFileName2[0].style.color = "#fff";
            uploadedFileName3[0].style.color = "#fff";
            uploadedFileName4[0].style.color = "#fff";
            uploadedFileName5[0].style.color = "#fff";

            uploadedFileCounter[0].style.color = "#fff";
            uploadedFileCounter1[0].style.color = "#fff";
            uploadedFileCounter2[0].style.color = "#fff";
            uploadedFileCounter3[0].style.color = "#fff";
            uploadedFileCounter4[0].style.color = "#fff";
            uploadedFileCounter5[0].style.color = "#fff";

            for (var i = 0; i < uploadArea.length; i++) {
                uploadArea[i].style.backgroundImage = "url('../static/images/selfie_bg.jpeg')";
                uploadArea[i].style.backgroundSize = "cover";
                uploadArea[i].style.backgroundRepeat = "no-repeat";
                if (i == 2) {
                    break;
                }
            }

            for (var i = 0; i < uploadArea.length; i++) {
                if (i >= 3) {
                    uploadArea[i].style.background = "#28CCAC";
                }
                uploadAreaTitle[i].style.color = "#fff";
                fileDetailsTitle[i].style.color = "#fff";
            }

            nextBtn.style.display = "none";
            confirmBtn.style.display = "block";
            nameInput.value = name;
            nameInput.style.width = name.length + "ch";
            emailInput.value = email;
            emailInput.style.width = email.length + "ch";
            addressInput.value = address;
            addressInput.style.width = address.length + "ch";
            genderInput.value = gender;
            genderInput.style.width = gender.length + "ch";
            professionInput.value = profession;
            professionInput.style.width = profession.length + "ch";
            sourceOfFundInput.value = sourceOfFund;
            sourceOfFundInput.style.width = sourceOfFund.length + "ch";
            estimatedMonthlyIncomeInput.value = monthlyIncome;
            estimatedMonthlyIncomeInput.style.width = monthlyIncome.length + "ch";

            setTimeout(function () {
                termsAndConditionsPopupElement.style.display = "flex";
                document.getElementsByTagName("BODY")[0].style.overflow = "hidden";
                document.getElementsByClassName("ekyc-section")[0].style.filter = "blur(2px)";
            }, 1000);
        }
        else if (key == 12) {
            verifyIdentitySection[0].style.display = "none";
            textInputSection[0].style.display = "none";
            uploadDocumentsSection[0].style.display = "none";
            btnContainer[0].style.display = "none";
            headings[0].style.display = "none";
            previousBtn.style.display = "none";
            verifingSection[0].style.display = "flex";
        }
        else {
            if (key == 4) {
                document.getElementById("ekyc-input").setAttribute("type", "date");
            }
            if (dict[key][2] != "") {
                document.getElementById("ekyc-input").style.display = "block";
                document.getElementById("ekyc-input").placeholder = dict[key][2];
                document.getElementsByClassName("img-div")[0].style.display = "none";
                document.getElementById("income-div").style.display = "none";
                if (key == 3) {
                    document.getElementById("ekyc-input").setAttribute("type", "text");
                }
            }
            else {
                for (var i = 3; i < dict[key].length; i++) {
                    if (dict[key][i] != "") {
                        document.getElementsByClassName("img")[j].src = dict[key][i];
                        imgSubDivArr[j].setAttribute('onclick', 'set("' + dict[key][i].slice(14, dict[key][i].length - 4) + '")' + ' ;cardLookModifier(this.id)');
                        document.getElementsByClassName("img-text")[j].innerHTML = dict[key][i].slice(14, dict[key][i].length - 4);
                        document.getElementsByClassName("img")[j].alt = dict[key][i].slice(14, dict[key][i].length - 4);
                        imgSubDivArr[j].style.display = "block";
                        if (dict[key][6] == "") {
                            thirdChildImgSubDiv.style.marginBottom = "150";
                        }
                        else {
                            thirdChildImgSubDiv.style.marginBottom = "10";
                            fifthChildImgSubDiv.style.marginBottom = "150";
                        }
                    }
                    else {
                        imgSubDivArr[j].style.display = "none";
                    }
                    j++;
                }
                document.getElementsByClassName("img-div")[0].style.display = "flex";
                document.getElementById("ekyc-input").style.display = "none";
                document.getElementById("income-div").style.display = "none";
            }
        }
    }
    previousIncomeKey = key;
}


var gender = "";
var profession = "";
var sourceOfFund = "";
var monthlyIncome = "";

function set(imgValue) {
    if (gender == undefined) {
        gender = "";
        profession = "";
        sourceOfFund = "";
        monthlyIncome = "";
    }
    console.log(sourceOfFund)
    var currentLabel = document.getElementById("lable").innerHTML;

    if (currentLabel == "Gender") {
        gender = imgValue;
        document.getElementById("ekyc-input").value = "";
    }
    else if (currentLabel == "Profession") {
        profession = imgValue;
        document.getElementById("ekyc-input").value = "";
    }
    else if (currentLabel == "Source of Fund") {
        sourceOfFund = imgValue;
        document.getElementById("ekyc-input").value = "";
    }
    else if (currentLabel == "Estimated Monthly Income") {
        monthlyIncome = imgValue;
        document.getElementById("ekyc-input").value = "";
    }
}

var previousImageId = "";

function cardLookModifier(imageId) {
    var imgSubDivArr = document.getElementsByClassName("img-sub-div");
    var imgArr = document.getElementsByClassName("img");
    var imgContainerArr = document.getElementsByClassName("img-container");

    if (previousImageId == undefined) {
        previousImageId = "1";
    }

    imgSubDivArr[previousImageId].classList.remove("is-active");
    imgSubDivArr[imageId.slice(4)].classList.add("is-active");
    imgArr[previousImageId].classList.remove("is-active-img");
    imgArr[imageId.slice(4)].classList.add("is-active-img");
    imgContainerArr[previousImageId].classList.remove("is-active-img-container");
    imgContainerArr[imageId.slice(4)].classList.add("is-active-img-container");
    previousImageId = imageId.slice(4);
}

var previousIncomeTextId = 1;

function monthlyIncomeModifier(incomeId) {
    var incomeTextArr = document.getElementsByClassName("income-text");

    if (previousIncomeTextId == undefined) {
        previousIncomeTextId = "1";
    }

    incomeTextArr[previousIncomeTextId].classList.remove("is-income-active");
    incomeTextArr[incomeId.slice(4)].classList.add("is-income-active");

    previousIncomeTextId = incomeId.slice(4);

}

function removeClass() {
    try {
        var imgSubDivArr = document.getElementsByClassName("img-sub-div");
        var imgArr = document.getElementsByClassName("img");
        var imgContainerArr = document.getElementsByClassName("img-container");
        var incomeTextArr = document.getElementsByClassName("income-text");

        imgSubDivArr[previousImageId].classList.remove("is-active");
        imgArr[previousImageId].classList.remove("is-active-img");
        imgContainerArr[previousImageId].classList.remove("is-active-img-container");
        incomeTextArr[previousIncomeTextId].classList.remove("is-income-active");
    }
    catch {

    }
}

//end

//Terms and Conditions Popup

function agreeTermsAndConditions() {
    document.getElementsByClassName("terms-and-conditions-popup")[0].style.display = "none";
    document.getElementsByClassName("ekyc-section")[0].style.filter = "blur(0px)";
    document.getElementsByTagName("BODY")[0].style.overflow = "visible";
}

//end














