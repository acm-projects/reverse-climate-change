# Reverse Climate Change!
Reverse Climate Change! is a game designed to simulate a highly-simplified view of the systematic problems we have in first-world countries that cause climate change and some equally-simplified solutions.
> Everything in this document is subject to change based on the ideas and preferences of the ACM Projects participants.
## Game Mechanics
The player will start with a city with 5x5 tiles with a random distribution of open, power plant, metropolis, and water tiles with a bias to grouping i.e. where there’s a power plant, it’s more likely that it will be neighbored by another power plant than a metropolis. Shortly after the game starts, the region implements a carbon tax that is a function of carbon footprint, which is the catalyst for you, the mayor, to try to move to renewable energy: the region wants you to improve carbon footprint. 

There is also the added goal of expanding the number of citizens in your city by adding more metropolis tiles. For this goal, the mechanics are similar to SimCity, citizens pay taxes, adding to your money, but having metropolis tiles also costs some money, so you need to make sure that every metropolis tile has enough citizens to turn a profit. And citizens will start moving away if you do not improve the metrics above. As you add more metropolises, they need more power, and sometimes it will make more sense to buy a faster-yielding but high-carbon-footprint power plant to supply it.

The player can expand their city when they have enough money to do so, and the amount of money that this costs is based on the number of tiles added i.e. expanding a 5x5 city to a 6x6 will cost (36-25) * cost per tile.

| Power Plant  | Cost to build | Time to build | Carbon footprint |
| ------------- | ------------- | ------------- | ------------- |
| Coal  | 45 | 20  | 100 |
| Natural Gas  | 50 | 20  | 75 |
| Nuclear  | 45 | 60  | 20 |
| Solar  | 100 | 75  | 0 |
| Wind  | 75 | 75  | 0 |
| Hydroelectric (must be built on water) | 40 | 100  | 0 |
