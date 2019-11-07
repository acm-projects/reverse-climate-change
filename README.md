# Reverse Climate Change!
Reverse Climate Change! is a game designed to simulate a highly-simplified view of the systematic problems we have in first-world countries that cause climate change and some equally-simplified solutions.
> Everything in this document is subject to change based on the ideas and preferences of the ACM Projects participants.
## Game Mechanics
The player will start with a city with 5x5 tiles with a random distribution of open, power plant, metropolis, and water tiles with a bias to grouping i.e. where there’s a power plant, it’s more likely that it will be neighbored by another power plant than a metropolis. Shortly after the game starts, the region implements a carbon tax that is a function of carbon footprint, which is the catalyst for you, the mayor, to try to move to renewable energy: the region wants you to improve carbon footprint. 

There is also the added goal of expanding the number of citizens in your city by adding more metropolis tiles. For this goal, the mechanics are similar to SimCity, citizens pay taxes, adding to your money, but having metropolis tiles also costs some money, so you need to make sure that every metropolis tile has enough citizens to turn a profit. And citizens will start moving away if you do not improve the metrics above. As you add more metropolises, they need more power, and sometimes it will make more sense to buy a faster-yielding but high-carbon-footprint power plant to supply it.

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

For simplicity, the time to build is set at 0

These are all relative values between the highest value 100 and the zero-value 0. The recurring cost of each structure is a function of its cost to build.

## MVP
An application that implements the features of the game above on a simple GUI.  The most important part is implementing the game logic, so I will suggest that we do this on a primarily text-based format before tackling a GUI.

## Technology Stack Choices
[*MongoDB.*](https://www.mongodb.com/cloud/atlas) For storing game state because it is open-source and NoSQL which will make it flexible-enough for our needs, and we can use it for free at our scale.

*Game engine.* I have identified two open-source game engines that we can decide between: [Corona](https://coronalabs.com/) and [Cocos 2D-X](https://cocos2d-x.org/).  Cocos 2D-X is completely cross-platform, so it can be used on mobile, web, or desktop, and Corona is cross-platform for mobile environments, though we will be focusing on one over the course of development.

| | Corona | Cocos 2D-X |
| ------------- | ------------- | ------------- |
| Open-source  | Yes | Yes  |
| Dedicated IDE | No | Yes  | 
| Dedicated simulator | Yes | Yes |
| Javascript support | No | Yes |
| Lua support | Yes | Yes |

*Assets.* The art is a super fun part of building a game, but I think it will be helpful to have a few places to go to look for sprites so that does not take up too much time. This [pack](https://devilsworkshop.itch.io/big-pixel-isometric-block-pack-free-2d-sprites) or this [pack](https://mewki.itch.io/25-isometric-blocks) might be good for the tiles in the game.

## Prerequisite Software
Cocos Creator (for Cocos 2D-X), a favorite text editor (my personal favorite is [Atom](http://atom.io) but Visual Studio Code is also very good), and everyone’s best friend, Git!

## Future Extensions
For post-MVP, we could add different types of metropolises or some kind of zoning system à la SimCity.
Add upgrade options for power plants in efficiency and carbon footprint
Add population expansion for the metropolises

## Inspiration games
*City2048.* A beautiful isometric 2D game that inspires my vision of the graphics.
*SimCity.* One of my favorite games ever, inspired the content of Reverse Climate Change!
