import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "Gone Girl",
    author: "GILLIAN GLYNN",
    description:
      "Gone Girl took the book world by storm with its look at a marriage gone terribly wrong. On her fifth wedding anniversary, Amy Dunne mysteriously disappears. At the top of the suspect list – her seemingly perfect husband Nick. Both husband and wife aren’t who they seem to be, so expect plenty of twists and turns (and lots of language) in this hit thriller. You might not end up loving the story or the characters, but I promise you, you’ll find them memorable enough to land it among the best thriller books of all time.",
    genre: "Thriller",
    originalPrice: 650,
    discount: 69,
    discountedPrice: 203,
    rating: 4.5,
    img: "https://www.booklistqueen.com/wp-content/uploads/gone-girl-gillian-flynn.jpg",
  },

  {
    _id: uuid(),
    title: "Stardust",
    author: "Neil Gaiman (2010)",
    description:
      "If anyone deserves to be on this list twice, it’s Neil Gaiman. Stardust is a magical fantasy novel that’s a delight to read at any age. It’s about a young man called Tristran Thorn, who vows to find a star for the woman he loves after they see it fall from the night sky.What follows is a fairy tale that weaves in stories, characters and settings that are already embedded in our cultural make-up, like pirates, spells, curses, witches, power struggles, falling stars, otherworldly beings and much more. Gaiman said I wanted to write a story that would feel, to the reader, like something he or she had always known – and thats the enduring appeal of Stardust. The book was adapted into a movie in 2007 with a star-studded cast, including Robert De Niro, Michelle Pfeiffer, and Claire Danes. Once youve read the book, you should find it on your go-to streaming service, as it does Neil Gaimans original tale justice",
    genre: "Fantasy",
    originalPrice: 575,
    discount: 15,
    discountedPrice: 489,
    rating: 4,
    img: "https://m.media-amazon.com/images/I/61FwadMGjWL.jpg",
  },

  {
    _id: uuid(),
    title: "The Alchemist ",
    author: "Paulo Coelho",
    description:
      "This allegorical tale, often recommended as a self-help book, follows young shepherd Santiago as he journeys to Egypt searching for a hidden treasure. A parable telling readers that the universe can help them realize their dreams if they only focus their energy on them, Coelho’s short novel has endured the test of time and remains a bestseller today.",
    genre: "Classic",
    originalPrice: 333,
    discount: 20,
    discountedPrice: 216,
    rating: 5,
    img: "https://m.media-amazon.com/images/I/516c6gUQLaL.jpg",
  },

  {
    _id: uuid(),
    title: "Beloved",
    author: "Toni Morrison",
    description:
      "Many books are said to have helped shape the world — but only a few can really stake that claim. Toni Morrison’s Beloved is one of them. One of the great literary luminaries of our time, her best-known novelis the searingly powerful story of Sethe, who was born a slave in Kentucky. Though she’s since escaped to Ohio, she is haunted by her dead baby, whose tombstone is engraved with one word: Beloved.",
    genre: "Fiction",
    originalPrice: 1200,
    discount: 50,
    discountedPrice: 600,
    rating: 3.5,
    img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1347984578l/6149.jpg",
  },

  {
    _id: uuid(),
    title: "The Love Hypothesis",
    author: "Ali Hazelwood",
    description:
      "When a fake relationship between scientists meets the irresistible force of attraction, it throws one woman's carefully calculated theories on love into chaos.As a third-year Ph.D. candidate, Olive Smith doesn't believe in lasting romantic relationships but her best friend does, and that's what got her into this situation. Convincing Anh that Olive on her way to a happily ever after was always going to be tough, scientists require proof. So, like any self-respecting woman, Olive panics and kisses the first man she sees.That man is none other than Adam Carlsen, a young hotshot professor and well-known ass. Which is why Olive is positively floored when he agrees to keep her charade a secret and be her fake boyfriend. But when a big science conference goes haywire and Adam surprises her again with his unyielding support (and his unyielding abs), their little experiment feels dangerously close to combustion.Olive soon discovers that the only thing more complicated than a hypothesis on love is putting her own heart under the microscope.",
    genre: "Romance",
    originalPrice: 599,
    discount: 62,
    discountedPrice: 225,
    rating: 4,
    img: "https://m.media-amazon.com/images/I/41kaBn+u9pL._SY346_.jpg",
  },
  {
    _id: uuid(),
    title: "One Hundred Years of Solitude",
    author: "Gabriel Garcia Marquez and Gregory Rabassa ",
    description:
      "Many years later, as he faced the firing squad, Colonel Aureliano Buendia was to remember that distant afternoon when his father took him to discover ice Gabriel Garcia Marquez's great masterpiece is the story of seven generations of the Buendia family and of Macondo, the town they have built. Though little more than a settlement surrounded by mountains, Macondo has its wars and disasters, even its wonders and its miracles. A microcosm of Columbian life, its secrets lie hidden, encoded in a book, and only Aureliano Buendia can fathom its mysteries and reveal its shrouded destiny. Blending political reality with magic realism, fantasy and comic invention, One Hundred Years of Solitude is one of the most daringly original works of the twentieth century.",
    genre: "Classic",
    originalPrice: 1666,
    discount: 80,
    discountedPrice: 272,
    rating: 4,
    img: "https://m.media-amazon.com/images/I/71p8OHwvPsL._AC_UY327_FMwebp_QL65_.jpg",
  },

  {
    _id: uuid(),
    title: "It Ends With Us",
    author: "Colleen Hoover",
    description:
      "Lily hasn’t always had it easy, but that’s never stopped her from working hard for the life she wants. She’s come a long way from the small town where she grew up—she graduated from college, moved to Boston, and started her own business. And when she feels a spark with a gorgeous neurosurgeon named Ryle Kincaid, everything in Lily’s life seems too good to be true Ryle is assertive, stubborn, maybe even a little arrogant. He’s also sensitive, brilliant, and has a total soft spot for Lily. And the way he looks in scrubs certainly doesn’t hurt. Lily can’t get him out of her head. But Ryle’s complete aversion to relationships is disturbing. Even as Lily finds herself becoming the exception to his “no dating” rule, she can’t help but wonder what made him that way in the first place.As questions about her new relationship overwhelm her, so do thoughts of Atlas Corrigan—her first love and a link to the past she left behind. He was her kindred spirit, her protector. When Atlas suddenly reappears, everything Lily has built with Ryle is threatened.",
    genre: "Romance",
    originalPrice: 149,
    discount: 75,
    discountedPrice: 599,
    rating: 5,
    img: "https://m.media-amazon.com/images/I/51sY0P7C3EL._SX326_BO1,204,203,200_.jpg",
  },

  {
    _id: uuid(),
    title: "Call me by your name",
    author: "Armie Hammer",
    description:
      "Call Me by Your Name first swept across the world in 2007. It is the story of a sudden and powerful romance that blossoms between an adolescent boy and a summer guest at his parents' cliffside mansion on the Italian Riviera. During the restless summer weeks, unrelenting but buried currents of obsession, fascination, and desire intensify their passion as they test the charged ground between them and verge toward the one thing both already fear they may never truly find again: total intimacy. André Aciman's critically acclaimed debut novel is a frank, unsentimental, heartrending elegy to human passion. ",
    genre: "Romance",
    originalPrice: 700,
    discount: 74,
    discountedPrice: 155,
    rating: 5,
    img: "https://m.media-amazon.com/images/I/812SKExc1tL.jpg",
  },
  {
    _id: uuid(),
    title: "The girl with the dragon tatto",
    author: "Stieg Larrson",
    description:
      "Forty years ago, Harriet Vanger disappeared from a family gathering on the island owned and inhabited by the powerful Vanger clan. Her body was never found, yet her uncle is convinced it was murder - and that the killer is a member of his own tightly knit but dysfunctional family. He employs disgraced financial journalist Mikael Blomkvist and the tattooed, truculent computer hacker Lisbeth Salander to investigate. When the pair link Harriet's disappearance to a number of grotesque murders from forty years ago, they begin to unravel a dark and appalling family history. But the Vangers are a secretive clan, and Blomkvist and Salander are about to find out just how far they are prepared to go to protect themselves.",
    genre: "Mystery",
    originalPrice: 319,
    discount: 0,
    discountedPrice: 319,
    rating: 3.7,
    img: "https://m.media-amazon.com/images/I/71k4nnsuFyL._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    _id: uuid(),
    title: "Misery",
    author: "Stephen King",
    description:
      "King's Classic bestseller about a famous novelist held hostage by his Number One Fan.Misery Chastain is dead. Paul Sheldon has just killed her - with relief, with joy. Misery has made him rich; she was the heroine of a string of bestsellers. And now he wants to get on to some real writing.That's when the car accident happens, and he wakes up in pain in a strange bed. But it isn't hospital. Annie Wilkes has pulled him from the wreck, brought him to her remote mountain home, splinted and set his mangled legs.The good news is that Annie was a nurse and has pain-killing drugs. The bad news is that she has long been Paul's Number One Fan. And when she finds out what Paul had done to Misery, she doesn't like it. She doesn't like it at all. Paul Sheldon used to write for a living. Now he's writing to stay alive.",
    genre: "Thriller",
    originalPrice: 599,
    discount: 44,
    discountedPrice: 337,
    rating: 4.5,
    img: "https://m.media-amazon.com/images/I/51AILCYmA6L._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    _id: uuid(),
    title: "The Great Gatsby",
    author: "F.Scott Fitzgerald ",
    description:
      "It's the Roaring Twenties and New York City is the place to be. Everything can be purchased, everyone can be bought. But, can you make money erase your past? As more and more people lose themselves to the lure of money, ironically the only person who remains unaffected is Jay Gatsby, the enigmatic host of the most extravagant parties. In this definitive tale on American culture, Fitzgerald pits a chaste dream against the corrupting influences of wealth and comes up with an epic story that can only be defined as 'a Great American novel'.",
    genre: "Fiction",
    originalPrice: 145,
    discount: 15,
    discountedPrice: 123,
    rating: 4.3,
    img: "https://m.media-amazon.com/images/I/41XMaCHkrgL.jpg",
  },
  {
    _id: uuid(),
    title: "The wizard of earthsea",
    author: "Ursula K. Le Guin ",
    description:
      "Ged was the greatest sorcerer in all Earthsea,  but once he was called Sparrowhawk, a reckless  youth, hungry for power and knowledge, who tampered  with long-held secrets and loosed a terrible shadow  upon the world. This is the tale of his testing,  how he mastered the mighty words of power, tamed an  ancient dragon, and crossed death's threshold to  restore the balance.",
    genre: "Fantasy",
    originalPrice: 350,
    discount: 35,
    discountedPrice: 227,
    rating: 4.2,
    img: "https://m.media-amazon.com/images/I/51ArFwyywQL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
  },
  {
    _id: uuid(),
    title: "The Da Vinci Code",
    author: "Dan Brown",
    description:
      "While in Paris on business, Harvard symbologist Robert Langdon receives an urgent late-night phone call: the elderly curator of the Louvre has been murdered inside the museum. Near the body, police have found a baffling cipher. While working to solve the enigmatic riddle, Langdon is stunned to discover it leads to a trail of clues hidden in the works of Da Vinci -- clues visible for all to see -- yet ingeniously disguised by the painter.Langdon joins forces with a gifted French cryptologist, Sophie Neveu, and learns the late curator was involved in the Priory of Sion -- an actual secret society whose members included Sir Isaac Newton, Botticelli, Victor Hugo, and Da Vinci, among others. In a breathless race through Paris, London, and beyond, Langdon and Neveu match wits with a faceless powerbroker who seems to anticipate their every move. Unless Langdon and Neveu can decipher the labyrinthine puzzle in time, the Priory's ancient secret -- and an explosive historical truth -- will be lost forever.THE DA VINCI CODE heralds the arrival of a new breed of lightning-paced, intelligent thriller…utterly unpredictable right up to its stunning conclusion.",
    genre: "Mystery",
    originalPrice: 319,
    discount: 0,
    discountedPrice: 319,
    rating: 4,
    img: "https://m.media-amazon.com/images/I/513jDWxi4nL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
  },
  {
    _id: uuid(),
    title: "The Dresden Files",
    author: "Jim Butcher",
    description:
      "Meet Harry Dresden, Chicago's first (and only) Wizard P.I. Turns out the 'everyday' world is full of strange and magical things - and most of them don't play well with humans. That's where Harry comes in.Harry has no friends on the White Council of Wizards, who find him brash and undisciplined (and they may have a point). However, now vampire wars have thinned out the wizards a little, they need him. So before he can blink, he's assigned to investigate rumours of black magic. Harry's other problem is an old friend's daughter - all grown-up and in trouble already. Her boyfriend insists he's innocent of something resembling a crime straight out of a horror film. This first impression turns out to be . . . well, pretty accurate, as Harry discovers malevolent entities feeding on fear. All in a day's work for a wizard, his dog, and a talking skull named Bob.Magic - it can get a guy killed.",
    genre: "Fantasy",
    originalPrice: 276,
    discount: 30,
    discountedPrice: 351,
    rating: 3.5,
    img: "https://m.media-amazon.com/images/I/71otDvekspL._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    _id: uuid(),
    title: "The Lord of Rings",
    author: " J. R. R. Tolkien ",
    description:
      "In ancient times the Rings of Power were crafted by the Elven-smiths, and Sauron, the Dark Lord, forged the One Ring, filling it with his own power so that he could rule all others. But the One Ring was taken from him, and though he sought it throughout Middle-earth, it remained lost to him. After many ages it fell by chance into the hands of the hobbit Bilbo Baggins.From Sauron's fastness in the Dark Tower of Mordor, his power spread far and wide. Sauron gathered all the Great Rings, but always he searched for the One Ring that would complete his dominion.When Bilbo reached his eleventy-first birthday he disappeared, bequeathing to his young cousin Frodo the Ruling Ring and a perilous quest: to journey across Middle-earth, deep into the shadow of the Dark Lord, and destroy the Ring by casting it into the Cracks of Doom.",
    genre: "Fantasy",
    originalPrice: 1299,
    discount: 37,
    discountedPrice: 815,
    rating: 4,
    img: "https://m.media-amazon.com/images/I/51myt0GXIUL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
  },
  {
    _id: uuid(),
    title: "The Little Prince",
    author: "Antoine de Saint-Exupéry",
    description:
      "A beautiful gift edition of this touching and wise classic book, with the original translation by Katherine Woods and full-colour illustrations. A pilot stranded in the desert awakes one morning to see the most extraordinary little fellow standing before him. “Please,” asks the stranger, “draw me a sheep.” He pulls out a pencil and paper. . and thus begins this wise and enchanting fable that, in teaching the secret of what is really important in life, has changed the world forever for its readers. Few books have been as universally cherished by children and adults alike as The Little Prince. This stunning new edition includes the classic English translation by Katherine Woods and original colour illustrations which will capture the hearts of readers of all ages.",
    genre: "Fiction",
    originalPrice: 350,
    discount: 35,
    discountedPrice: 228,
    rating: 5,
    img: "https://m.media-amazon.com/images/I/71j1A2OX3nL._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    _id: uuid(),
    title: "Red,White and Royal Blue",
    author: "Casey McQuiston",
    description:
      "First Son Alex Claremont-Diaz is the closest thing to a prince this side of the Atlantic. With his intrepid sister and the Veep’s genius granddaughter, they’re the White House Trio, a beautiful millennial marketing strategy for his mother, President Ellen Claremont. International socialite duties do have downsides—namely, when photos of a confrontation with his longtime nemesis Prince Henry at a royal wedding leak to the tabloids and threaten American/British relations. The plan for damage control: staging a fake friendship between the First Son and the Prince.",
    genre: "Romance",
    originalPrice: 295,
    discount: 58,
    discountedPrice: 700,
    rating: 4,
    img: "https://m.media-amazon.com/images/I/41hv25yqOCL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
  },
  {
    _id: uuid(),
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    description:
      "Shoot all the bluejays you want, if you can hit 'em, but remember it's a sin to kill a mockingbird.' A lawyer's advice to his children as he defends the real mockingbird of Harper Lee's classic novel - a black man falsely charged with the rape of a white girl. Through the young eyes of Scout and Jem Finch, Harper Lee explores with exuberant humour the irrationality of adult attitudes to race and class in the Deep South of the 1930s. The conscience of a town steeped in prejudice, violence and hypocrisy is pricked by the stamina of one man's struggle for justice. But the weight of history will only tolerate so much. To Kill a Mockingbird is a coming-of-age story, an anti-racist novel, a historical drama of the Great Depression and a sublime example of the Southern writing tradition.",
    genre: "Fiction",
    originalPrice: 210,
    discount: 0,
    discountedPrice: 210,
    rating: 3.5,
    img: "https://m.media-amazon.com/images/I/41j-s9fHJcL._SY346_.jpg",
  },
  {
    _id: uuid(),
    title: "The Wheel of Times",
    author: "Robert Jordan",
    description:
      "SOON TO BE A MAJOR AMAZON PRIME TV SERIESPrepare to turn the Wheel of Time - discover the first novel in one of the most influential and popular fantasy epics ever published.When their village is attacked by terrifying creatures, Rand al'Thor and his friends are forced to flee for their lives. An ancient evil is stirring, and its servants are scouring the land for the Dragon Reborn - the prophesised hero who can deliver the world from darkness. In this Age of myth and legend, the Wheel of Time turns. What was, what may be, and what is, may yet fall under the Shadow. ONE OF TIME MAGAZINE'S TOP 100 FANTASY BOOKS OF ALL TIME'Epic in every sense' - Sunday Times'With the Wheel of Time, Jordan has come to dominate the world that Tolkien began to reveal' New York Times'[The] huge ambitious Wheel of Time series helped redefine the genre' George R. R. Martin'A fantasy phenomenon' SFX",
    genre: "Fantasy",
    originalPrice: 599,
    discount: 34,
    discountedPrice: 396,
    rating: 3.7,
    img: "https://m.media-amazon.com/images/I/51N1jSYd19L._SX316_BO1,204,203,200_.jpg",
  },
  {
    _id: uuid(),
    title: "In The Woods",
    author: "Tana French",
    description:
      "The bestselling debut, with over a million copies sold, that launched Tana French, author of the forthcoming novel The Searcher and “the most important crime novelist to emerge in the past 10 years” (The Washington Post).  “Required reading for anyone who appreciates tough, unflinching intelligence and ingenious plotting.” —The New York TimesNow airing as a Starz series. As dusk approaches a small Dublin suburb in the summer of 1984, mothers begin to call their children home. But on this warm evening, three children do not return from the dark and silent woods. When the police arrive, they find only one of the children gripping a tree trunk in terror, wearing blood-filled sneakers, and unable to recall a single detail of the previous hours. Twenty years later, the found boy, Rob Ryan, is a detective on the Dublin Murder Squad and keeps his past a secret. But when a twelve-year-old girl is found murdered in the same woods, he and Detective Cassie Maddox—his partner and closest friend—find themselves investigating a case chillingly similar to the previous unsolved mystery. Now, with only snippets of long-buried memories to guide him, Ryan has the chance to uncover both the mystery of the case before him and that of his own shadowy past. Richly atmospheric and stunning in its complexity, In the Woods is utterly convincing and surprising to the end.",
    genre: "Mystery",
    originalPrice: 319,
    discount: 0,
    discountedPrice: 319,
    rating: 3.5,
    img: "https://m.media-amazon.com/images/I/51BR5oVaZPL._SX324_BO1,204,203,200_.jpg",
  },
];
