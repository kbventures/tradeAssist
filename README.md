# tradeAssist

Trade Analsysis App Using The MERN Stack With TypeScript & JWT Authentication

## Features:

- Create User Profile
- Login Securely
- Make changes to personal profile
- Purchase Premium Services
- Add trades & Save Trades
- Trade History
- View History On charts
- Administration board and access

## Technology Stack:

- TypeScript
- Node js
- Express Js
- MongoDB
- JWT
- React
- React CSS Primer Design System
- Redux
- Jest
- React Paypal Button V2

## Usage

### Env Variables

Create a .env file in then root and add the following

```
NODE_ENV = development
PORT = 5000
MONGO_URI = your mongodb uri
JWT_SECRET = 'abc123'
PAYPAL_CLIENT_ID = your paypal client id
```

## Install Dependencies

```
npm install
cd frontend
npm install
```

### Run

```
# Run frontend
npm run client

# Run backend
npm run server
```

- Version: 1.0.0
- License: MIT
- Author: Ken Beaudin

### Contribute

## How Do I Contribute Using Git?

1. Clone the repository with this command if you don't have it:

   ```shell
   git clone https://github.com/kbventures/tradeAssist.git
   ```

2. Run the following command to make sure you have the latest changes on the main branch

   ```shell
   git pull
   ```

3. Create a new feature branch with a descriptive name and only make your changes here. For example, to add this README documentation I would call this branch `add-git-workflow`.

   ```shell
   git checkout -b <your feature branch name>
   ```

4. Make as many changes as you need in your feature branch. You can use the following commands per commit message.

   ```shell
   git add .
   git status
   git commit -m <your commit message>
   ```

5. Once your feature is ready and you're ready to merge into the main branch first make sure to push your local branch changes to GitHub's computers.

   ```shell
   git push --set-upstream origin <your feature branch name>
   ```

6. Go to https://github.com/kbventures/tradeAssist/branches and you should see your newly pushed feature branch. Find and click the button "New pull request" to request for your changes to be "pulled" into the main branch.

7. When you click the button, complete the form required for each pull request and click "Create pull request".

8. In the top-right corner click "Reviewers" and add one person on the team as a reviewer for the pull request.

9. Once the Reviewer has looked at your pull request and verified everything is OK, they will merge your pull request into the main branch.

<br/>

## What if I have a Conflict?

1. From within your feature branch, fetch the latest changes from the main branch

   ```sh
   git fetch origin main
   ```

2. Rebase so that your feature branch history is stacked on top of the latest main branch history

   ```sh
   git rebase origin main
   ```

3. Now resolve the conflicts manually in your code editor one at a time. Git will tell you which files have a conflict. Once you've resolved the conflicts run the following commands:

   ```sh
   git add .
   git rebase --continue
   ```

4. Write and save a commit message if all conflicts are resolved.

5. Push your rebased feature branch changes to GitHub's computers.

   ```sh
   git push -f origin <your feature branch name>
   ```

6. Go back to your pull request on Github your pull request should have no conflicts and you can merge into the main branch!

Also, don't forget the most important rule of rebasing:

> _NEVER REBASE ON A REMOTE BRANCH_

<br />

## How Do I Write Good Commit Message?

Why do we care to write a good commit message? A well-crafted Git commit message is the best way to communicate context about a change to other developers working on that project, and indeed, to your future self.

A commit has two parts: a subject (max 50 characters) and a description.
Use the following command to separate a subject from the description.

```sh
git commit -m "Subject" -m "Description..."
```

In each commit message:

1. Specify the type of commit in the subject. Example: `Feat: create landing page`.

   - feat: The new feature you're adding to a particular application
   - fix: A bug fix
   - style: Feature and updates related to styling
   - refactor: Refactoring a specific section of the codebase
   - test: Everything related to testing
   - docs: Everything related to documentation
   - chore: Regular code maintenance.

2. Separate the subject from the body
3. Remove whitespace errors
4. Remove unnecessary punctuation marks
5. Do not end the subject line with a period
6. Capitalize the subject line and each paragraph
7. Use the body to explain what changes you have made and why you made them.
8. Do not assume the reviewer understands what the original problem was, ensure you add it.
9. Do not think your code is self-explanatory
