class Item {
  constructor(id, type, title, description, count) {
    this.id = id;
    this.type = type;
    this.title = title;
    this.description = description;
    this.count = count;
  }

  createElement() {
    var li = document.createElement('li');
    li.className = "mdl-list__item";

    var content = document.createElement('span');
    span.className = "mdl-list__item-primary-content";

    li.appendChild(content);

    if (!this.type) {
      return li;
    }

    var action = document.createElement('span');
    action.className = "mdl-list__item-secondary-action";

    li.appendChild(action);

    if (this.type === "checkbox") {
      var label = document.createElement('label');
      label.className = "mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect";
      label.for = "list-checkbox" + this.id;

      var input = document.createElement('input');
      input.type = "checkbox";
      input.id = "list-checkbox" + this.id;
      input.className = "mdl-checkbox__input";

      label.appendChild(input);
      action.appendChild(label);
    }

    return li;
  }
}

class Storage {
  static KEY_TIME() {
    return "key_time";
  }

  run() {
    if (isExpired()) {
      clear();
    }

    // TODO: 何かやる
  }

  getItemById(id) {
    return window.localStorage.getItem(id);
  }

  isExpired() {
    var dt = new Date(Date.parse(JOSN.parse(getLastUpdated())));
    if (dt) {
      var limit;
      if (dt.getHours() < 4) {
        limit = new Date(dt.getFullYear(), dt.getMonth(), dt.getDate(), 4, 0);
      } else {
        limit = new Date(dt.getFullYear(), dt.getMonth(), dt.getDate() + 1, 4, 0);
      }
      var now = new Date();

      if (limit.getTime() < now.getTime()) {
        return true;
      }
      return false;
    }
    return true;
  }

  saveLastUpdated(date) {
    if (!date) {
      date = new Date();
    }
    window.localStorage.setItem(KEY_TIME, JSON.stringify(date));
  }

  getLastUpdated() {
    return window.localStorage.getItem(KEY_TIME);
  }

  clear() {
    window.localStorage.clear();
  }

  isUsingStorage() {
    if (!window.localStorage) {
      alert("お使いのブラウザはlocalStorageに対応していません.");
      return false;
    }
    return true;
  }
}

window.onload = function() {

};
