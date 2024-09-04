---
sidebar_label: "Github Actions"
sidebar_position: 2
last_update:
  date: 04 Sep 2024 10:45:00 GMT
  author: Etienne Baumgartner
---

# Github Actions

Github actions is an automation platform that can run your tasks on code such as **Testing**, **Building** and **Deploying** when you push your code.

**[Github actions](https://github.com/features/actions)**

<!-- truncate -->

## Demo

The main idea for actions is to run certain steps when you push or merge your code to your repository on github.

1. Create a `.github/workflow` folder in the root directory of your repository
2. Create a file called `demo.yml`

```yaml title=".github/workflow/demo.yml"
# The name of the workflow
name: GitHub Actions Demo
# Dynamically sets the run name to include the GitHub username who triggered the workflow
run-name: ${{ github.actor }} is testing out GitHub Actions 🚀
# The workflow is triggered by a push event
on: [push]
jobs:
  # Defines a job named Explore-GitHub-Actions
  Explore-GitHub-Actions:
    # Specifies that the job should run on the latest version of Ubuntu
    runs-on: ubuntu-latest
    steps:
      # Outputs a message indicating that the job was triggered by a specific event
      - run: echo "🎉 The job was automatically triggered by a ${{ github.event_name }} event."
      # Outputs a message indicating the operating system of the runner
      - run: echo "🐧 This job is now running on a ${{ runner.os }} server hosted by GitHub!"
      # Outputs the branch name and repository name
      - run: echo "🔎 The name of your branch is ${{ github.ref }} and your repository is ${{ github.repository }}."
      # Uses the actions/checkout@v4 action to check out the repository code
      - name: Check out repository code
        uses: actions/checkout@v4
      # Outputs a message indicating that the repository has been cloned to the runner
      - run: echo "💡 The ${{ github.repository }} repository has been cloned to the runner."
      # Outputs a message indicating that the workflow is ready to test the code
      - run: echo "🖥️ The workflow is now ready to test your code on the runner."
      # Lists the files in the repository directory
      - name: List files in the repository
        run: |
          ls ${{ github.workspace }}
      # Outputs the job's status
      - run: echo "🍏 This job's status is ${{ job.status }}."
```

Push this code and checkout under `Actions`.

## Use cases

Check out **[ these use cases](https://docs.github.com/en/actions/use-cases-and-examples)** for inspirations and instructions.

In this tool guide I will mostly use it to automate testing, since it will have multiple benefits.

- You will be more confident in your code
- Your professors will love it
- Your current / next employer will love it

It's a good practice which you should start applying to your work.

### Testing

**Imagine the following:**

> You are starting a project with several other students. You want to make sure that while changes are made in your code, the overall functionality is assured and tested before you merge something into the master branch.

This is perfect for automated workflows via actions.

Github action allow you to run all the tests you created automatically when you push your code
Afterwards you can setup guards that won't allow any Pull Requests into your main branch without all tests succeeding.

<Author author="epb"></Author>