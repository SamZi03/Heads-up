const DECKS = [
  {
    id: 'animals',
    name: 'Animals',
    color: '#FF6B35',
    words: ['Lion','Elephant','Giraffe','Penguin','Dolphin','Gorilla','Cheetah','Crocodile','Kangaroo','Flamingo','Octopus','Eagle','Shark','Wolf','Panda','Koala','Hippopotamus','Zebra','Parrot','Peacock','Chimpanzee','Polar Bear','Jaguar','Orangutan','Bald Eagle','Hummingbird','Komodo Dragon','Manta Ray','Snow Leopard','Grizzly Bear','Toucan','Piranha','Chameleon','Anaconda','Bison','Platypus','Walrus','Narwhal','Jellyfish','Mantis Shrimp','Wolverine','Armadillo','Capybara','Axolotl','Lynx','Moose','Otter','Pelican','Rhinoceros','Stingray']
  },
  {
    id: 'baby_animals',
    name: 'Baby Animals',
    color: '#FF9F1C',
    words: ['Foal (Baby Horse)','Cub (Baby Bear)','Kitten (Baby Cat)','Lamb (Baby Sheep)','Calf (Baby Cow)','Puppy (Baby Dog)','Chick (Baby Chicken)','Piglet (Baby Pig)','Fawn (Baby Deer)','Duckling (Baby Duck)','Gosling (Baby Goose)','Joey (Baby Kangaroo)','Pup (Baby Seal)','Kit (Baby Fox)','Colt (Baby Male Horse)','Filly (Baby Female Horse)','Leveret (Baby Hare)','Owlet (Baby Owl)','Eaglet (Baby Eagle)','Hatchling (Baby Turtle)','Polliwog (Baby Frog)','Tadpole','Fingerling (Baby Fish)','Nymph (Baby Dragonfly)','Puggle (Baby Platypus)','Elver (Baby Eel)','Shoat (Baby Pig)','Kid (Baby Goat)','Poult (Baby Turkey)','Cygnet (Baby Swan)','Larva (Baby Butterfly)','Caterpillar','Grub (Baby Beetle)','Spiderling (Baby Spider)','Pinky (Baby Mouse)','Kit (Baby Rabbit)','Whelp (Baby Wolf)','Porcupette (Baby Porcupine)','Squab (Baby Pigeon)','Fledgling (Baby Bird)','Infant (Baby Gorilla)','Foal (Baby Zebra)','Calf (Baby Elephant)','Cub (Baby Lion)','Pup (Baby Shark)']
  },
  {
    id: 'movies',
    name: 'Movies',
    color: '#E63946',
    words: ['Titanic','The Lion King','Jurassic Park','Star Wars','The Godfather','Forrest Gump','Inception','The Dark Knight','Pulp Fiction','Goodfellas','Home Alone','Indiana Jones','Back to the Future','The Avengers','Toy Story','Finding Nemo','Shrek','Gladiator','The Matrix','Interstellar','Avatar','Frozen','E.T.','Jaws','Rocky','Scarface','Die Hard','Top Gun','The Shining','Grease','Ferris Bueller\'s Day Off','Schindler\'s List','Fight Club','Silence of the Lambs','Casablanca','The Wizard of Oz','Parasite','Get Out','Black Panther','Spider-Man','The Notebook','Pretty Woman','Clueless','Mean Girls','The Hunger Games','Harry Potter','Lord of the Rings','Pirates of the Caribbean','Mission: Impossible','John Wick']
  },
  {
    id: 'tv_shows',
    name: 'TV Shows',
    color: '#C77DFF',
    words: ['Breaking Bad','Game of Thrones','Friends','The Office','Stranger Things','The Simpsons','Seinfeld','The Sopranos','Grey\'s Anatomy','The Crown','Squid Game','Money Heist','Peaky Blinders','Sherlock','Black Mirror','The Mandalorian','House of Cards','Succession','Ozark','Better Call Saul','Lost','24','Dexter','Prison Break','How I Met Your Mother','Parks and Recreation','Brooklyn Nine-Nine','The Wire','Westworld','Euphoria','Ted Lasso','Bridgerton','Emily in Paris','Cobra Kai','Yellowstone','This Is Us','Fleabag','Schitt\'s Creek','Arrested Development','It\'s Always Sunny in Philadelphia','The Fresh Prince of Bel-Air','Saved by the Bell','Sex and the City','Desperate Housewives','Homeland','Suits','Downton Abbey','The Walking Dead','Narcos','Mindhunter']
  },
  {
    id: 'famous_people',
    name: 'Famous People',
    color: '#2196F3',
    words: ['Elon Musk','Taylor Swift','Beyoncé','LeBron James','Cristiano Ronaldo','Oprah Winfrey','Barack Obama','Albert Einstein','Napoleon Bonaparte','Cleopatra','Leonardo da Vinci','William Shakespeare','Elvis Presley','Michael Jackson','Marilyn Monroe','Muhammad Ali','Serena Williams','Lionel Messi','Tiger Woods','Stephen Hawking','Nelson Mandela','Martin Luther King Jr.','Winston Churchill','Abraham Lincoln','Steve Jobs','Bill Gates','Jeff Bezos','Rihanna','Lady Gaga','Dwayne Johnson','Tom Hanks','Meryl Streep','Leonardo DiCaprio','Brad Pitt','Angelina Jolie','Kim Kardashian','Kanye West','Justin Bieber','Ariana Grande','Billie Eilish','Drake','Ed Sheeran','Adele','Freddie Mercury','David Bowie','Prince','Madonna','Michael Jordan','Usain Bolt','Roger Federer']
  },
  {
    id: 'music_artists',
    name: 'Music Artists',
    color: '#9C27B0',
    words: ['The Beatles','Queen','Michael Jackson','Madonna','Beyoncé','Taylor Swift','Eminem','Rihanna','Lady Gaga','Adele','Drake','Kanye West','Jay-Z','Ariana Grande','Billie Eilish','Ed Sheeran','Justin Bieber','Bruno Mars','Coldplay','Radiohead','Nirvana','Led Zeppelin','Pink Floyd','AC/DC','Metallica','The Rolling Stones','U2','Fleetwood Mac','ABBA','The Eagles','Elton John','David Bowie','Prince','Bob Dylan','Stevie Wonder','Whitney Houston','Mariah Carey','Celine Dion','Frank Sinatra','Johnny Cash','Bob Marley','Tupac Shakur','The Weeknd','Post Malone','Doja Cat','Dua Lipa','Olivia Rodrigo','Harry Styles','Lizzo','SZA']
  },
  {
    id: 'kpop',
    name: 'K-Pop',
    color: '#FF4081',
    words: ['BTS','BLACKPINK','EXO','TWICE','Stray Kids','aespa','NewJeans','IU','G-Dragon','BIGBANG','Girls\' Generation','SHINee','Monsta X','GOT7','NCT 127','NCT Dream','WayV','ITZY','Red Velvet','f(x)','Super Junior','2NE1','4Minute','Wonder Girls','T-ARA','Apink','Infinite','B2ST','VIXX','Block B','Day6','ASTRO','THE BOYZ','TXT','Enhypen','aespa','Le Sserafim','IVE','(G)I-DLE','Mamamoo','Sistar','AOA','KARA','Miss A','2PM','2AM','Teen Top','B.A.P','PENTAGON','ATEEZ']
  },
  {
    id: 'sports_stars',
    name: 'Sports Stars',
    color: '#4CAF50',
    words: ['Lionel Messi','Cristiano Ronaldo','LeBron James','Michael Jordan','Serena Williams','Roger Federer','Rafael Nadal','Novak Djokovic','Usain Bolt','Michael Phelps','Tiger Woods','Muhammad Ali','Pelé','Maradona','Neymar','Kylian Mbappé','Erling Haaland','Stephen Curry','Tom Brady','Simone Biles','Katie Ledecky','Naomi Osaka','Lewis Hamilton','Max Verstappen','Kobe Bryant','Shaquille O\'Neal','Wayne Gretzky','Babe Ruth','Tiger Woods','Conor McGregor','Ronda Rousey','Floyd Mayweather','Mike Tyson','Canelo Álvarez','Zlatan Ibrahimovic','Thierry Henry','Ronaldinho','Zinedine Zidane','David Beckham','Ronaldo (R9)','Didier Drogba','Mo Salah','Robert Lewandowski','Phil Mickelson','Rory McIlroy','Rafael Nadal','Pete Sampras','Andre Agassi','Boris Becker','John McEnroe']
  },
  {
    id: 'formula_one',
    name: 'Formula One',
    color: '#DC2626',
    words: ['Max Verstappen','Lewis Hamilton','Charles Leclerc','Lando Norris','Carlos Sainz','Fernando Alonso','Sebastian Vettel','Michael Schumacher','Ayrton Senna','Niki Lauda','Alain Prost','Nigel Mansell','Mika Häkkinen','Jenson Button','Kimi Räikkönen','Ferrari','Red Bull Racing','Mercedes','McLaren','Aston Martin','Williams','Alpine','Haas','Alfa Romeo','RB (AlphaTauri)','Monaco','Silverstone','Monza','Spa-Francorchamps','Suzuka','Interlagos','Circuit of the Americas','Bahrain International Circuit','Yas Marina Circuit','Hungaroring','Zandvoort','Melbourne (Albert Park)','Singapore Street Circuit','Baku City Circuit','Jeddah Corniche Circuit','Imola','Barcelona','Sepang']
  },
  {
    id: 'tasty_foods',
    name: 'Tasty Foods',
    color: '#F59E0B',
    words: ['Pizza','Sushi','Tacos','Burger','Fried Chicken','Pasta','Ice Cream','Chocolate Cake','Steak','Lobster','Nachos','Pad Thai','Ramen','Dumplings','Croissant','Cheesecake','Waffles','Pancakes','Burritos','Pho','Paella','Spaghetti Bolognese','Mac and Cheese','Grilled Cheese','Hot Dog','Shawarma','Falafel','Dim Sum','Peking Duck','Tiramisu','Crème Brûlée','Churros','Donuts','Cheesesteak','Ceviche','Pulled Pork','BBQ Ribs','Fish and Chips','Biryani','Butter Chicken','Baklava','Mochi','Gelato','Boba Tea','Milkshake','Lemonade','Cappuccino','Hot Chocolate','Margarita','Soda']
  },
  {
    id: 'cars',
    name: 'Cars',
    color: '#607D8B',
    words: ['Ferrari','Lamborghini','Bugatti','McLaren','Porsche','Rolls-Royce','Bentley','Aston Martin','Mercedes-Benz','BMW','Audi','Tesla','Ford Mustang','Chevrolet Corvette','Dodge Challenger','Jeep Wrangler','Toyota Supra','Nissan GT-R','Mazda RX-7','Honda NSX','Ferrari 458','Lamborghini Huracán','Bugatti Veyron','Pagani Huayra','Koenigsegg','Ford GT','Shelby GT500','Dodge Viper','Porsche 911','BMW M3','Audi R8','Mercedes AMG GT','Jaguar','Land Rover','Cadillac','Lincoln','Volvo','Subaru WRX','Mitsubishi Lancer Evo','Volkswagen Golf GTI','Alfa Romeo','Maserati','Lotus','Rimac Nevera','Ferrari LaFerrari','Lamborghini Aventador','McLaren P1','Porsche Carrera GT','Ford Bronco','Toyota Land Cruiser']
  },
  {
    id: 'countries',
    name: 'Countries',
    color: '#00BCD4',
    words: ['United States','China','India','Brazil','Australia','Canada','France','Germany','Japan','Mexico','Italy','Spain','Russia','United Kingdom','South Africa','Argentina','Egypt','Nigeria','Kenya','Indonesia','Saudi Arabia','Turkey','South Korea','Vietnam','Thailand','Greece','Portugal','Netherlands','Sweden','Norway','Denmark','Finland','Switzerland','Austria','Poland','Ukraine','Pakistan','Bangladesh','Philippines','New Zealand','Ireland','Scotland','Cuba','Peru','Colombia','Chile','Morocco','Ethiopia','Ghana','Tanzania']
  },
  {
    id: 'video_games',
    name: 'Video Games',
    color: '#7C3AED',
    words: ['Minecraft','Fortnite','Grand Theft Auto','Call of Duty','The Legend of Zelda','Super Mario','Pokémon','FIFA','Halo','God of War','The Last of Us','Red Dead Redemption','Skyrim','Witcher 3','Cyberpunk 2077','Elden Ring','Dark Souls','Resident Evil','Metal Gear Solid','Pac-Man','Tetris','Street Fighter','Mortal Kombat','Doom','Half-Life','Portal','Among Us','Roblox','League of Legends','Dota 2','Counter-Strike','Valorant','Overwatch','World of Warcraft','Diablo','Starcraft','Final Fantasy','Dragon Ball Z','Sonic the Hedgehog','Donkey Kong','Kirby','Metroid','Mega Man','Castlevania','Tomb Raider','Crash Bandicoot','Spyro the Dragon','Battletoads','Tony Hawk\'s Pro Skater','Guitar Hero']
  },
  {
    id: 'disney',
    name: 'Disney',
    color: '#0EA5E9',
    words: ['Mickey Mouse','Minnie Mouse','Donald Duck','Goofy','Pluto','Simba','Mufasa','Elsa','Anna','Olaf','Moana','Ariel','Belle','Cinderella','Snow White','Rapunzel','Aurora','Jasmine','Mulan','Tiana','Woody','Buzz Lightyear','Nemo','Dory','Wall-E','EVE','Ratatouille (Remy)','Dumbo','Bambi','Pinocchio','Aladdin','Genie','Tarzan','Hercules','Pocahontas','Stitch','Lilo','Tinker Bell','Winnie the Pooh','Tigger','Baloo','Mowgli','Dumbo','The Lion King','Frozen','Encanto','Soul','Coco','Turning Red','Brave','Inside Out']
  },
  {
    id: 'superheroes',
    name: 'Superheroes',
    color: '#DC143C',
    words: ['Spider-Man','Iron Man','Captain America','Thor','Hulk','Black Widow','Hawkeye','Black Panther','Doctor Strange','Scarlet Witch','Vision','Ant-Man','Wasp','Captain Marvel','Shazam','Batman','Superman','Wonder Woman','The Flash','Aquaman','Green Lantern','Cyborg','Nightwing','Robin','Batgirl','Supergirl','Green Arrow','The Joker','Lex Luthor','Thanos','Loki','Magneto','Professor X','Wolverine','Cyclops','Jean Grey','Storm','Deadpool','Venom','Carnage','Doctor Doom','The Riddler','Catwoman','Harley Quinn','Poison Ivy','Two-Face','Bane','Daredevil','Punisher','Ghost Rider']
  },
  {
    id: 'jobs',
    name: 'Jobs',
    color: '#10B981',
    words: ['Doctor','Teacher','Firefighter','Police Officer','Chef','Pilot','Nurse','Dentist','Lawyer','Engineer','Architect','Plumber','Electrician','Carpenter','Mechanic','Farmer','Scientist','Astronaut','Veterinarian','Pharmacist','Surgeon','Psychologist','Journalist','Photographer','Director','Actor','Singer','Dancer','Artist','Sculptor','Writer','Librarian','Accountant','Banker','Stockbroker','Real Estate Agent','Construction Worker','Truck Driver','Bus Driver','Taxi Driver','Lifeguard','Referee','Coach','Personal Trainer','Barista','Bartender','Waiter','Butcher','Baker','Florist']
  },
  {
    id: 'brands',
    name: 'Brands',
    color: '#F97316',
    words: ['Apple','Nike','Google','Amazon','McDonald\'s','Coca-Cola','Tesla','Microsoft','Samsung','Louis Vuitton','Gucci','Chanel','Adidas','IKEA','Starbucks','Netflix','Disney','YouTube','Instagram','Facebook','Twitter','Uber','Airbnb','Spotify','PayPal','Visa','MasterCard','American Express','Toyota','BMW','Ferrari','Rolex','Cartier','Tiffany & Co.','Pepsi','Levi\'s','Zara','H&M','Gap','Victoria\'s Secret','Red Bull','Monster Energy','Gatorade','KFC','Burger King','Subway','Pizza Hut','Domino\'s','Puma','New Balance']
  },
  {
    id: 'nineties',
    name: '90s',
    color: '#8B5CF6',
    words: ['Tamagotchi','Furby','Game Boy','Super Soaker','Pogs','Beanie Babies','Power Rangers','Teenage Mutant Ninja Turtles','Pokémon Cards','Skip-It','Yo-Yo','Trolls','Bop It','Easy-Bake Oven','Slap Bracelets','Lisa Frank','Spice Girls','Backstreet Boys','NSYNC','Nirvana','TLC','Destiny\'s Child','Fresh Prince of Bel-Air','Saved by the Bell','Friends','Full House','Boy Meets World','Home Improvement','Rugrats','Hey Arnold','Dexter\'s Laboratory','Cartoon Network','Blockbuster Video','AOL Instant Messenger','Dial-Up Internet','Floppy Disk','CD-ROM','VHS Tapes','Titanic','Jurassic Park','Home Alone','Clueless','Space Jam','The Macarena','YMCA','I Will Always Love You','Wannabe','Baby One More Time','...Baby One More Time']
  },
  {
    id: 'accents',
    name: 'Accents',
    color: '#EC4899',
    words: ['Southern American','Cockney English','Scottish','Australian','French','Indian','Japanese','Spanish','Italian','Russian','German','Irish','New York','Texan','Valley Girl','Pirate','Robot','Baby Talk','Old Person','Surfer Dude','Drill Sergeant','British Posh','Welsh','Canadian','South African','Jamaican','Brazilian Portuguese','Chinese','Korean','Arabic','Swedish','Norwegian','Greek','Turkish','Mexican','Cajun','Boston','Minnesotan','Transylvanian (Dracula)','Shakespearean']
  },
  {
    id: 'act_it_out',
    name: 'Act It Out',
    color: '#14B8A6',
    words: ['Swimming','Playing Guitar','Sneezing','Brushing Teeth','Eating Spaghetti','Riding a Horse','Skateboarding','Lifting Weights','Typing on a Keyboard','Taking a Selfie','Painting a Wall','Chopping Wood','Rowing a Boat','Playing Tennis','Shooting a Basketball','Kicking a Football','Serving in Tennis','Catching a Baseball','Bowling','Playing Drums','Playing Piano','Conducting an Orchestra','Sword Fighting','Archery','Rock Climbing','Skydiving','Surfing','Water Skiing','Ice Skating','Breakdancing','Ballet Dancing','Hula Hooping','Jumping Rope','Doing a Cartwheel','Yoga','Meditating','Crying','Laughing Hysterically','Yawning','Hiccuping','Putting on Makeup','Shaving','Combing Hair','Tying Shoelaces','Wrapping a Present','Blowing Out Birthday Candles','Opening a Stiff Jar','Parallel Parking','Pushing a Lawn Mower','Raking Leaves']
  }
];
