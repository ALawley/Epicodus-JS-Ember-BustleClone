import Ember from 'ember';

export default Ember.Component.extend({
  addNewStory: false,
  actions: {
    storyFormShow() {
      this.set('addNewStory', true);
    },

    save1() {
      var params = {
        title: this.get('title') ? this.get('title') : "",
        author: this.get('author') ? this.get('author') : "",
        body: this.get('body') ? this.get('body') : "",
        image: this.get('image') ? this.get('image') : ""
      };
      this.set('addNewStory', false),
      this.sendAction('save2', params);
    }
  }
});
