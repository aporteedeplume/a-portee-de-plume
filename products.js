/* Catalogue de produits — À portée de plume
   Fichier partagé entre catalogue.html, fiche-produit.html et commande.html (panier).

   Pour ajouter un article : dupliquer un objet ci-dessous et changer les valeurs.
   - id : identifiant unique, sans espace (utilisé dans les URL ?id=...)
   - category : voir CATEGORIES ci-dessous (utilisé par les filtres du catalogue)
   - theme : (optionnel) 'oiseaux' | 'insectes' | ... — permet un sous-filtre dans le catalogue
     dès qu'une catégorie contient des articles de plusieurs thèmes différents (actuellement
     utile pour "Autocollants" ; s'activera aussi pour "Illustrations à colorier" le jour où
     un lot non-oiseaux y sera ajouté).
   - price : prix en euros, ou null si le prix n'est pas encore fixé ("Prix à venir").
   - weight : poids en grammes (utilisé en arrière-plan pour calculer les frais de port,
     jamais affiché au client), ou null si inconnu pour le moment.
   - available : false = l'article est visible dans le catalogue mais ne peut pas être
     ajouté à la sélection. Le badge affiché est "Arrive prochainement" par défaut.
   - availabilityLabel : (optionnel, avec available: false) texte personnalisé affiché à la
     place de "Arrive prochainement" — utile par exemple pour une rupture de stock ponctuelle
     sur un article déjà commercialisé : availabilityLabel: "Rupture de stock".
   - speciesCount : (optionnel, carnets d'observation) nombre d'espèces présentées.
   - shortDesc : une phrase courte pour la vignette du catalogue.
   - longDesc : la description complète de la fiche produit. Peut être :
       • une simple chaîne de texte (un seul paragraphe), ou
       • un tableau, pour plusieurs paragraphes et un intertitre :
         [ "premier paragraphe", { heading: "Un intertitre" }, "paragraphe suivant", ... ]
   - specs : (optionnel) tableau de caractéristiques affiché sur la fiche produit,
     sous forme de paires [label, valeur] : [["Format", "A5"], ["Couverture", "souple"], ...]
   - icon : clé d'illustration de secours (utilisée tant qu'aucune vraie photo n'est disponible),
     voir ICONS dans icons.js
   - images : (optionnel) tableau de chemins vers les vraies photos du produit, dans l'ordre
     d'affichage — ex. ["images/coo1-a.png", "images/coo1-b.png"]. Dès qu'un produit a ce champ,
     ses vraies photos remplacent l'illustration de secours partout sur le site (catalogue, fiche
     produit avec galerie, panier). Pour ajouter une photo, dépose le fichier dans le dossier
     images/ et ajoute son chemin au tableau.
   - relatedAddonId : (optionnel, sur un carnet) id d'un lot d'illustrations à colorier
     compatible, affiché en suggestion sur la fiche du carnet.
   - relatedTo : (optionnel, sur un lot d'illustrations ou un autocollant) liste des id de
     carnets compatibles, affichée en suggestion sur la fiche de l'article.
*/
const PRODUCTS = [
  {
    id: "coo1",
    images: ["images/coo1-a.png", "images/coo1-b.jpg", "images/coo1-c.jpg", "images/coo1-d.jpg", "images/coo1-e.jpg", "images/coo1-f.jpg", "images/coo1-g.jpg"],
    ref: "COO1",
    name: "Mon carnet d'observation d'oiseaux : 20 espèces de France",
    category: "carnets-observation",
    theme: "oiseaux",
    price: 11,
    weight: 120,
    speciesCount: 20,
    available: true,
    shortDesc: "Un carnet pour découvrir les oiseaux, apprendre à les reconnaître et garder une trace de chaque observation.",
    longDesc: [
      "Pensé pour être accessible à tous, ce carnet vous accompagne à la découverte de 20 espèces d'oiseaux parmi les plus connues en France. Il convient aussi bien aux débutants qu'aux amateurs de nature, aux adultes comme aux enfants.",
      { heading: "Un carnet pour apprendre et observer" },
      "Chaque espèce est présentée sur une double page. À gauche, une fiche descriptive permet de mieux connaître l'oiseau : apparence, habitat, comportement, alimentation, chant ou encore période d'observation.",
      "À droite, une page est dédiée à votre propre rencontre avec l'espèce. Vous pouvez y noter la date, le lieu, vos observations personnelles et ajouter un dessin ou une photographie. Le nom de l'espèce est accompagné de mes illustrations originales en couleur du mâle et de la femelle.",
      "Un tableau de suivi permet de repérer facilement les espèces déjà observées et de conserver leur date d'observation.",
      "À la fin du carnet, plusieurs pages sont réservées aux notes, croquis et illustrations complémentaires, avec une partie lignée pour le texte et une zone libre pour les illustrations.",
      "Pour ceux qui n'ont pas la possibilité de dessiner ou d'imprimer des photos, des illustrations à colorier sont également disponibles séparément dans la boutique, à replacer sur la page de l'espèce correspondante.",
      "Le carnet devient ainsi, au fil des sorties, à la fois un outil de découverte et un souvenir personnel de vos rencontres avec les oiseaux."
    ],
    specs: [
      ["Format", "A5"],
      ["Couverture", "souple"],
      ["Contenu", "20 espèces d'oiseaux"],
      ["Illustrations", "originales et en couleur"],
      ["Public", "enfants et adultes, débutants comme amateurs d'oiseaux"]
    ],
    icon: "heron",
    relatedAddonId: "icoo1"
  },
  {
    id: "coo2",
    images: ["images/coo2-a.png"],
    ref: "COO2",
    name: "Mon carnet d'observation d'oiseaux : 30 espèces de France",
    category: "carnets-observation",
    theme: "oiseaux",
    price: 13,
    weight: 150,
    speciesCount: 30,
    available: true,
    shortDesc: "Un carnet pour découvrir les oiseaux, apprendre à les reconnaître et garder une trace de chaque observation.",
    longDesc: [
      "Pensé pour être accessible à tous, ce carnet vous accompagne à la découverte de 30 espèces d'oiseaux de France. Il convient aussi bien aux débutants qu'aux amateurs de nature, aux adultes comme aux enfants.",
      { heading: "Un carnet pour apprendre et observer" },
      "Chaque espèce est présentée sur une double page. À gauche, une fiche descriptive permet de mieux connaître l'oiseau : apparence, habitat, comportement, alimentation, chant ou encore période d'observation.",
      "À droite, une page est dédiée à votre propre rencontre avec l'espèce. Vous pouvez y noter la date, le lieu, vos observations personnelles et ajouter un dessin ou une photographie. Le nom de l'espèce est accompagné de mes illustrations originales en couleur du mâle et de la femelle.",
      "Un tableau de suivi permet de repérer facilement les espèces déjà observées et de conserver leur date d'observation.",
      "À la fin du carnet, plusieurs pages sont réservées aux notes, croquis et illustrations complémentaires, avec une partie lignée pour écrire et une zone libre pour dessiner.",
      "Pour ceux qui n'ont pas la possibilité de dessiner ou d'imprimer des photos, des illustrations à colorier sont également disponibles séparément dans la boutique, à replacer sur la page de l'espèce correspondante.",
      "Le carnet devient ainsi, au fil des sorties, à la fois un outil de découverte et un souvenir personnel de vos rencontres avec les oiseaux."
    ],
    specs: [
      ["Format", "A5"],
      ["Couverture", "souple"],
      ["Contenu", "30 espèces d'oiseaux"],
      ["Illustrations", "originales et en couleur"],
      ["Public", "enfants et adultes, débutants comme amateurs d'oiseaux"]
    ],
    icon: "wader",
    relatedAddonId: "icoo2"
  },
  {
    id: "coo3",
    images: ["images/coo3-a.png"],
    ref: "COO3",
    name: "Mon carnet d'observation d'oiseaux : 50 espèces de France",
    category: "carnets-observation",
    theme: "oiseaux",
    price: 15,
    weight: 200,
    speciesCount: 50,
    available: true,
    shortDesc: "Un carnet plus complet pour découvrir les oiseaux, apprendre à les reconnaître et garder une trace de chaque observation.",
    longDesc: [
      "Ce carnet réunit en un seul volume les espèces présentées dans les carnets 20 espèces de France et 30 espèces de France. Avec ses 50 espèces d'oiseaux de France, il constitue une version plus complète, idéale pour ceux qui souhaitent tout regrouper dans un seul carnet.",
      "Il convient aussi bien aux débutants qu'aux amateurs de nature, aux adultes comme aux enfants.",
      { heading: "Un carnet pour apprendre et observer" },
      "Chaque espèce est présentée sur une double page. À gauche, une fiche descriptive permet de mieux connaître l'oiseau : apparence, habitat, comportement, alimentation, chant ou encore période d'observation.",
      "À droite, une page est dédiée à votre propre rencontre avec l'espèce. Vous pouvez y noter la date, le lieu, vos observations personnelles et ajouter un dessin ou une photographie. Le nom de l'espèce est accompagné de mes illustrations originales en couleur du mâle et de la femelle.",
      "Un tableau de suivi permet de repérer facilement les espèces déjà observées et de conserver leur date d'observation.",
      "À la fin du carnet, plusieurs pages sont réservées aux notes, croquis et illustrations complémentaires, avec une partie lignée pour écrire et une zone libre pour dessiner.",
      "Pour ceux qui n'ont pas la possibilité de dessiner ou d'imprimer des photos, des illustrations à colorier sont également disponibles séparément dans la boutique, à replacer sur la page de l'espèce correspondante.",
      "Le carnet devient ainsi, au fil des sorties, à la fois un outil de découverte et un souvenir personnel de vos rencontres avec les oiseaux."
    ],
    specs: [
      ["Format", "A5"],
      ["Couverture", "souple"],
      ["Contenu", "50 espèces d'oiseaux"],
      ["Illustrations", "originales et en couleur"],
      ["Public", "enfants et adultes, débutants comme amateurs d'oiseaux"]
    ],
    icon: "ibis",
    relatedAddonId: "icoo3"
  },
  {
    id: "coo4",
    images: ["images/coo4-a.png"],
    ref: "COO4",
    name: "Mon carnet d'observation d'oiseaux : 50 espèces de France, tome 2",
    category: "carnets-observation",
    theme: "oiseaux",
    price: 15,
    weight: 200,
    speciesCount: 50,
    available: true,
    shortDesc: "Un carnet pour poursuivre la découverte des oiseaux de France, apprendre à les reconnaître et garder une trace de chaque observation.",
    longDesc: [
      "Ce deuxième tome vous accompagne à la découverte de 50 nouvelles espèces d'oiseaux de France. Il prolonge la collection avec une nouvelle sélection d'espèces à observer et à apprendre à connaître.",
      "Il convient aussi bien aux débutants qu'aux amateurs de nature, aux adultes comme aux enfants.",
      { heading: "Un carnet pour apprendre et observer" },
      "Chaque espèce est présentée sur une double page. À gauche, une fiche descriptive permet de mieux connaître l'oiseau : apparence, habitat, comportement, alimentation, chant ou encore période d'observation.",
      "À droite, une page est dédiée à votre propre rencontre avec l'espèce. Vous pouvez y noter la date, le lieu, vos observations personnelles et ajouter un dessin ou une photographie. Le nom de l'espèce est accompagné de mes illustrations originales en couleur du mâle et de la femelle.",
      "Un tableau de suivi permet de repérer facilement les espèces déjà observées et de conserver leur date d'observation.",
      "À la fin du carnet, plusieurs pages sont réservées aux notes, croquis et illustrations complémentaires, avec une partie lignée pour écrire et une zone libre pour dessiner.",
      "Pour ceux qui n'ont pas la possibilité de dessiner ou d'imprimer des photos, des illustrations à colorier sont également disponibles séparément dans la boutique, à replacer sur la page de l'espèce correspondante.",
      "Le carnet devient ainsi, au fil des sorties, à la fois un outil de découverte et un souvenir personnel de vos rencontres avec les oiseaux."
    ],
    specs: [
      ["Format", "A5"],
      ["Couverture", "souple"],
      ["Contenu", "50 espèces d'oiseaux"],
      ["Illustrations", "originales et en couleur"],
      ["Public", "enfants et adultes, débutants comme amateurs d'oiseaux"]
    ],
    icon: "heron",
    relatedAddonId: "icoo4"
  },
  {
    id: "coo5",
    images: ["images/coo5-a.png"],
    ref: "COO5",
    name: "Mon carnet d'observation d'oiseaux : Les oiseaux de Camargue",
    category: "carnets-observation",
    theme: "oiseaux",
    price: 19,
    weight: null,
    speciesCount: 81,
    available: false,
    shortDesc: "Un carnet complet pour découvrir les oiseaux de Camargue, apprendre à les reconnaître et garder une trace de chaque observation.",
    longDesc: [
      "Cette version rassemble 81 espèces d'oiseaux de Camargue et s'adresse à celles et ceux qui souhaitent aller plus loin dans la découverte de l'avifaune locale.",
      "Plus complète que la version consacrée à 30 espèces, elle permet d'explorer une sélection beaucoup plus large d'oiseaux présents dans les paysages camarguais et de suivre ses observations au fil des sorties.",
      { heading: "Un carnet pour apprendre et observer" },
      "Chaque espèce est présentée sur une double page. À gauche, une fiche descriptive permet de mieux connaître l'oiseau : apparence, habitat, comportement, alimentation, chant ou encore période d'observation.",
      "À droite, une page est dédiée à votre propre rencontre avec l'espèce. Vous pouvez y noter la date, le lieu, vos observations personnelles et ajouter un dessin ou une photographie. Le nom de l'espèce est accompagné de mes illustrations originales en couleur du mâle et de la femelle.",
      "Un tableau de suivi permet de repérer facilement les espèces déjà observées et de conserver leur date d'observation.",
      "À la fin du carnet, plusieurs pages sont réservées aux notes, croquis et illustrations complémentaires, avec une partie lignée pour écrire et une zone libre pour dessiner.",
      "Pour ceux qui n'ont pas la possibilité de dessiner ou d'imprimer des photos, des illustrations à colorier sont également disponibles séparément dans la boutique, à replacer sur la page de l'espèce correspondante. Une version plus accessible consacrée à 30 espèces parmi les plus connues et les plus simples à identifier est également disponible",
      "Le carnet devient ainsi, au fil des sorties, à la fois un outil de découverte, un support d'apprentissage et un souvenir personnel de vos observations en Camargue."
    ],
    specs: [
      ["Format", "A5"],
      ["Couverture", "souple"],
      ["Contenu", "81 espèces d'oiseaux"],
      ["Illustrations", "originales et en couleur"],
      ["Public", "enfants et adultes, débutants comme amateurs d'oiseaux"]
    ],
    icon: "ibis",
    relatedAddonId: "icoo5"
  },
  {
    id: "coo6",
    images: ["images/coo6-a.png"],
    ref: "COO6",
    name: "Mon carnet d'observation d'oiseaux : 30 espèces de Camargue",
    category: "carnets-observation",
    theme: "oiseaux",
    price: 13,
    weight: 150,
    speciesCount: 30,
    available: true,
    shortDesc: "Un carnet pour découvrir les oiseaux emblématiques de Camargue, apprendre à les reconnaître et garder une trace de chaque observation.",
    longDesc: [
      "Pensé pour les curieux, les débutants et tous ceux qui souhaitent découvrir l'avifaune camarguaise sans se lancer dans un guide trop complexe, ce carnet rassemble 30 espèces parmi les plus connues et les plus simples à identifier en Camargue.",
      "Il constitue une première approche idéale pour apprendre à reconnaître les oiseaux que l'on peut rencontrer au fil des balades, des étangs, des marais et des zones humides de la région.",
      { heading: "Un carnet pour apprendre et observer" },
      "Chaque espèce est présentée sur une double page. À gauche, une fiche descriptive permet de mieux connaître l'oiseau : apparence, habitat, comportement, alimentation, chant ou encore période d'observation.",
      "À droite, une page est dédiée à votre propre rencontre avec l'espèce. Vous pouvez y noter la date, le lieu, vos observations personnelles et ajouter un dessin ou une photographie. Le nom de l'espèce est accompagné de mes illustrations originales en couleur du mâle et de la femelle.",
      "Un tableau de suivi permet de repérer facilement les espèces déjà observées et de conserver leur date d'observation.",
      "À la fin du carnet, plusieurs pages sont réservées aux notes, croquis et illustrations complémentaires, avec une partie lignée pour écrire et une zone libre pour dessiner.",
      "Pour ceux qui n'ont pas la possibilité de dessiner ou d'imprimer des photos, des illustrations à colorier sont également disponibles séparément dans la boutique, à replacer sur la page de l'espèce correspondante. Une version plus complète, consacrée à l'ensemble des espèces de Camargue, est également disponible pour ceux qui souhaitent aller plus loin.",
      "Le carnet devient ainsi, au fil des sorties, à la fois un outil de découverte et un souvenir personnel de vos observations en Camargue."
    ],
    specs: [
      ["Format", "A5"],
      ["Couverture", "souple"],
      ["Contenu", "30 espèces d'oiseaux"],
      ["Illustrations", "originales et en couleur"],
      ["Public", "enfants et adultes, curieux, débutants et amateurs d'oiseaux"]
    ],
    icon: "wader",
    relatedAddonId: "icoo6"
  },
  {
    id: "bjf2",
    ref: "BJF2",
    name: "Mon bullet journal 2026 : Les traces de mon année",
    category: "bullet-journal",
    images: ["images/bjf2-a.png"],
    price: 22,
    weight: 360,
    available: true,
    shortDesc: "Un bullet journal poétique et coloré pour organiser son quotidien, suivre son évolution et conserver une trace de tout ce qui fait son année.",
    longDesc: [
      "Avec son univers doux inspiré de la nature, des fleurs et des papillons, Les traces de mon année accompagne toute l'année 2026. Pensé comme un mélange entre outil d'organisation et carnet personnel, il permet de suivre ses habitudes, ses projets, ses envies et les petits moments du quotidien.",
      { heading: "Une année à suivre, mois après mois" },
      "Le carnet comprend plusieurs trackers annuels pour observer son année dans son ensemble : sommeil, rêves, santé, humeur ainsi qu'un tracker « Rate my day » pour garder une trace de son ressenti au fil des jours.",
      "Chaque mois possède également ses propres pages à compléter avec un habit tracker, des pages consacrées à vos découvertes culturelles, une page budget et des pages libres à utiliser pour vos notes, souvenirs, idées ou selon vos envies.",
      "Des espaces supplémentaires sont dédiés à vos projets, vos objectifs, votre wishlist et une check-list de valise pour préparer plus facilement vos voyages et escapades.",
      "Au fil des pages, le bullet journal devient ainsi autant un outil pour organiser son année qu'un endroit où conserver les habitudes, envies, découvertes et souvenirs qui auront marqué 2026."
    ],
    specs: [
      ["Format", "A5"],
      ["Couverture", "souple"],
      ["Intérieur", "en couleur"],
      ["Année", "2026"]
    ],
    icon: "compass"
  },
  {
    id: "icoo1",
    ref: "ICOO1",
    name: "Illustrations à colorier – Carnet « Mon carnet d'observation d'oiseaux : 20 espèces de France »",
    category: "colorier",
    theme: "oiseaux",
    price: 3,
    weight: 35,
    available: true,
    shortDesc: "Un complément pensé pour personnaliser facilement votre carnet d'observation.",
    longDesc: [
      "Ce lot rassemble des illustrations à colorier correspondant aux 20 espèces présentes dans le carnet Mon carnet d'observation d'oiseaux : 20 espèces de France.",
      "Une fois coloriées, les illustrations peuvent être replacées sur la page de l'espèce correspondante. Elles offrent une alternative simple à ceux qui ne peuvent pas dessiner eux-mêmes ou imprimer des photographies.",
      "Les illustrations sont imprimées sur du papier autocollant, prêtes à être collées une fois coloriées. Un petit guide d'identification accompagne le lot, pour reconnaître plus facilement chaque espèce représentée."
    ],
    specs: [
      ["Compatibilité", "Mon carnet d'observation d'oiseaux : 20 espèces de France"],
      ["Contenu", "20 illustrations à colorier"],
      ["Support", "papier autocollant"]
    ],
    icon: "pencil",
    relatedTo: ["coo1"]
  },
  {
    id: "icoo2",
    ref: "ICOO2",
    name: "Illustrations à colorier – Carnet « Mon carnet d'observation d'oiseaux : 30 espèces de France »",
    category: "colorier",
    theme: "oiseaux",
    price: 4.5,
    weight: 48,
    available: true,
    shortDesc: "Un complément pensé pour personnaliser facilement votre carnet d'observation.",
    longDesc: [
      "Ce lot rassemble des illustrations à colorier correspondant aux 30 espèces présentes dans le carnet Mon carnet d'observation d'oiseaux : 30 espèces de France.",
      "Une fois coloriées, les illustrations peuvent être replacées sur la page de l'espèce correspondante. Elles offrent une alternative simple à ceux qui ne peuvent pas dessiner eux-mêmes ou imprimer des photographies.",
      "Les illustrations sont imprimées sur du papier autocollant, prêtes à être collées une fois coloriées. Un petit guide d'identification accompagne le lot, pour reconnaître plus facilement chaque espèce représentée."
    ],
    specs: [
      ["Compatibilité", "Mon carnet d'observation d'oiseaux : 30 espèces de France"],
      ["Contenu", "30 illustrations à colorier"],
      ["Support", "papier autocollant"]
    ],
    icon: "pencil",
    relatedTo: ["coo2"]
  },
  {
    id: "icoo3",
    ref: "ICOO3",
    name: "Illustrations à colorier – Carnet « Mon carnet d'observation d'oiseaux : 50 espèces de France »",
    category: "colorier",
    theme: "oiseaux",
    price: 7.5,
    weight: 74,
    available: true,
    shortDesc: "Un complément pensé pour personnaliser facilement votre carnet d'observation.",
    longDesc: [
      "Ce lot rassemble des illustrations à colorier correspondant aux 50 espèces présentes dans le carnet Mon carnet d'observation d'oiseaux : 50 espèces de France.",
      "Une fois coloriées, les illustrations peuvent être replacées sur la page de l'espèce correspondante. Elles offrent une alternative simple à ceux qui ne peuvent pas dessiner eux-mêmes ou imprimer des photographies.",
      "Les illustrations sont imprimées sur du papier autocollant, prêtes à être collées une fois coloriées. Un petit guide d'identification accompagne le lot, pour reconnaître plus facilement chaque espèce représentée."
    ],
    specs: [
      ["Compatibilité", "Mon carnet d'observation d'oiseaux : 50 espèces de France"],
      ["Contenu", "50 illustrations à colorier"],
      ["Support", "papier autocollant"]
    ],
    icon: "pencil",
    relatedTo: ["coo3"]
  },
  {
    id: "icoo4",
    ref: "ICOO4",
    name: "Illustrations à colorier – Carnet « Mon carnet d'observation d'oiseaux : 50 espèces de France, tome 2 »",
    category: "colorier",
    theme: "oiseaux",
    price: 7.5,
    weight: 74,
    available: false,
    shortDesc: "Un complément pensé pour personnaliser facilement votre carnet d'observation.",
    longDesc: [
      "Ce lot rassemble des illustrations à colorier correspondant aux 50 espèces présentes dans le carnet Mon carnet d'observation d'oiseaux : 50 espèces de France, tome 2.",
      "Une fois coloriées, les illustrations peuvent être replacées sur la page de l'espèce correspondante. Elles offrent une alternative simple à ceux qui ne peuvent pas dessiner eux-mêmes ou imprimer des photographies.",
      "Les illustrations sont imprimées sur du papier autocollant, prêtes à être collées une fois coloriées. Un petit guide d'identification accompagne le lot, pour reconnaître plus facilement chaque espèce représentée."
    ],
    specs: [
      ["Compatibilité", "Mon carnet d'observation d'oiseaux : 50 espèces de France, tome 2"],
      ["Contenu", "50 illustrations à colorier"],
      ["Support", "papier autocollant"]
    ],
    icon: "pencil",
    relatedTo: ["coo4"]
  },
  {
    id: "icoo5",
    ref: "ICOO5",
    name: "Illustrations à colorier – Carnet « Mon carnet d'observation d'oiseaux : Les oiseaux de Camargue »",
    category: "colorier",
    theme: "oiseaux",
    price: 12,
    weight: 115,
    available: false,
    shortDesc: "Un complément pensé pour personnaliser facilement votre carnet d'observation.",
    longDesc: [
      "Ce lot rassemble des illustrations à colorier correspondant aux 81 espèces présentes dans le carnet Mon carnet d'observation d'oiseaux : Les oiseaux de Camargue.",
      "Une fois coloriées, les illustrations peuvent être replacées sur la page de l'espèce correspondante. Elles offrent une alternative simple à ceux qui ne peuvent pas dessiner eux-mêmes ou imprimer des photographies.",
      "Les illustrations sont imprimées sur du papier autocollant, prêtes à être collées une fois coloriées. Un petit guide d'identification accompagne le lot, pour reconnaître plus facilement chaque espèce représentée."
    ],
    specs: [
      ["Compatibilité", "Mon carnet d'observation d'oiseaux : Les oiseaux de Camargue"],
      ["Contenu", "81 illustrations à colorier"],
      ["Support", "papier autocollant"]
    ],
    icon: "pencil",
    relatedTo: ["coo5"]
  },
  {
    id: "icoo6",
    ref: "ICOO6",
    name: "Illustrations à colorier – Carnet « Mon carnet d'observation d'oiseaux : 30 espèces de Camargue »",
    category: "colorier",
    theme: "oiseaux",
    price: 4.5,
    weight: 48,
    available: false,
    shortDesc: "Un complément pensé pour personnaliser facilement votre carnet d'observation.",
    longDesc: [
      "Ce lot rassemble des illustrations à colorier correspondant aux 30 espèces présentes dans le carnet Mon carnet d'observation d'oiseaux : 30 espèces de Camargue.",
      "Une fois coloriées, les illustrations peuvent être replacées sur la page de l'espèce correspondante. Elles offrent une alternative simple à ceux qui ne peuvent pas dessiner eux-mêmes ou imprimer des photographies.",
      "Les illustrations sont imprimées sur du papier autocollant, prêtes à être collées une fois coloriées. Un petit guide d'identification accompagne le lot, pour reconnaître plus facilement chaque espèce représentée."
    ],
    specs: [
      ["Compatibilité", "Mon carnet d'observation d'oiseaux : 30 espèces de Camargue"],
      ["Contenu", "30 illustrations à colorier"],
      ["Support", "papier autocollant"]
    ],
    icon: "pencil",
    relatedTo: ["coo6"]
  },
  {
    id: "auo1",
    ref: "AUO1",
    name: "10 autocollants d'oiseaux",
    category: "stickers",
    theme: "oiseaux",
    price: 1,
    weight: 5,
    available: true,
    shortDesc: "Un petit lot coloré pour décorer carnets, agendas, lettres et créations.",
    longDesc: [
      "Ce lot contient 10 autocollants représentant différents oiseaux, à utiliser selon vos envies pour personnaliser vos supports du quotidien.",
      "Ils peuvent être collés dans un carnet d'observation, un bullet journal, un agenda, sur une carte ou dans toute autre création personnelle."
    ],
    specs: [
      ["Contenu", "10 autocollants d'oiseaux"],
      ["Thème", "oiseaux"]
    ],
    icon: "sticker"
  },
  {
    id: "aui1",
    ref: "AUI1",
    name: "10 autocollants d'insectes",
    category: "stickers",
    theme: "insectes",
    price: 1,
    weight: 5,
    available: true,
    shortDesc: "Un petit lot coloré pour décorer carnets, agendas, lettres et créations.",
    longDesc: [
      "Ce lot contient 10 autocollants représentant différents insectes, à utiliser selon vos envies pour personnaliser vos supports du quotidien.",
      "Ils peuvent être collés dans un carnet d'observation, un bullet journal, un agenda, sur une carte ou dans toute autre création personnelle."
    ],
    specs: [
      ["Contenu", "10 autocollants d'insectes"],
      ["Thème", "insectes"]
    ],
    icon: "sticker"
  }
];

/* Catégories affichées comme filtres principaux dans le catalogue.
   "Carnets d'observation" regroupe tous les carnets par espèce (oiseaux, insectes...) :
   le thème (oiseaux/insectes) apparaît en sous-filtre automatiquement dès qu'un carnet
   d'un autre thème que "oiseaux" est ajouté au catalogue — même logique que pour "Autocollants". */
const CATEGORIES = [
  { id: "carnets-observation", label: "Carnets d'observation" },
  { id: "bullet-journal", label: "Bullet Journal" },
  { id: "colorier", label: "Illustrations à colorier" },
  { id: "stickers", label: "Autocollants" }
];

function getProductById(id){
  return PRODUCTS.find(p => p.id === id) || null;
}

function getCategoryLabel(catId){
  const c = CATEGORIES.find(c => c.id === catId);
  return c ? c.label : catId;
}
