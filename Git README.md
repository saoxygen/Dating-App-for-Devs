<!-- This read me file contains all the information I used and learnt while building this project -->

# Git Commands and Notes

* git add . / git add -all / git add -A / git add *
> This tells git to keep track of all your files (you can use any one of the above commands to acheive this)

* git add -u
> Stage Modified and deleted files

* git add -A
> stage Modified, deleted and untracked files

* git init
> Initializes a new Git (Version Control System (VCS)) repository in the current folder. It creates a hidden .git directory that starts tracking changes in the project.

* git status
> Shows the current state of your working directory and staging area. It tells you which files are modified, staged, or untracked.

* git add index.html 
> git add *Name of the file* will tell git to keep track of this file. But it stays in staging until you commit these changes

* git rm --cached index.html
> git rm --cached *Name of the file* will tell git to stop tracking said file

* git commit -m "first commit"
> Saves the staged changes into the repository history with a message. Each commit acts as a snapshot of your project at that point in time.

* git branch -M main
> Creates, lists, or switches between branches. Branches allow you to work on features or fixes without affecting the main codebase.

* git remote add origin 'link to the repository'
> Links your local repository to a remote repository (usually on GitHub, GitLab, or Bitbucket). origin is the default name given to that remote connection.

* git push -u origin main
> Uploads your committed changes from your local repository to the remote repository. This makes your updates available to others or to backup online.

* git restore --staged index.html
> removes file from staging, meaning this file won't get commited

* git commit -a -m "updated index.html file"
> This command skips the staging stage and goes straight to commit

* git commit -m "updated Git README file" --amend
> correct any spelling errors made in your previous commit 

* git branch NewFeature
> Create a new branch named *NewFeature*  
> Creating a different branch separate from the main is needed so you can fix bugs or create new features without affecting the main branch

* git branch
> To see the name of all the current branches

* git switch NewFeature
> To access another branch, in this case *NewFeature*

* git switch -c NewFeature
> This creates the new branch and switches you to that new branch simultaneously

* git merge -m "Merge NewFeature into the main branch" NewFeature
> While in the *main* branch you can merge the *NewFeature* branch into the *main* branch

* git branch -d NewFeature
> Git command to delete a branch

* git stash
> Temporarily saves your uncommitted changes and reverts your working directory to a clean state. This allows you to switch branches or pull updates without losing work. You can later restore the changes using *`git stash pop`* or *`git stash apply`*.

* git fetch
> Downloads new commits, branches, and tags from the remote repository without merging them. It updates your remote-tracking branches (e.g., origin/main). This lets you review changes before integrating them.
>
> Fetch results: `branch            Kopano-Testing -> FETCH_HEAD`

* git log -1 `FETCH_HEAD`
> Using the initial fetch results you can look at the logs to see what changes were made.

* git checkout -b feature-name
> Creates a new branch called feature-name and immediately switches to it. This allows you to develop a feature in isolation from the main branch. It helps keep your main branch stable
>
> **Please note!**  
> This is an older command, best practice is to use `git switch` or `git restore`

* .gitignore 
> This tells git to ignore all files listed in the *.gitignore* file  
> Good for ignoring sensitave data such as passwords  
> Documentation: <https://github.com/github/gitignore>

---

### Initial Git command at the beginning of a project

> git init  
git add *  
git commit -m "first commit"   
git branch -M main  
git remote add origin https://github.com/saoxygen/Dating-App-for-Devs.git  
git push -u origin main

### Second Git command for exist project

> git init  
 git add *  
 git commit -m "second commit"  
 git branch -M main  
 git push -u origin main

 ---

 ### Additional Git Commands for odd situations you might face


* git diff
> Shows the differences between the two files/which changes were made.

* git config --global user.name "Kopano Sekonyela"
* git config --global user.email kopanodrkk@icloud.com
* git config --global init.default branch main
 
* git rm "index.html"
> Physically deletes the file from your project

* git restore "index.html"
> Physically restores the file into your project

* git mv "index.html" "landingPage.html"
> Change the name of the file from index to landingPage

* git log or git log --oneline
> Shows all commits made

* git log -p
   + Press *q* to exit the logs
> More detailed logs

* git reset uuid
> This is restore all your files to the state of the historical commit you made *(get the commit uuid from git log command)*

* git gc
> *git gc / git prune* does not remove normal files from your working directory.
It removes unreachable Git objects stored inside the hidden .git/objects/ folder — usually from deleted branches, rebases, or resets.  
>
> These objects:  
> + Are not tied to any current branch  
> + Do not appear in git status  
> + Are not visible as normal project files

---  

# Git Best Practices 

1️⃣ Always *`git pull`* before *`git push`*
> Pulling first ensures your local branch includes the latest remote changes. This reduces merge conflicts and prevents accidentally overwriting someone else’s work. It keeps the shared branch stable.

2️⃣ Commit small, focused changes
> Pulling first ensures your local branch includes the latest remote changes. This reduces merge conflicts and prevents accidentally overwriting someone else’s work. It keeps the shared branch stable.

3️⃣ Never commit secrets (.env, API keys, passwords)
> Sensitive data should be in *`.env`* and added to *`.gitignore`*. Once secrets are committed, they are difficult to fully remove from history. Exposing secrets can cause security breaches.

4️⃣ Do not commit *`node_modules/`* or build folders
> Dependencies and build outputs can be regenerated. Tracking them bloats the repository and slows Git operations. Only commit source code and configuration.

5️⃣ Use branches for features and fixes
> Create a separate branch for each feature or bug fix. This protects main from unstable or incomplete work. It also makes code reviews cleaner. **The main branch should always be deployable.**

