var KEY_TIME = "key_time";

window.onload = function() {
  if (!window.localStorage) {
    alert("お使いのブラウザはlocalStorageに対応していません.");
    return;
  }

  var dt = new Date(Date.parse(JSON.parse(getItem(KEY_TIME))));
  if (dt) {
    var limit;
    if (dt.getHours() < 4) {
      limit = new Date(dt.getFullYear(), dt.getMonth(), dt.getDate(), 4, 0);    
    } else {
      limit = new Date(dt.getFullYear(), dt.getMonth(), dt.getDate() + 1, 4, 0);
    }
    var now = new Date();

    if (limit.getTime() < now.getTime()) {
      clear();
      return;
    }
  }

  var inputs = document.getElementsByTagName("input");
  for (var i = 0; i < inputs.length; i++) {
    var input = inputs[i];
    var value = getItem(input.id);
    if (value) {
      input.checked = value;
    }
    input.onclick = clickCheckbox;
  }
};

var clickCheckbox = function() {
  saveItem(this.id, this.checked);
  saveItem(KEY_TIME, JSON.stringify(new Date()));
};

var saveItem = function(key, val) {
  window.localStorage.setItem(key, val);
};

var getItem = function(key) {
  return window.localStorage.getItem(key);
};

var removeItem = function(key) {
  window.localStorage.removeItem(key);
};

var clear = function() {
  window.localStorage.clear();
};
