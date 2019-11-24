# Techsmiths NASA Mars Website.
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Staging: https://techsmiths-mars-staging.herokuapp.com/
Production: https://techsmiths-mars.herokuapp.com/

## Introduction.
This week we are going to be using the open APIs provided by NASA to build a prototype education website about the NASA missions to Mars.

You should be able to sign up for an API Key, browse the APIs available to you and find all the documentation that you need at https://api.nasa.gov/.

## Getting started.
Just like last week we have a React application created by Create React App. The only difference this week was that it was created with the `--typescript` flag, which (unsuprisingly) gets us started in Typescript instead of JavaScript.

I've also editted the raw create react app output so that;
- We can use SASS
- We have a Router in our base component.
- We have some CircleCi configuration for automatically running our tests.
- We have this README!

### Running the app locally.
Should be really easy! Just
```npm install```

and then `npm start` to run the server, or `npm test` to run the tests.

### GitHub permissions
You'll want permissions to push branches to the GitHub repo. To get those, I'll need to add you all to the TechsmithsUK GitHub organisation. Send over your GitHub usernames and I'll get that done.

None of you will have access to the `master` branch though. This is deliberate - you'll have to merge into this via Pull Requests!

### Circle CI.
Every time you push a commit to GitHub, Circle CI is going to run our tests for us.
At some point, you might break some of these tests, and want to figure out what happened!

Create an account with Circle CI now, so that you have access to these logs.
https://circleci.com/signup/

(the permissions should 'JustWork' based on your GitHub permissions, but let me know if that doesn't work)

### Heroku
We are using a service called Heroku to host our apps. Heroku will automatically update our staging app every time we commit to master, and we can deploy to production with the click of a button!

Right now we only have the free version of Heroku, which won't allow all of us to easily have access to the same workflow, so you'll need to ask me if anything goes wrong / we want to do a deployment.

(If this becomes a pain, then let me know and we'll just update it).

## Making Changes
I've set up a fairly minimal build pipeline for you to use.
It goes like this

- you make a new branch for your new feature.
- you add commits to the new branch
- you push those commits to GitHub
- (as early as possible) you raise a Pull Request (PR) for the branch
- I'll take a look at the the PR, and might suggest some improvements.
- Once the PR is approved, it can be merged into master (fixing any merge conflicts if required)
- As soon as it gets merged into master, Heroku will deploy the app to our staging environment.
- You'll then need to get Sign off from your PM (Sasha).
- Once she is happy, we can deploy the change to production.

Our goal is to be deploying to master as often as possible (ideally lots of times each day), as several small changes tend to be safer and easier to manage than a single huge one.

KEEP YOUR COMMITS AND PULL REQUESTS SMALL. It will make all of this much easier, and help avoid big clashes between different branches of the codebase.