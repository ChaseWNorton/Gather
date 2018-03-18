const {assert} = require('chai');
const {buildItemObject} = require('../test-utils');
const faker = require('faker');

// Add your tests below:
describe('Create Page', () => {
  describe('post a new item', () => {
    it ('render submission', () => {
      //setup
      const post = {
        title: faker.lorem.words(),
        description: faker.lorem.paragraph(),
        imageUrl: faker.image.imageUrl(),
      };
      //exercise
      browser.url('/create.html');
      browser.setValue('#title-input', post.title);
      browser.setValue('#description-input', post.description);
      browser.setValue('#imageUrl-input', post.imageUrl);
      browser.click('#submit-button');

      //verify
      assert.include(browser.getText('body'), post.title);
      assert.include(browser.getText('body'), post.description);
      assert.include(browser.getAttribute('body img', 'src'), post.imageUrl);

    })
  })
})
