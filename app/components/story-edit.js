import Ember from 'ember';

export default Ember.Component.extend({
  editStoryForm: false,
actions: {
  editStoryForm() {
    this.set('editStoryForm', true);
  },
  edit(story) {
    var params = {
      title: this.get('title'),
      author: this.get('author'),
      body: this.get('body'),
      image: this.get('image'),
    };
    this.set('editStoryForm', false);
    this.sendAction('edit', story, params);
  }
}
});
