import type { TabDef } from './types.ts'

export const sports: TabDef = {
  id: 'sports',
  name: 'Sports',
  categories: [
    {
      id: 'current-footballers',
      name: 'Current Footballers',
      blurb: 'Who’s running the pitch right now.',
      hint: 'footballer',
      items: `
Kylian Mbappé
Erling Haaland
Jude Bellingham
Vinícius Júnior
Lamine Yamal
Mohamed Salah
Kevin De Bruyne
Harry Kane
Lionel Messi
Cristiano Ronaldo
Bukayo Saka
Rodri | | Rodri (footballer, born 1996)
Phil Foden
Martin Ødegaard
Declan Rice
Virgil van Dijk
Florian Wirtz
Jamal Musiala
Pedri
Gavi
Federico Valverde
Rodrygo
Bruno Fernandes
Son Heung-min
Lautaro Martínez
Victor Osimhen
Khvicha Kvaratskhelia
Rafael Leão
Bernardo Silva
Raphinha
Robert Lewandowski
Antoine Griezmann
Ousmane Dembélé
Achraf Hakimi
Marquinhos
Alisson Becker
Thibaut Courtois
Ederson | | Ederson Moraes
Gianluigi Donnarumma
Mike Maignan
Emiliano Martínez
Marc-André ter Stegen
Joshua Kimmich
Toni Kroos
Luka Modrić
Neymar
Alexis Mac Allister
Enzo Fernández
Julián Álvarez
Cole Palmer
William Saliba
Gabriel Magalhães
Rúben Dias
Josko Gvardiol
Alphonse Davies
Trent Alexander-Arnold
Andrew Robertson
Kai Havertz
Gabriel Martinelli
Marcus Rashford
Alejandro Garnacho
Kobbie Mainoo
Ollie Watkins
Alexander Isak
Bruno Guimarães
Dominik Szoboszlai
Darwin Núñez
Luis Díaz
Christian Pulisic
Weston McKennie
Folarin Balogun
Leroy Sané
Serge Gnabry
Thomas Müller
Manuel Neuer
Granit Xhaka
Xavi Simons
Frenkie de Jong
Ronald Araújo
Jules Koundé
Theo Hernández
Aurélien Tchouaméni
Eduardo Camavinga
Dani Olmo
Nico Williams
Mikel Merino
Martin Zubimendi
Hakan Çalhanoğlu
Nicolò Barella
Dušan Vlahović
Randal Kolo Muani
Bradley Barcola
Désiré Doué
João Neves
Vitinha
Victor Gyökeres
Benjamin Šeško
Mohammed Kudus
Jérémy Doku
Michael Olise
Moisés Caicedo
Riccardo Calafiori
Arda Güler
Endrick
Kenan Yıldız
`,
    },
    {
      id: 'alltime-footballers',
      name: 'All-Time Footballers',
      blurb: 'Legends and current greats. Pick your GOATs.',
      hint: 'footballer',
      items: `
Pelé
Diego Maradona
Lionel Messi
Cristiano Ronaldo
Johan Cruyff
Zinedine Zidane
Ronaldo Nazário
Ronaldinho
Franz Beckenbauer
Alfredo Di Stéfano
Ferenc Puskás
George Best
Eusébio
Michel Platini
Marco van Basten
Paolo Maldini
Thierry Henry
Kaká
Andrés Iniesta
Xavi | | Xavi (footballer)
Zlatan Ibrahimović
Wayne Rooney
Steven Gerrard
Frank Lampard
David Beckham
Roberto Baggio
Gerd Müller
Lev Yashin
Gianluigi Buffon
Iker Casillas
Manuel Neuer
Sergio Ramos
Carles Puyol
Franco Baresi
Fabio Cannavaro
Cafu
Roberto Carlos
Philipp Lahm
Garrincha
Zico
Romário
Rivaldo
Bobby Charlton
Bobby Moore
Kenny Dalglish
Ryan Giggs
Paul Scholes
Eric Cantona
Dennis Bergkamp
Patrick Vieira
Didier Drogba
Samuel Eto'o
George Weah
Andrea Pirlo
Francesco Totti
Alessandro Del Piero
Luís Figo
Karim Benzema
Luka Modrić
Neymar
Kylian Mbappé
Erling Haaland
Mohamed Salah
Kevin De Bruyne
Robert Lewandowski
Luis Suárez
Sergio Agüero
Gabriel Batistuta
Hristo Stoichkov
Michael Laudrup
Lothar Matthäus
Karl-Heinz Rummenigge
Jürgen Klinsmann
Raúl | | Raúl (footballer)
Fernando Torres
David Villa
Xabi Alonso
Sergio Busquets
Toni Kroos
Bastian Schweinsteiger
Miroslav Klose
Arjen Robben
Franck Ribéry
Wesley Sneijder
Clarence Seedorf
Ruud Gullit
Frank Rijkaard
Edgar Davids
Ruud van Nistelrooy
Alan Shearer
Gary Lineker
Michael Owen
Rio Ferdinand
John Terry
Ashley Cole
Peter Schmeichel
Edwin van der Sar
Oliver Kahn
Nesta | | Alessandro Nesta
Andriy Shevchenko
Pavel Nedvěd
Hidetoshi Nakata
Park Ji-sung
Son Heung-min
Landon Donovan
Clint Dempsey
Yaya Touré
Jay-Jay Okocha
Roger Milla
Virgil van Dijk
Jude Bellingham
Lamine Yamal
Vinícius Júnior
Harry Kane
`,
    },
    {
      id: 'soccer-teams',
      name: 'All-Time Soccer Teams',
      blurb: 'The greatest sides ever assembled.',
      q: 'sub',
      items: `
Barcelona 2008–11 | FC Barcelona | 2010–11 FC Barcelona season
Real Madrid 2016–18 | Real Madrid | 2016–17 Real Madrid CF season
AC Milan 1988–90 | AC Milan | 1988–89 AC Milan season
Brazil 1970 | Brazil national team | 1970 FIFA World Cup
Spain 2008–12 | Spain national team | UEFA Euro 2012
Manchester United 1999 | Treble winners | 1998–99 Manchester United F.C. season
Arsenal 2003–04 | The Invincibles | 2003–04 Arsenal F.C. season
Ajax 1971–73 | Total Football | AFC Ajax
Bayern Munich 2012–13 | Treble winners | 2012–13 FC Bayern Munich season
Bayern Munich 2019–20 | Sextuple | 2019–20 FC Bayern Munich season
Manchester City 2017–18 | The Centurions | 2017–18 Manchester City F.C. season
Manchester City 2022–23 | Treble winners | 2022–23 Manchester City F.C. season
Liverpool 2019–20 | Klopp’s champions | 2019–20 Liverpool F.C. season
Liverpool 1977–84 | European kings | Liverpool F.C.
Inter Milan 2009–10 | Mourinho’s treble | 2009–10 Inter Milan season
Real Madrid 1955–60 | Five straight European Cups | Real Madrid CF
Real Madrid Galácticos | 2002–03 | 2002–03 Real Madrid CF season
Chelsea 2004–05 | Mourinho’s first | 2004–05 Chelsea F.C. season
Chelsea 2011–12 | Champions of Europe | 2011–12 Chelsea F.C. season
Leicester City 2015–16 | 5000-to-1 | 2015–16 Leicester City F.C. season
Brazil 2002 | R9, Ronaldinho, Rivaldo | 2002 FIFA World Cup
Brazil 1958 | Pelé arrives | 1958 FIFA World Cup
France 1998 | Zidane’s World Cup | 1998 FIFA World Cup
France 2018 | Mbappé’s World Cup | 2018 FIFA World Cup
Argentina 2022 | Messi’s World Cup | 2022 FIFA World Cup
Argentina 1986 | Maradona’s World Cup | 1986 FIFA World Cup
Germany 2014 | 7–1 | 2014 FIFA World Cup
West Germany 1974 | Beckenbauer | 1974 FIFA World Cup
Netherlands 1974 | Clockwork Orange | Netherlands national football team
Netherlands 1988 | Euro champions | UEFA Euro 1988
Italy 2006 | Cannavaro’s Azzurri | 2006 FIFA World Cup
Italy 1982 | Paolo Rossi | 1982 FIFA World Cup
Hungary 1953 | Mighty Magyars | Golden Team
Juventus 1995–96 | Lippi’s Juve | Juventus FC
Juventus 2014–17 | Two UCL finals | Juventus FC
Borussia Dortmund 2012–13 | Klopp’s Dortmund | 2012–13 Borussia Dortmund season
Atlético Madrid 2013–14 | Simeone | 2013–14 Atlético Madrid season
Porto 2003–04 | Mourinho’s Porto | 2003–04 FC Porto season
Celtic 1967 | Lisbon Lions | Lisbon Lions
Benfica 1961–62 | Eusébio era | S.L. Benfica
Barcelona 2014–15 | MSN | 2014–15 FC Barcelona season
PSG 2024–25 | First Champions League | Paris Saint-Germain FC
Napoli 1986–90 | Maradona’s Napoli | SSC Napoli
Santos 1962–63 | Pelé’s Santos | Santos FC
Boca Juniors 2000 | Riquelme | Boca Juniors
Nottingham Forest 1978–80 | Clough | Nottingham Forest F.C.
Arsenal 1997–98 | Wenger’s first double | Arsenal F.C.
Bayer Leverkusen 2023–24 | Neverkusen no more | 2023–24 Bayer 04 Leverkusen season
Valencia 2000–04 | Two finals | Valencia CF
Deportivo La Coruña 2000 | Super Depor | Deportivo de La Coruña
`,
    },
    {
      id: 'current-nba',
      name: 'Current NBA Players',
      blurb: 'Active hoopers only.',
      hint: 'basketball',
      items: `
LeBron James
Stephen Curry
Kevin Durant
Giannis Antetokounmpo
Nikola Jokić
Luka Dončić
Shai Gilgeous-Alexander
Jayson Tatum
Joel Embiid
Anthony Edwards
Victor Wembanyama
Anthony Davis
Devin Booker
Jimmy Butler
Kawhi Leonard
Paul George
Damian Lillard
Kyrie Irving
James Harden
Donovan Mitchell
Ja Morant
Zion Williamson
Trae Young
Jalen Brunson
Tyrese Haliburton
De'Aaron Fox
Domantas Sabonis
Bam Adebayo
Karl-Anthony Towns
Jaylen Brown
Jrue Holiday
Kristaps Porziņģis
Jamal Murray
Aaron Gordon
Michael Porter Jr.
Chet Holmgren
Jalen Williams
Paolo Banchero
Franz Wagner
Cade Cunningham
Evan Mobley
Darius Garland
Scottie Barnes
Alperen Şengün
Jalen Green
Amen Thompson
Lauri Markkanen
LaMelo Ball
Brandon Miller
Pascal Siakam
Tyrese Maxey
Mikal Bridges
OG Anunoby
Josh Hart
Rudy Gobert
Julius Randle
Draymond Green
Klay Thompson
Zach LaVine
DeMar DeRozan
Bradley Beal
Fred VanVleet
Jaren Jackson Jr.
Desmond Bane
Dejounte Murray
Derrick White
Al Horford
Brook Lopez
Khris Middleton
Austin Reaves
Rui Hachimura
Kyle Kuzma
Jordan Poole
CJ McCollum
Brandon Ingram
Herbert Jones
Anfernee Simons
Deni Avdija
Scoot Henderson
Cooper Flagg
Dylan Harper
Stephon Castle
Zaccharie Risacher
Alex Sarr
Reed Sheppard
Dalton Knecht
Bronny James
Jarrett Allen
Myles Turner
Derrick Rose
Russell Westbrook
Chris Paul
Kevin Love
Jusuf Nurkić
Nikola Vučević
Dereck Lively II
Keegan Murray
Jabari Smith Jr.
Ausar Thompson
Cam Thomas
Immanuel Quickley
Josh Giddey
`,
    },
    {
      id: 'alltime-nba',
      name: 'All-Time NBA Players',
      blurb: 'Legends plus the current greats.',
      hint: 'basketball',
      items: `
Michael Jordan
LeBron James
Kareem Abdul-Jabbar
Magic Johnson
Larry Bird
Wilt Chamberlain
Bill Russell
Kobe Bryant
Shaquille O'Neal
Tim Duncan
Hakeem Olajuwon
Stephen Curry
Kevin Durant
Oscar Robertson
Jerry West
Julius Erving
Moses Malone
Karl Malone
John Stockton
Charles Barkley
Dirk Nowitzki
Kevin Garnett
Allen Iverson
Scottie Pippen
Dwyane Wade
Giannis Antetokounmpo
Nikola Jokić
Elgin Baylor
Bob Pettit
David Robinson
Patrick Ewing
Isiah Thomas
Steve Nash
Jason Kidd
Gary Payton
Chris Paul
Russell Westbrook
James Harden
Kawhi Leonard
Paul Pierce
Ray Allen
Reggie Miller
Vince Carter
Tracy McGrady
Dwight Howard
Carmelo Anthony
Pau Gasol
Tony Parker
Manu Ginóbili
Dennis Rodman
Clyde Drexler
Dominique Wilkins
George Gervin
Pete Maravich
Rick Barry
John Havlicek
Walt Frazier
Willis Reed
Bob Cousy
Elvin Hayes
Wes Unseld
Nate Archibald
Kevin McHale
Robert Parish
James Worthy
Bill Walton
Dave Cowens
Alonzo Mourning
Chris Webber
Grant Hill
Penny Hardaway
Shawn Kemp
Yao Ming
Chris Bosh
Ben Wallace
Dikembe Mutombo
Rasheed Wallace
Chauncey Billups
Derrick Rose
Damian Lillard
Kyrie Irving
Anthony Davis
Joel Embiid
Luka Dončić
Shai Gilgeous-Alexander
Jayson Tatum
Klay Thompson
Draymond Green
Jimmy Butler
Paul George
Blake Griffin
Amar'e Stoudemire
Steve Francis
Tim Hardaway
Mitch Richmond
Chris Mullin
Kevin Johnson
Dan Majerle
Mark Price
Spud Webb
Muggsy Bogues
Manute Bol
Victor Wembanyama
Anthony Edwards
Ja Morant
Sam Cassell
Robert Horry
Steve Kerr
Kyle Korver
Andre Iguodala
`,
    },
    {
      id: 'nba-teams',
      name: 'All-Time NBA Teams',
      blurb: 'Dynasties, juggernauts and cult favorites.',
      q: 'sub',
      items: `
1995–96 Chicago Bulls | 72–10 | 1995–96 Chicago Bulls season
1991–92 Chicago Bulls | Jordan & Pippen | 1991–92 Chicago Bulls season
1997–98 Chicago Bulls | The Last Dance | 1997–98 Chicago Bulls season
2016–17 Golden State Warriors | KD joins | 2016–17 Golden State Warriors season
2015–16 Golden State Warriors | 73–9 | 2015–16 Golden State Warriors season
2021–22 Golden State Warriors | Ring four | 2021–22 Golden State Warriors season
1985–86 Boston Celtics | Peak Bird | 1985–86 Boston Celtics season
2007–08 Boston Celtics | Big Three | 2007–08 Boston Celtics season
2023–24 Boston Celtics | Banner 18 | 2023–24 Boston Celtics season
1964–65 Boston Celtics | Russell’s dynasty | 1964–65 Boston Celtics season
1986–87 Los Angeles Lakers | Showtime | 1986–87 Los Angeles Lakers season
1971–72 Los Angeles Lakers | 33 straight wins | 1971–72 Los Angeles Lakers season
1999–2000 Los Angeles Lakers | Shaq & Kobe | 1999–2000 Los Angeles Lakers season
2000–01 Los Angeles Lakers | 15–1 playoffs | 2000–01 Los Angeles Lakers season
2008–09 Los Angeles Lakers | Kobe & Pau | 2008–09 Los Angeles Lakers season
2019–20 Los Angeles Lakers | Bubble champs | 2019–20 Los Angeles Lakers season
2012–13 Miami Heat | 27-game streak | 2012–13 Miami Heat season
2005–06 Miami Heat | Flash & Shaq | 2005–06 Miami Heat season
2013–14 San Antonio Spurs | The Beautiful Game | 2013–14 San Antonio Spurs season
2002–03 San Antonio Spurs | Duncan’s MVP run | 2002–03 San Antonio Spurs season
1966–67 Philadelphia 76ers | Wilt’s champs | 1966–67 Philadelphia 76ers season
1982–83 Philadelphia 76ers | Fo, fo, fo | 1982–83 Philadelphia 76ers season
2000–01 Philadelphia 76ers | Iverson’s run | 2000–01 Philadelphia 76ers season
1988–89 Detroit Pistons | Bad Boys | 1988–89 Detroit Pistons season
2003–04 Detroit Pistons | Goin’ to work | 2003–04 Detroit Pistons season
1993–94 Houston Rockets | Clutch City | 1993–94 Houston Rockets season
2017–18 Houston Rockets | 65 wins | 2017–18 Houston Rockets season
2010–11 Dallas Mavericks | Dirk’s ring | 2010–11 Dallas Mavericks season
2020–21 Milwaukee Bucks | Giannis’ 50-piece | 2020–21 Milwaukee Bucks season
1970–71 Milwaukee Bucks | Kareem & Oscar | 1970–71 Milwaukee Bucks season
2022–23 Denver Nuggets | Jokić’s ring | 2022–23 Denver Nuggets season
2018–19 Toronto Raptors | We the North | 2018–19 Toronto Raptors season
2024–25 Oklahoma City Thunder | SGA’s title | 2024–25 Oklahoma City Thunder season
2011–12 Oklahoma City Thunder | KD, Russ & Harden | 2011–12 Oklahoma City Thunder season
1969–70 New York Knicks | Willis Reed game | 1969–70 New York Knicks season
1993–94 New York Knicks | Ewing’s Knicks | 1993–94 New York Knicks season
1995–96 Seattle SuperSonics | Kemp & Payton | 1995–96 Seattle SuperSonics season
1997–98 Utah Jazz | Stockton to Malone | 1997–98 Utah Jazz season
2006–07 Phoenix Suns | Seven Seconds or Less | 2006–07 Phoenix Suns season
2001–02 Sacramento Kings | The Greatest Show on Court | 2001–02 Sacramento Kings season
2003–04 Minnesota Timberwolves | KG’s MVP year | 2003–04 Minnesota Timberwolves season
2012–13 Los Angeles Clippers | Lob City | 2012–13 Los Angeles Clippers season
1976–77 Portland Trail Blazers | Blazermania | 1976–77 Portland Trail Blazers season
2006–07 Golden State Warriors | We Believe | 2006–07 Golden State Warriors season
2015–16 Cleveland Cavaliers | 3–1 comeback | 2015–16 Cleveland Cavaliers season
2008–09 Orlando Magic | Superman’s Magic | 2008–09 Orlando Magic season
1994–95 Orlando Magic | Shaq & Penny | 1994–95 Orlando Magic season
2010–11 Chicago Bulls | MVP Rose | 2010–11 Chicago Bulls season
2013–14 Indiana Pacers | Paul George’s Pacers | 2013–14 Indiana Pacers season
`,
    },
    {
      id: 'nfl-players',
      name: 'NFL Players',
      blurb: 'Today’s gridiron stars.',
      hint: 'American football',
      items: `
Patrick Mahomes
Josh Allen
Lamar Jackson
Joe Burrow
Jalen Hurts
Justin Herbert
C. J. Stroud
Jayden Daniels
Caleb Williams
Joe Flacco
Aaron Rodgers
Dak Prescott
Jordan Love
Brock Purdy
Matthew Stafford
Jared Goff
Kyler Murray
Tua Tagovailoa
Baker Mayfield
Trevor Lawrence
Bo Nix
Drake Maye
Travis Kelce
George Kittle
Mark Andrews
Sam LaPorta
Brock Bowers
Trey McBride
Justin Jefferson
Ja'Marr Chase
CeeDee Lamb
Tyreek Hill
Davante Adams
A. J. Brown
Amon-Ra St. Brown
Puka Nacua
Cooper Kupp
Stefon Diggs
Mike Evans
Garrett Wilson
DK Metcalf
Jaylen Waddle
Malik Nabers
Marvin Harrison Jr.
Brian Thomas Jr.
Nico Collins
Christian McCaffrey
Saquon Barkley
Derrick Henry
Jahmyr Gibbs
Bijan Robinson
Josh Jacobs
Jonathan Taylor
Breece Hall
De'Von Achane
Kyren Williams
Alvin Kamara
Joe Mixon
Ashton Jeanty
Micah Parsons
T. J. Watt
Myles Garrett
Nick Bosa
Aaron Donald
Maxx Crosby
Chris Jones | | Chris Jones (defensive lineman)
Fred Warner
Roquan Smith
Sauce Gardner
Patrick Surtain II
Jalen Ramsey
Derwin James
Kyle Hamilton
Jessie Bates
Minkah Fitzpatrick
Trent Williams
Penei Sewell
Lane Johnson
Jason Kelce
Justin Tucker
Harrison Butker
Travis Hunter
Cam Ward | | Cam Ward (American football)
Shedeur Sanders
Abdul Carter
Will Anderson Jr.
Aidan Hutchinson
Jalen Carter
Xavier Worthy
Deebo Samuel
Kirk Cousins
Russell Wilson
`,
    },
    {
      id: 'alltime-nfl',
      name: 'All-Time NFL Players',
      blurb: 'Hall of Famers, icons and legends.',
      hint: 'American football',
      items: `
Tom Brady
Jerry Rice
Jim Brown
Lawrence Taylor
Joe Montana
Walter Payton
Peyton Manning
Barry Sanders
Reggie White
Emmitt Smith
Randy Moss
Johnny Unitas
Dan Marino
John Elway
Brett Favre
Deion Sanders
Ray Lewis
Ronnie Lott
Dick Butkus
Anthony Muñoz
Joe Greene
Jerry Kramer
Bruce Smith
Jim Thorpe
Gale Sayers
Eric Dickerson
LaDainian Tomlinson
Marshall Faulk
Adrian Peterson
Terrell Owens
Larry Fitzgerald
Calvin Johnson
Steve Young
Troy Aikman
Terry Bradshaw
Roger Staubach
Joe Namath
Bart Starr
Drew Brees
Aaron Rodgers
Patrick Mahomes
Rob Gronkowski
Tony Gonzalez
Shannon Sharpe
J. J. Watt
Aaron Donald
Ed Reed
Troy Polamalu
Brian Urlacher
Junior Seau
Michael Strahan
Derrick Thomas
Mike Singletary
Rod Woodson
Champ Bailey
Charles Woodson
Darrelle Revis
Mel Blount
Deacon Jones
Jack Lambert
Bo Jackson
Michael Vick
Cam Newton
Marshawn Lynch
Michael Irvin
Cris Carter
Steve Largent
Tim Brown
Isaac Bruce
Marvin Harrison
Earl Campbell
Tony Dorsett
Franco Harris
O. J. Simpson
Thurman Thomas
Curtis Martin
Jerome Bettis
Kurt Warner
Jim Kelly
Warren Moon
Fran Tarkenton
Dan Fouts
Ben Roethlisberger
Philip Rivers
Eli Manning
Russell Wilson
Travis Kelce
Julio Jones
Antonio Brown
Odell Beckham Jr.
Calvin Johnson
Adam Vinatieri
Devin Hester
Jason Kelce
Joe Thomas
Orlando Pace
Jonathan Ogden
Walter Jones
Von Miller
`,
    },
    {
      id: 'nfl-teams',
      name: 'All-Time NFL Teams',
      blurb: 'The greatest single seasons in football.',
      q: 'sub',
      items: `
1985 Chicago Bears | Super Bowl Shuffle | 1985 Chicago Bears season
1972 Miami Dolphins | Perfect season | 1972 Miami Dolphins season
2007 New England Patriots | 16–0 | 2007 New England Patriots season
1989 San Francisco 49ers | Montana’s peak | 1989 San Francisco 49ers season
1994 San Francisco 49ers | Young & Rice | 1994 San Francisco 49ers season
1984 San Francisco 49ers | 18–1 | 1984 San Francisco 49ers season
1992 Dallas Cowboys | The Triplets | 1992 Dallas Cowboys season
1993 Dallas Cowboys | Back-to-back | 1993 Dallas Cowboys season
1978 Pittsburgh Steelers | Steel Curtain | 1978 Pittsburgh Steelers season
1975 Pittsburgh Steelers | Steel dynasty | 1975 Pittsburgh Steelers season
1962 Green Bay Packers | Lombardi | 1962 Green Bay Packers season
1996 Green Bay Packers | Favre’s ring | 1996 Green Bay Packers season
1991 Washington Redskins | The Hogs | 1991 Washington Redskins season
2000 Baltimore Ravens | Historic defense | 2000 Baltimore Ravens season
2013 Seattle Seahawks | Legion of Boom | 2013 Seattle Seahawks season
1999 St. Louis Rams | Greatest Show on Turf | 1999 St. Louis Rams season
1986 New York Giants | LT’s Giants | 1986 New York Giants season
2007 New York Giants | Helmet catch | 2007 New York Giants season
1998 Denver Broncos | Elway’s farewell | 1998 Denver Broncos season
2015 Denver Broncos | No Fly Zone | 2015 Denver Broncos season
2013 Denver Broncos | 606 points | 2013 Denver Broncos season
2004 New England Patriots | Dynasty peak | 2004 New England Patriots season
2016 New England Patriots | 28–3 comeback | 2016 New England Patriots season
2019 Kansas City Chiefs | Mahomes’ first | 2019 Kansas City Chiefs season
2022 Kansas City Chiefs | Second ring | 2022 Kansas City Chiefs season
2023 Kansas City Chiefs | Back-to-back | 2023 Kansas City Chiefs season
2020 Tampa Bay Buccaneers | Brady in Tampa | 2020 Tampa Bay Buccaneers season
2002 Tampa Bay Buccaneers | Defense wins | 2002 Tampa Bay Buccaneers season
2009 New Orleans Saints | Who Dat | 2009 New Orleans Saints season
2017 Philadelphia Eagles | Philly Special | 2017 Philadelphia Eagles season
2024 Philadelphia Eagles | Saquon’s year | 2024 Philadelphia Eagles season
2006 Indianapolis Colts | Peyton’s ring | 2006 Indianapolis Colts season
1998 Minnesota Vikings | Randy Moss arrives | 1998 Minnesota Vikings season
1990 Buffalo Bills | K-Gun offense | 1990 Buffalo Bills season
1968 New York Jets | Namath’s guarantee | 1968 New York Jets season
1977 Dallas Cowboys | Doomsday Defense | 1977 Dallas Cowboys season
2021 Los Angeles Rams | SoFi Super Bowl | 2021 Los Angeles Rams season
2011 Green Bay Packers | 15–1 | 2011 Green Bay Packers season
2012 Baltimore Ravens | Ray’s last dance | 2012 Baltimore Ravens season
2005 Pittsburgh Steelers | One for the thumb | 2005 Pittsburgh Steelers season
2010 Green Bay Packers | Rodgers’ ring | 2010 Green Bay Packers season
1976 Oakland Raiders | Madden’s ring | 1976 Oakland Raiders season
2008 Arizona Cardinals | Fitz’s run | 2008 Arizona Cardinals season
2015 Carolina Panthers | Superman Cam | 2015 Carolina Panthers season
`,
    },
    {
      id: 'boxers',
      name: 'Boxers',
      blurb: 'Pound-for-pound royalty.',
      hint: 'boxer',
      items: `
Muhammad Ali
Mike Tyson
Floyd Mayweather Jr.
Manny Pacquiao
Sugar Ray Robinson
Sugar Ray Leonard
Joe Louis
Rocky Marciano
George Foreman
Joe Frazier
Evander Holyfield
Lennox Lewis
Larry Holmes
Jack Dempsey
Roberto Durán
Marvin Hagler
Thomas Hearns
Julio César Chávez
Oscar De La Hoya
Bernard Hopkins
Roy Jones Jr.
Pernell Whitaker
Canelo Álvarez
Naoya Inoue
Oleksandr Usyk
Tyson Fury
Anthony Joshua
Deontay Wilder
Terence Crawford
Errol Spence Jr.
Gervonta Davis
Vasyl Lomachenko
Gennady Golovkin
Wladimir Klitschko
Vitali Klitschko
Sonny Liston
Jack Johnson | | Jack Johnson (boxer)
Henry Armstrong
Willie Pep
Archie Moore
Ezzard Charles
Jake LaMotta
Rocky Graziano
Carlos Monzón
Alexis Argüello
Salvador Sánchez
Marco Antonio Barrera
Érik Morales
Juan Manuel Márquez
Miguel Cotto
Arturo Gatti
Micky Ward
Ricky Hatton
Prince Naseem Hamed
Joe Calzaghe
Shane Mosley
Félix Trinidad
James Toney
Riddick Bowe
Ken Norton
Buster Douglas
Shannon Briggs
Ryan Garcia
Devin Haney
Shakur Stevenson
Jake Paul
Claressa Shields
Katie Taylor
Laila Ali
Amanda Serrano
Dmitry Bivol
Artur Beterbiev
`,
    },
    {
      id: 'sports-general',
      name: 'Sports in General',
      blurb: 'Every sport worth arguing about.',
      hint: 'sport',
      items: `
Association football
Basketball
American football
Baseball
Ice hockey
Tennis
Golf
Boxing
Mixed martial arts
Professional wrestling
Cricket
Rugby union
Volleyball
Beach volleyball
Table tennis
Badminton
Swimming | | Swimming (sport)
Track and field
Gymnastics
Cycling
Formula One
NASCAR
MotoGP
Skateboarding
Snowboarding
Alpine skiing
Surfing
Figure skating
Speed skating
Curling
Bobsleigh
Lacrosse
Field hockey
Water polo
Handball
Rowing | | Rowing (sport)
Canoeing
Sailing | | Sailing (sport)
Fencing
Archery
Shooting sport
Wrestling
Judo
Taekwondo
Karate
Muay Thai
Weightlifting
Powerlifting
Bodybuilding
CrossFit
Rock climbing
Triathlon
Marathon
Horse racing
Polo
Bowling
Darts
Snooker
Pool | | Pool (cue sports)
Pickleball
Squash | | Squash (sport)
Ultimate (sport)
Dodgeball
Kickball
Softball
Esports
Chess
Rodeo
Sumo
Jai alai
BMX
Parkour
Kitesurfing
Disc golf
Cornhole
Arm wrestling
Spikeball | | Roundnet
`,
    },
    {
      id: 'wwe-superstars',
      name: 'WWE Superstars',
      blurb: 'Can you smell what you’re drafting?',
      hint: 'professional wrestler',
      items: `
The Rock
Stone Cold Steve Austin
John Cena
The Undertaker
Hulk Hogan
Shawn Michaels
Triple H
Randy Orton
Roman Reigns
Brock Lesnar
Bret Hart
Ric Flair
Macho Man Randy Savage | | Randy Savage
Ultimate Warrior | | The Ultimate Warrior
André the Giant
Kane | | Kane (wrestler)
Mick Foley
Edge | | Edge (wrestler)
Chris Jericho
Kurt Angle
Rey Mysterio
Eddie Guerrero
Batista | | Dave Bautista
CM Punk
Daniel Bryan | | Bryan Danielson
Seth Rollins
Dean Ambrose | | Jon Moxley
Cody Rhodes
Jey Uso
Jimmy Uso
Solo Sikoa
Sami Zayn
Kevin Owens
AJ Styles
Finn Bálor
Bray Wyatt
Drew McIntyre
Gunther | | Gunther (wrestler)
LA Knight
Bianca Belair
Becky Lynch
Charlotte Flair
Rhea Ripley
Trish Stratus
Lita | | Lita (wrestler)
Sasha Banks | | Mercedes Moné
Bayley | | Bayley (wrestler)
Asuka | | Asuka (wrestler)
Ronda Rousey
Liv Morgan
Iyo Sky
Tiffany Stratton
Jade Cargill
Big Show
Mark Henry
Goldberg | | Bill Goldberg
Sting | | Sting (wrestler)
Booker T | | Booker T (wrestler)
Rob Van Dam
Jeff Hardy
Matt Hardy
Christian | | Christian Cage
The Miz
Dolph Ziggler
Sheamus
Kofi Kingston
Big E
Xavier Woods
Bobby Lashley
Braun Strowman
Jinder Mahal
Alberto Del Rio
Ricky Steamboat
Jake Roberts
Roddy Piper
Dusty Rhodes
Sgt. Slaughter
Ted DiBiase
Mr. Perfect | | Curt Hennig
Razor Ramon | | Scott Hall
Diesel | | Kevin Nash
X-Pac
Yokozuna
Umaga | | Umaga (wrestler)
The Great Khali
Jerry Lawler
Paul Heyman
Vince McMahon
Logan Paul
Bad Bunny
Damian Priest
Dominik Mysterio
Bron Breakker
Jacob Fatu
Carmelo Hayes
Oba Femi
`,
    },
    {
      id: 'wwe-finishers',
      name: 'WWE Finishers',
      blurb: 'One move, lights out.',
      q: 'sub',
      items: `
Stone Cold Stunner | Stone Cold Steve Austin
People's Elbow | The Rock | The Rock (entertainer)
Rock Bottom | The Rock | Rock Bottom (professional wrestling)
RKO | Randy Orton
Tombstone Piledriver | The Undertaker
Chokeslam | The Undertaker | Chokeslam
Sweet Chin Music | Shawn Michaels
Pedigree | Triple H
Attitude Adjustment | John Cena
Five Knuckle Shuffle | John Cena
Superman Punch | Roman Reigns
F-5 | Brock Lesnar
Sharpshooter | Bret Hart
Figure Four Leglock | Ric Flair
Leg Drop | Hulk Hogan
Flying Elbow | Randy Savage
619 | Rey Mysterio
Frog Splash | Eddie Guerrero
Batista Bomb | Batista | Dave Bautista
Go To Sleep | CM Punk
Yes! Lock | Daniel Bryan | Bryan Danielson
Curb Stomp | Seth Rollins
Dirty Deeds | Dean Ambrose | Jon Moxley
Cross Rhodes | Cody Rhodes
Codebreaker | Chris Jericho
Walls of Jericho | Chris Jericho
Angle Slam | Kurt Angle
Ankle Lock | Kurt Angle
Mandible Claw | Mick Foley
Edge's Spear | Edge | Edge (wrestler)
Styles Clash | AJ Styles
Phenomenal Forearm | AJ Styles
Coup de Grâce | Finn Bálor
Sister Abigail | Bray Wyatt
Claymore | Drew McIntyre
Brogue Kick | Sheamus
Trouble in Paradise | Kofi Kingston
Skull Crushing Finale | The Miz
Zig Zag | Dolph Ziggler
Kinshasa | Shinsuke Nakamura
Helluva Kick | Sami Zayn
Owens' Stunner | Kevin Owens
Pop-up Powerbomb | Kevin Owens
Riptide | Rhea Ripley
Manhandle Slam | Becky Lynch
Dis-arm-her | Becky Lynch
Natural Selection | Charlotte Flair
Figure Eight | Charlotte Flair
K.O.D. | Bianca Belair
Asuka Lock | Asuka
Twist of Fate | Jeff Hardy
Swanton Bomb | Jeff Hardy
Five-Star Frog Splash | Rob Van Dam
Jackknife Powerbomb | Kevin Nash
Razor's Edge | Scott Hall
DDT | Jake Roberts
Goldberg's Spear | Goldberg | Bill Goldberg
Jackhammer | Goldberg | Bill Goldberg
Scorpion Death Drop | Sting | Sting (wrestler)
Gutwrench Powerbomb | Gunther | Gunther (wrestler)
Powerbomb | Big Show
World's Strongest Slam | Mark Henry
Banzai Drop | Yokozuna
Spinaroonie | Booker T | Booker T (wrestler)
Million Dollar Dream | Ted DiBiase
Blunt Force Trauma | LA Knight
Uso Splash | The Usos | The Usos
`,
    },
    {
      id: 'legendary-athletes',
      name: 'Legendary Athletes',
      blurb: 'The faces of sport, across every sport.',
      hint: 'athlete',
      items: `
Michael Jordan
Muhammad Ali
Serena Williams
Usain Bolt
Michael Phelps
Pelé
Lionel Messi
Cristiano Ronaldo
Tiger Woods
Roger Federer
Rafael Nadal
Novak Djokovic
Babe Ruth
Wayne Gretzky
Tom Brady
LeBron James
Kobe Bryant
Simone Biles
Diego Maradona
Jackie Robinson
Jesse Owens
Carl Lewis
Jim Thorpe
Sachin Tendulkar
Don Bradman
Ayrton Senna
Michael Schumacher
Lewis Hamilton
Max Verstappen
Mike Tyson
Floyd Mayweather Jr.
Manny Pacquiao
Jack Nicklaus
Arnold Palmer
Billie Jean King
Martina Navratilova
Steffi Graf
Venus Williams
Nadia Comăneci
Mark Spitz
Carl Yastrzemski
Hank Aaron
Willie Mays
Mickey Mantle
Ted Williams
Lou Gehrig
Derek Jeter
Shohei Ohtani
Mario Lemieux
Sidney Crosby
Alexander Ovechkin
Bobby Orr
Gordie Howe
Connor McDavid
Tony Hawk
Shaun White
Kelly Slater
Lindsey Vonn
Eliud Kipchoge
Haile Gebrselassie
Mo Farah
Florence Griffith Joyner
Jackie Joyner-Kersee
Bo Jackson
Deion Sanders
Kareem Abdul-Jabbar
Wilt Chamberlain
Bill Russell
Magic Johnson
Larry Bird
Dale Earnhardt
Valentino Rossi
Khabib Nurmagomedov
Conor McGregor
Jon Jones
Ronda Rousey
Georges St-Pierre
Caitlin Clark
Stephen Curry
Katie Ledecky
Mondo Duplantis
`,
    },
    {
      id: 'olympians',
      name: 'Famous Olympians',
      blurb: 'Gold, glory and podium legends.',
      hint: 'Olympic',
      items: `
Michael Phelps
Usain Bolt
Simone Biles
Carl Lewis
Jesse Owens
Nadia Comăneci
Mark Spitz
Katie Ledecky
Larisa Latynina
Paavo Nurmi
Florence Griffith Joyner
Jackie Joyner-Kersee
Bjørn Dæhlie
Marit Bjørgen
Ole Einar Bjørndalen
Shaun White
Chloe Kim
Eileen Gu
Apolo Ohno
Bonnie Blair
Eric Heiden
Michelle Kwan
Kristi Yamaguchi
Yuzuru Hanyu
Katarina Witt
Mikaela Shiffrin
Lindsey Vonn
Ian Thorpe
Ryan Lochte
Caeleb Dressel
Léon Marchand
Summer McIntosh
Allyson Felix
Michael Johnson | | Michael Johnson (sprinter)
Shelly-Ann Fraser-Pryce
Elaine Thompson-Herah
Sydney McLaughlin-Levrone
Noah Lyles
Mondo Duplantis
Eliud Kipchoge
Haile Gebrselassie
Mo Farah
Emil Zátopek
Sergey Bubka
Edwin Moses
Bob Beamon
Dick Fosbury
Greg Louganis
Tom Daley
Mary Lou Retton
Shawn Johnson
Gabby Douglas
Suni Lee
Kerri Walsh Jennings
Misty May-Treanor
Sugar Ray Leonard
Oscar De La Hoya
Teófilo Stevenson
Rebeca Andrade
Kohei Uchimura
Birgit Fischer
Steve Redgrave
Chris Hoy
Jason Kenny
Laura Kenny
Kelly Holmes
Jessica Ennis-Hill
Cathy Freeman
Abebe Bikila
Fanny Blankers-Koen
Wilma Rudolph
Ben Johnson | | Ben Johnson (sprinter)
Faith Kipyegon
Torvill and Dean
`,
    },
    {
      id: 'gym-exercises',
      name: 'Gym Exercises',
      blurb: 'Draft your perfect leg day. Or skip it.',
      hint: 'exercise',
      items: `
Bench press
Squat | | Squat (exercise)
Deadlift
Overhead press
Pull-up | | Pull-up (exercise)
Chin-up
Push-up
Dip | | Dip (exercise)
Barbell row | | Bent-over row
Lunge | | Lunge (exercise)
Leg press
Leg extension
Leg curl
Romanian deadlift
Hip thrust
Glute bridge
Calf raise
Biceps curl
Hammer curl
Preacher curl
Triceps extension
Skull crusher | | Lying triceps extensions
Lat pulldown
Seated cable row
Face pull
Lateral raise
Front raise
Shrug | | Shrug (exercise)
Plank | | Plank (exercise)
Crunch | | Crunch (exercise)
Sit-up
Russian twist
Hanging leg raise
Mountain climbers | | Mountain climber (exercise)
Burpee | | Burpee (exercise)
Jumping jack
Box jump
Kettlebell swing
Turkish get-up
Clean and jerk
Snatch | | Snatch (weightlifting)
Power clean
Thruster | | Thruster (exercise)
Farmer's walk
Sled push
Battle ropes
Rowing machine | | Indoor rower
Treadmill
Stair climber
Jump rope | | Skipping rope
Wall sit
Bulgarian split squat
Front squat
Goblet squat
Hack squat
Incline bench press
Dumbbell fly
Cable crossover
Arnold press
Muscle-up
Handstand push-up
Pistol squat
Good morning | | Good-morning (exercise)
Ab wheel | | Ab wheel
Superman | | Superman (exercise)
Bear crawl
`,
    },
  ],
}
