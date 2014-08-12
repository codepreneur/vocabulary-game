'use strict';

/* https://docs.angularjs.org/guide/e2e-testing */
/* https://github.com/angular/protractor/blob/master/docs/tutorial.md */

describe('my app', function() {

  browser.get('/');

  it('should automatically redirect to /home when location hash/fragment is empty', function() {
    expect(browser.getLocationAbsUrl()).toMatch("/home");
  });

  
});