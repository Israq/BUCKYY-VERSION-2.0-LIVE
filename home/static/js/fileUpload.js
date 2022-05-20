// Design By
// - https://dribbble.com/shots/13992184-File-Uploader-Drag-Drop

// Select Upload-Area
const uploadArea = document.querySelector('#uploadArea')

// Select Drop-Zoon Area
const dropZoon = document.querySelector('#dropZoon');

// Loading Text
const loadingText = document.querySelector('#loadingText');

// Slect File Input 
const fileInput = document.querySelector('#fileInput');

// Select Preview Image
const previewImage = document.querySelector('#previewImage');

// File-Details Area
const fileDetails = document.querySelector('#fileDetails');

// Uploaded File
const uploadedFile = document.querySelector('#uploadedFile');

// Uploaded File Info
const uploadedFileInfo = document.querySelector('#uploadedFileInfo');

// Uploaded File  Name
const uploadedFileName = document.querySelector('.uploaded-file__name');

// Uploaded File Icon
const uploadedFileIconText = document.querySelector('.uploaded-file__icon-text');

// Uploaded File Counter
const uploadedFileCounter = document.querySelector('.uploaded-file__counter');

// ToolTip Data
const toolTipData = document.querySelector('.upload-area__tooltip-data');

// Images Types
const imagesTypes = [
  "jpeg",
  "png",
  "svg",
  "gif"
];

// Append Images Types Array Inisde Tooltip Data
toolTipData.innerHTML = [...imagesTypes].join(', .');

// When (drop-zoon) has (dragover) Event 
dropZoon.addEventListener('dragover', function (event) {
  // Prevent Default Behavior 
  event.preventDefault();

  // Add Class (drop-zoon--over) On (drop-zoon)
  dropZoon.classList.add('drop-zoon--over');
});

// When (drop-zoon) has (dragleave) Event 
dropZoon.addEventListener('dragleave', function (event) {
  // Remove Class (drop-zoon--over) from (drop-zoon)
  dropZoon.classList.remove('drop-zoon--over');
});

// When (drop-zoon) has (drop) Event 
dropZoon.addEventListener('drop', function (event) {
  // Prevent Default Behavior 
  event.preventDefault();

  // Remove Class (drop-zoon--over) from (drop-zoon)
  dropZoon.classList.remove('drop-zoon--over');

  // Select The Dropped File
  const file = event.dataTransfer.files[0];

  // Call Function uploadFile(), And Send To Her The Dropped File :)
  uploadFile(file);
});

// When (drop-zoon) has (click) Event 
dropZoon.addEventListener('click', function (event) {
  // Click The (fileInput)
  fileInput.click();
});

// When (fileInput) has (change) Event 
fileInput.addEventListener('change', function (event) {
  // Select The Chosen File
  const file = event.target.files[0];

  // Call Function uploadFile(), And Send To Her The Chosen File :)
  uploadFile(file);
});

// Upload File Function
function uploadFile(file) {
  // FileReader()
  const fileReader = new FileReader();
  // File Type 
  const fileType = file.type;
  // File Size 
  const fileSize = file.size;

  // If File Is Passed from the (File Validation) Function
  if (fileValidate(fileType, fileSize)) {
    // Add Class (drop-zoon--Uploaded) on (drop-zoon)
    dropZoon.classList.add('drop-zoon--Uploaded');

    // Show Loading-text
    loadingText.style.display = "block";
    // Hide Preview Image
    previewImage.style.display = 'none';

    // Remove Class (uploaded-file--open) From (uploadedFile)
    uploadedFile.classList.remove('uploaded-file--open');
    // Remove Class (uploaded-file__info--active) from (uploadedFileInfo)
    uploadedFileInfo.classList.remove('uploaded-file__info--active');

    // After File Reader Loaded 
    fileReader.addEventListener('load', function () {
      // After Half Second 
      setTimeout(function () {
        // Add Class (upload-area--open) On (uploadArea)
        uploadArea.classList.add('upload-area--open');

        // Hide Loading-text (please-wait) Element
        loadingText.style.display = "none";
        // Show Preview Image
        previewImage.style.display = 'block';

        // Add Class (file-details--open) On (fileDetails)
        fileDetails.classList.add('file-details--open');
        // Add Class (uploaded-file--open) On (uploadedFile)
        uploadedFile.classList.add('uploaded-file--open');
        // Add Class (uploaded-file__info--active) On (uploadedFileInfo)
        uploadedFileInfo.classList.add('uploaded-file__info--active');
      }, 500); // 0.5s

      // Add The (fileReader) Result Inside (previewImage) Source
      previewImage.setAttribute('src', fileReader.result);

      // Add File Name Inside Uploaded File Name
      uploadedFileName.innerHTML = file.name;

      // Call Function progressMove();
      progressMove();
    });

    // Read (file) As Data Url 
    fileReader.readAsDataURL(file);
  } else { // Else

    this; // (this) Represent The fileValidate(fileType, fileSize) Function

  };
};

// Progress Counter Increase Function
function progressMove() {
  // Counter Start
  let counter = 0;

  // After 600ms 
  setTimeout(() => {
    // Every 100ms
    let counterIncrease = setInterval(() => {
      // If (counter) is equle 100 
      if (counter === 100) {
        // Stop (Counter Increase)
        clearInterval(counterIncrease);
      } else { // Else
        // plus 10 on counter
        counter = counter + 10;
        // add (counter) vlaue inisde (uploadedFileCounter)
        uploadedFileCounter.innerHTML = `${counter}%`
      }
    }, 100);
  }, 600);
};


// Simple File Validate Function
function fileValidate(fileType, fileSize) {
  // File Type Validation
  let isImage = imagesTypes.filter((type) => fileType.indexOf(`image/${type}`) !== -1);

  // If The Uploaded File Type Is 'jpeg'
  if (isImage[0] === 'jpeg') {
    // Add Inisde (uploadedFileIconText) The (jpg) Value
    uploadedFileIconText.innerHTML = 'jpg';
  } else { // else
    // Add Inisde (uploadedFileIconText) The Uploaded File Type 
    uploadedFileIconText.innerHTML = isImage[0];
  };

  // If The Uploaded File Is An Image
  if (isImage.length !== 0) {
    // Check, If File Size Is 2MB or Less
    if (fileSize <= 2000000) { // 2MB :)
      return true;
    } else { // Else File Size
      return alert('Please Your File Should be 2 Megabytes or Less');
    };
  } else { // Else File Type 
    return alert('Please make sure to upload An Image File Type');
  };
};

// :)


function addId() {
  const element = document.getElementsByClassName("upload-area__drop-zoon");
  element[0].setAttribute("id", "dropZoon");
}







// Design By
// - https://dribbble.com/shots/13992184-File-Uploader-Drag-Drop

// Select Upload-Area
const uploadArea1 = document.querySelector('#uploadArea1')

// Select Drop-Zoon Area
const dropZoon1 = document.querySelector('#dropZoon1');

// Loading Text
const loadingText1 = document.querySelector('#loadingText1');

// Slect File Input 
const fileInput1 = document.querySelector('#fileInput1');

// Select Preview Image
const previewImage1 = document.querySelector('#previewImage1');

// File-Details Area
const fileDetails1 = document.querySelector('#fileDetails1');

// Uploaded File
const uploadedFile1 = document.querySelector('#uploadedFile1');

// Uploaded File Info
const uploadedFileInfo1 = document.querySelector('#uploadedFileInfo1');

// Uploaded File  Name
const uploadedFileName1 = document.querySelector('.uploaded-file__name1');

// Uploaded File Icon
const uploadedFileIconText1 = document.querySelector('.uploaded-file__icon-text1');

// Uploaded File Counter
const uploadedFileCounter1 = document.querySelector('.uploaded-file__counter1');

// ToolTip Data
const toolTipData1 = document.querySelector('.upload-area__tooltip-data');

// Images Types
const imagesTypes1 = [
  "jpeg",
  "png",
  "svg",
  "gif"
];

// Append Images Types Array Inisde Tooltip Data
toolTipData1.innerHTML = [...imagesTypes1].join(', .');

// When (drop-zoon) has (dragover) Event 
dropZoon1.addEventListener('dragover', function (event) {
  // Prevent Default Behavior 
  event.preventDefault();

  // Add Class (drop-zoon--over) On (drop-zoon)
  dropZoon1.classList.add('drop-zoon--over');
});

// When (drop-zoon) has (dragleave) Event 
dropZoon1.addEventListener('dragleave', function (event) {
  // Remove Class (drop-zoon--over) from (drop-zoon)
  dropZoon1.classList.remove('drop-zoon--over');
});

// When (drop-zoon) has (drop) Event 
dropZoon1.addEventListener('drop', function (event) {
  // Prevent Default Behavior 
  event.preventDefault();

  // Remove Class (drop-zoon--over) from (drop-zoon)
  dropZoon1.classList.remove('drop-zoon--over');

  // Select The Dropped File
  const file1 = event.dataTransfer.files[0];

  // Call Function uploadFile(), And Send To Her The Dropped File :)
  uploadFile1(file1);
});

// When (drop-zoon) has (click) Event 
dropZoon1.addEventListener('click', function (event) {
  // Click The (fileInput)
  fileInput1.click();
});

// When (fileInput) has (change) Event 
fileInput1.addEventListener('change', function (event) {
  // Select The Chosen File
  const file1 = event.target.files[0];

  // Call Function uploadFile(), And Send To Her The Chosen File :)
  uploadFile1(file1);
});

// Upload File Function
function uploadFile1(file) {
  // FileReader()
  const fileReader1 = new FileReader();
  // File Type 
  const fileType1 = file.type;
  // File Size 
  const fileSize1 = file.size;

  // If File Is Passed from the (File Validation) Function
  if (fileValidate(fileType1, fileSize1)) {
    // Add Class (drop-zoon--Uploaded) on (drop-zoon)
    dropZoon1.classList.add('drop-zoon--Uploaded');

    // Show Loading-text
    loadingText1.style.display = "block";
    // Hide Preview Image
    previewImage1.style.display = 'none';

    // Remove Class (uploaded-file--open) From (uploadedFile)
    uploadedFile1.classList.remove('uploaded-file--open');
    // Remove Class (uploaded-file__info--active) from (uploadedFileInfo)
    uploadedFileInfo1.classList.remove('uploaded-file__info--active');

    // After File Reader Loaded 
    fileReader1.addEventListener('load', function () {
      // After Half Second 
      setTimeout(function () {
        // Add Class (upload-area--open) On (uploadArea)
        uploadArea1.classList.add('upload-area--open');

        // Hide Loading-text (please-wait) Element
        loadingText1.style.display = "none";
        // Show Preview Image
        previewImage1.style.display = 'block';

        // Add Class (file-details--open) On (fileDetails)
        fileDetails1.classList.add('file-details--open');
        // Add Class (uploaded-file--open) On (uploadedFile)
        uploadedFile1.classList.add('uploaded-file--open');
        // Add Class (uploaded-file__info--active) On (uploadedFileInfo)
        uploadedFileInfo1.classList.add('uploaded-file__info--active');
      }, 500); // 0.5s

      // Add The (fileReader) Result Inside (previewImage) Source
      previewImage1.setAttribute('src', fileReader1.result);

      // Add File Name Inside Uploaded File Name
      uploadedFileName1.innerHTML = file.name;

      // Call Function progressMove();
      progressMove1();
    });

    // Read (file) As Data Url 
    fileReader1.readAsDataURL(file);
  } else { // Else

    this; // (this) Represent The fileValidate(fileType, fileSize) Function

  };
};

// Progress Counter Increase Function
function progressMove1() {
  // Counter Start
  let counter1 = 0;

  // After 600ms 
  setTimeout(() => {
    // Every 100ms
    let counterIncrease1 = setInterval(() => {
      // If (counter) is equle 100 
      if (counter1 === 100) {
        // Stop (Counter Increase)
        clearInterval(counterIncrease1);
      } else { // Else
        // plus 10 on counter
        counter1 = counter1 + 10;
        // add (counter) vlaue inisde (uploadedFileCounter)
        uploadedFileCounter1.innerHTML = `${counter1}%`
      }
    }, 100);
  }, 600);
};


// Simple File Validate Function
function fileValidate(fileType, fileSize) {
  // File Type Validation
  let isImage = imagesTypes.filter((type) => fileType.indexOf(`image/${type}`) !== -1);

  // If The Uploaded File Type Is 'jpeg'
  if (isImage[0] === 'jpeg') {
    // Add Inisde (uploadedFileIconText) The (jpg) Value
    uploadedFileIconText.innerHTML = 'jpg';
  } else { // else
    // Add Inisde (uploadedFileIconText) The Uploaded File Type 
    uploadedFileIconText.innerHTML = isImage[0];
  };

  // If The Uploaded File Is An Image
  if (isImage.length !== 0) {
    // Check, If File Size Is 2MB or Less
    if (fileSize <= 2000000) { // 2MB :)
      return true;
    } else { // Else File Size
      return alert('Please Your File Should be 2 Megabytes or Less');
    };
  } else { // Else File Type 
    return alert('Please make sure to upload An Image File Type');
  };
};

//



// Select Upload-Area
const uploadArea2 = document.querySelector('#uploadArea2')

// Select Drop-Zoon Area
const dropZoon2 = document.querySelector('#dropZoon2');

// Loading Text
const loadingText2 = document.querySelector('#loadingText2');

// Slect File Input 
const fileInput2 = document.querySelector('#fileInput2');

// Select Preview Image
const previewImage2 = document.querySelector('#previewImage2');

// File-Details Area
const fileDetails2 = document.querySelector('#fileDetails2');

// Uploaded File
const uploadedFile2 = document.querySelector('#uploadedFile2');

// Uploaded File Info
const uploadedFileInfo2 = document.querySelector('#uploadedFileInfo2');

// Uploaded File  Name
const uploadedFileName2 = document.querySelector('.uploaded-file__name2');

// Uploaded File Icon
const uploadedFileIconText2 = document.querySelector('.uploaded-file__icon-text2');

// Uploaded File Counter
const uploadedFileCounter2 = document.querySelector('.uploaded-file__counter2');

// ToolTip Data
const toolTipData2 = document.querySelector('.upload-area__tooltip-data');

// Images Types
const imagesTypes2 = [
  "jpeg",
  "png",
  "svg",
  "gif"
];

// Append Images Types Array Inisde Tooltip Data
toolTipData2.innerHTML = [...imagesTypes2].join(', .');

// When (drop-zoon) has (dragover) Event 
dropZoon2.addEventListener('dragover', function (event) {
  // Prevent Default Behavior 
  event.preventDefault();

  // Add Class (drop-zoon--over) On (drop-zoon)
  dropZoon2.classList.add('drop-zoon--over');
});

// When (drop-zoon) has (dragleave) Event 
dropZoon2.addEventListener('dragleave', function (event) {
  // Remove Class (drop-zoon--over) from (drop-zoon)
  dropZoon2.classList.remove('drop-zoon--over');
});

// When (drop-zoon) has (drop) Event 
dropZoon2.addEventListener('drop', function (event) {
  // Prevent Default Behavior 
  event.preventDefault();

  // Remove Class (drop-zoon--over) from (drop-zoon)
  dropZoon2.classList.remove('drop-zoon--over');

  // Select The Dropped File
  const file2 = event.dataTransfer.files[0];

  // Call Function uploadFile(), And Send To Her The Dropped File :)
  uploadFile2(file2);
});

// When (drop-zoon) has (click) Event 
dropZoon2.addEventListener('click', function (event) {
  // Click The (fileInput)
  fileInput2.click();
});

// When (fileInput) has (change) Event 
fileInput2.addEventListener('change', function (event) {
  // Select The Chosen File
  const file2 = event.target.files[0];

  // Call Function uploadFile(), And Send To Her The Chosen File :)
  uploadFile2(file2);
});

// Upload File Function
function uploadFile2(file) {
  // FileReader()
  const fileReader2 = new FileReader();
  // File Type 
  const fileType2 = file.type;
  // File Size 
  const fileSize2 = file.size;

  // If File Is Passed from the (File Validation) Function
  if (fileValidate(fileType2, fileSize2)) {
    // Add Class (drop-zoon--Uploaded) on (drop-zoon)
    dropZoon2.classList.add('drop-zoon--Uploaded');

    // Show Loading-text
    loadingText2.style.display = "block";
    // Hide Preview Image
    previewImage2.style.display = 'none';

    // Remove Class (uploaded-file--open) From (uploadedFile)
    uploadedFile2.classList.remove('uploaded-file--open');
    // Remove Class (uploaded-file__info--active) from (uploadedFileInfo)
    uploadedFileInfo2.classList.remove('uploaded-file__info--active');

    // After File Reader Loaded 
    fileReader2.addEventListener('load', function () {
      // After Half Second 
      setTimeout(function () {
        // Add Class (upload-area--open) On (uploadArea)
        uploadArea2.classList.add('upload-area--open');

        // Hide Loading-text (please-wait) Element
        loadingText2.style.display = "none";
        // Show Preview Image
        previewImage2.style.display = 'block';

        // Add Class (file-details--open) On (fileDetails)
        fileDetails2.classList.add('file-details--open');
        // Add Class (uploaded-file--open) On (uploadedFile)
        uploadedFile2.classList.add('uploaded-file--open');
        // Add Class (uploaded-file__info--active) On (uploadedFileInfo)
        uploadedFileInfo2.classList.add('uploaded-file__info--active');
      }, 500); // 0.5s

      // Add The (fileReader) Result Inside (previewImage) Source
      previewImage2.setAttribute('src', fileReader2.result);

      // Add File Name Inside Uploaded File Name
      uploadedFileName2.innerHTML = file.name;

      // Call Function progressMove();
      progressMove2();
    });

    // Read (file) As Data Url 
    fileReader2.readAsDataURL(file);
  } else { // Else

    this; // (this) Represent The fileValidate(fileType, fileSize) Function

  };
};

// Progress Counter Increase Function
function progressMove2() {
  // Counter Start
  let counter2 = 0;

  // After 600ms 
  setTimeout(() => {
    // Every 100ms
    let counterIncrease2 = setInterval(() => {
      // If (counter) is equle 100 
      if (counter2 === 100) {
        // Stop (Counter Increase)
        clearInterval(counterIncrease2);
      } else { // Else
        // plus 10 on counter
        counter2 = counter2 + 10;
        // add (counter) vlaue inisde (uploadedFileCounter)
        uploadedFileCounter2.innerHTML = `${counter2}%`
      }
    }, 100);
  }, 600);
};


// Simple File Validate Function
function fileValidate(fileType, fileSize) {
  // File Type Validation
  let isImage = imagesTypes.filter((type) => fileType.indexOf(`image/${type}`) !== -1);

  // If The Uploaded File Type Is 'jpeg'
  if (isImage[0] === 'jpeg') {
    // Add Inisde (uploadedFileIconText) The (jpg) Value
    uploadedFileIconText.innerHTML = 'jpg';
  } else { // else
    // Add Inisde (uploadedFileIconText) The Uploaded File Type 
    uploadedFileIconText.innerHTML = isImage[0];
  };

  // If The Uploaded File Is An Image
  if (isImage.length !== 0) {
    // Check, If File Size Is 2MB or Less
    if (fileSize <= 2000000) { // 2MB :)
      return true;
    } else { // Else File Size
      return alert('Please Your File Should be 2 Megabytes or Less');
    };
  } else { // Else File Type 
    return alert('Please make sure to upload An Image File Type');
  };
};

//





// Select Upload-Area
const uploadArea3 = document.querySelector('#uploadArea3')

// Select Drop-Zoon Area
const dropZoon3 = document.querySelector('#dropZoon3');

// Loading Text
const loadingText3 = document.querySelector('#loadingText3');

// Slect File Input 
const fileInput3 = document.querySelector('#fileInput3');

// Select Preview Image
const previewImage3 = document.querySelector('#previewImage3');

// File-Details Area
const fileDetails3 = document.querySelector('#fileDetails3');

// Uploaded File
const uploadedFile3 = document.querySelector('#uploadedFile3');

// Uploaded File Info
const uploadedFileInfo3 = document.querySelector('#uploadedFileInfo3');

// Uploaded File  Name
const uploadedFileName3 = document.querySelector('.uploaded-file__name3');

// Uploaded File Icon
const uploadedFileIconText3 = document.querySelector('.uploaded-file__icon-text3');

// Uploaded File Counter
const uploadedFileCounter3 = document.querySelector('.uploaded-file__counter3');

// ToolTip Data
const toolTipData3 = document.querySelector('.upload-area__tooltip-data');

// Images Types
const imagesTypes3 = [
  "jpeg",
  "png",
  "svg",
  "gif"
];

// Append Images Types Array Inisde Tooltip Data
toolTipData3.innerHTML = [...imagesTypes3].join(', .');

// When (drop-zoon) has (dragover) Event 
dropZoon3.addEventListener('dragover', function (event) {
  // Prevent Default Behavior 
  event.preventDefault();

  // Add Class (drop-zoon--over) On (drop-zoon)
  dropZoon3.classList.add('drop-zoon--over');
});

// When (drop-zoon) has (dragleave) Event 
dropZoon3.addEventListener('dragleave', function (event) {
  // Remove Class (drop-zoon--over) from (drop-zoon)
  dropZoon3.classList.remove('drop-zoon--over');
});

// When (drop-zoon) has (drop) Event 
dropZoon3.addEventListener('drop', function (event) {
  // Prevent Default Behavior 
  event.preventDefault();

  // Remove Class (drop-zoon--over) from (drop-zoon)
  dropZoon3.classList.remove('drop-zoon--over');

  // Select The Dropped File
  const file3 = event.dataTransfer.files[0];

  // Call Function uploadFile(), And Send To Her The Dropped File :)
  uploadFile3(file3);
});

// When (drop-zoon) has (click) Event 
dropZoon3.addEventListener('click', function (event) {
  // Click The (fileInput)
  fileInput3.click();
});

// When (fileInput) has (change) Event 
fileInput3.addEventListener('change', function (event) {
  // Select The Chosen File
  const file3 = event.target.files[0];

  // Call Function uploadFile(), And Send To Her The Chosen File :)
  uploadFile3(file3);
});

// Upload File Function
function uploadFile3(file) {
  // FileReader()
  const fileReader3 = new FileReader();
  // File Type 
  const fileType3 = file.type;
  // File Size 
  const fileSize3 = file.size;

  // If File Is Passed from the (File Validation) Function
  if (fileValidate(fileType3, fileSize3)) {
    // Add Class (drop-zoon--Uploaded) on (drop-zoon)
    dropZoon3.classList.add('drop-zoon--Uploaded');

    // Show Loading-text
    loadingText3.style.display = "block";
    // Hide Preview Image
    previewImage3.style.display = 'none';

    // Remove Class (uploaded-file--open) From (uploadedFile)
    uploadedFile3.classList.remove('uploaded-file--open');
    // Remove Class (uploaded-file__info--active) from (uploadedFileInfo)
    uploadedFileInfo3.classList.remove('uploaded-file__info--active');

    // After File Reader Loaded 
    fileReader3.addEventListener('load', function () {
      // After Half Second 
      setTimeout(function () {
        // Add Class (upload-area--open) On (uploadArea)
        uploadArea3.classList.add('upload-area--open');

        // Hide Loading-text (please-wait) Element
        loadingText3.style.display = "none";
        // Show Preview Image
        previewImage3.style.display = 'block';

        // Add Class (file-details--open) On (fileDetails)
        fileDetails3.classList.add('file-details--open');
        // Add Class (uploaded-file--open) On (uploadedFile)
        uploadedFile3.classList.add('uploaded-file--open');
        // Add Class (uploaded-file__info--active) On (uploadedFileInfo)
        uploadedFileInfo3.classList.add('uploaded-file__info--active');
      }, 500); // 0.5s

      // Add The (fileReader) Result Inside (previewImage) Source
      previewImage3.setAttribute('src', fileReader3.result);

      // Add File Name Inside Uploaded File Name
      uploadedFileName3.innerHTML = file.name;

      // Call Function progressMove();
      progressMove3();
    });

    // Read (file) As Data Url 
    fileReader3.readAsDataURL(file);
  } else { // Else

    this; // (this) Represent The fileValidate(fileType, fileSize) Function

  };
};

// Progress Counter Increase Function
function progressMove3() {
  // Counter Start
  let counter3 = 0;

  // After 600ms 
  setTimeout(() => {
    // Every 100ms
    let counterIncrease3 = setInterval(() => {
      // If (counter) is equle 100 
      if (counter3 === 100) {
        // Stop (Counter Increase)
        clearInterval(counterIncrease3);
      } else { // Else
        // plus 10 on counter
        counter3 = counter3 + 10;
        // add (counter) vlaue inisde (uploadedFileCounter)
        uploadedFileCounter3.innerHTML = `${counter3}%`
      }
    }, 100);
  }, 600);
};


// Simple File Validate Function
function fileValidate(fileType, fileSize) {
  // File Type Validation
  let isImage = imagesTypes.filter((type) => fileType.indexOf(`image/${type}`) !== -1);

  // If The Uploaded File Type Is 'jpeg'
  if (isImage[0] === 'jpeg') {
    // Add Inisde (uploadedFileIconText) The (jpg) Value
    uploadedFileIconText.innerHTML = 'jpg';
  } else { // else
    // Add Inisde (uploadedFileIconText) The Uploaded File Type 
    uploadedFileIconText.innerHTML = isImage[0];
  };

  // If The Uploaded File Is An Image
  if (isImage.length !== 0) {
    // Check, If File Size Is 2MB or Less
    if (fileSize <= 2000000) { // 2MB :)
      return true;
    } else { // Else File Size
      return alert('Please Your File Should be 2 Megabytes or Less');
    };
  } else { // Else File Type 
    return alert('Please make sure to upload An Image File Type');
  };
};

//






// Select Upload-Area
const uploadArea4 = document.querySelector('#uploadArea4')

// Select Drop-Zoon Area
const dropZoon4 = document.querySelector('#dropZoon4');

// Loading Text
const loadingText4 = document.querySelector('#loadingText4');

// Slect File Input 
const fileInput4 = document.querySelector('#fileInput4');

// Select Preview Image
const previewImage4 = document.querySelector('#previewImage4');

// File-Details Area
const fileDetails4 = document.querySelector('#fileDetails4');

// Uploaded File
const uploadedFile4 = document.querySelector('#uploadedFile4');

// Uploaded File Info
const uploadedFileInfo4 = document.querySelector('#uploadedFileInfo4');

// Uploaded File  Name
const uploadedFileName4 = document.querySelector('.uploaded-file__name4');

// Uploaded File Icon
const uploadedFileIconText4 = document.querySelector('.uploaded-file__icon-text4');

// Uploaded File Counter
const uploadedFileCounter4 = document.querySelector('.uploaded-file__counter4');

// ToolTip Data
const toolTipData4 = document.querySelector('.upload-area__tooltip-data');

// Images Types
const imagesTypes4 = [
  "jpeg",
  "png",
  "svg",
  "gif"
];

// Append Images Types Array Inisde Tooltip Data
toolTipData4.innerHTML = [...imagesTypes4].join(', .');

// When (drop-zoon) has (dragover) Event 
dropZoon4.addEventListener('dragover', function (event) {
  // Prevent Default Behavior 
  event.preventDefault();

  // Add Class (drop-zoon--over) On (drop-zoon)
  dropZoon4.classList.add('drop-zoon--over');
});

// When (drop-zoon) has (dragleave) Event 
dropZoon4.addEventListener('dragleave', function (event) {
  // Remove Class (drop-zoon--over) from (drop-zoon)
  dropZoon4.classList.remove('drop-zoon--over');
});

// When (drop-zoon) has (drop) Event 
dropZoon4.addEventListener('drop', function (event) {
  // Prevent Default Behavior 
  event.preventDefault();

  // Remove Class (drop-zoon--over) from (drop-zoon)
  dropZoon4.classList.remove('drop-zoon--over');

  // Select The Dropped File
  const file4 = event.dataTransfer.files[0];

  // Call Function uploadFile(), And Send To Her The Dropped File :)
  uploadFile4(file4);
});

// When (drop-zoon) has (click) Event 
dropZoon4.addEventListener('click', function (event) {
  // Click The (fileInput)
  fileInput4.click();
});

// When (fileInput) has (change) Event 
fileInput4.addEventListener('change', function (event) {
  // Select The Chosen File
  const file4 = event.target.files[0];

  // Call Function uploadFile(), And Send To Her The Chosen File :)
  uploadFile4(file4);
});

// Upload File Function
function uploadFile4(file) {
  // FileReader()
  const fileReader4 = new FileReader();
  // File Type 
  const fileType4 = file.type;
  // File Size 
  const fileSize4 = file.size;

  // If File Is Passed from the (File Validation) Function
  if (fileValidate(fileType4, fileSize4)) {
    // Add Class (drop-zoon--Uploaded) on (drop-zoon)
    dropZoon4.classList.add('drop-zoon--Uploaded');

    // Show Loading-text
    loadingText4.style.display = "block";
    // Hide Preview Image
    previewImage4.style.display = 'none';

    // Remove Class (uploaded-file--open) From (uploadedFile)
    uploadedFile4.classList.remove('uploaded-file--open');
    // Remove Class (uploaded-file__info--active) from (uploadedFileInfo)
    uploadedFileInfo4.classList.remove('uploaded-file__info--active');

    // After File Reader Loaded 
    fileReader4.addEventListener('load', function () {
      // After Half Second 
      setTimeout(function () {
        // Add Class (upload-area--open) On (uploadArea)
        uploadArea4.classList.add('upload-area--open');

        // Hide Loading-text (please-wait) Element
        loadingText4.style.display = "none";
        // Show Preview Image
        previewImage4.style.display = 'block';

        // Add Class (file-details--open) On (fileDetails)
        fileDetails4.classList.add('file-details--open');
        // Add Class (uploaded-file--open) On (uploadedFile)
        uploadedFile4.classList.add('uploaded-file--open');
        // Add Class (uploaded-file__info--active) On (uploadedFileInfo)
        uploadedFileInfo4.classList.add('uploaded-file__info--active');
      }, 500); // 0.5s

      // Add The (fileReader) Result Inside (previewImage) Source
      previewImage4.setAttribute('src', fileReader4.result);

      // Add File Name Inside Uploaded File Name
      uploadedFileName4.innerHTML = file.name;

      // Call Function progressMove();
      progressMove4();
    });

    // Read (file) As Data Url 
    fileReader4.readAsDataURL(file);
  } else { // Else

    this; // (this) Represent The fileValidate(fileType, fileSize) Function

  };
};

// Progress Counter Increase Function
function progressMove4() {
  // Counter Start
  let counter4 = 0;

  // After 600ms 
  setTimeout(() => {
    // Every 100ms
    let counterIncrease4 = setInterval(() => {
      // If (counter) is equle 100 
      if (counter4 === 100) {
        // Stop (Counter Increase)
        clearInterval(counterIncrease4);
      } else { // Else
        // plus 10 on counter
        counter4 = counter4 + 10;
        // add (counter) vlaue inisde (uploadedFileCounter)
        uploadedFileCounter4.innerHTML = `${counter4}%`
      }
    }, 100);
  }, 600);
};


// Simple File Validate Function
function fileValidate(fileType, fileSize) {
  // File Type Validation
  let isImage = imagesTypes.filter((type) => fileType.indexOf(`image/${type}`) !== -1);

  // If The Uploaded File Type Is 'jpeg'
  if (isImage[0] === 'jpeg') {
    // Add Inisde (uploadedFileIconText) The (jpg) Value
    uploadedFileIconText.innerHTML = 'jpg';
  } else { // else
    // Add Inisde (uploadedFileIconText) The Uploaded File Type 
    uploadedFileIconText.innerHTML = isImage[0];
  };

  // If The Uploaded File Is An Image
  if (isImage.length !== 0) {
    // Check, If File Size Is 2MB or Less
    if (fileSize <= 2000000) { // 2MB :)
      return true;
    } else { // Else File Size
      return alert('Please Your File Should be 2 Megabytes or Less');
    };
  } else { // Else File Type 
    return alert('Please make sure to upload An Image File Type');
  };
};

//






// Select Upload-Area
const uploadArea5 = document.querySelector('#uploadArea5')

// Select Drop-Zoon Area
const dropZoon5 = document.querySelector('#dropZoon5');

// Loading Text
const loadingText5 = document.querySelector('#loadingText5');

// Slect File Input 
const fileInput5 = document.querySelector('#fileInput5');

// Select Preview Image
const previewImage5 = document.querySelector('#previewImage5');

// File-Details Area
const fileDetails5 = document.querySelector('#fileDetails5');

// Uploaded File
const uploadedFile5 = document.querySelector('#uploadedFile5');

// Uploaded File Info
const uploadedFileInfo5 = document.querySelector('#uploadedFileInfo5');

// Uploaded File  Name
const uploadedFileName5 = document.querySelector('.uploaded-file__name5');

// Uploaded File Icon
const uploadedFileIconText5 = document.querySelector('.uploaded-file__icon-text5');

// Uploaded File Counter
const uploadedFileCounter5 = document.querySelector('.uploaded-file__counter5');

// ToolTip Data
const toolTipData5 = document.querySelector('.upload-area__tooltip-data');

// Images Types
const imagesTypes5 = [
  "jpeg",
  "png",
  "svg",
  "gif"
];

// Append Images Types Array Inisde Tooltip Data
toolTipData5.innerHTML = [...imagesTypes5].join(', .');

// When (drop-zoon) has (dragover) Event 
dropZoon5.addEventListener('dragover', function (event) {
  // Prevent Default Behavior 
  event.preventDefault();

  // Add Class (drop-zoon--over) On (drop-zoon)
  dropZoon5.classList.add('drop-zoon--over');
});

// When (drop-zoon) has (dragleave) Event 
dropZoon5.addEventListener('dragleave', function (event) {
  // Remove Class (drop-zoon--over) from (drop-zoon)
  dropZoon5.classList.remove('drop-zoon--over');
});

// When (drop-zoon) has (drop) Event 
dropZoon5.addEventListener('drop', function (event) {
  // Prevent Default Behavior 
  event.preventDefault();

  // Remove Class (drop-zoon--over) from (drop-zoon)
  dropZoon5.classList.remove('drop-zoon--over');

  // Select The Dropped File
  const file5 = event.dataTransfer.files[0];

  // Call Function uploadFile(), And Send To Her The Dropped File :)
  uploadFile5(file5);
});

// When (drop-zoon) has (click) Event 
dropZoon5.addEventListener('click', function (event) {
  // Click The (fileInput)
  fileInput5.click();
});

// When (fileInput) has (change) Event 
fileInput5.addEventListener('change', function (event) {
  // Select The Chosen File
  const file5 = event.target.files[0];

  // Call Function uploadFile(), And Send To Her The Chosen File :)
  uploadFile5(file5);
});

// Upload File Function
function uploadFile5(file) {
  // FileReader()
  const fileReader5 = new FileReader();
  // File Type 
  const fileType5 = file.type;
  // File Size 
  const fileSize5 = file.size;

  // If File Is Passed from the (File Validation) Function
  if (fileValidate(fileType5, fileSize5)) {
    // Add Class (drop-zoon--Uploaded) on (drop-zoon)
    dropZoon5.classList.add('drop-zoon--Uploaded');

    // Show Loading-text
    loadingText5.style.display = "block";
    // Hide Preview Image
    previewImage5.style.display = 'none';

    // Remove Class (uploaded-file--open) From (uploadedFile)
    uploadedFile5.classList.remove('uploaded-file--open');
    // Remove Class (uploaded-file__info--active) from (uploadedFileInfo)
    uploadedFileInfo5.classList.remove('uploaded-file__info--active');

    // After File Reader Loaded 
    fileReader5.addEventListener('load', function () {
      // After Half Second 
      setTimeout(function () {
        // Add Class (upload-area--open) On (uploadArea)
        uploadArea5.classList.add('upload-area--open');

        // Hide Loading-text (please-wait) Element
        loadingText5.style.display = "none";
        // Show Preview Image
        previewImage5.style.display = 'block';

        // Add Class (file-details--open) On (fileDetails)
        fileDetails5.classList.add('file-details--open');
        // Add Class (uploaded-file--open) On (uploadedFile)
        uploadedFile5.classList.add('uploaded-file--open');
        // Add Class (uploaded-file__info--active) On (uploadedFileInfo)
        uploadedFileInfo5.classList.add('uploaded-file__info--active');
      }, 500); // 0.5s

      // Add The (fileReader) Result Inside (previewImage) Source
      previewImage5.setAttribute('src', fileReader5.result);

      // Add File Name Inside Uploaded File Name
      uploadedFileName5.innerHTML = file.name;

      // Call Function progressMove();
      progressMove5();
    });

    // Read (file) As Data Url 
    fileReader5.readAsDataURL(file);
  } else { // Else

    this; // (this) Represent The fileValidate(fileType, fileSize) Function

  };
};

// Progress Counter Increase Function
function progressMove5() {
  // Counter Start
  let counter5 = 0;

  // After 600ms 
  setTimeout(() => {
    // Every 100ms
    let counterIncrease5 = setInterval(() => {
      // If (counter) is equle 100 
      if (counter5 === 100) {
        // Stop (Counter Increase)
        clearInterval(counterIncrease5);
      } else { // Else
        // plus 10 on counter
        counter5 = counter5 + 10;
        // add (counter) vlaue inisde (uploadedFileCounter)
        uploadedFileCounter5.innerHTML = `${counter5}%`
      }
    }, 100);
  }, 600);
};


// Simple File Validate Function
function fileValidate(fileType, fileSize) {
  // File Type Validation
  let isImage = imagesTypes.filter((type) => fileType.indexOf(`image/${type}`) !== -1);

  // If The Uploaded File Type Is 'jpeg'
  if (isImage[0] === 'jpeg') {
    // Add Inisde (uploadedFileIconText) The (jpg) Value
    uploadedFileIconText.innerHTML = 'jpg';
  } else { // else
    // Add Inisde (uploadedFileIconText) The Uploaded File Type 
    uploadedFileIconText.innerHTML = isImage[0];
  };

  // If The Uploaded File Is An Image
  if (isImage.length !== 0) {
    // Check, If File Size Is 2MB or Less
    if (fileSize <= 2000000) { // 2MB :)
      return true;
    } else { // Else File Size
      return alert('Please Your File Should be 2 Megabytes or Less');
    };
  } else { // Else File Type 
    return alert('Please make sure to upload An Image File Type');
  };
};

//

