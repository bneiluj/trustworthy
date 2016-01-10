(function (app) {
    app.AppComponent =
      ng.core.Component({
          selector: 'my-app',
          template: '<h1>This is the first component of the trustworthy app<h1>'
      })
      .Class({
        constructor: function () {}
      })
})(window.app || (window.app = {}));
