/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Thing = require('../api/thing/thing.model');
var User = require('../api/user/user.model');
var Submission = require('../api/submission/submission.model');


//We don't need this data, look into a way of removing it and it's related API
Thing.find({}).remove(function() {
  Thing.create({
    name : 'Development Tools',
    info : 'Integration with popular tools such as Bower, Grunt, Karma, Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, Stylus, Sass, CoffeeScript, and Less.'
  }, {
    name : 'Server and Client integration',
    info : 'Built with a powerful and fun stack: MongoDB, Express, AngularJS, and Node.'
  }, {
    name : 'Smart Build System',
    info : 'Build system ignores `spec` files, allowing you to keep tests alongside code. Automatic injection of scripts and styles into your index.html'
  },  {
    name : 'Modular Structure',
    info : 'Best practice client and server structures allow for more code reusability and maximum scalability'
  },  {
    name : 'Optimized Build',
    info : 'Build process packs up your templates as a single JavaScript payload, minifies your scripts/css/images, and rewrites asset names for caching.'
  },{
    name : 'Deployment Ready',
    info : 'Easily deploy your app to Heroku or Openshift with the heroku and openshift subgenerators'
  });
});

User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin'
  },  {
    provider: 'local',
    role: 'reviewGroup1',
    name: 'KK',
    email: 'KK@admin.com',
    password: 'admin'
      },
      {
          provider: 'google',
          role: 'admin',
          name: 'Mitchell Finzel',
          email: 'finze008@morris.umn.edu',
          google: {
              email: 'finze008@morris.umn.edu',
                family_name: 'Finzel',
                gender: 'male',
                given_name: 'Mitchell',
                hd: 'morris.umn.edu',
                id: '112639306116346340748',
                link: "https://plus.google.com/112639306116346340748",
                locale: "en",
                name: "Mitchell Finzel",
                picture: "https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/4252rscbv5M/photo.jpg",
                verified_email: true
          }
      },
      function() {
      console.log('finished populating users');
    }
  );
});

Submission.find({}).remove(function(){
    Submission.create({
        title: "The Properties of an Aardvark who Eats Ants",
        format: "Humanities Proposal",
        abstract: "Once upon a time, an aardvark ate an ant. Not just any ant, the ant was soaked in radioactive toxins.",
        presentationType: "Oral Presentation",
        formatChange: true,
        presenterInfo: {first: "Aladdin", last: "VonSchweidel", email: "vonsc999@morris.umn.edu"},
        copresenterOneInfo: {first: "Adubla", last: "Ablumgata", email: "ablum@morris.umn.edu"},
        copresenterTwoInfo: {first: "", last: "", email: ""},
        discipline: "Philosophy",
        sponsors: [], //Might need to worry about if this is static for the DB later.
        adviserInfo: {name: "KK Lamberty", email: "lamberty@morris.umn.edu"},
        featuredPresentation: false,
        mediaServicesEquipment: "",
        specialRequirements: "",
        presenterTeeSize: "S",
        otherInfo: "",
        approval: false,
        status: {strict: "Pending Review", text: "Has not been reviewed yet"}
    }, {
        title: "Bill & Nye's Excellent Experimental Adventure",
        format: "Artist Statement",
        abstract: "Here, I, William Sanford Nye, will talk about all my college adventures.",
        presentationType: "Performance",
        formatChange: false,
        presenterInfo: {first: "Bill", last: "Nye", email: "nyexx10@morris.umn.edu"},
        copresenterOneInfo: {first: "", last: "", email: ""},
        copresenterTwoInfo: {first: "", last: "", email: ""},
        discipline: "CSci",
        sponsors: [], //Might need to worry about if this is static for the DB later.
        adviserInfo: {name: "KK Lamberty", email: "lamberty@morris.umn.edu"},
        featuredPresentation: true,
        mediaServicesEquipment: "Microphone for my sick rhymes.",
        specialRequirements: "",
        presenterTeeSize: "XL",
        otherInfo: "",
        approval: false,
        status: {strict: "Pending Review", text: "Not all reviewers have had a chance to look at it yet"}
    }, {
        title: "On the migration of majestic space whales",
        format: "Artist Statement",
        abstract: "They swim through the endless void, without care and knowing not the concept of time." +
                "Through the study of these great beats we can come to better know not only their migration patterns," +
                "but ourselves as well. Throughout time humanity has sought answers, be it through science, religion, or otherwise." +
                "No matter the path of exploration, the fact remains that we always look to the stars. In this ground breaking research" +
                "we will delve deep into the life of the majestic space whale. Discovered only recently, these grand creatures meander aimlessly" +
                "throughout the stars, living millions of years. Through the study of their migration patterns, we can gain insight into interstellar travel" +
                "and means by which life can be sustained in a vacuum. Although the focus of this research is on the migration patterns of these" +
                "great beasts and their applicability to commercial space travel, during our research we were privileged to witness the death of" +
                "a space whale, and we would be wrong not to make note of the event. From what we know, a space whale gradually grows in size over the course of it's" +
                "life, as is the case with many animals we are already familiar with. However, the lack of gravity in space allows the space whale to grow in size seemingly without" +
                "limit. Eventually, provided it is not killed by other means, a space whale will reach a size where it develops a noticeable gravity of it's own. Once this " +
                "happens layers of dust and rock will begin to collect upon the space whale until eventually the space whale is rendered unable to feed, or is crushed to death.",
        presentationType: "Performance",
        formatChange: false,
        presenterInfo: {first: "Timmy", last: "Flabberghast III", email: "flabb137@morris.umn.edu"},
        copresenterOneInfo: {first: "Sally", last: "Birch", email: "birch001@morris.umn.edu"},
        copresenterTwoInfo: {first: "", last: "", email: ""},
        discipline: "Biology",
        sponsors: [], //Might need to worry about if this is static for the DB later.
        adviserInfo: {name: "KK Lamberty", email: "lamberty@morris.umn.edu"},
        featuredPresentation: true,
        mediaServicesEquipment: "Microphone for my sick rhymes, 5 laser stage lights with automated gimbals.",
        specialRequirements: "A whale suit.",
        presenterTeeSize: "XXXXXXXXXXXXXXXXXXXXL",
        otherInfo: "yes.",
        approval: true,
        status: {strict: "Approved", text: "Ready for launch"}
    }, {
        title: "Vampires in US History",
        format: "Social Science",
        abstract: "The impacts of vampires on human society through out the ages in the United States.",
        presentationType: "Oral Presentation",
        formatChange: true,
        presenterInfo: {first: "Teresa", last: "Bunt", email: "buntx489@morris.umn.edu"},
        copresenterOneInfo: {first: "Dill", last: "Pickle", email: "pickl002@morris.umn.edu"},
        copresenterTwoInfo: {first: "Crust", last: "Bun", email: "bunxx501@morris.umn.edu"},
        discipline: "History",
        sponsors: [], //Might need to worry about if this is static for the DB later.
        adviserInfo: {name: "KK Lamberty", email: "lamberty@morris.umn.edu"},
        featuredPresentation: true,
        mediaServicesEquipment: "",
        specialRequirements: "fangs",
        presenterTeeSize: "S",
        otherInfo: "yes.",
        approval: false,
        status: {strict: "Awaiting Revisions", text: "Presenter needs to respond to comments and make some changes"}
    }, {
        title: "A study of the properties of a paperclip in the digestive system of a sloth",
        format: "Artist Statement",
        abstract: "Many physicists would agree that, had it not been for scatter/gather I/O, the study of link-level acknowledgements might never have occurred. " +
            "While such a claim might seem unexpected, it usually conflicts with the need to provide thin clients to hackers worldwide. " +
            "In fact, few security experts would disagree with the construction of kernels. In order to overcome this question, we construct an analysis of the Ethernet (Mollah)," +
            " which we use to prove that redundancy and replication can interfere to achieve this aim. ",
        presentationType: "Performance",
        formatChange: false,
        presenterInfo: {first: "Sally", last: "Birch", email: "birch001@morris.umn.edu"},
        copresenterOneInfo: {first: "Timmy", last: "Flabberghast III", email: "flabb137@morris.umn.edu"},
        copresenterTwoInfo: {first: "Dill", last: "Pickle", email: "pickl002@morris.umn.eu"},
        discipline: "pottery",
        sponsors: [], //Might need to worry about if this is static for the DB later.
        adviserInfo: {name: "KK Lamberty", email: "lamberty@morris.umn.edu"},
        featuredPresentation: false,
        mediaServicesEquipment: "",
        specialRequirements: "a sloth",
        presenterTeeSize: "M",
        otherInfo: "Maybe",
        approval: false,
        status: {strict: "Awaiting Adviser Approval", text: "student did not check with adviser first!"}
    });
});