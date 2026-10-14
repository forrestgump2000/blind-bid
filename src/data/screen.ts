import type { TabDef } from './types.ts'

const gen1 = `Bulbasaur Ivysaur Venusaur Charmander Charmeleon Charizard Squirtle Wartortle Blastoise Caterpie Metapod Butterfree Weedle Kakuna Beedrill Pidgey Pidgeotto Pidgeot Rattata Raticate Spearow Fearow Ekans Arbok Pikachu Raichu Sandshrew Sandslash Nidoran♀ Nidorina Nidoqueen Nidoran♂ Nidorino Nidoking Clefairy Clefable Vulpix Ninetales Jigglypuff Wigglytuff Zubat Golbat Oddish Gloom Vileplume Paras Parasect Venonat Venomoth Diglett Dugtrio Meowth Persian Psyduck Golduck Mankey Primeape Growlithe Arcanine Poliwag Poliwhirl Poliwrath Abra Kadabra Alakazam Machop Machoke Machamp Bellsprout Weepinbell Victreebel Tentacool Tentacruel Geodude Graveler Golem Ponyta Rapidash Slowpoke Slowbro Magnemite Magneton Farfetch’d Doduo Dodrio Seel Dewgong Grimer Muk Shellder Cloyster Gastly Haunter Gengar Onix Drowzee Hypno Krabby Kingler Voltorb Electrode Exeggcute Exeggutor Cubone Marowak Hitmonlee Hitmonchan Lickitung Koffing Weezing Rhyhorn Rhydon Chansey Tangela Kangaskhan Horsea Seadra Goldeen Seaking Staryu Starmie Mr.Mime Scyther Jynx Electabuzz Magmar Pinsir Tauros Magikarp Gyarados Lapras Ditto Eevee Vaporeon Jolteon Flareon Porygon Omanyte Omastar Kabuto Kabutops Aerodactyl Snorlax Articuno Zapdos Moltres Dratini Dragonair Dragonite Mewtwo Mew`
  .split(' ')
  .map((n, i) => `${n.replace('Mr.Mime', 'Mr. Mime')} | ${i + 1}`)
  .join('\n')

const laterPokemon = `
Chikorita | 152
Cyndaquil | 155
Typhlosion | 157
Totodile | 158
Togepi | 175
Ampharos | 181
Espeon | 196
Umbreon | 197
Scizor | 212
Heracross | 214
Tyranitar | 248
Lugia | 249
Ho-Oh | 250
Celebi | 251
Treecko | 252
Torchic | 255
Blaziken | 257
Mudkip | 258
Swampert | 260
Gardevoir | 282
Aggron | 306
Flygon | 330
Absol | 359
Salamence | 373
Metagross | 376
Kyogre | 382
Groudon | 383
Rayquaza | 384
Jirachi | 385
Piplup | 393
Infernape | 392
Lucario | 448
Garchomp | 445
Gible | 443
Darkrai | 491
Arceus | 493
Snivy | 495
Zoroark | 571
Hydreigon | 635
Greninja | 658
Froakie | 656
Sylveon | 700
Goodra | 706
Rowlet | 722
Decidueye | 724
Litten | 725
Incineroar | 727
Mimikyu | 778
Lunala | 792
Solgaleo | 791
Toxtricity | 849
Corviknight | 823
Dragapult | 887
Zacian | 888
Grookey | 810
Scorbunny | 813
Cinderace | 815
Sprigatito | 906
Fuecoco | 909
Quaxly | 912
Koraidon | 1007
Miraidon | 1008
Tinkaton | 959
`

export const screen: TabDef = {
  id: 'screen',
  name: 'TV & Cinema',
  categories: [
    {
      id: 'tv-shows',
      name: 'All TV Shows',
      blurb: 'Every show you’ve binged, from sitcoms to prestige.',
      hint: 'TV series',
      items: `
Breaking Bad
Game of Thrones
The Sopranos
The Wire
Friends
The Office | | The Office (American TV series)
Seinfeld
Stranger Things
The Simpsons
SpongeBob SquarePants
Grey's Anatomy
Mad Men
The Walking Dead
Better Call Saul
Succession
The Bear | | The Bear (TV series)
Squid Game
Money Heist
Peaky Blinders
The Crown | | The Crown (TV series)
Sherlock | | Sherlock (TV series)
Doctor Who
Lost | | Lost (TV series)
Prison Break
24 | | 24 (TV series)
Dexter | | Dexter (TV series)
House | | House (TV series)
How I Met Your Mother
The Big Bang Theory
Modern Family
Parks and Recreation
Brooklyn Nine-Nine
It's Always Sunny in Philadelphia
Curb Your Enthusiasm
Arrested Development
Scrubs | | Scrubs (TV series)
That '70s Show
Malcolm in the Middle
Everybody Loves Raymond
The Fresh Prince of Bel-Air
Martin | | Martin (TV series)
Family Matters
Full House
Frasier
Cheers
The Golden Girls
I Love Lucy
M*A*S*H | | M*A*S*H (TV series)
Twin Peaks
The X-Files
Buffy the Vampire Slayer
Supernatural | | Supernatural (American TV series)
Gossip Girl
The O.C.
One Tree Hill
Gilmore Girls
Grey's Anatomy
Euphoria | | Euphoria (American TV series)
The Boys | | The Boys (TV series)
The Last of Us | | The Last of Us (TV series)
House of the Dragon
The Mandalorian
Wednesday | | Wednesday (TV series)
Ozark | | Ozark (TV series)
Narcos
Yellowstone | | Yellowstone (American TV series)
True Detective
Westworld | | Westworld (TV series)
Black Mirror
Fargo | | Fargo (TV series)
Severance | | Severance (TV series)
Ted Lasso
The White Lotus
Abbott Elementary
Atlanta | | Atlanta (TV series)
Insecure | | Insecure (TV series)
Power | | Power (TV series)
Empire | | Empire (2015 TV series)
Snowfall | | Snowfall (TV series)
The Chi
Boardwalk Empire
Vikings | | Vikings (2013 TV series)
The Witcher | | The Witcher (TV series)
Bridgerton
Outer Banks | | Outer Banks (TV series)
Cobra Kai
Shōgun | | Shōgun (2024 TV series)
Fallout | | Fallout (American TV series)
Arcane | | Arcane (TV series)
Avatar: The Last Airbender
Rick and Morty
Family Guy
South Park
BoJack Horseman
Futurama
The Office | | The Office (British TV series)
Fleabag
Killing Eve
Downton Abbey
Line of Duty
Luther | | Luther (TV series)
Top Gear
Planet Earth | | Planet Earth (2006 TV series)
The Twilight Zone
Star Trek: The Original Series
Star Trek: The Next Generation
Battlestar Galactica | | Battlestar Galactica (2004 TV series)
Smallville
Heroes | | Heroes (American TV series)
Glee | | Glee (TV series)
Hannah Montana
iCarly
Gotham | | Gotham (TV series)
Daredevil | | Daredevil (TV series)
Invincible | | Invincible (TV series)
Reacher | | Reacher (TV series)
Silo | | Silo (TV series)
The Pitt
Adolescence | | Adolescence (TV series)
Twin Peaks
Hacks | | Hacks (TV series)
Only Murders in the Building
Schitt's Creek
Veep
Silicon Valley | | Silicon Valley (TV series)
Entourage | | Entourage (American TV series)
Sex and the City
Desperate Housewives
`,
    },
    {
      id: 'movies',
      name: 'All Movies',
      blurb: 'The whole film canon is up for grabs.',
      hint: 'film',
      items: `
The Godfather
The Godfather Part II
The Shawshank Redemption
The Dark Knight
Pulp Fiction
Forrest Gump
Fight Club
Inception
The Matrix
Goodfellas
Star Wars | | Star Wars (film)
The Empire Strikes Back
Return of the Jedi
Jurassic Park | | Jurassic Park (film)
Titanic | | Titanic (1997 film)
Avatar | | Avatar (2009 film)
Avengers: Endgame
Avengers: Infinity War
The Lion King
Toy Story
Back to the Future
Jaws | | Jaws (film)
E.T. the Extra-Terrestrial
Raiders of the Lost Ark
Gladiator | | Gladiator (2000 film)
Braveheart
Saving Private Ryan
Schindler's List
The Silence of the Lambs
Se7en
The Departed
Scarface | | Scarface (1983 film)
Heat | | Heat (1995 film)
Casino | | Casino (1995 film)
Taxi Driver
Rocky
Rocky IV
The Terminator
Terminator 2: Judgment Day
Alien | | Alien (film)
Aliens | | Aliens (film)
Die Hard
Lethal Weapon
Predator | | Predator (film)
RoboCop
Top Gun
Top Gun: Maverick
Mad Max: Fury Road
John Wick
The Lord of the Rings: The Fellowship of the Ring
The Lord of the Rings: The Return of the King
Harry Potter and the Philosopher's Stone
Harry Potter and the Prisoner of Azkaban
Harry Potter and the Deathly Hallows – Part 2
Pirates of the Caribbean: The Curse of the Black Pearl
The Truman Show
Good Will Hunting
The Sixth Sense
Interstellar | | Interstellar (film)
Parasite | | Parasite (2019 film)
Spirited Away
Whiplash | | Whiplash (2014 film)
La La Land
Get Out
Joker | | Joker (2019 film)
Oppenheimer | | Oppenheimer (film)
Barbie | | Barbie (film)
Dune | | Dune (2021 film)
Dune: Part Two
Everything Everywhere All at Once
The Social Network
The Wolf of Wall Street
Django Unchained
Inglourious Basterds
Kill Bill: Volume 1
Reservoir Dogs
No Country for Old Men
There Will Be Blood
Blade Runner
Blade Runner 2049
The Shining | | The Shining (film)
Psycho | | Psycho (1960 film)
Halloween | | Halloween (1978 film)
Scream | | Scream (1996 film)
The Exorcist
A Nightmare on Elm Street
It | | It (2017 film)
Home Alone
Elf | | Elf (film)
The Grinch | | How the Grinch Stole Christmas (2000 film)
Ferris Bueller's Day Off
The Breakfast Club
Superbad
The Hangover
Step Brothers
Anchorman: The Legend of Ron Burgundy
Mean Girls
Bad Boys | | Bad Boys (1995 film)
Friday | | Friday (1995 film)
Training Day
Boyz n the Hood
Menace II Society
Coming to America
The Fast and the Furious | | The Fast and the Furious (2001 film)
Furious 7
Fast Five
Black Panther | | Black Panther (film)
Spider-Man: Into the Spider-Verse
Spider-Man: No Way Home
Iron Man | | Iron Man (2008 film)
The Avengers | | The Avengers (2012 film)
Guardians of the Galaxy | | Guardians of the Galaxy (film)
Shrek | | Shrek (film)
Shrek 2
Finding Nemo
The Incredibles
Up | | Up (2009 film)
Frozen | | Frozen (2013 film)
Coco | | Coco (2017 film)
Ratatouille | | Ratatouille (film)
WALL-E
Kung Fu Panda | | Kung Fu Panda (film)
Despicable Me
Moana | | Moana (2016 film)
Encanto
Inside Out | | Inside Out (2015 film)
The Notebook
Twilight | | Twilight (2008 film)
The Hunger Games | | The Hunger Games (film)
Casablanca | | Casablanca (film)
Citizen Kane
Gone with the Wind | | Gone with the Wind (film)
The Wizard of Oz
2001: A Space Odyssey
Apocalypse Now
Full Metal Jacket
1917 | | 1917 (2019 film)
Hacksaw Ridge
The Prestige | | The Prestige (film)
Memento | | Memento (film)
American Psycho
The Big Lebowski | | The Big Lebowski
Fargo | | Fargo (1996 film)
Sinners | | Sinners (2025 film)
Creed | | Creed (film)
Rush Hour | | Rush Hour (1998 film)
Men in Black | | Men in Black (1997 film)
Independence Day | | Independence Day (1996 film)
Space Jam
The Karate Kid
Ghostbusters
Gremlins
The Goonies
Mission: Impossible – Fallout
Skyfall
Casino Royale | | Casino Royale (2006 film)
Kingsman: The Secret Service
Gran Torino
Million Dollar Baby
Catch Me If You Can
Cast Away
The Green Mile | | The Green Mile (film)
A Quiet Place
Get Smart | | Get Smart (film)
`,
    },
    {
      id: 'superheroes',
      name: 'Superheroes',
      blurb: 'Capes, masks and secret identities.',
      hint: 'superhero',
      items: `
Superman
Batman
Spider-Man
Wonder Woman
Iron Man
Captain America
Thor | | Thor (Marvel Comics)
Hulk
Black Panther | | Black Panther (character)
Wolverine
The Flash | | Flash (Barry Allen)
Green Lantern | | Hal Jordan
Aquaman
Doctor Strange
Black Widow | | Black Widow (Natasha Romanova)
Captain Marvel | | Carol Danvers
Scarlet Witch
Vision | | Vision (Marvel Comics)
Hawkeye | | Clint Barton
Ant-Man | | Scott Lang
Deadpool
Daredevil | | Daredevil (Marvel Comics character)
Storm | | Storm (Marvel Comics)
Cyclops | | Cyclops (Marvel Comics)
Jean Grey
Professor X
Silver Surfer
Ghost Rider
Blade | | Blade (character)
Punisher
Moon Knight
Shang-Chi
Ms. Marvel | | Kamala Khan
Miles Morales
Spider-Gwen | | Gwen Stacy (Spider-Verse)
Star-Lord
Groot
Rocket Raccoon
Gamora
Falcon | | Sam Wilson (Marvel Comics)
Winter Soldier | | Bucky Barnes
Nightcrawler | | Nightcrawler (character)
Gambit | | Gambit (Marvel Comics)
Rogue | | Rogue (Marvel Comics)
Beast | | Beast (Marvel Comics)
Colossus | | Colossus (character)
Human Torch
Mister Fantastic
Invisible Woman
The Thing | | Thing (Marvel Comics)
Robin | | Robin (character)
Nightwing
Batgirl
Supergirl
Green Arrow
Cyborg | | Cyborg (DC Comics)
Martian Manhunter
Shazam | | Captain Marvel (DC Comics)
Hawkman
Blue Beetle | | Jaime Reyes
Static | | Static (DC Comics)
Raven | | Raven (DC Comics)
Starfire | | Starfire (Teen Titans)
Beast Boy
Constantine | | John Constantine
Swamp Thing
Booster Gold
Atom | | Atom (Ray Palmer)
Invincible | | Invincible (character)
Omni-Man
Hellboy
Spawn | | Spawn (character)
Mr. Incredible
Elastigirl
Frozone
Kick-Ass | | Kick-Ass (character)
Homelander
Starlight | | Starlight (The Boys)
All Might
Saitama | | Saitama (One-Punch Man)
Ben 10 | | Ben Tennyson
The Powerpuff Girls
Darkwing Duck
Captain Underpants
Megamind
`,
    },
    {
      id: 'supervillains',
      name: 'Supervillains',
      blurb: 'Every hero needs one. You might want them more.',
      hint: 'villain',
      items: `
Joker | | Joker (character)
Thanos
Darth Vader
Lex Luthor
Magneto
Loki | | Loki (Marvel Comics)
Green Goblin
Doctor Doom
Venom | | Venom (character)
Killmonger | | Erik Killmonger
Ultron
Red Skull
Bane | | Bane (DC Comics)
Harley Quinn
Two-Face
The Penguin | | Penguin (character)
Riddler
Catwoman
Poison Ivy
Scarecrow | | Scarecrow (DC Comics)
Mr. Freeze
Ra's al Ghul
Darkseid
Brainiac | | Brainiac (character)
General Zod
Doomsday | | Doomsday (DC Comics)
Sinestro
Reverse-Flash
Deathstroke
Black Adam
Galactus
Doctor Octopus
Sandman | | Sandman (Marvel Comics)
Mysterio
Vulture | | Vulture (Marvel Comics)
Kingpin | | Kingpin (character)
Kraven the Hunter
Carnage | | Carnage (character)
Mystique | | Mystique (character)
Sabretooth | | Sabretooth (character)
Apocalypse | | Apocalypse (character)
Dormammu
Hela | | Hela (character)
Kang the Conqueror
Ego the Living Planet
Thanos
Darth Maul
Emperor Palpatine | | Palpatine
Kylo Ren
Voldemort | | Lord Voldemort
Sauron
Hannibal Lecter
The Terminator | | Terminator (character)
Agent Smith
Freddy Krueger
Jason Voorhees
Michael Myers | | Michael Myers (Halloween)
Pennywise | | It (character)
Scar | | Scar (The Lion King)
Ursula | | Ursula (The Little Mermaid)
Jafar
Maleficent
Hades | | Hades (Disney)
Captain Hook
Cruella de Vil
Gru
Megatron
Shredder | | Shredder (Teenage Mutant Ninja Turtles)
Bowser | | Bowser (character)
Ganon
Frieza
Cell | | Cell (Dragon Ball)
Majin Buu
Madara Uchiha
Homelander
Vecna | | Vecna (Stranger Things)
Plankton | | Plankton and Karen
Dr. Evil
Syndrome | | Syndrome (The Incredibles)
Dr. Doofenshmirtz | | Heinz Doofenshmirtz
`,
    },
    {
      id: 'tv-characters',
      name: 'TV Characters',
      blurb: 'The people you spent years with.',
      hint: 'character',
      items: `
Walter White
Jesse Pinkman
Saul Goodman
Tony Soprano
Michael Scott
Dwight Schrute
Jim Halpert
Ron Swanson
Leslie Knope
Chandler Bing
Joey Tribbiani
Ross Geller
Rachel Green
Monica Geller
Phoebe Buffay
Jerry Seinfeld | | Jerry Seinfeld (character)
George Costanza
Kramer | | Cosmo Kramer
Homer Simpson
Bart Simpson
Lisa Simpson
Marge Simpson
Peter Griffin
Stewie Griffin
Eric Cartman
Rick Sanchez
Morty Smith
Jon Snow
Daenerys Targaryen
Tyrion Lannister
Arya Stark
Cersei Lannister
Joffrey Baratheon
Eleven | | Eleven (Stranger Things)
Steve Harrington
Jim Hopper
Dustin Henderson
Omar Little
Stringer Bell
Don Draper
Sheldon Cooper
Barney Stinson
Ted Mosby
Dexter Morgan
Gregory House
Jack Bauer
Sherlock Holmes | | Sherlock Holmes (Sherlock)
The Doctor | | Doctor (Doctor Who)
Fox Mulder
Dana Scully
Buffy Summers
Carrie Bradshaw
Tommy Shelby
Logan Roy
Kendall Roy
Carmy Berzatto
Ted Lasso | | Ted Lasso (character)
Captain Holt | | Raymond Holt
Jake Peralta
Michael Kelso
Steve Urkel
Will Smith | | Will Smith (The Fresh Prince of Bel-Air)
Carlton Banks
Uncle Phil | | Philip Banks
Martin Payne
Fonzie | | Fonzie
Frasier Crane
Kenny McCormick
SpongeBob SquarePants | | SpongeBob SquarePants (character)
Patrick Star
Squidward Tentacles
Kim Wexler
Gus Fring
Mike Ehrmantraut
Negan
Rick Grimes
Daryl Dixon
Wednesday Addams
Joel Miller | | Joel (The Last of Us)
Ellie | | Ellie (The Last of Us)
Homelander
Billy Butcher
Rip Wheeler
Beth Dutton
John Dutton
Ghost | | James St. Patrick
Tasha St. Patrick | | Power (TV series)
Tariq St. Patrick | | Power Book II: Ghost
Kenny Powers
Charlie Kelly
Dennis Reynolds
Larry David | | Curb Your Enthusiasm
Tobias Fünke
Gob Bluth
`,
    },
    {
      id: 'actors',
      name: 'Actors',
      blurb: 'Hollywood’s finest. Build your dream cast.',
      hint: 'actor',
      items: `
Leonardo DiCaprio
Denzel Washington
Tom Hanks
Meryl Streep
Brad Pitt
Robert De Niro
Al Pacino
Jack Nicholson
Morgan Freeman
Will Smith
Tom Cruise
Johnny Depp
Robert Downey Jr.
Scarlett Johansson
Chris Hemsworth
Chris Evans
Chris Pratt
Zendaya
Tom Holland
Timothée Chalamet
Margot Robbie
Ryan Gosling
Ryan Reynolds
Dwayne Johnson
Keanu Reeves
Samuel L. Jackson
Christian Bale
Matt Damon
Ben Affleck
George Clooney
Julia Roberts
Sandra Bullock
Jennifer Lawrence
Emma Stone
Natalie Portman
Anne Hathaway
Viola Davis
Halle Berry
Angela Bassett
Cate Blanchett
Nicole Kidman
Charlize Theron
Angelina Jolie
Kate Winslet
Florence Pugh
Anya Taylor-Joy
Sydney Sweeney
Jenna Ortega
Pedro Pascal
Oscar Isaac
Austin Butler
Cillian Murphy
Robert Pattinson
Jake Gyllenhaal
Joaquin Phoenix
Daniel Day-Lewis
Anthony Hopkins
Gary Oldman
Michael B. Jordan
Idris Elba
Chadwick Boseman
Mahershala Ali
Daniel Kaluuya
Jamie Foxx
Eddie Murphy
Jim Carrey
Adam Sandler
Will Ferrell
Kevin Hart
Jonah Hill
Seth Rogen
Steve Carell
Jason Statham
Vin Diesel
Arnold Schwarzenegger
Sylvester Stallone
Bruce Willis
Harrison Ford
Mark Wahlberg
Jackie Chan
Bruce Lee
Mel Gibson
Russell Crowe
Hugh Jackman
Ian McKellen
Patrick Stewart
Daniel Radcliffe
Emma Watson
Zoe Saldaña
Gal Gadot
Jason Momoa
Henry Cavill
Paul Rudd
Benedict Cumberbatch
Tom Hardy
Glen Powell
Jacob Elordi
Paul Mescal
Marlon Brando
Clint Eastwood
Audrey Hepburn
Marilyn Monroe
Humphrey Bogart
`,
    },
    {
      id: 'pokemon',
      name: 'Pokémon',
      blurb: 'Gotta draft ’em all. All 151 originals plus fan favorites.',
      src: 'poke',
      items: gen1 + '\n' + laterPokemon,
    },
    {
      id: 'cartoon-characters',
      name: 'Cartoon Characters',
      blurb: 'Saturday morning royalty.',
      hint: 'cartoon character',
      items: `
Mickey Mouse
Bugs Bunny
SpongeBob SquarePants | | SpongeBob SquarePants (character)
Homer Simpson
Scooby-Doo | | Scooby-Doo (character)
Tom | | Tom Cat
Jerry | | Jerry Mouse
Donald Duck
Goofy
Daffy Duck
Porky Pig
Tweety
Sylvester | | Sylvester the Cat
Road Runner | | Wile E. Coyote and the Road Runner
Wile E. Coyote
Pink Panther | | The Pink Panther (character)
Popeye
Fred Flintstone
George Jetson
Yogi Bear
Garfield | | Garfield (character)
Snoopy
Charlie Brown
Woody Woodpecker
Felix the Cat
Betty Boop
Winnie the Pooh | | Winnie-the-Pooh
Patrick Star
Squidward Tentacles
Peter Griffin
Stewie Griffin
Eric Cartman
Rick Sanchez
Bart Simpson
Finn the Human
Jake the Dog
Dexter | | Dexter's Laboratory
Johnny Bravo | | Johnny Bravo (character)
Courage the Cowardly Dog | | Courage (character)
Ed, Edd n Eddy
Blossom | | The Powerpuff Girls
Samurai Jack | | Samurai Jack (character)
Ben Tennyson
Aang
Zuko
Toph Beifong
Danny Phantom | | Danny Phantom (character)
Jimmy Neutron | | Jimmy Neutron (character)
Timmy Turner
Arnold | | Arnold (Hey Arnold!)
Tommy Pickles
Rocko | | Rocko's Modern Life
Ren and Stimpy | | The Ren & Stimpy Show
Phineas and Ferb
Perry the Platypus
Kim Possible | | Kim Possible (character)
Bender | | Bender (Futurama)
Hank Hill
Bob Belcher
Gumball Watterson
Mordecai and Rigby
Steven Universe | | Steven Universe (character)
Bluey | | Bluey (character)
Peppa Pig
Shrek | | Shrek (character)
Donkey | | Donkey (Shrek)
Goku
Naruto Uzumaki
Pikachu
Sonic the Hedgehog | | Sonic the Hedgehog (character)
Garfield
Scrooge McDuck
Inspector Gadget
Daria | | Daria Morgendorffer
Beavis and Butt-Head
Stan Smith | | Stan Smith (American Dad!)
Roger the Alien | | Roger (American Dad!)
Mr. Krabs
Plankton | | Plankton and Karen
Sandy Cheeks
Huey Freeman
Riley Freeman
Doug Funnie | | Doug (TV series)
Cosmo and Wanda | | The Fairly OddParents
`,
    },
    {
      id: 'fictional-creatures',
      name: 'Fictional Creatures',
      blurb: 'Dragons, aliens and things under the bed.',
      hint: 'fictional creature',
      items: `
Godzilla
King Kong
Dragon
Unicorn
Phoenix | | Phoenix (mythology)
Griffin
Pegasus
Centaur
Minotaur
Medusa
Kraken
Hydra | | Lernaean Hydra
Cerberus
Chimera | | Chimera (mythology)
Basilisk
Mermaid
Yeti
Bigfoot
Loch Ness Monster
Chupacabra
Mothman
Werewolf
Vampire
Zombie
Ghost
Banshee
Gargoyle
Goblin
Troll
Ogre
Orc
Elf
Dwarf | | Dwarf (folklore)
Hobbit
Fairy
Leprechaun
Genie | | Jinn
Golem
Frankenstein's monster
The Mummy | | Mummy (undead)
Xenomorph | | Alien (creature in Alien franchise)
Predator | | Predator (fictional species)
Demogorgon | | Demogorgon (Stranger Things)
Smaug
Gollum
Balrog
Dementor
Hippogriff
Thestral
Ewok
Wookiee | | Chewbacca
Yoda
Baby Yoda | | Grogu
Groot
Venom | | Venom (character)
Gremlin | | Gremlins
Mogwai | | Gizmo (Gremlins)
Totoro | | My Neighbor Totoro
Na'vi | | Na'vi
Toothless | | Toothless (How to Train Your Dragon)
Stitch | | Stitch (Lilo & Stitch)
Sully | | Monsters, Inc.
Cookie Monster
Elmo
Tyrannosaurus rex
Wendigo
Kitsune
Kappa | | Kappa (folklore)
Thunderbird | | Thunderbird (mythology)
Cyclops
`,
    },
    {
      id: 'marvel-characters',
      name: 'Marvel Characters',
      blurb: 'The whole Marvel roster.',
      hint: 'Marvel Comics',
      items: `
Iron Man
Captain America
Thor | | Thor (Marvel Comics)
Hulk
Spider-Man
Black Widow | | Black Widow (Natasha Romanova)
Hawkeye | | Clint Barton
Black Panther | | Black Panther (character)
Doctor Strange
Scarlet Witch
Vision | | Vision (Marvel Comics)
Captain Marvel | | Carol Danvers
Ant-Man | | Scott Lang
Wasp | | Wasp (character)
Falcon | | Sam Wilson (Marvel Comics)
Winter Soldier | | Bucky Barnes
War Machine
Loki | | Loki (Marvel Comics)
Thanos
Ultron
Star-Lord
Gamora
Drax the Destroyer
Rocket Raccoon
Groot
Mantis | | Mantis (Marvel Comics)
Nebula | | Nebula (Marvel Comics)
Wolverine
Deadpool
Professor X
Magneto
Storm | | Storm (Marvel Comics)
Cyclops | | Cyclops (Marvel Comics)
Jean Grey
Rogue | | Rogue (Marvel Comics)
Gambit | | Gambit (Marvel Comics)
Beast | | Beast (Marvel Comics)
Nightcrawler | | Nightcrawler (character)
Mystique | | Mystique (character)
Juggernaut | | Juggernaut (character)
Colossus | | Colossus (character)
Cable | | Cable (character)
Silver Surfer
Galactus
Doctor Doom
Mister Fantastic
Human Torch
The Thing | | Thing (Marvel Comics)
Invisible Woman
Daredevil | | Daredevil (Marvel Comics character)
Punisher
Elektra | | Elektra (character)
Kingpin | | Kingpin (character)
Luke Cage
Jessica Jones
Iron Fist | | Iron Fist (character)
Moon Knight
Ghost Rider
Blade | | Blade (character)
Venom | | Venom (character)
Carnage | | Carnage (character)
Green Goblin
Doctor Octopus
Miles Morales
Spider-Gwen | | Gwen Stacy (Spider-Verse)
Ms. Marvel | | Kamala Khan
Shang-Chi
She-Hulk
Nick Fury
Agatha Harkness
Hela | | Hela (character)
Kang the Conqueror
Namor
Killmonger | | Erik Killmonger
Shuri | | Shuri (character)
Okoye | | Okoye (character)
Yelena Belova
Red Skull
Sentry | | Sentry (Robert Reynolds)
Silver Sable
Morbius | | Michael Morbius
Howard the Duck
Squirrel Girl
`,
    },
    {
      id: 'dc-characters',
      name: 'DC Characters',
      blurb: 'Gotham, Metropolis and beyond.',
      hint: 'DC Comics',
      items: `
Superman
Batman
Wonder Woman
The Flash | | Flash (Barry Allen)
Aquaman
Green Lantern | | Hal Jordan
Cyborg | | Cyborg (DC Comics)
Martian Manhunter
Green Arrow
Shazam | | Captain Marvel (DC Comics)
Supergirl
Batgirl
Robin | | Robin (character)
Nightwing
Red Hood | | Jason Todd
Damian Wayne
Alfred Pennyworth
Commissioner Gordon | | James Gordon (character)
Catwoman
Joker | | Joker (character)
Harley Quinn
Bane | | Bane (DC Comics)
Two-Face
Riddler
The Penguin | | Penguin (character)
Poison Ivy
Scarecrow | | Scarecrow (DC Comics)
Mr. Freeze
Ra's al Ghul
Talia al Ghul
Deathstroke
Lex Luthor
General Zod
Darkseid
Brainiac | | Brainiac (character)
Doomsday | | Doomsday (DC Comics)
Black Adam
Sinestro
Reverse-Flash
Captain Cold
Gorilla Grodd
Black Canary
Zatanna
Constantine | | John Constantine
Swamp Thing
Hawkgirl
Hawkman
Blue Beetle | | Jaime Reyes
Booster Gold
Static | | Static (DC Comics)
Raven | | Raven (DC Comics)
Starfire | | Starfire (Teen Titans)
Beast Boy
Kid Flash | | Wally West
Peacemaker | | Peacemaker (character)
Amanda Waller
Bloodsport | | Bloodsport (character)
King Shark
Deadshot
Killer Croc
Lobo | | Lobo (DC Comics)
Steppenwolf | | Steppenwolf (character)
Mera | | Mera (character)
Black Manta
Krypto
Jonathan Kent | | Jon Kent
Lois Lane
Jimmy Olsen
Batman Beyond | | Terry McGinnis
`,
    },
    {
      id: 'disney-shows',
      name: 'Disney Shows',
      blurb: 'Disney Channel kids, assemble.',
      hint: 'Disney Channel series',
      items: `
Hannah Montana
That's So Raven
Lizzie McGuire
The Suite Life of Zack & Cody
The Suite Life on Deck
Wizards of Waverly Place
Phineas and Ferb
Kim Possible
Good Luck Charlie
Jessie | | Jessie (2011 TV series)
Shake It Up | | Shake It Up (American TV series)
Austin & Ally
Sonny with a Chance
Even Stevens
Boy Meets World
Girl Meets World
Gravity Falls
The Proud Family
Recess | | Recess (TV series)
Kickin' It
Lab Rats | | Lab Rats (TV series)
Liv and Maddie
K.C. Undercover
Bunk'd
Raven's Home
Andi Mack
Cory in the House
Jonas | | Jonas (TV series)
DuckTales | | DuckTales (1987 TV series)
DuckTales | | DuckTales (2017 TV series)
Gargoyles | | Gargoyles (TV series)
TaleSpin
Darkwing Duck
Chip 'n Dale: Rescue Rangers
American Dragon: Jake Long
The Owl House
Amphibia
Star vs. the Forces of Evil
Big City Greens
Lilo & Stitch: The Series
The Emperor's New School
Doc McStuffins
Mickey Mouse Clubhouse
Handy Manny
Bluey
Kim Possible
High School Musical: The Musical: The Series
Pair of Kings
Dog with a Blog
Ultimate Spider-Man
Moon Girl and Devil Dinosaur
Percy Jackson and the Olympians | | Percy Jackson and the Olympians (TV series)
Zombies | | Zombies (2018 film)
`,
    },
    {
      id: 'nick-shows',
      name: 'Nickelodeon Shows',
      blurb: 'Slime time.',
      hint: 'Nickelodeon series',
      items: `
SpongeBob SquarePants
Rugrats
Hey Arnold!
The Fairly OddParents
Danny Phantom
Jimmy Neutron | | The Adventures of Jimmy Neutron, Boy Genius
Avatar: The Last Airbender
The Legend of Korra
iCarly
Drake & Josh
Victorious
Zoey 101
All That | | All That
Kenan & Kel
The Amanda Show
Ned's Declassified School Survival Guide
Sam & Cat
Big Time Rush | | Big Time Rush (TV series)
The Naked Brothers Band
Henry Danger
The Thundermans
Game Shakers
Unfabulous
True Jackson, VP
Rocko's Modern Life
The Ren & Stimpy Show
Doug | | Doug (TV series)
CatDog
The Wild Thornberrys
Rocket Power
As Told by Ginger
Invader Zim
ChalkZone
My Life as a Teenage Robot
Back at the Barnyard
The Penguins of Madagascar
Teenage Mutant Ninja Turtles | | Teenage Mutant Ninja Turtles (2012 TV series)
Kung Fu Panda: Legends of Awesomeness
The Loud House
Harvey Beaks
Sanjay and Craig
Breadwinners | | Breadwinners (TV series)
Blue's Clues
Dora the Explorer
Go, Diego, Go!
The Backyardigans
Paw Patrol
Bubble Guppies
Wonder Pets
Are You Afraid of the Dark?
Clarissa Explains It All
The Secret World of Alex Mack
Salute Your Shorts
Double Dare | | Double Dare (Nickelodeon game show)
Legends of the Hidden Temple
Figure It Out | | Figure It Out (game show)
Aaahh!!! Real Monsters
Angry Beavers | | The Angry Beavers
Catscratch
Fanboy & Chum Chum
`,
    },
    {
      id: 'cn-shows',
      name: 'Cartoon Network Shows',
      blurb: 'The golden age of after-school TV.',
      hint: 'Cartoon Network series',
      items: `
Dexter's Laboratory
The Powerpuff Girls
Johnny Bravo
Courage the Cowardly Dog
Ed, Edd n Eddy
Samurai Jack
Codename: Kids Next Door
The Grim Adventures of Billy & Mandy
Foster's Home for Imaginary Friends
Camp Lazlo
Ben 10 | | Ben 10 (2005 TV series)
Ben 10: Alien Force
Adventure Time
Regular Show
The Amazing World of Gumball
Steven Universe
We Bare Bears
Teen Titans | | Teen Titans (TV series)
Teen Titans Go!
Chowder | | Chowder (TV series)
Flapjack | | The Marvelous Misadventures of Flapjack
Uncle Grandpa
Clarence | | Clarence (American TV series)
Craig of the Creek
OK K.O.! Let's Be Heroes
Over the Garden Wall
Generator Rex
Star Wars: The Clone Wars | | Star Wars: The Clone Wars (2008 TV series)
Justice League | | Justice League (TV series)
Justice League Unlimited
Batman: The Brave and the Bold
Young Justice | | Young Justice (TV series)
Mighty Magiswords
Apple & Onion
Infinity Train
Total Drama Island
6teen
Hi Hi Puffy AmiYumi
Cow and Chicken
I Am Weasel
Sheep in the Big City
Mike, Lu & Og
Time Squad
Robotboy
Squirrel Boy
My Gym Partner's a Monkey
Megas XLR
Johnny Test
Craig of the Creek
Primal | | Primal (TV series)
Sym-Bionic Titan
Dragon Ball Z
Tom and Jerry Tales
Scooby-Doo! Mystery Incorporated
`,
    },
    {
      id: 'netflix-originals',
      name: 'Netflix Originals',
      blurb: 'Are you still watching?',
      hint: 'Netflix series',
      items: `
Stranger Things
Squid Game
Money Heist
Wednesday | | Wednesday (TV series)
The Crown | | The Crown (TV series)
Bridgerton
Ozark | | Ozark (TV series)
Narcos
Narcos: Mexico
Black Mirror
The Witcher | | The Witcher (TV series)
Outer Banks | | Outer Banks (TV series)
Cobra Kai
You | | You (TV series)
13 Reasons Why
Orange Is the New Black
House of Cards | | House of Cards (American TV series)
BoJack Horseman
Big Mouth
Arcane | | Arcane (TV series)
Dark | | Dark (TV series)
Lupin | | Lupin (French TV series)
Elite | | Elite (TV series)
Sex Education | | Sex Education (TV series)
The Umbrella Academy | | The Umbrella Academy (TV series)
Mindhunter
The Queen's Gambit | | The Queen's Gambit (miniseries)
Tiger King
Making a Murderer
Love Is Blind | | Love Is Blind (TV series)
Too Hot to Handle | | Too Hot to Handle (TV series)
Selling Sunset
Drive to Survive | | Formula 1: Drive to Survive
Beef | | Beef (TV series)
Baby Reindeer
Adolescence | | Adolescence (TV series)
3 Body Problem
One Piece | | One Piece (2023 TV series)
Avatar: The Last Airbender | | Avatar: The Last Airbender (2024 TV series)
The Haunting of Hill House | | The Haunting of Hill House (TV series)
Midnight Mass | | Midnight Mass (TV series)
Russian Doll | | Russian Doll (TV series)
Never Have I Ever
Ginny & Georgia
Emily in Paris
Virgin River | | Virgin River (TV series)
The Night Agent
The Gentlemen | | The Gentlemen (2024 TV series)
Daredevil | | Daredevil (TV series)
Unbelievable | | Unbelievable (miniseries)
When They See Us
Dahmer – Monster: The Jeffrey Dahmer Story
Monsters: The Lyle and Erik Menendez Story
Glass Onion: A Knives Out Mystery
Red Notice
Extraction | | Extraction (2020 film)
The Irishman
Bird Box | | Bird Box (film)
Don't Look Up
KPop Demon Hunters
Army of the Dead
Enola Holmes | | Enola Holmes (film)
Love on the Spectrum
Is It Cake?
Nailed It!
`,
    },
    {
      id: 'reality-tv',
      name: 'Reality TV',
      blurb: 'Drama, roses and tribal councils.',
      hint: 'reality TV series',
      items: `
Survivor | | Survivor (American TV series)
Big Brother | | Big Brother (American TV series)
The Bachelor | | The Bachelor (American TV series)
The Bachelorette | | The Bachelorette (American TV series)
Love Island | | Love Island (2015 TV series)
Love Island USA
Keeping Up with the Kardashians
The Kardashians
Jersey Shore
The Real Housewives of Beverly Hills
The Real Housewives of Atlanta
Vanderpump Rules
The Hills | | The Hills (TV series)
Laguna Beach: The Real Orange County
The Real World | | The Real World (TV series)
Love & Hip Hop: Atlanta
Basketball Wives
Flavor of Love
Rock of Love
Catfish: The TV Show
Teen Mom
16 and Pregnant
Jackass | | Jackass (TV series)
Ridiculousness
MTV Cribs
Pimp My Ride
Punk'd
The Amazing Race | | The Amazing Race (American TV series)
American Idol
The Voice | | The Voice (American TV series)
America's Got Talent
The X Factor | | The X Factor (British TV series)
Dancing with the Stars | | Dancing with the Stars (American TV series)
RuPaul's Drag Race
Project Runway
Top Chef
Hell's Kitchen | | Hell's Kitchen (American TV series)
Kitchen Nightmares
MasterChef | | MasterChef (American TV series)
The Great British Bake Off
Shark Tank
Queer Eye | | Queer Eye (2018 TV series)
Love Is Blind | | Love Is Blind (TV series)
Too Hot to Handle | | Too Hot to Handle (TV series)
Selling Sunset
The Challenge | | The Challenge (TV series)
Fear Factor
Naked and Afraid
Deadliest Catch
Duck Dynasty
Pawn Stars
American Chopper
Storage Wars
Cake Boss
Dog the Bounty Hunter
Married at First Sight | | Married at First Sight (American TV series)
90 Day Fiancé
Below Deck
Beast Games
The Traitors | | The Traitors (American TV series)
`,
    },
    {
      id: 'disney-movies',
      name: 'Disney Movies',
      blurb: 'From Snow White to Encanto.',
      hint: 'Disney film',
      items: `
Snow White and the Seven Dwarfs | | Snow White and the Seven Dwarfs (1937 film)
Pinocchio | | Pinocchio (1940 film)
Fantasia | | Fantasia (1940 film)
Dumbo | | Dumbo (1941 film)
Bambi
Cinderella | | Cinderella (1950 film)
Alice in Wonderland | | Alice in Wonderland (1951 film)
Peter Pan | | Peter Pan (1953 film)
Lady and the Tramp
Sleeping Beauty | | Sleeping Beauty (1959 film)
101 Dalmatians | | One Hundred and One Dalmatians
The Sword in the Stone | | The Sword in the Stone (1963 film)
The Jungle Book | | The Jungle Book (1967 film)
The Aristocats
Robin Hood | | Robin Hood (1973 film)
The Rescuers
The Fox and the Hound
The Little Mermaid | | The Little Mermaid (1989 film)
Beauty and the Beast | | Beauty and the Beast (1991 film)
Aladdin | | Aladdin (1992 Disney film)
The Lion King
Pocahontas | | Pocahontas (1995 film)
The Hunchback of Notre Dame | | The Hunchback of Notre Dame (1996 film)
Hercules | | Hercules (1997 film)
Mulan | | Mulan (1998 film)
Tarzan | | Tarzan (1999 film)
The Emperor's New Groove
Atlantis: The Lost Empire
Lilo & Stitch
Treasure Planet
Brother Bear
Chicken Little | | Chicken Little (2005 film)
Meet the Robinsons
Bolt | | Bolt (2008 film)
The Princess and the Frog
Tangled
Winnie the Pooh | | Winnie the Pooh (2011 film)
Wreck-It Ralph
Frozen | | Frozen (2013 film)
Big Hero 6 | | Big Hero 6 (film)
Zootopia
Moana | | Moana (2016 film)
Ralph Breaks the Internet
Frozen II
Raya and the Last Dragon
Encanto
Strange World | | Strange World (film)
Wish | | Wish (2023 film)
Moana 2
Zootopia 2
Mary Poppins | | Mary Poppins (film)
The Parent Trap | | The Parent Trap (1998 film)
Freaky Friday | | Freaky Friday (2003 film)
Pirates of the Caribbean: The Curse of the Black Pearl
Enchanted | | Enchanted (film)
Holes | | Holes (film)
The Princess Diaries | | The Princess Diaries (film)
Remember the Titans
Cool Runnings
The Mighty Ducks | | The Mighty Ducks (film)
High School Musical
Hocus Pocus | | Hocus Pocus (1993 film)
The Lion King | | The Lion King (2019 film)
Aladdin | | Aladdin (2019 film)
`,
    },
    {
      id: 'pixar-movies',
      name: 'Pixar Movies',
      blurb: 'Every Pixar feature. Cry accordingly.',
      hint: 'Pixar film',
      items: `
Toy Story
A Bug's Life
Toy Story 2
Monsters, Inc.
Finding Nemo
The Incredibles
Cars | | Cars (film)
Ratatouille | | Ratatouille (film)
WALL-E
Up | | Up (2009 film)
Toy Story 3
Cars 2
Brave | | Brave (2012 film)
Monsters University
Inside Out | | Inside Out (2015 film)
The Good Dinosaur
Finding Dory
Cars 3
Coco | | Coco (2017 film)
Incredibles 2
Toy Story 4
Onward | | Onward (film)
Soul | | Soul (2020 film)
Luca | | Luca (2021 film)
Turning Red
Lightyear | | Lightyear (film)
Elemental | | Elemental (2023 film)
Inside Out 2
Elio | | Elio (film)
Hoppers | | Hoppers (film)
Toy Story 5
`,
    },
    {
      id: 'marvel-movies',
      name: 'Marvel Movies',
      blurb: 'MCU and beyond. Post-credits not included.',
      hint: 'Marvel film',
      items: `
Iron Man | | Iron Man (2008 film)
The Incredible Hulk | | The Incredible Hulk (film)
Iron Man 2
Thor | | Thor (film)
Captain America: The First Avenger
The Avengers | | The Avengers (2012 film)
Iron Man 3
Thor: The Dark World
Captain America: The Winter Soldier
Guardians of the Galaxy | | Guardians of the Galaxy (film)
Avengers: Age of Ultron
Ant-Man | | Ant-Man (film)
Captain America: Civil War
Doctor Strange | | Doctor Strange (2016 film)
Guardians of the Galaxy Vol. 2
Spider-Man: Homecoming
Thor: Ragnarok
Black Panther | | Black Panther (film)
Avengers: Infinity War
Ant-Man and the Wasp
Captain Marvel | | Captain Marvel (film)
Avengers: Endgame
Spider-Man: Far From Home
Black Widow | | Black Widow (2021 film)
Shang-Chi and the Legend of the Ten Rings
Eternals | | Eternals (film)
Spider-Man: No Way Home
Doctor Strange in the Multiverse of Madness
Thor: Love and Thunder
Black Panther: Wakanda Forever
Ant-Man and the Wasp: Quantumania
Guardians of the Galaxy Vol. 3
The Marvels
Deadpool & Wolverine
Captain America: Brave New World
Thunderbolts*
The Fantastic Four: First Steps
Spider-Man | | Spider-Man (2002 film)
Spider-Man 2
Spider-Man 3
X-Men | | X-Men (film)
X2 | | X2 (film)
X-Men: Days of Future Past
X-Men: First Class
Logan | | Logan (film)
Deadpool | | Deadpool (film)
Deadpool 2
Blade | | Blade (1998 film)
The Amazing Spider-Man | | The Amazing Spider-Man (film)
Spider-Man: Into the Spider-Verse
Spider-Man: Across the Spider-Verse
Venom | | Venom (2018 film)
Fantastic Four | | Fantastic Four (2005 film)
`,
    },
    {
      id: 'dc-movies',
      name: 'DC Movies',
      blurb: 'Gotham nights and Kryptonian days.',
      hint: 'DC film',
      items: `
Superman | | Superman (1978 film)
Superman II
Batman | | Batman (1989 film)
Batman Returns
Batman Forever
Batman & Robin | | Batman & Robin (film)
Batman Begins
The Dark Knight
The Dark Knight Rises
Man of Steel | | Man of Steel (film)
Batman v Superman: Dawn of Justice
Suicide Squad | | Suicide Squad (2016 film)
Wonder Woman | | Wonder Woman (2017 film)
Justice League | | Justice League (film)
Zack Snyder's Justice League
Aquaman | | Aquaman (film)
Shazam! | | Shazam! (film)
Joker | | Joker (2019 film)
Birds of Prey | | Birds of Prey (2020 film)
Wonder Woman 1984
The Suicide Squad | | The Suicide Squad (film)
The Batman | | The Batman (film)
Black Adam | | Black Adam (film)
Shazam! Fury of the Gods
The Flash | | The Flash (film)
Blue Beetle | | Blue Beetle (film)
Aquaman and the Lost Kingdom
Joker: Folie à Deux
Superman | | Superman (2025 film)
Watchmen | | Watchmen (film)
V for Vendetta | | V for Vendetta (film)
Constantine | | Constantine (film)
Green Lantern | | Green Lantern (film)
Superman Returns
The Lego Batman Movie
Batman: Mask of the Phantasm
Catwoman | | Catwoman (film)
Steel | | Steel (1997 film)
Supergirl | | Supergirl (1984 film)
Batman: Under the Red Hood
`,
    },
    {
      id: 'marvel-shows',
      name: 'Marvel Shows',
      blurb: 'Disney+, Netflix and Saturday-morning Marvel.',
      hint: 'Marvel TV series',
      items: `
WandaVision
Loki | | Loki (TV series)
The Falcon and the Winter Soldier
Hawkeye | | Hawkeye (2021 TV series)
Moon Knight | | Moon Knight (TV series)
Ms. Marvel | | Ms. Marvel (TV series)
She-Hulk: Attorney at Law
Secret Invasion | | Secret Invasion (TV series)
Echo | | Echo (TV series)
Agatha All Along
Daredevil: Born Again
Ironheart | | Ironheart (TV series)
What If...? | | What If...? (TV series)
Your Friendly Neighborhood Spider-Man
X-Men '97
Daredevil | | Daredevil (TV series)
Jessica Jones | | Jessica Jones (TV series)
Luke Cage | | Luke Cage (TV series)
Iron Fist | | Iron Fist (TV series)
The Defenders | | The Defenders (miniseries)
The Punisher | | The Punisher (TV series)
Agents of S.H.I.E.L.D.
Agent Carter | | Agent Carter (TV series)
Runaways | | Runaways (TV series)
Cloak & Dagger | | Cloak & Dagger (TV series)
Legion | | Legion (TV series)
The Gifted | | The Gifted (American TV series)
Inhumans | | Inhumans (TV series)
Spider-Man: The Animated Series
X-Men: The Animated Series
Spectacular Spider-Man | | The Spectacular Spider-Man (TV series)
Ultimate Spider-Man
Avengers: Earth's Mightiest Heroes
Wonder Man | | Wonder Man (TV series)
`,
    },
    {
      id: 'dc-shows',
      name: 'DC Shows',
      blurb: 'Arrowverse, animated classics and more.',
      hint: 'DC TV series',
      items: `
Arrow | | Arrow (TV series)
The Flash | | The Flash (2014 TV series)
Supergirl | | Supergirl (TV series)
Legends of Tomorrow
Batwoman | | Batwoman (TV series)
Superman & Lois
Smallville
Gotham | | Gotham (TV series)
Titans | | Titans (2018 TV series)
Doom Patrol | | Doom Patrol (TV series)
Peacemaker | | Peacemaker (TV series)
The Penguin | | The Penguin (TV series)
Creature Commandos
Black Lightning | | Black Lightning (TV series)
Lucifer | | Lucifer (TV series)
Watchmen | | Watchmen (TV series)
The Sandman | | The Sandman (TV series)
Pennyworth | | Pennyworth (TV series)
Stargirl | | Stargirl (TV series)
Swamp Thing | | Swamp Thing (2019 TV series)
Batman: The Animated Series
Superman: The Animated Series
Batman Beyond
Justice League | | Justice League (TV series)
Justice League Unlimited
Teen Titans | | Teen Titans (TV series)
Teen Titans Go!
Young Justice | | Young Justice (TV series)
Harley Quinn | | Harley Quinn (TV series)
Batman: Caped Crusader
My Adventures with Superman
Kite Man: Hell Yeah!
Lois & Clark: The New Adventures of Superman
Wonder Woman | | Wonder Woman (TV series)
Batman | | Batman (TV series)
`,
    },
    {
      id: 'documentaries',
      name: 'Documentaries',
      blurb: 'True stories, real drama.',
      hint: 'documentary',
      items: `
The Last Dance | | The Last Dance (miniseries)
Planet Earth | | Planet Earth (2006 TV series)
Blue Planet | | The Blue Planet
Our Planet
Free Solo
Man on Wire
Making a Murderer
Tiger King
The Jinx
Wild Wild Country
Icarus | | Icarus (2017 film)
Blackfish | | Blackfish (film)
Super Size Me
Bowling for Columbine
Fahrenheit 9/11
An Inconvenient Truth
March of the Penguins
Searching for Sugar Man
Amy | | Amy (2015 film)
Senna | | Senna (2010 film)
Hoop Dreams
Jiro Dreams of Sushi
Won't You Be My Neighbor?
The Social Dilemma
13th | | 13th (film)
Fyre | | Fyre (film)
Seaspiracy
My Octopus Teacher
Apollo 11 | | Apollo 11 (2019 film)
They Shall Not Grow Old
Exit Through the Gift Shop
Grizzly Man
Bowling for Columbine
The Act of Killing
Drive to Survive | | Formula 1: Drive to Survive
Sunderland 'Til I Die
Welcome to Wrexham
Quarterback | | Quarterback (TV series)
Beckham | | Beckham (TV series)
Hard Knocks | | Hard Knocks (TV series)
Cheer | | Cheer (TV series)
American Factory
The Tinder Swindler
Don't F**k with Cats
Leaving Neverland
Michael Jordan to the Max
Free Solo
Kobe Bryant's Muse
Untold | | Untold (TV series)
`,
    },
    {
      id: 'nolan-movies',
      name: 'Christopher Nolan Movies',
      blurb: 'Time is a flat circle. Pick wisely.',
      hint: 'Christopher Nolan film',
      items: `
Following
Memento | | Memento (film)
Insomnia | | Insomnia (2002 film)
Batman Begins
The Prestige | | The Prestige (film)
The Dark Knight
Inception
The Dark Knight Rises
Interstellar | | Interstellar (film)
Dunkirk | | Dunkirk (2017 film)
Tenet | | Tenet (film)
Oppenheimer | | Oppenheimer (film)
The Odyssey | | The Odyssey (2026 film)
`,
    },
    {
      id: 'spielberg-movies',
      name: 'Spielberg Movies',
      blurb: 'Sharks, dinosaurs and aliens. Classic.',
      hint: 'Steven Spielberg film',
      items: `
Duel | | Duel (1971 film)
The Sugarland Express
Jaws | | Jaws (film)
Close Encounters of the Third Kind
1941 | | 1941 (film)
Raiders of the Lost Ark
E.T. the Extra-Terrestrial
Indiana Jones and the Temple of Doom
The Color Purple | | The Color Purple (1985 film)
Empire of the Sun | | Empire of the Sun (film)
Indiana Jones and the Last Crusade
Always | | Always (1989 film)
Hook | | Hook (film)
Jurassic Park | | Jurassic Park (film)
Schindler's List
The Lost World: Jurassic Park
Amistad | | Amistad (film)
Saving Private Ryan
A.I. Artificial Intelligence
Minority Report | | Minority Report (film)
Catch Me If You Can
The Terminal
War of the Worlds | | War of the Worlds (2005 film)
Munich | | Munich (2005 film)
Indiana Jones and the Kingdom of the Crystal Skull
The Adventures of Tintin | | The Adventures of Tintin (film)
War Horse | | War Horse (film)
Lincoln | | Lincoln (film)
Bridge of Spies | | Bridge of Spies (film)
The BFG | | The BFG (2016 film)
The Post | | The Post (film)
Ready Player One | | Ready Player One (film)
West Side Story | | West Side Story (2021 film)
The Fabelmans
Disclosure Day
`,
    },
    {
      id: 'biopics',
      name: 'Biopics',
      blurb: 'Based on a true story (mostly).',
      hint: 'biographical film',
      items: `
Bohemian Rhapsody | | Bohemian Rhapsody (film)
Rocketman | | Rocketman (film)
Elvis | | Elvis (2022 film)
Walk the Line
Ray | | Ray (film)
Straight Outta Compton | | Straight Outta Compton (film)
8 Mile | | 8 Mile (film)
Notorious | | Notorious (2009 film)
All Eyez on Me | | All Eyez on Me (film)
Respect | | Respect (2021 film)
Whitney | | Whitney (2018 film)
A Complete Unknown
Oppenheimer | | Oppenheimer (film)
The Social Network
The Wolf of Wall Street
Catch Me If You Can
Schindler's List
Lincoln | | Lincoln (film)
Malcolm X | | Malcolm X (1992 film)
Ali | | Ali (film)
Raging Bull
The Fighter | | The Fighter (2010 film)
Moneyball | | Moneyball (film)
42 | | 42 (film)
The Blind Side | | The Blind Side (film)
King Richard | | King Richard (film)
Rush | | Rush (2013 film)
Ford v Ferrari
Air | | Air (2023 film)
The Iron Claw | | The Iron Claw (film)
Gandhi | | Gandhi (film)
Selma | | Selma (film)
Hidden Figures
The Imitation Game
A Beautiful Mind | | A Beautiful Mind (film)
The Theory of Everything | | The Theory of Everything (2014 film)
Steve Jobs | | Steve Jobs (film)
The Pursuit of Happyness
Erin Brockovich | | Erin Brockovich (film)
Braveheart
Gladiator | | Gladiator (2000 film)
Napoleon | | Napoleon (2023 film)
The Aviator | | The Aviator (2004 film)
Sully | | Sully (film)
Apollo 13 | | Apollo 13 (film)
Black Mass | | Black Mass (film)
American Gangster | | American Gangster (film)
Blow | | Blow (film)
Goodfellas
Capone | | Capone (film)
The Greatest Showman
Priscilla | | Priscilla (film)
I, Tonya
Maestro | | Maestro (2023 film)
Michael | | Michael (2026 film)
Better Man | | Better Man (film)
Bob Marley: One Love
`,
    },
    {
      id: 'comedies',
      name: 'Comedies',
      blurb: 'Quotes you still say out loud.',
      hint: 'comedy film',
      items: `
Superbad
The Hangover
Step Brothers
Anchorman: The Legend of Ron Burgundy
Talladega Nights: The Ballad of Ricky Bobby
Elf | | Elf (film)
Old School | | Old School (film)
Wedding Crashers
Dodgeball: A True Underdog Story
Zoolander
Napoleon Dynamite
Mean Girls
Bridesmaids | | Bridesmaids (2011 film)
21 Jump Street | | 21 Jump Street (film)
22 Jump Street
Tropic Thunder
Pineapple Express | | Pineapple Express (film)
This Is the End
The 40-Year-Old Virgin
Knocked Up
Forgetting Sarah Marshall
I Love You, Man
Happy Gilmore
Billy Madison
The Waterboy
Big Daddy | | Big Daddy (1999 film)
50 First Dates
Grown Ups | | Grown Ups (film)
Click | | Click (2006 film)
Ace Ventura: Pet Detective
Dumb and Dumber
The Mask | | The Mask (1994 film)
Liar Liar
Bruce Almighty
Coming to America
Beverly Hills Cop
Trading Places
The Nutty Professor | | The Nutty Professor (1996 film)
Friday | | Friday (1995 film)
Next Friday
Bad Boys | | Bad Boys (1995 film)
Rush Hour | | Rush Hour (1998 film)
White Chicks
Scary Movie | | Scary Movie (2000 film)
Meet the Parents
Meet the Fockers
Austin Powers: International Man of Mystery
Wayne's World | | Wayne's World (film)
Airplane!
The Naked Gun
Monty Python and the Holy Grail
Groundhog Day | | Groundhog Day (film)
Ghostbusters
Caddyshack
Ferris Bueller's Day Off
Home Alone
Mrs. Doubtfire
The Mask | | The Mask (1994 film)
Borat | | Borat (film)
Shaun of the Dead
Hot Fuzz
The Grand Budapest Hotel
Game Night | | Game Night (film)
Barbershop | | Barbershop (film)
Friday After Next
Ride Along | | Ride Along (film)
Central Intelligence
Girls Trip
Don't Be a Menace to South Central While Drinking Your Juice in the Hood
House Party | | House Party (1990 film)
Major Payne
Blades of Glory
Semi-Pro
Neighbors | | Neighbors (2014 film)
The Other Guys
`,
    },
    {
      id: 'kids-shows',
      name: 'Kids Shows',
      blurb: 'Blue’s Clues, Barney and the whole preschool lineup.',
      hint: 'children’s television series',
      items: `
Blue's Clues
Sesame Street
Barney & Friends
Teletubbies
Mister Rogers' Neighborhood
Dora the Explorer
Go, Diego, Go!
Bluey | | Bluey (2018 TV series)
Peppa Pig
Paw Patrol
Thomas & Friends
Bob the Builder
Arthur | | Arthur (TV series)
Clifford the Big Red Dog | | Clifford the Big Red Dog (1999 TV series)
Caillou
The Wiggles
Bear in the Big Blue House
Rugrats
Franklin | | Franklin (TV series)
Little Bear | | Little Bear (TV series)
Dragon Tales
Zoboomafoo
Reading Rainbow
Bill Nye the Science Guy
The Magic School Bus | | The Magic School Bus (TV series)
Wishbone | | Wishbone (TV series)
Lamb Chop's Play-Along
Shining Time Station
The Backyardigans
Oswald | | Oswald (TV series)
Max & Ruby
Little Einsteins
Mickey Mouse Clubhouse
Handy Manny
Doc McStuffins
Special Agent Oso
Jake and the Never Land Pirates
Wonder Pets
Yo Gabba Gabba!
Bubble Guppies
Team Umizoomi
Ni Hao, Kai-Lan
Super Why!
Curious George | | Curious George (TV series)
WordGirl
Cyberchase
Between the Lions
Dinosaur Train
Daniel Tiger's Neighborhood
Sid the Science Kid
Word World | | WordWorld
LazyTown
Hi-5 | | Hi-5 (Australian TV series)
Teletubbies
Boohbah
Tweenies
In the Night Garden...
Fireman Sam
Postman Pat
Pingu
Noddy | | Noddy (character)
Cocomelon
Ms. Rachel
Gabby's Dollhouse
Blippi
Paddington | | The Adventures of Paddington (2019 TV series)
Hey Duggee
Sofia the First
Octonauts | | The Octonauts
Pocoyo
Elmo's World
Out of the Box | | Out of the Box (TV series)
JoJo's Circus
PB&J Otter
Allegra's Window
Gullah Gullah Island
Eureeka's Castle
`,
    },
  ],
}
