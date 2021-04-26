const boxContainer = $("#box");

function createPattern(n, char1, char2) {
  let newArr = [];

  for (let row = 0; row < n; row++) {
    newArr[row] = [];

    for (let col = 0; col < n; col++) {
      if (newArr[row] == newArr[col]) {
        newArr[row].push(char2);
      } else {
        newArr[row].push(char1);
      }
    }
  }
  let end = n;
  for (let row = 0; row < n; row++) {
    end--;
    for (let col = 0; col < n; col++) {
      if (row == n - 1 - end && col == end) {
        newArr[row].splice(col, 1, char2);
      }
    }
  }
  return newArr;
}

function printPattern(n, arr) {
  for (let row = 0; row < arr.length; row++) {
    let buildRow = $('<div class="row"></div>');
    boxContainer.append(buildRow);
    for (let col = 0; col < arr.length; col++) {
      let column = $(
        '<div class="col characters py-5">' + arr[col][row] + "</div>"
      );
      buildRow.append(column);
    }
  }
}
function finalPattern(n, char1, char2) {
  printPattern(n, createPattern(n, char1, char2));
}
let inputGroup = $(".form-control");

function getValuesAndBuild() {
  let inputNumber = $(".inputNumber");
  let inputChar1 = $(".inputChar1");
  let inputChar2 = $(".inputChar2");
  let val = parseInt(inputNumber.val());
  let char1 = inputChar1.val();
  let char2 = inputChar2.val();
  if (val > 25) {
    alert("Please choose a number below 25");
    return;
  }
  finalPattern(val, char1, char2);
}

function triggerBuild(e) {
  boxContainer.empty();
  getValuesAndBuild();
}

inputGroup.on("keyup", function (e) {
  boxContainer.empty();
  if (e.key === "Enter" || e.keyCode === 13) {
    getValuesAndBuild();
  }
});
