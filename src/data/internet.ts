import type { TabDef } from './types.ts'

export const internet: TabDef = {
  id: 'internet',
  name: 'Internet & More',
  categories: [
    {
      id: 'comedians',
      name: 'Comedians',
      blurb: 'Stand-up legends and sketch kings.',
      hint: 'comedian',
      items: `
Dave Chappelle
Eddie Murphy
Richard Pryor
Chris Rock
Kevin Hart
Bernie Mac
Katt Williams
Martin Lawrence
Steve Harvey
Cedric the Entertainer
D. L. Hughley
George Carlin
Robin Williams
Jim Carrey
Adam Sandler
Chris Farley
Will Ferrell
Steve Martin
Jerry Seinfeld
Larry David
Bill Burr
Louis C.K.
Ricky Gervais
John Mulaney
Ali Wong
Tiffany Haddish
Wanda Sykes
Sebastian Maniscalco
Gabriel Iglesias
Jo Koy
Matt Rife
Shane Gillis
Nate Bargatze
Taylor Tomlinson
Tom Segura
Bert Kreischer
Theo Von
Andrew Schulz
Joe Rogan
Hasan Minhaj
Trevor Noah
Jimmy Fallon
Conan O'Brien
David Letterman
Jon Stewart
Stephen Colbert
John Oliver
Amy Schumer
Sarah Silverman
Tina Fey
Amy Poehler
Kristen Wiig
Maya Rudolph
Kenan Thompson
Key & Peele
Jordan Peele
Keegan-Michael Key
Pete Davidson
Bo Burnham
Mitch Hedberg
Norm Macdonald
Rodney Dangerfield
Joan Rivers
Don Rickles
Mel Brooks
Leslie Jones
Mike Epps
Deon Cole
Druski
Kai Cenat
Lil Rel Howery
Jerrod Carmichael
Russell Peters
Jim Gaffigan
Brian Regan
Jeff Foxworthy
Larry the Cable Guy
Jim Jefferies
`,
    },
    {
      id: 'memes',
      name: 'Memes',
      blurb: 'Internet history, ranked by vibes.',
      hint: 'internet meme',
      items: `
Distracted Boyfriend
Rickroll | | Rickrolling
Doge | | Doge (meme)
Grumpy Cat
Nyan Cat
Trollface
Pepe the Frog
Success Kid
Bad Luck Brian
Hide the Pain Harold
Woman Yelling at a Cat
This Is Fine
Surprised Pikachu
Drakeposting | | Hotline Bling
Galaxy Brain
Is This a Pigeon?
Two Buttons | | Daily Struggle
Change My Mind | | Steven Crowder
Roll Safe | | Roll Safe
Arthur's Fist | | Arthur (TV series)
Kermit Sipping Tea | | But That's None of My Business
Evil Kermit | | Kermit the Frog
Mocking SpongeBob
Salt Bae
Crying Jordan | | Crying Jordan
Blinking White Guy | | Drew Scanlon
Disaster Girl
Leave Britney Alone
Charlie Bit My Finger
Keyboard Cat
Dramatic Chipmunk
Harlem Shake | | Harlem Shake (meme)
Ice Bucket Challenge
Gangnam Style
Planking | | Planking (fad)
Dabbing | | Dab (dance)
Floss | | Floss (dance)
Bottle Flip | | Bottle flipping
Mannequin Challenge
Damn Daniel
Ugandan Knuckles
Big Chungus
Shrek is love
Coffin Dance
Stonks
Bernie Mittens | | Bernie Sanders's mittens
Skibidi Toilet
Rizz
Sigma | | Sigma male
Gigachad
NPC | | Non-player character
Wojak
Chill Guy | | Chill Guy
Hawk Tuah
Moo Deng
Pedro Pascal Eating Sandwich | | Pedro Pascal
Grimace Shake
Ohio | | Only in Ohio
6-7 | | 6-7 (meme)
Italian Brainrot
Tung Tung Tung Sahur
Ballerina Cappuccina | | Italian brainrot
Fortnite Default Dance | | Fortnite
Ermahgerd
Philosoraptor
Y U No | | Y U NO
Forever Alone
Me Gusta
Overly Attached Girlfriend
Ridiculously Photogenic Guy
Sad Keanu
Bowsette
Among Us Sus | | Among Us
`,
    },
    {
      id: 'cars',
      name: 'Cars',
      blurb: 'Your dream garage, three to seven spots.',
      hint: 'car',
      items: `
Lamborghini Aventador
Lamborghini Huracán
Lamborghini Urus
Lamborghini Countach
Ferrari LaFerrari
Ferrari F40
Ferrari 488
Ferrari SF90 Stradale
Ferrari Enzo Ferrari | | Enzo Ferrari (automobile)
Porsche 911
Porsche 918 Spyder
Porsche Carrera GT
Porsche Taycan
Bugatti Chiron
Bugatti Veyron
McLaren P1
McLaren F1
McLaren 720S
Koenigsegg Jesko
Pagani Huayra
Pagani Zonda
Aston Martin DB5
Aston Martin DBS
Rolls-Royce Phantom | | Rolls-Royce Phantom (2017)
Rolls-Royce Cullinan
Bentley Continental GT
Mercedes-Benz G-Class
Mercedes-AMG GT
Mercedes-Benz S-Class
BMW M3
BMW M5
BMW i8
Audi R8
Audi RS6
Nissan GT-R
Nissan Skyline GT-R
Toyota Supra
Toyota Corolla
Toyota Camry
Toyota 4Runner
Honda Civic
Honda Civic Type R
Honda Accord
Honda NSX
Mazda RX-7
Mazda MX-5 | | Mazda MX-5
Subaru WRX
Mitsubishi Lancer Evolution
Ford Mustang
Ford GT
Ford F-150 | | Ford F-Series
Ford Bronco
Chevrolet Corvette
Chevrolet Camaro
Chevrolet Impala
Chevrolet Silverado
Dodge Challenger
Dodge Charger
Dodge Viper
Dodge Ram | | Ram pickup
Jeep Wrangler
Cadillac Escalade
Lincoln Navigator
Hummer H1 | | Humvee
GMC Hummer EV
Tesla Model S
Tesla Model 3
Tesla Cybertruck
Rivian R1T
Lucid Air
Range Rover
Land Rover Defender
Volkswagen Beetle
Volkswagen Golf GTI | | Volkswagen Golf GTI
Mini Cooper | | Mini (marque)
Fiat 500
DeLorean DMC-12
Batmobile
Lightning McQueen
Buick Grand National
Chevrolet Chevelle
Pontiac GTO
Plymouth Barracuda
Shelby Cobra | | AC Cobra
`,
    },
    {
      id: 'accents',
      name: 'Accents',
      blurb: 'Which accent would you rock forever?',
      src: 'flag',
      items: `
British (Posh) | gb
Cockney | gb
Scouse | gb
Geordie | gb
Scottish | gb-sct
Welsh | gb-wls
Irish | ie
Australian | au
New Zealand | nz
South African | za
Jamaican | jm
Nigerian | ng
Ghanaian | gh
Kenyan | ke
Indian | in
Pakistani | pk
Southern American | us
New York | us
Boston | us
Texan | us
Californian Valley | us
Midwestern | us
Cajun | us
Canadian | ca
Québécois | ca
French | fr
Italian | it
Spanish | es
Mexican | mx
Colombian | co
Argentinian | ar
Puerto Rican | pr
Dominican | do
Cuban | cu
Brazilian | br
Portuguese | pt
German | de
Austrian | at
Swiss | ch
Dutch | nl
Swedish | se
Norwegian | no
Danish | dk
Finnish | fi
Russian | ru
Polish | pl
Greek | gr
Turkish | tr
Arabic | sa
Egyptian | eg
Israeli | il
Persian | ir
Chinese | cn
Japanese | jp
Korean | kr
Filipino | ph
Vietnamese | vn
Thai | th
Singaporean | sg
`,
    },
    {
      id: 'dangerous-animals',
      name: 'Dangerous Animals',
      blurb: 'Pick your bodyguards.',
      hint: 'animal',
      items: `
Great white shark
Saltwater crocodile
Nile crocodile
Hippopotamus
Lion
Tiger
Polar bear
Grizzly bear
African elephant
Cape buffalo | | African buffalo
Black rhinoceros
Komodo dragon
King cobra
Black mamba
Inland taipan
Eastern brown snake
Saw-scaled viper | | Echis
Fer-de-lance | | Bothrops asper
Box jellyfish
Blue-ringed octopus
Stonefish
Pufferfish | | Tetraodontidae
Cone snail
Poison dart frog
Brazilian wandering spider | | Phoneutria
Black widow | | Latrodectus
Sydney funnel-web spider
Deathstalker scorpion | | Leiurus quinquestriatus
Mosquito
Tsetse fly
Africanized bee
Asian giant hornet
Bullet ant
Fire ant
Leopard
Jaguar
Cougar
Gray wolf | | Wolf
Hyena
African wild dog
Wolverine | | Wolverine (animal)
Honey badger
Gorilla
Chimpanzee
Moose
Cassowary
Ostrich
Electric eel
Piranha
Orca
Bull shark
Tiger shark
Anaconda | | Green anaconda
Reticulated python
Gila monster
Wild boar
Bison | | American bison
Kangaroo | | Red kangaroo
Lionfish | | Pterois
Stingray
`,
    },
    {
      id: 'animals',
      name: 'Animals in General',
      blurb: 'The whole animal kingdom.',
      hint: 'animal',
      items: `
Dog
Cat
Lion
Tiger
Elephant
Giraffe
Zebra
Cheetah
Leopard
Gorilla
Chimpanzee
Orangutan
Panda | | Giant panda
Red panda
Koala
Kangaroo | | Red kangaroo
Polar bear
Brown bear
Wolf
Fox | | Red fox
Deer
Moose
Horse
Donkey
Cow | | Cattle
Pig
Sheep
Goat
Chicken
Duck
Rabbit
Hamster
Guinea pig
Squirrel
Raccoon
Skunk
Hedgehog
Otter | | Sea otter
Beaver
Capybara
Sloth
Armadillo
Platypus
Bat
Owl
Eagle | | Bald eagle
Hawk
Penguin
Flamingo
Parrot
Peacock | | Indian peafowl
Hummingbird
Toucan
Crow | | American crow
Pigeon | | Rock dove
Swan | | Mute swan
Dolphin | | Common bottlenose dolphin
Whale | | Blue whale
Orca
Shark | | Great white shark
Octopus
Jellyfish
Sea turtle
Seal | | Harbor seal
Walrus
Manatee
Crab
Lobster
Starfish
Clownfish
Goldfish
Axolotl
Frog
Turtle
Tortoise
Snake
Lizard
Chameleon
Gecko
Crocodile
Alligator | | American alligator
Butterfly
Bee | | Honey bee
Ladybug | | Coccinellidae
Ant
Spider
Camel
Llama
Alpaca
Hippo | | Hippopotamus
Rhino | | Rhinoceros
Meerkat
Lemur
Mongoose
Hyena | | Spotted hyena
Jaguar
Lynx
Snow leopard
Arctic fox
Bison | | American bison
Yak
Narwhal
Quokka
Pangolin
Okapi
Tapir
Wombat
Tasmanian devil
`,
    },
    {
      id: 'superpowers',
      name: 'Superpowers',
      blurb: 'Choose wisely. No take-backs.',
      hint: 'superpower',
      src: 'none',
      items: `
Flight
Invisibility
Teleportation
Time travel
Time stop
Super strength
Super speed
Telekinesis
Telepathy
Mind control
Shapeshifting
Healing factor
Immortality
Invulnerability
X-ray vision
Laser eyes
Super hearing
Night vision
Pyrokinesis
Cryokinesis
Electrokinesis
Hydrokinesis
Weather control
Earth bending
Air bending
Gravity control
Force fields
Intangibility
Duplication
Size shifting
Elasticity
Wall crawling
Breathing underwater
Talk to animals
Photographic memory
Super intelligence
Precognition
Danger sense
Power absorption
Power copying
Reality warping
Portal creation
Matter manipulation
Light manipulation
Shadow manipulation
Sound manipulation
Magnetism
Technopathy
Luck manipulation
Infinite money
Never need sleep
Instant language learning
Animal transformation
Plant control
Summoning
Resurrection
Body armor
Sonic scream
`,
    },
    {
      id: 'social-apps',
      name: 'Social Media Apps',
      blurb: 'What’s on your home screen?',
      hint: 'app',
      items: `
Instagram
TikTok
Snapchat
YouTube
X | | Twitter
Facebook
WhatsApp
Discord
Reddit
Pinterest
LinkedIn
Twitch | | Twitch (service)
Threads | | Threads (social network)
BeReal
Telegram | | Telegram (software)
Signal | | Signal (software)
Messenger | | Facebook Messenger
iMessage
FaceTime
Tumblr
Vine | | Vine (service)
Musical.ly
MySpace
Bluesky
Kick | | Kick (service)
Clubhouse | | Clubhouse (app)
Tinder | | Tinder (app)
Hinge | | Hinge (app)
Bumble
Spotify
Apple Music
SoundCloud
Netflix
Hulu
Disney+
ChatGPT
Roblox
Duolingo
Strava
Letterboxd
Goodreads
Venmo
Cash App
Zoom | | Zoom (software)
Slack | | Slack (software)
Quora
Truth Social
WeChat
LINE | | Line (software)
CapCut
Lemon8
Yik Yak
Periscope | | Periscope (service)
Google+
`,
    },
    {
      id: 'vacation',
      name: 'Vacation Destinations',
      blurb: 'Pack a bag. Where are we going?',
      hint: 'tourism',
      items: `
Paris
London
Rome
Barcelona
Amsterdam
Santorini
Mykonos
Amalfi Coast
Venice
Florence
Lake Como
Swiss Alps | | Alps
Iceland
Dubai
Maldives
Bali
Phuket
Tokyo
Kyoto
Seoul
Hong Kong
Singapore
Sydney
Bora Bora
Fiji
Hawaii
Maui
Honolulu
Cancún
Tulum
Cabo San Lucas
Puerto Vallarta
Jamaica
Bahamas | | The Bahamas
Turks and Caicos | | Turks and Caicos Islands
Punta Cana
Aruba
Barbados
Puerto Rico
Miami
Las Vegas
New York City
Los Angeles
San Francisco
Orlando
Walt Disney World
Disneyland
New Orleans
Nashville
Chicago
Grand Canyon
Yellowstone National Park
Yosemite National Park
Machu Picchu
Rio de Janeiro
Buenos Aires
Cartagena | | Cartagena, Colombia
Galápagos Islands
Cape Town
Marrakesh
Cairo
Serengeti | | Serengeti National Park
Zanzibar
Seychelles
Mauritius
Istanbul
Prague
Vienna
Budapest
Lisbon
Ibiza
Monaco
Dubrovnik
Swiss Alps | | Zermatt
Banff | | Banff National Park
Vancouver
Montreal
Alaska
Aspen | | Aspen, Colorado
Great Barrier Reef
Queenstown | | Queenstown, New Zealand
`,
    },
  ],
}
