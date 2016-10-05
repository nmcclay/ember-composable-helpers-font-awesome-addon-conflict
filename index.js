/* jshint node: true */
'use strict';

module.exports = {
  name: 'composable-helpers-font-awesome-addon-test',

  included: function(app, parentAddon) {
    // fails ember-composable-helpers
    this._super.included(arguments);

    // fails ember-font-awesome
    // this._super.included.apply(this, arguments);
  }
};
