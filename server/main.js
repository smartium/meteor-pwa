import { Meteor } from 'meteor/meteor';
import '../imports/lib/collections';

Meteor.startup(() => {
  // code to run on server at startup
});

Meteor.methods({
  'add.click'() {
    clicks = Clicks.find().count
  }
});
