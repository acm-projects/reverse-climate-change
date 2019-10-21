# Reverse Climate Change!
Reverse Climate Change! is an idle game designed to simulate a highly-simplified view of the systematic problems we have in first-world countries that cause climate change and some equally-simplified solutions.
> Everything in this document is subject to change based on the ideas and preferences of the ACM Projects participants.
## Game Mechanics
The player will start with a city with 5x5 tiles with a random distribution of open, power plant, metropolis, and water tiles with a bias to grouping i.e. where there’s a power plant, it’s more likely that it will be neighbored by another power plant than a metropolis. The goal is to grow your city, in population, money, and land, while keeping your carbon footprint as low as possible.

For this goal, the mechanics are similar to SimCity, citizens pay taxes, adding to your money, but having metropolis tiles also costs some money, so you need to make sure that every metropolis tile has enough citizens to turn a profit. And citizens will start moving away if you do not improve the metrics above. As you add more metropolises, they need more power, and sometimes it will make more sense to buy a faster-yielding but high-carbon-footprint power plant to supply it.

The player can expand their city when they have enough money to do so, and the amount of money that this costs is based on the number of tiles added i.e. expanding a 5x5 city to a 6x6 will cost (36-25) * cost per tile.

| Power Plant  | Cost to build | Time to build | Carbon footprint |
| ------------- | ------------- | ------------- | ------------- |
| Coal | 45 | 20  | 100 |
| Natural Gas | 50 | 20  | 75 |
| Nuclear | 45 | 60  | 20 |
| Solar | 100 | 75  | 0 |
| Wind | 75 | 75  | 0 |
| Hydroelectric (must be built on water) | 40 | 100  | 0 |

| Metropolis  | Cost to build | Max. Citizens | Carbon footprint |
| ------------- | ------------- | ------------- | ------------- |
| Large | 100 | 100  | 100 |
| Medium | 50 | 50  | 50 |
| Small | 25 | 25  | 25 |

For simplicity, the time to build is set at 0 for metropolises

These are all relative values between the highest value 100 and the zero-value 0. The recurring cost of each structure is a function of its cost to build.

## MVP
An application that implements the features of the game above on a simple GUI.  The most important part is implementing the game logic, so I will suggest that we do this on a primarily text-based format before tackling a GUI.

## Technology Stack Choices
[*MongoDB.*](https://www.mongodb.com/cloud/atlas) For storing game state because it is open-source and NoSQL which will make it flexible-enough for our needs, and we can use it for free at our scale.

[*Cocos 2D-X.*](https://www.cocos.com/en/) Completely cross-platform, so it can be used on mobile, web, or desktop, and Corona is cross-platform for mobile environments, though we will be focusing on one over the course of development.

*Assets.* The art is a super fun part of building a game, but I think it will be helpful to have a few places to go to look for sprites so that does not take up too much time. This [pack](https://devilsworkshop.itch.io/big-pixel-isometric-block-pack-free-2d-sprites) or this [pack](https://mewki.itch.io/25-isometric-blocks) might be good for the tiles in the game. **We have Oliver Baker creating sprites for us, thank you Oliver!**

## Prerequisite Software
Cocos Creator (for Cocos 2D-X), a favorite text editor (my personal favorite is [Atom](http://atom.io) but Visual Studio Code is also very good), and everyone’s best friend, Git!

## Future Extensions
For post-MVP, we could add different types of metropolises or some kind of zoning system à la SimCity.
Add upgrade options for power plants in efficiency and carbon footprint
Add population expansion for the metropolises

## Inspiration games
*City2048.* A beautiful isometric 2D game that inspires my vision of the graphics.
*SimCity.* One of my favorite games ever, inspired the content of Reverse Climate Change!

# Git Workflow
## When starting a project
1. Download [Git](https://git-scm.com/download)
1. Go to [the repository](https://github.com/acm-projects/reverse-climate-change), and find "Clone or Download," and copy that link
1. Go to a directory on your system
1. Open a terminal in that directory
1. Run `git clone <URL you copied>`
1. Run `cd <Project directory name>`
## When working on a project
1. Go to the directory from the previous instructions
1. Open a terminal in that directory
1. Run `git checkout <branch>` or `git checkout -b <branch>` to start a new branch **never develop on the master branch**
1. Run `git pull`, this should be done everytime you sit down to develop to help avoid huge merge conflicts
1. If there are merge conflicts, got to "When resolving merge conflicts"
1. Make your changes
1. Run `git add <files you want to commit>` or `git add --all` to commit all changed files
1. Run `git commit -m <descriptive commit message>`
1. Run `git push` or if there is an error, copy the command given
## When resolving merge conflicts
1. Git will throw some ugly looking error
1. Go into the files it lists, and you will see some blocks of coded that are divided by
```
>>>>>>>> <some numbers>
this is some code
======
this is some different code
>>>>>>>> HEAD
```
Delete all of the tags and *one* of the blocks of code
1. Do this for every file in the list
1. Commit those changes
## When finished with a feature
Every feature should exist only on a branch until this happens...
1. When a feature is complete and well-tested, push all of the finished code to that branch in GitHub
1. Go to [the repository](https://github.com/acm-projects/reverse-climate-change) and click "Branches," find your branch, and click "New Pull Request"
1. Title the Pull Request and write a detailed description of the feature and changes
1. Assign us as reviewers
1. Once the pull request has been reviewed, the Project Manager *only* will merge it
