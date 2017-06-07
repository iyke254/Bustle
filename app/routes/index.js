import Ember from 'ember';

var news = [{
  id: 1,
  headline: "How NASA LOST the election",
  description: "After massive voter fraud the Jubilee coalition was elected back to power for a second term. However an election petition has been filed.",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5TSvhCp2qmH4KrdP3lPIDdxrbvVdlhFBbnaeuUBcqqyBnnoJvwQ",
  author: "Najib Isaac",
  time: "11.50am on August 9th"
}, {
  id: 2,
  headline: "How Jubilee WON the election",
  description: "After a lanslide victory Jubilee coalition was elected back to power for a second term. However an election petition has been filed.",
  image: "http://www.the-star.co.ke/sites/default/files/styles/new_full_content/public/articles/2017/02/09/1418453.jpg?itok=bmIcYFV3",
  author: "Osman Nderi",
  time: "2.50pm on August 9th"
}];

export default Ember.Route.extend({
  model(){
    return news;
  },
});
