import type { CategoryDef, TabDef } from './types.ts'

// Catalogs for "Your Favorite Musician" – the host picks one artist and the deck is their songs.
export const artistCatalogs: Record<string, string> = {
  'Michael Jackson': `Thriller|Billie Jean|Beat It|Smooth Criminal|Man in the Mirror|Black or White|Rock with You|Don't Stop 'Til You Get Enough|Bad|The Way You Make Me Feel|Remember the Time|They Don't Care About Us|Wanna Be Startin' Somethin'|Human Nature|Off the Wall|You Rock My World|Dirty Diana|P.Y.T. (Pretty Young Thing)|Earth Song|Scream|Heal the World|Will You Be There|Leave Me Alone|Jam|Butterflies`,
  'Drake': `Hotline Bling|God's Plan|One Dance|Started from the Bottom|Passionfruit|Nice for What|In My Feelings|Hold On, We're Going Home|Marvins Room|Headlines|Take Care|Over|Forever|Best I Ever Had|Nonstop|Jimmy Cooks|Rich Flex|Toosie Slide|Laugh Now Cry Later|Controlla|Too Good|Energy|Know Yourself|0 to 100 / The Catch Up|Worst Behavior|Family Matters|Search & Rescue|First Person Shooter|Fair Trade|Sticky`,
  'Taylor Swift': `Love Story|You Belong with Me|Shake It Off|Blank Space|Style|Bad Blood|Wildest Dreams|Look What You Made Me Do|Delicate|ME!|Cardigan|Willow|All Too Well|Anti-Hero|Cruel Summer|Lavender Haze|Karma|Fortnight|Fearless|Mine|I Knew You Were Trouble|We Are Never Ever Getting Back Together|22|Enchanted|August|Champagne Problems|Getaway Car|Is It Over Now?|The Fate of Ophelia|Our Song`,
  'Kendrick Lamar': `HUMBLE.|DNA.|Alright|Swimming Pools (Drank)|Bitch, Don't Kill My Vibe|Money Trees|m.A.A.d city|King Kunta|The Blacker the Berry|i|LOYALTY.|LOVE.|ELEMENT.|Not Like Us|Euphoria|Like That|squabble up|tv off|luther|Backseat Freestyle|Poetic Justice|N95|United in Grief|Count Me Out|Silent Hill|Rich Spirit|These Walls|Wesley's Theory|Mr. Morale|Family Ties`,
  'Beyoncé': `Crazy in Love|Single Ladies (Put a Ring on It)|Halo|Irreplaceable|Formation|Drunk in Love|Love On Top|Run the World (Girls)|Partition|Hold Up|Sorry|Freedom|Break My Soul|Cuff It|Texas Hold 'Em|Baby Boy|Naughty Girl|Deja Vu|Sweet Dreams|If I Were a Boy|Diva|Countdown|XO|Flawless|Formation|Me, Myself and I|Ring the Alarm|Upgrade U|Daddy Lessons|Alien Superstar`,
  'Eminem': `Lose Yourself|The Real Slim Shady|Stan|Without Me|Mockingbird|Not Afraid|Love the Way You Lie|Rap God|The Monster|Till I Collapse|Sing for the Moment|When I'm Gone|Like Toy Soldiers|Cleanin' Out My Closet|My Name Is|Superman|Just Lose It|Berzerk|Godzilla|Venom|Killshot|Houdini|Beautiful|Space Bound|Kamikaze|Lucky You|Shake That|Business|White America|Guts Over Fear`,
  'The Weeknd': `Blinding Lights|Starboy|The Hills|Can't Feel My Face|Save Your Tears|Earned It|I Feel It Coming|Die for You|Call Out My Name|Often|Wicked Games|In the Night|Heartless|After Hours|Out of Time|Sacrifice|Less Than Zero|Popular|Dancing in the Flames|Timeless|Pray for Me|Love Me Harder|Party Monster|Reminder|Six Feet Under|São Paulo|Twenty Eight|House of Balloons|The Morning|Kiss Land`,
  'Rihanna': `Umbrella|Diamonds|We Found Love|Work|Only Girl (In the World)|Rude Boy|Disturbia|Don't Stop the Music|Pon de Replay|SOS|S&M|What's My Name?|Needed Me|Love on the Brain|Bitch Better Have My Money|Stay|Take a Bow|Shut Up and Drive|Where Have You Been|Kiss It Better|Desperado|Lift Me Up|Hate That I Love You|Unfaithful|Russian Roulette|Te Amo|Cheers (Drink to That)|Man Down|California King Bed|FourFiveSeconds`,
  'Kanye West': `Stronger|Gold Digger|Heartless|Power|All of the Lights|Runaway|Through the Wire|Jesus Walks|Touch the Sky|Flashing Lights|Good Life|Can't Tell Me Nothing|Homecoming|Black Skinhead|Bound 2|Ultralight Beam|Famous|Father Stretch My Hands Pt. 1|Waves|I Love It|Hurricane|Off the Grid|Carnival|Love Lockdown|Paranoid|Monster|Mercy|N****s in Paris|Diamonds from Sierra Leone|All Falls Down`,
  'Bruno Mars': `Uptown Funk|Just the Way You Are|Grenade|Locked Out of Heaven|When I Was Your Man|24K Magic|That's What I Like|Finesse|Treasure|The Lazy Song|Marry You|Talking to the Moon|Count on Me|It Will Rain|Versace on the Floor|Leave the Door Open|Die with a Smile|APT.|Nothin' on You|Billionaire|Young Girls|Gorilla|Smokin Out the Window|Skate|Chunky|Calling All My Lovelies|Perm|Liquor Store Blues|Runaway Baby|Moonshine`,
  'Ariana Grande': `thank u, next|7 rings|Problem|Break Free|Side to Side|Into You|Dangerous Woman|No Tears Left to Cry|God Is a Woman|positions|34+35|Bang Bang|Love Me Harder|One Last Time|Focus|The Way|Breathin|Needy|we can't be friends|yes, and?|Rain on Me|Stuck with U|Santa Tell Me|Boyfriend|Be Alright|Imagine|Pov|Dance to This|the boy is mine|Supernatural`,
  'Travis Scott': `SICKO MODE|goosebumps|Antidote|HIGHEST IN THE ROOM|Butterfly Effect|STARGAZING|FE!N|Mamacita|90210|Pick Up the Phone|Way Back|3500|Upper Echelon|STOP TRYING TO BE GOD|YOSEMITE|NO BYSTANDERS|CAROUSEL|I KNOW ?|MY EYES|TELEKINESIS|K-POP|Franchise|THE SCOTTS|out west|Watch|Hell of a Night|Coffee Bean|Through the Late Night|uptown|Oh My Dis Side`,
  'Bad Bunny': `Dákiti|Me Porto Bonito|Tití Me Preguntó|Yo Perreo Sola|Callaíta|MIA|Safaera|Vete|La Canción|Moscow Mule|Ojitos Lindos|Efecto|Un Verano Sin Ti|I Like It|Chambea|Soy Peor|Monaco|Where She Goes|Un Preview|Neverita|Después de la Playa|Party|Si Veo a Tu Mamá|Booker T|La Difícil|DtMF|BAILE INoLVIDABLE|NUEVAYoL|Volví|Hablamos Mañana`,
  'Elvis Presley': `Hound Dog|Jailhouse Rock|Can't Help Falling in Love|Suspicious Minds|Heartbreak Hotel|Love Me Tender|Blue Suede Shoes|All Shook Up|Don't Be Cruel|Burning Love|In the Ghetto|Return to Sender|A Little Less Conversation|Always on My Mind|It's Now or Never|Are You Lonesome Tonight?|Viva Las Vegas|Teddy Bear|Way Down|Trouble|Blue Hawaii|Love Me|Good Luck Charm|Devil in Disguise|Big Hunk o' Love|Stuck on You|Surrender|One Night|Moody Blue|Hard Headed Woman`,
  'The Beatles': `Hey Jude|Let It Be|Yesterday|Come Together|Here Comes the Sun|Something|Help!|A Hard Day's Night|I Want to Hold Your Hand|She Loves You|Twist and Shout|Strawberry Fields Forever|Penny Lane|All You Need Is Love|Eleanor Rigby|Yellow Submarine|In My Life|Blackbird|While My Guitar Gently Weeps|Lucy in the Sky with Diamonds|Revolution|Get Back|Ticket to Ride|Can't Buy Me Love|Love Me Do|Norwegian Wood|Day Tripper|Paperback Writer|Drive My Car|The Long and Winding Road`,
  'Queen': `Bohemian Rhapsody|We Will Rock You|We Are the Champions|Don't Stop Me Now|Another One Bites the Dust|Somebody to Love|Under Pressure|Radio Ga Ga|I Want to Break Free|Killer Queen|Crazy Little Thing Called Love|Who Wants to Live Forever|The Show Must Go On|A Kind of Magic|Fat Bottomed Girls|Bicycle Race|You're My Best Friend|Innuendo|Seven Seas of Rhye|I Want It All|Love of My Life|Hammer to Fall|Save Me|Flash|These Are the Days of Our Lives|Tie Your Mother Down|One Vision|Friends Will Be Friends|Now I'm Here|Spread Your Wings`,
  'Tupac': `California Love|Changes|Dear Mama|Hit 'Em Up|Ambitionz az a Ridah|All Eyez on Me|Keep Ya Head Up|Hail Mary|I Get Around|How Do U Want It|Brenda's Got a Baby|Me Against the World|So Many Tears|Life Goes On|Only God Can Judge Me|Picture Me Rollin'|2 of Amerikaz Most Wanted|Ghetto Gospel|Thugz Mansion|Until the End of Time|Do for Love|Unconditional Love|Temptations|Toss It Up|Hit 'Em Up|Krazy|To Live & Die in L.A.|Can't C Me|Heartz of Men|Ballad of a Dead Soulja`,
  'Lil Wayne': `A Milli|Lollipop|6 Foot 7 Foot|Mirror|Mrs. Officer|Got Money|Go DJ|Fireman|Hustler Musik|Love Me|How to Love|She Will|John|Uproar|Right Above It|Drop the World|Bring It Back|Tie My Hands|Shoot Me Down|Let the Beat Build|Mr. Carter|Hollyweezy|Believe Me|Bill Gates|Kobe Bryant|Blunt Blowin|Dr. Carter|Comfortable|Something You Forgot`,
  'SZA': `Kill Bill|Snooze|Good Days|The Weekend|Love Galore|Broken Clocks|Saturn|Nobody Gets Me|Drew Barrymore|Supermodel|Shirt|I Hate U|Low|Open Arms|Blind|Normal Girl|Garden (Say It Like Dat)|Prom|Doves in the Wind|Hit Different|Rich Baby Daddy|All the Stars|Gone Girl|Special|Ghost in the Machine|Conceited|Far|Seek & Destroy|Notice Me|Diamond Boy`,
  'Billie Eilish': `bad guy|Birds of a Feather|lovely|ocean eyes|when the party's over|Happier Than Ever|everything i wanted|What Was I Made For?|Lunch|bury a friend|you should see me in a crown|idontwannabeyouanymore|No Time to Die|Therefore I Am|my future|Lost Cause|Your Power|i love you|Chihiro|Wildflower|The Greatest|L'Amour de Ma Vie|Bellyache|six feet under|COPYCAT|watch|Getting Older|Oxytocin|NDA|xanny`,
  'Frank Ocean': `Thinkin Bout You|Pink + White|Nights|Ivy|Self Control|Novacane|Lost|Super Rich Kids|Pyramids|Swim Good|Chanel|Nikes|Solo|Godspeed|White Ferrari|Seigfried|Forrest Gump|Bad Religion|Sweet Life|Pilot Jones|Biking|Moon River|Provider|Lens|In My Room|Crack Rock|Pretty Sweet|Futura Free|Good Guy|Self Control`,
  'Post Malone': `Circles|Sunflower|Rockstar|Congratulations|White Iverson|Psycho|Better Now|Wow.|Goodbyes|I Fall Apart|Go Flex|Too Young|Hollywood's Bleeding|Take What You Want|Motley Crew|I Had Some Help|I Like You (A Happier Song)|Chemical|Mourning|Cooped Up|Saint-Tropez|Candy Paint|Over Now|Stay|Feeling Whitney|Paranoid|Enemies|Allergic|Pour Me a Drink|Enough Is Enough`,
  'J. Cole': `No Role Modelz|Middle Child|Love Yourz|Wet Dreamz|Power Trip|Crooked Smile|Apparently|G.O.M.D.|Work Out|ATM|KOD|Kevin's Heart|Neighbors|Deja Vu|Can't Get Enough|Lights Please|Nobody's Perfect|She Knows|Interlude|amari|My Life|95 South|Snow on tha Bluff|Too Deep for the Intro|Villematic|In the Morning|Born Sinner|Forbidden Fruit`,
  'Adele': `Rolling in the Deep|Someone Like You|Hello|Set Fire to the Rain|Skyfall|When We Were Young|Easy on Me|Chasing Pavements|Make You Feel My Love|Send My Love (To Your New Lover)|Water Under the Bridge|Rumour Has It|Turning Tables|Hometown Glory|I Drink Wine|Oh My God|Love in the Dark|Remedy|All I Ask|Million Years Ago|Daydreamer|One and Only|Don't You Remember|Lovesong|Take It All|To Be Loved|Can I Get It|Hold On|I Miss You|River Lea`,
  'Prince': `Purple Rain|When Doves Cry|Kiss|Little Red Corvette|1999|Let's Go Crazy|Raspberry Beret|I Wanna Be Your Lover|Diamonds and Pearls|Cream|Sign o' the Times|U Got the Look|Batdance|I Would Die 4 U|Delirious|Controversy|Alphabet St.|The Most Beautiful Girl in the World|Gett Off|Sexy M.F.|Nothing Compares 2 U|Pop Life|Thieves in the Temple|Mountains|7|Starfish and Coffee|Darling Nikki|Take Me with U|Erotic City|Musicology`,
  'Whitney Houston': `I Will Always Love You|I Wanna Dance with Somebody|Greatest Love of All|How Will I Know|Saving All My Love for You|I'm Every Woman|I Have Nothing|Run to You|Exhale (Shoop Shoop)|It's Not Right but It's Okay|My Love Is Your Love|One Moment in Time|Queen of the Night|So Emotional|Didn't We Almost Have It All|Where Do Broken Hearts Go|I'm Your Baby Tonight|All the Man That I Need|Heartbreak Hotel|I Believe in You and Me|Step by Step|Count on Me|Love Will Save the Day|Million Dollar Bill|Try It on My Own|Same Script, Different Cast|You Give Good Love|Miracle|I Learned from the Best|Star Spangled Banner`,
  'Morgan Wallen': `Last Night|Whiskey Glasses|Wasted on You|Sand in My Boots|You Proof|Thought You Should Know|Chasin' You|More Than My Hometown|7 Summers|Cover Me Up|One Thing at a Time|Thinkin' Bout Me|Love Somebody|Lies Lies Lies|I Had Some Help|Man Made a Bar|Up Down|Whatever's Clever!|Livin' the Dream|Don't Think Jesus|Somebody's Problem|Dangerous|Neon Star|Sunrise|Everything I Love|Broke My Heart|Lose It|Just in Case|I'm the Problem|Superman`,
  'Bob Marley': `One Love|No Woman, No Cry|Redemption Song|Three Little Birds|Could You Be Loved|Is This Love|Buffalo Soldier|Get Up, Stand Up|Jamming|Stir It Up|I Shot the Sheriff|Exodus|Waiting in Vain|Satisfy My Soul|Sun Is Shining|Turn Your Lights Down Low|Iron Lion Zion|Natural Mystic|Lively Up Yourself|Africa Unite|War|Concrete Jungle|Small Axe|Trenchtown Rock|Coming in from the Cold|Zimbabwe|Positive Vibration|Easy Skanking|Punky Reggae Party|Kaya`,
  'Future': `Mask Off|March Madness|Life Is Good|Jumpman|Low Life|Where Ya At|Wait for U|Like That|Type Shit|F*ck Up Some Commas|Same Damn Time|Turn On the Lights|Move That Dope|Commas|Thought It Was a Drought|Stick Talk|Codeine Crazy|Draco|Used to This|Too Comfortable|Puffin on Zootiez|Mo Money|Hate the Real Me|Purple Reign|Ain't No Way Around It|Crushed Up|Never Stop`,
  'Ed Sheeran': `Shape of You|Perfect|Thinking Out Loud|Photograph|Castle on the Hill|The A Team|Bad Habits|Shivers|Galway Girl|Happier|Lego House|Sing|Don't|I See Fire|Give Me Love|Eyes Closed|Azizam|Supermarket Flowers|Dive|Afterglow|Overpass Graffiti|Kiss Me|Small Bump|Thinking Out Loud|Beautiful People|South of the Border|I Don't Care|Celestial|Sapphire|2step`,
}

const artistItems = Object.keys(artistCatalogs).join('\n')

export const artistCategoryId = 'artist-catalog'

export function catalogCategory(artist: string): CategoryDef {
  const songs = Array.from(new Set(artistCatalogs[artist]?.split('|') ?? []))
  return {
    id: `artist:${artist}`,
    name: `${artist} Songs`,
    blurb: `The ${artist} catalog. Pick the bangers.`,
    src: 'song',
    q: 'both',
    items: songs.map((s) => `${s} | ${artist}`).join('\n'),
  }
}

export const music: TabDef = {
  id: 'music',
  name: 'Music',
  categories: [
    {
      id: artistCategoryId,
      src: 'artist',
      name: 'Your Favorite Musician’s Songs',
      blurb: 'Pick one artist and draft from their catalog.',
      hint: 'musician',
      items: artistItems,
    },
    {
      id: 'older-music',
      name: 'Popular Older Music',
      blurb: 'Classics your parents still blast.',
      src: 'song',
      q: 'both',
      items: `
Billie Jean | Michael Jackson
Bohemian Rhapsody | Queen
Hotel California | Eagles
Stairway to Heaven | Led Zeppelin
Hey Jude | The Beatles
Imagine | John Lennon
Respect | Aretha Franklin
What's Going On | Marvin Gaye
My Girl | The Temptations
Superstition | Stevie Wonder
September | Earth, Wind & Fire
Dancing Queen | ABBA
Africa | Toto
Don't Stop Believin' | Journey
Sweet Child o' Mine | Guns N' Roses
Livin' on a Prayer | Bon Jovi
Like a Prayer | Madonna
Purple Rain | Prince
I Will Always Love You | Whitney Houston
Smells Like Teen Spirit | Nirvana
Wonderwall | Oasis
Hound Dog | Elvis Presley
Johnny B. Goode | Chuck Berry
Stand by Me | Ben E. King
Ain't No Mountain High Enough | Marvin Gaye & Tammi Terrell
I Want You Back | The Jackson 5
Let's Stay Together | Al Green
Sweet Home Alabama | Lynyrd Skynyrd
Born to Run | Bruce Springsteen
Dreams | Fleetwood Mac
Go Your Own Way | Fleetwood Mac
Piano Man | Billy Joel
Your Song | Elton John
Rocket Man | Elton John
Space Oddity | David Bowie
Heroes | David Bowie
Every Breath You Take | The Police
Take On Me | a-ha
Girls Just Want to Have Fun | Cyndi Lauper
Billie Jean | Michael Jackson
Like a Rolling Stone | Bob Dylan
(I Can't Get No) Satisfaction | The Rolling Stones
Paint It Black | The Rolling Stones
Good Vibrations | The Beach Boys
Proud Mary | Creedence Clearwater Revival
Fortunate Son | Creedence Clearwater Revival
Jolene | Dolly Parton
Ring of Fire | Johnny Cash
Lean on Me | Bill Withers
Ain't No Sunshine | Bill Withers
Let's Groove | Earth, Wind & Fire
Stayin' Alive | Bee Gees
Le Freak | Chic
I Will Survive | Gloria Gaynor
Celebration | Kool & the Gang
Ain't Nobody | Chaka Khan
Never Gonna Give You Up | Rick Astley
Careless Whisper | George Michael
Wake Me Up Before You Go-Go | Wham!
Every Little Thing She Does Is Magic | The Police
Thriller | Michael Jackson
Into the Groove | Madonna
Material Girl | Madonna
Footloose | Kenny Loggins
Eye of the Tiger | Survivor
Back in Black | AC/DC
Highway to Hell | AC/DC
Enter Sandman | Metallica
Smooth | Santana
No Scrubs | TLC
Waterfalls | TLC
...Baby One More Time | Britney Spears
I Want It That Way | Backstreet Boys
Bye Bye Bye | NSYNC
Wannabe | Spice Girls
Gangsta's Paradise | Coolio
Juicy | The Notorious B.I.G.
California Love | 2Pac
Rapper's Delight | The Sugarhill Gang
Ice Ice Baby | Vanilla Ice
U Can't Touch This | MC Hammer
Vogue | Madonna
My Heart Will Go On | Celine Dion
Under the Bridge | Red Hot Chili Peppers
Losing My Religion | R.E.M.
Creep | Radiohead
Bitter Sweet Symphony | The Verve
Zombie | The Cranberries
Black Hole Sun | Soundgarden
Don't Speak | No Doubt
Tears in Heaven | Eric Clapton
What a Wonderful World | Louis Armstrong
Fly Me to the Moon | Frank Sinatra
My Way | Frank Sinatra
Unchained Melody | The Righteous Brothers
`,
    },
    {
      id: 'recent-artists',
      src: 'artist',
      name: 'Recent Music Artists',
      blurb: 'Who’s running the charts now.',
      hint: 'musician',
      items: `
Taylor Swift
Drake
Kendrick Lamar
SZA
The Weeknd
Bad Bunny
Billie Eilish
Sabrina Carpenter
Chappell Roan
Olivia Rodrigo
Doja Cat
Dua Lipa
Ariana Grande
Post Malone
Travis Scott
Tyler, the Creator
Morgan Wallen
Zach Bryan
Luke Combs
Harry Styles
Bruno Mars
Lady Gaga
Rihanna
Beyoncé
Ed Sheeran
Miley Cyrus
Lizzo
Megan Thee Stallion
Cardi B
Nicki Minaj
Ice Spice
Doechii
GloRilla
Latto
21 Savage
Future
Metro Boomin
Lil Baby
Gunna
Young Thug
Playboi Carti
Lil Uzi Vert
Don Toliver
Jack Harlow
Lil Nas X
Central Cee
Dave | | Dave (rapper)
Stormzy
Burna Boy
Wizkid
Tems
Rema | | Rema (singer)
Tyla | | Tyla (singer)
Karol G
Peso Pluma
Feid | | Feid (singer)
Rauw Alejandro
Shakira
J Balvin
BTS
Blackpink
Jung Kook
Jennie | | Jennie (singer)
Rosé | | Rosé (singer)
Lisa | | Lisa (rapper)
NewJeans
Stray Kids
Benson Boone
Teddy Swims
Tate McRae
Gracie Abrams
Noah Kahan
Hozier
Shaboozey
Jelly Roll
Chris Stapleton
Post Malone
Daniel Caesar
Brent Faiyaz
Summer Walker
Giveon
Victoria Monét
Kehlani
Jorja Smith
Steve Lacy
Frank Ocean
Childish Gambino
Mac Miller
Joji
Lana Del Rey
Halsey
Charli XCX
Troye Sivan
Laufey
Djo | | Joe Keery
Alex Warren
Sombr
Leon Thomas | | Leon Thomas III
`,
    },
    {
      id: 'songs',
      name: 'Songs in General',
      blurb: 'Every era, every genre. Build a playlist.',
      src: 'song',
      q: 'both',
      items: `
Blinding Lights | The Weeknd
Shape of You | Ed Sheeran
Uptown Funk | Mark Ronson ft. Bruno Mars
Bohemian Rhapsody | Queen
Billie Jean | Michael Jackson
Rolling in the Deep | Adele
Hey Ya! | Outkast
Crazy in Love | Beyoncé
Umbrella | Rihanna
Lose Yourself | Eminem
In Da Club | 50 Cent
Gold Digger | Kanye West
Hotline Bling | Drake
God's Plan | Drake
HUMBLE. | Kendrick Lamar
Not Like Us | Kendrick Lamar
SICKO MODE | Travis Scott
Old Town Road | Lil Nas X
Bad Guy | Billie Eilish
Levitating | Dua Lipa
Despacito | Luis Fonsi
Gangnam Style | PSY
Happy | Pharrell Williams
Mr. Brightside | The Killers
Seven Nation Army | The White Stripes
Smells Like Teen Spirit | Nirvana
Sweet Child o' Mine | Guns N' Roses
Hotel California | Eagles
Stairway to Heaven | Led Zeppelin
Wonderwall | Oasis
Yellow | Coldplay
Viva la Vida | Coldplay
Somebody That I Used to Know | Gotye
Party in the U.S.A. | Miley Cyrus
Since U Been Gone | Kelly Clarkson
Toxic | Britney Spears
...Baby One More Time | Britney Spears
Single Ladies (Put a Ring on It) | Beyoncé
Yeah! | Usher
Hips Don't Lie | Shakira
Waka Waka (This Time for Africa) | Shakira
Poker Face | Lady Gaga
Bad Romance | Lady Gaga
Teenage Dream | Katy Perry
Firework | Katy Perry
Call Me Maybe | Carly Rae Jepsen
Shake It Off | Taylor Swift
Love Story | Taylor Swift
Cruel Summer | Taylor Swift
Espresso | Sabrina Carpenter
Good Luck, Babe! | Chappell Roan
drivers license | Olivia Rodrigo
As It Was | Harry Styles
Flowers | Miley Cyrus
Kill Bill | SZA
Die with a Smile | Lady Gaga & Bruno Mars
APT. | Rosé & Bruno Mars
Birds of a Feather | Billie Eilish
Starboy | The Weeknd
Stay | The Kid Laroi & Justin Bieber
Peaches | Justin Bieber
Sorry | Justin Bieber
Baby | Justin Bieber
Closer | The Chainsmokers
Get Lucky | Daft Punk
One More Time | Daft Punk
Titanium | David Guetta ft. Sia
Wake Me Up | Avicii
Levels | Avicii
Don't Start Now | Dua Lipa
Watermelon Sugar | Harry Styles
Heat Waves | Glass Animals
Riptide | Vance Joy
Take Me to Church | Hozier
Pumped Up Kicks | Foster the People
Radioactive | Imagine Dragons
Believer | Imagine Dragons
Thunder | Imagine Dragons
Counting Stars | OneRepublic
Just the Way You Are | Bruno Mars
Thinking Out Loud | Ed Sheeran
All of Me | John Legend
Hello | Adele
Someone Like You | Adele
Halo | Beyoncé
I Will Always Love You | Whitney Houston
My Heart Will Go On | Celine Dion
Thriller | Michael Jackson
Don't Stop Believin' | Journey
Livin' on a Prayer | Bon Jovi
Africa | Toto
Dancing Queen | ABBA
September | Earth, Wind & Fire
Superstition | Stevie Wonder
Respect | Aretha Franklin
Jolene | Dolly Parton
Tennessee Whiskey | Chris Stapleton
Last Night | Morgan Wallen
A Bar Song (Tipsy) | Shaboozey
Lovin on Me | Jack Harlow
Luther | Kendrick Lamar & SZA
Ordinary | Alex Warren
`,
    },
    {
      id: 'rappers',
      src: 'artist',
      name: 'Rappers',
      blurb: 'Bars, flows and beef. Build your Mount Rushmore.',
      hint: 'rapper',
      items: `
Tupac Shakur
The Notorious B.I.G.
Jay-Z
Nas
Eminem
Kendrick Lamar
Drake
Kanye West
Lil Wayne
J. Cole
Snoop Dogg
Dr. Dre
Ice Cube
André 3000
Big Boi
Rakim
KRS-One
LL Cool J
Run-DMC
Missy Elliott
Lauryn Hill
Queen Latifah
Nicki Minaj
Cardi B
Megan Thee Stallion
Lil' Kim
Busta Rhymes
DMX
50 Cent
Ludacris
T.I.
Lil Jon
Nelly
Mos Def | | Yasiin Bey
Common | | Common (rapper)
Talib Kweli
MF DOOM
Method Man
Ghostface Killah
Raekwon
Wu-Tang Clan
Ol' Dirty Bastard
Mobb Deep
Big Pun
Fat Joe
Big L
Pusha T
Juelz Santana
Cam'ron
Jadakiss
Gucci Mane
Young Jeezy
Rick Ross
Meek Mill
Wiz Khalifa
Mac Miller
Kid Cudi
Tyler, the Creator
ASAP Rocky
Travis Scott
Future
Young Thug
21 Savage
Lil Baby
Gunna
Lil Uzi Vert
Playboi Carti
Juice Wrld
XXXTentacion
Pop Smoke
Nipsey Hussle
Chance the Rapper
Childish Gambino
Logic | | Logic (rapper)
Denzel Curry
JID | | JID (rapper)
Baby Keem
Jack Harlow
Lil Nas X
Doechii
GloRilla
Ice Spice
Latto
Central Cee
Stormzy
Dave | | Dave (rapper)
Skepta
Big Sean
2 Chainz
Tyga
YG | | YG (rapper)
Schoolboy Q
Vince Staples
Freddie Gibbs
Lil Durk
NBA YoungBoy | | YoungBoy Never Broke Again
Kodak Black
DaBaby
Roddy Ricch
Polo G
Offset | | Offset (rapper)
Quavo
Takeoff | | Takeoff (rapper)
`,
    },
    {
      id: 'rap-songs',
      name: 'Rap Songs',
      blurb: 'Hip-hop anthems only.',
      src: 'song',
      q: 'both',
      items: `
Juicy | The Notorious B.I.G.
California Love | 2Pac
Lose Yourself | Eminem
N.Y. State of Mind | Nas
Still D.R.E. | Dr. Dre
Nuthin' but a 'G' Thang | Dr. Dre
Gin and Juice | Snoop Dogg
It Was a Good Day | Ice Cube
C.R.E.A.M. | Wu-Tang Clan
Shook Ones, Pt. II | Mobb Deep
Hypnotize | The Notorious B.I.G.
Big Poppa | The Notorious B.I.G.
Ms. Jackson | Outkast
Hey Ya! | Outkast
Empire State of Mind | Jay-Z
99 Problems | Jay-Z
Hard Knock Life | Jay-Z
Gold Digger | Kanye West
Stronger | Kanye West
Runaway | Kanye West
HUMBLE. | Kendrick Lamar
Alright | Kendrick Lamar
Money Trees | Kendrick Lamar
Not Like Us | Kendrick Lamar
Hotline Bling | Drake
God's Plan | Drake
Started from the Bottom | Drake
A Milli | Lil Wayne
Lollipop | Lil Wayne
In Da Club | 50 Cent
Candy Shop | 50 Cent
Hot in Herre | Nelly
Get Low | Lil Jon & the East Side Boyz
Yeah! | Usher
Ridin' | Chamillionaire
Lean Back | Terror Squad
Drop It Like It's Hot | Snoop Dogg
What You Know | T.I.
Crank That (Soulja Boy) | Soulja Boy
Super Bass | Nicki Minaj
Starships | Nicki Minaj
Bodak Yellow | Cardi B
WAP | Cardi B
Savage | Megan Thee Stallion
No Role Modelz | J. Cole
Middle Child | J. Cole
SICKO MODE | Travis Scott
goosebumps | Travis Scott
Mask Off | Future
Bad and Boujee | Migos
Rockstar | Post Malone
Congratulations | Post Malone
XO Tour Llif3 | Lil Uzi Vert
Lucid Dreams | Juice Wrld
Sad! | XXXTentacion
Dior | Pop Smoke
The Box | Roddy Ricch
Old Town Road | Lil Nas X
Black Beatles | Rae Sremmurd
Rack City | Tyga
Mercy | Kanye West
Swimming Pools (Drank) | Kendrick Lamar
N****s in Paris | Jay-Z & Kanye West
Big Pimpin' | Jay-Z
Gangsta's Paradise | Coolio
Regulate | Warren G
Shimmy Shimmy Ya | Ol' Dirty Bastard
Ruff Ryders' Anthem | DMX
X Gon' Give It to Ya | DMX
Party Up | DMX
Work It | Missy Elliott
Get Ur Freak On | Missy Elliott
Doo Wop (That Thing) | Lauryn Hill
The Message | Grandmaster Flash
Rapper's Delight | The Sugarhill Gang
Walk This Way | Run-DMC
Mama Said Knock You Out | LL Cool J
Ice Ice Baby | Vanilla Ice
Jumpman | Drake & Future
FE!N | Travis Scott
Like That | Future & Metro Boomin
Anxiety | Doechii
Tomorrow 2 | GloRilla
Munch (Feelin' U) | Ice Spice
Sprinter | Dave & Central Cee
Rich Flex | Drake & 21 Savage
a lot | 21 Savage
EARFQUAKE | Tyler, the Creator
See You Again | Tyler, the Creator
Self Care | Mac Miller
`,
    },
    {
      id: 'country-songs',
      name: 'Country Songs',
      blurb: 'Trucks, heartbreak and tailgates.',
      src: 'song',
      q: 'both',
      items: `
Jolene | Dolly Parton
9 to 5 | Dolly Parton
Ring of Fire | Johnny Cash
Folsom Prison Blues | Johnny Cash
Friends in Low Places | Garth Brooks
The Dance | Garth Brooks
Before He Cheats | Carrie Underwood
Jesus, Take the Wheel | Carrie Underwood
Tennessee Whiskey | Chris Stapleton
Take Me Home, Country Roads | John Denver
Man! I Feel Like a Woman! | Shania Twain
You're Still the One | Shania Twain
Chattahoochee | Alan Jackson
Live Like You Were Dying | Tim McGraw
Need You Now | Lady A
Cruise | Florida Georgia Line
Die a Happy Man | Thomas Rhett
Body Like a Back Road | Sam Hunt
Last Night | Morgan Wallen
Whiskey Glasses | Morgan Wallen
Wasted on You | Morgan Wallen
Fast Car | Luke Combs
Beautiful Crazy | Luke Combs
Something in the Orange | Zach Bryan
I Remember Everything | Zach Bryan
A Bar Song (Tipsy) | Shaboozey
Texas Hold 'Em | Beyoncé
Need a Favor | Jelly Roll
Save Me | Jelly Roll
Whiskey Lullaby | Brad Paisley
Mud on the Tires | Brad Paisley
Chicken Fried | Zac Brown Band
Knee Deep | Zac Brown Band
Boys 'Round Here | Blake Shelton
God's Country | Blake Shelton
Austin | Blake Shelton
Dirt Road Anthem | Jason Aldean
She's Country | Jason Aldean
Try That in a Small Town | Jason Aldean
Wagon Wheel | Darius Rucker
Teardrops on My Guitar | Taylor Swift
Our Song | Taylor Swift
Mamas Don't Let Your Babies Grow Up to Be Cowboys | Waylon Jennings
On the Road Again | Willie Nelson
Stand by Your Man | Tammy Wynette
Coal Miner's Daughter | Loretta Lynn
He Stopped Loving Her Today | George Jones
Amarillo by Morning | George Strait
Check Yes or No | George Strait
Achy Breaky Heart | Billy Ray Cyrus
Old Town Road | Lil Nas X
Pickup Man | Joe Diffie
Ain't Goin' Down ('Til the Sun Comes Up) | Garth Brooks
Redneck Woman | Gretchen Wilson
Gunpowder & Lead | Miranda Lambert
The House That Built Me | Miranda Lambert
Follow Your Arrow | Kacey Musgraves
Cowboy Take Me Away | The Chicks
Goodbye Earl | The Chicks
Pink Pony Club | Chappell Roan
Lies Lies Lies | Morgan Wallen
I Had Some Help | Post Malone & Morgan Wallen
Love Me Like a Man | Ella Langley
`,
    },
    {
      id: 'pop-songs',
      name: 'Pop Songs',
      blurb: 'Pure, shameless bangers.',
      src: 'song',
      q: 'both',
      items: `
...Baby One More Time | Britney Spears
Toxic | Britney Spears
Bad Romance | Lady Gaga
Poker Face | Lady Gaga
Just Dance | Lady Gaga
Shake It Off | Taylor Swift
Blank Space | Taylor Swift
Anti-Hero | Taylor Swift
Teenage Dream | Katy Perry
Roar | Katy Perry
California Gurls | Katy Perry
Call Me Maybe | Carly Rae Jepsen
Since U Been Gone | Kelly Clarkson
Umbrella | Rihanna
We Found Love | Rihanna
Diamonds | Rihanna
Crazy in Love | Beyoncé
Single Ladies (Put a Ring on It) | Beyoncé
Levitating | Dua Lipa
Don't Start Now | Dua Lipa
New Rules | Dua Lipa
Houdini | Dua Lipa
Blinding Lights | The Weeknd
Save Your Tears | The Weeknd
As It Was | Harry Styles
Watermelon Sugar | Harry Styles
Sign of the Times | Harry Styles
drivers license | Olivia Rodrigo
good 4 u | Olivia Rodrigo
vampire | Olivia Rodrigo
Espresso | Sabrina Carpenter
Please Please Please | Sabrina Carpenter
Manchild | Sabrina Carpenter
Good Luck, Babe! | Chappell Roan
HOT TO GO! | Chappell Roan
bad guy | Billie Eilish
Birds of a Feather | Billie Eilish
thank u, next | Ariana Grande
7 rings | Ariana Grande
Into You | Ariana Grande
Flowers | Miley Cyrus
Wrecking Ball | Miley Cyrus
Party in the U.S.A. | Miley Cyrus
Sorry | Justin Bieber
Baby | Justin Bieber
Peaches | Justin Bieber
Uptown Funk | Mark Ronson ft. Bruno Mars
Locked Out of Heaven | Bruno Mars
24K Magic | Bruno Mars
Shape of You | Ed Sheeran
Happier | Marshmello & Bastille
Firework | Katy Perry
Wannabe | Spice Girls
Genie in a Bottle | Christina Aguilera
Dirrty | Christina Aguilera
Bye Bye Bye | NSYNC
I Want It That Way | Backstreet Boys
What Makes You Beautiful | One Direction
Story of My Life | One Direction
Stitches | Shawn Mendes
Señorita | Shawn Mendes & Camila Cabello
Havana | Camila Cabello
Cheap Thrills | Sia
Chandelier | Sia
Sorry Not Sorry | Demi Lovato
Cool for the Summer | Demi Lovato
Come & Get It | Selena Gomez
Lose You to Love Me | Selena Gomez
Hollaback Girl | Gwen Stefani
Complicated | Avril Lavigne
Sk8er Boi | Avril Lavigne
Girlfriend | Avril Lavigne
Hips Don't Lie | Shakira
Dynamite | BTS
How You Like That | Blackpink
APT. | Rosé & Bruno Mars
Die with a Smile | Lady Gaga & Bruno Mars
Abracadabra | Lady Gaga
Ordinary | Alex Warren
Beautiful Things | Benson Boone
Greedy | Tate McRae
Golden | HUNTR/X
`,
    },
    {
      id: 'music-groups',
      src: 'artist',
      name: 'Music Groups',
      blurb: 'Bands, duos and boy bands.',
      hint: 'band',
      items: `
The Beatles
The Rolling Stones
Queen | | Queen (band)
Led Zeppelin
Pink Floyd
The Beach Boys
ABBA
Fleetwood Mac
Eagles | | Eagles (band)
The Who
AC/DC
Guns N' Roses
Metallica
Nirvana | | Nirvana (band)
Pearl Jam
Red Hot Chili Peppers
U2
Coldplay
Radiohead
Oasis | | Oasis (band)
Linkin Park
Green Day
Foo Fighters
Arctic Monkeys
The Killers
Imagine Dragons
Maroon 5
OneRepublic
Paramore
Fall Out Boy
My Chemical Romance
Blink-182
Bon Jovi
Aerosmith
Van Halen
Journey | | Journey (band)
Kiss | | Kiss (band)
The Doors
The Jackson 5
The Temptations
The Supremes
Earth, Wind & Fire
Bee Gees
Destiny's Child
TLC | | TLC (group)
Spice Girls
Backstreet Boys
NSYNC
New Kids on the Block
Boyz II Men
New Edition
Jodeci
Fugees
Outkast
Wu-Tang Clan
N.W.A
Run-DMC
Public Enemy | | Public Enemy (band)
A Tribe Called Quest
Bone Thugs-n-Harmony
Migos
Black Eyed Peas
One Direction
Jonas Brothers
BTS
Blackpink
Stray Kids
Twice | | Twice (group)
Little Mix
Fifth Harmony
The Chainsmokers
Daft Punk
Gorillaz
Tame Impala
The 1975
Måneskin
Rage Against the Machine
System of a Down
Slipknot
Black Sabbath
Iron Maiden
Lynyrd Skynyrd
Creedence Clearwater Revival
Zac Brown Band
Rascal Flatts
`,
    },
    {
      id: 'pop-singers',
      src: 'artist',
      name: 'Pop Singers',
      blurb: 'Pop royalty, past and present.',
      hint: 'singer',
      items: `
Michael Jackson
Madonna
Britney Spears
Taylor Swift
Lady Gaga
Katy Perry
Rihanna
Beyoncé
Ariana Grande
Justin Bieber
Justin Timberlake
Dua Lipa
Billie Eilish
Olivia Rodrigo
Sabrina Carpenter
Chappell Roan
Harry Styles
Ed Sheeran
Bruno Mars
The Weeknd
Miley Cyrus
Selena Gomez
Demi Lovato
Christina Aguilera
Jennifer Lopez
Shakira
Kylie Minogue
Mariah Carey
Whitney Houston
Celine Dion
Cher
Janet Jackson
Prince | | Prince (musician)
George Michael
Elton John
Cyndi Lauper
Gwen Stefani
Avril Lavigne
Kelly Clarkson
Pink | | Pink (singer)
Kesha
Sia | | Sia (musician)
Lorde
Halsey
Camila Cabello
Shawn Mendes
Charlie Puth
Sam Smith
Adele
Lizzo
Doja Cat
Tate McRae
Gracie Abrams
Benson Boone
Troye Sivan
Charli XCX
Carly Rae Jepsen
Meghan Trainor
Jessie J
Ellie Goulding
Rita Ora
Zara Larsson
Nick Jonas
Zayn Malik
Niall Horan
Lewis Capaldi
Conan Gray
Lana Del Rey
Jung Kook
Rosé | | Rosé (singer)
`,
    },
    {
      id: 'rnb-singers',
      src: 'artist',
      name: 'R&B Singers',
      blurb: 'Smooth vocals, slow jams.',
      hint: 'singer',
      items: `
Usher
Beyoncé
Rihanna
Alicia Keys
Mary J. Blige
Whitney Houston
Mariah Carey
Aaliyah
Brandy | | Brandy (singer)
Monica | | Monica (singer)
Toni Braxton
Janet Jackson
Lauryn Hill
Erykah Badu
D'Angelo
Maxwell | | Maxwell (musician)
R. Kelly
Chris Brown
Ne-Yo
Trey Songz
Mario | | Mario (singer)
Omarion
Ciara
Keyshia Cole
Jazmine Sullivan
Ashanti
Kehlani
SZA
H.E.R. | | H.E.R.
Summer Walker
Jhené Aiko
Frank Ocean
The Weeknd
Miguel | | Miguel (singer)
Daniel Caesar
Brent Faiyaz
Giveon
Bryson Tiller
Tinashe
Victoria Monét
Ella Mai
Lucky Daye
Khalid
John Legend
Anthony Hamilton
Musiq Soulchild
Jill Scott
Joe | | Joe (singer)
Tank | | Tank (singer)
Brian McKnight
Babyface | | Babyface (musician)
Luther Vandross
Marvin Gaye
Stevie Wonder
Sade | | Sade (singer)
Anita Baker
Jodeci
K-Ci & JoJo
Boyz II Men
Tyrese Gibson
Ginuwine
Tamia
Faith Evans
Teyana Taylor
Chlöe Bailey
Normani
Coco Jones
Leon Thomas | | Leon Thomas III
Muni Long
Sabrina Claudio
PartyNextDoor
6lack
`,
    },
    {
      id: 'singers',
      src: 'artist',
      name: 'Singers in General',
      blurb: 'Any voice, any genre.',
      hint: 'singer',
      items: `
Michael Jackson
Whitney Houston
Freddie Mercury
Elvis Presley
Frank Sinatra
Aretha Franklin
Beyoncé
Adele
Mariah Carey
Celine Dion
Stevie Wonder
Marvin Gaye
Prince | | Prince (musician)
Madonna
Taylor Swift
Ariana Grande
Lady Gaga
Rihanna
Bruno Mars
The Weeknd
Usher
Alicia Keys
Billie Eilish
Ed Sheeran
Sam Smith
John Legend
Christina Aguilera
Kelly Clarkson
Justin Bieber
Justin Timberlake
Elton John
Billy Joel
Bob Dylan
Bob Marley
Johnny Cash
Dolly Parton
Willie Nelson
Garth Brooks
Shania Twain
Carrie Underwood
Chris Stapleton
Luke Combs
Morgan Wallen
Ray Charles
Nat King Cole
Louis Armstrong
Ella Fitzgerald
Billie Holiday
Nina Simone
Etta James
Tina Turner
Diana Ross
Janis Joplin
Amy Winehouse
Kurt Cobain
Chris Cornell
Axl Rose
Robert Plant
Mick Jagger
John Lennon
Paul McCartney
David Bowie
Bono
Chris Martin
Thom Yorke
Bruce Springsteen
Jon Bon Jovi
Steven Tyler
Luciano Pavarotti
Andrea Bocelli
Josh Groban
Michael Bublé
Harry Styles
Olivia Rodrigo
SZA
Frank Ocean
Sabrina Carpenter
Chappell Roan
Bad Bunny
Shakira
Selena | | Selena (singer)
Luis Miguel
Vicente Fernández
Jung Kook
`,
    },
    {
      id: 'rnb-songs',
      name: 'R&B Songs',
      blurb: 'Slow jams and smooth classics.',
      src: 'song',
      q: 'both',
      items: `
No Scrubs | TLC
Waterfalls | TLC
Creep | TLC
Say My Name | Destiny's Child
Survivor | Destiny's Child
Crazy in Love | Beyoncé
Yeah! | Usher
U Remind Me | Usher
Confessions Part II | Usher
Burn | Usher
Fallin' | Alicia Keys
No One | Alicia Keys
If I Ain't Got You | Alicia Keys
We Belong Together | Mariah Carey
Fantasy | Mariah Carey
Real Love | Mary J. Blige
Family Affair | Mary J. Blige
Try Again | Aaliyah
Are You That Somebody? | Aaliyah
One in a Million | Aaliyah
The Boy Is Mine | Brandy & Monica
Un-Break My Heart | Toni Braxton
Ex-Factor | Lauryn Hill
On & On | Erykah Badu
Untitled (How Does It Feel) | D'Angelo
Let's Get It On | Marvin Gaye
Sexual Healing | Marvin Gaye
I'll Make Love to You | Boyz II Men
End of the Road | Boyz II Men
Forever My Lady | Jodeci
All My Life | K-Ci & JoJo
Pony | Ginuwine
So Sick | Ne-Yo
Miss Independent | Ne-Yo
Run It! | Chris Brown
With You | Chris Brown
Kiss Kiss | Chris Brown
Umbrella | Rihanna
Goodies | Ciara
1, 2 Step | Ciara
Let Me Love You | Mario
Love | Keyshia Cole
Adorn | Miguel
Thinkin Bout You | Frank Ocean
Pink + White | Frank Ocean
Earned It | The Weeknd
Best Part | Daniel Caesar & H.E.R.
Get You | Daniel Caesar
Snooze | SZA
Kill Bill | SZA
The Weekend | SZA
Leave the Door Open | Silk Sonic
Boo'd Up | Ella Mai
Girls Need Love | Summer Walker
Come Through | H.E.R.
Exchange | Bryson Tiller
Don't | Bryson Tiller
Dead Man Walking | Brent Faiyaz
Heartbreak Anniversary | Giveon
Made for Me | Muni Long
Hrs and Hrs | Muni Long
ICU | Coco Jones
On My Mama | Victoria Monét
Mutt | Leon Thomas
Ordinary People | John Legend
Superstition | Stevie Wonder
Ain't Nobody | Chaka Khan
Rock with You | Michael Jackson
Kiss | Prince
Sweet Love | Anita Baker
No Ordinary Love | Sade
Saturday Love | Cherrelle & Alexander O'Neal
Before I Let Go | Frankie Beverly & Maze
Golden | Jill Scott
Love Galore | SZA
`,
    },
  ],
}
