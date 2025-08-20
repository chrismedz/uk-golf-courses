// ===== Starter UK courses (expand this list) =====
const courses = [
  {
    id: 1,
    slug: "st-andrews-old",
    name: "St Andrews (Old Course)",
    county: "Fife",
    country: "Scotland",
    type: "Links",
    length: 6721, par: 72, slope: 132, difficulty: 5,
    fees: "£270 weekday visitor",
    address: "West Sands, St Andrews, KY16 9XL",
    phone: "+44 1334 466666",
    email: "info@standrews.com",
    website: "https://www.standrews.com",
    lat: 56.3429, lng: -2.8030,
    image: "https://images.unsplash.com/photo-1508766206392-8bd5cf550d1b?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1526401485004-2fda9f4b43d3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80"
    ],
    youtube: "ZyDQpE7YgX0",
    description: "The Old Course at St Andrews is among golf’s most historic venues and a bucket-list links experience."
  },
  {
    id: 2,
    slug: "royal-birkdale",
    name: "Royal Birkdale Golf Club",
    county: "Merseyside",
    country: "England",
    type: "Links",
    length: 7133, par: 72, slope: 139, difficulty: 5,
    fees: "£225 visitor",
    address: "Waterloo Rd, Southport PR8 2LX",
    phone: "+44 1704 552020",
    email: "info@royalbirkdale.com",
    website: "https://www.royalbirkdale.com",
    lat: 53.6262, lng: -3.0288,
    image: "https://images.unsplash.com/photo-1505852679233-d9fd70aff56d?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1591532186022-4a2b2c06d7f0?auto=format&fit=crop&w=1200&q=80"
    ],
    youtube: "n0-7t87jqRw",
    description: "Famed Open Championship venue with towering dunes and a strategic test of links golf."
  },
  {
    id: 3,
    slug: "royal-st-georges",
    name: "Royal St George’s Golf Club",
    county: "Kent",
    country: "England",
    type: "Links",
    length: 7204, par: 70, slope: 140, difficulty: 5,
    fees: "£250 visitor",
    address: "Sandwich, CT13 9PB",
    phone: "+44 1304 613090",
    email: "info@royalstgeorges.com",
    website: "https://www.royalstgeorges.com",
    lat: 51.2747, lng: 1.3761,
    image: "https://images.unsplash.com/photo-1526401485004-2fda9f4b43d3?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1508766206392-8bd5cf550d1b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80"
    ],
    youtube: "2T0x6sG1e2M",
    description: "A storied links at Sandwich, Royal St George’s blends undulating fairways and penal bunkering."
  },
  {
    id: 4,
    slug: "muirfield",
    name: "Muirfield",
    county: "East Lothian",
    country: "Scotland",
    type: "Links",
    length: 7245, par: 71, slope: 138, difficulty: 5,
    fees: "£325 visitor (limited days)",
    address: "Gullane, EH31 2EG",
    phone: "+44 1620 842123",
    email: "golf@muirfield.org.uk",
    website: "https://www.muirfield.org.uk",
    lat: 56.0365, lng: -2.8225,
    image: "https://images.unsplash.com/photo-1587174486073-4c4e5bc9a2b2?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1599050751720-f7f2b59213b2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1587202372775-98982a0f002b?auto=format&fit=crop&w=1200&q=80"
    ],
    youtube: "qv3w1mQzTtY",
    description: "Home of The Honourable Company of Edinburgh Golfers; a precise, strategic links."
  },
  {
    id: 5,
    slug: "royal-troon",
    name: "Royal Troon Golf Club",
    county: "Ayrshire",
    country: "Scotland",
    type: "Links",
    length: 7208, par: 71, slope: 144, difficulty: 5,
    fees: "£315 visitor",
    address: "Craigend Rd, Troon KA10 6EP",
    phone: "+44 1292 311555",
    email: "enquiries@royaltroon.com",
    website: "https://www.royaltroon.co.uk",
    lat: 55.5445, lng: -4.6634,
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1505852679233-d9fd70aff56d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600180758895-34b77a7a89c5?auto=format&fit=crop&w=1200&q=80"
    ],
    youtube: "2E5l4lK8F7Q",
    description: "Open host famed for The Postage Stamp; wind and precision define the challenge."
  },
  {
    id: 6,
    slug: "carnoustie",
    name: "Carnoustie Golf Links (Championship)",
    county: "Angus",
    country: "Scotland",
    type: "Links",
    length: 7402, par: 72, slope: 147, difficulty: 5,
    fees: "£270 visitor",
    address: "Links House, Carnoustie DD7 7JE",
    phone: "+44 1241 802270",
    email: "golf@carnoustiegolflinks.co.uk",
    website: "https://www.carnoustiegolflinks.com",
    lat: 56.5012, lng: -2.7210,
    image: "https://images.unsplash.com/photo-1591532186022-4a2b2c06d7f0?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80"
    ],
    youtube: "8bKZ9hX9H9E",
    description: "‘Carnasty’—a relentless championship links demanding ball-striking and nerve."
  },
  {
    id: 7,
    slug: "turnberry-ailsa",
    name: "Trump Turnberry (Ailsa)",
    county: "Ayrshire",
    country: "Scotland",
    type: "Links",
    length: 7489, par: 71, slope: 142, difficulty: 5,
    fees: "£325 visitor",
    address: "Maidens Rd, Turnberry KA26 9LT",
    phone: "+44 1655 331000",
    email: "golf@trumpturnberry.com",
    website: "https://www.trumpturnberry.com",
    lat: 55.3210, lng: -4.8340,
    image: "https://images.unsplash.com/photo-1536120142875-6c68a5f0a1b2?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1599050751720-f7f2b59213b2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1552346154-21d32810aba1?auto=format&fit=crop&w=1200&q=80"
    ],
    youtube: "J0Qq5UeU1nA",
    description: "Dramatic clifftop links with lighthouse vistas and redesigned coastal holes."
  },
  {
    id: 8,
    slug: "royal-portrush-dunluce",
    name: "Royal Portrush (Dunluce)",
    county: "County Antrim",
    country: "Northern Ireland",
    type: "Links",
    length: 7317, par: 72, slope: 144, difficulty: 5,
    fees: "£240 visitor",
    address: "Portrush BT56 8JQ",
    phone: "+44 28 7082 2311",
    email: "info@royalportrushgolfclub.com",
    website: "https://www.royalportrushgolfclub.com",
    lat: 55.2063, lng: -6.6420,
    image: "https://images.unsplash.com/photo-1587202372775-98982a0f002b?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505852679233-d9fd70aff56d?auto=format&fit=crop&w=1200&q=80"
    ],
    youtube: "1U2m2w9m0qk",
    description: "World-class links with towering dunes; host of The Open in 2019 and 2025."
  },
  {
    id: 9,
    slug: "royal-county-down",
    name: "Royal County Down (Championship)",
    county: "County Down",
    country: "Northern Ireland",
    type: "Links",
    length: 7186, par: 71, slope: 142, difficulty: 5,
    fees: "£290 visitor",
    address: "Newcastle BT33 0AN",
    phone: "+44 28 4372 3314",
    email: "info@royalcountydown.org",
    website: "https://www.royalcountydown.org",
    lat: 54.2155, lng: -5.8853,
    image: "https://images.unsplash.com/photo-1599050751720-f7f2b59213b2?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1200&q=80"
    ],
    youtube: "4b8o8n2dWPE",
    description: "Spectacular links beneath the Mourne Mountains; blind shots and heather-framed fairways."
  },
  {
    id: 10,
    slug: "sunningdale-old",
    name: "Sunningdale (Old)",
    county: "Berkshire",
    country: "England",
    type: "Heathland",
    length: 6617, par: 70, slope: 136, difficulty: 4,
    fees: "£275 weekday visitor",
    address: "Ridgemount Rd, Ascot SL5 9RR",
    phone: "+44 1344 621681",
    email: "golf@sunningdale-golfclub.co.uk",
    website: "https://www.sunningdale-golfclub.co.uk",
    lat: 51.385, lng: -0.633,
    image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1591532186022-4a2b2c06d7f0?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1508766206392-8bd5cf550d1b?auto=format&fit=crop&w=1200&q=80"
    ],
    youtube: "xKv8d7b2dWY",
    description: "Classic heathland with purple heather, towering pines and superb green complexes."
  },

  /* --- Add more to grow content depth --- */
  {
    id: 11, slug: "wentworth-west", name: "Wentworth (West)",
    county: "Surrey", country: "England", type: "Parkland",
    length: 7284, par: 72, slope: 135, difficulty: 4,
    fees: "Visitor by arrangement", address: "Wentworth Dr, Virginia Water GU25 4LS",
    phone: "+44 1344 842201", email: "", website: "https://www.wentworthclub.com",
    lat: 51.404, lng: -0.584, image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80",
    images: [], youtube: "", description: "DP World Tour host with immaculate conditioning."
  },
  {
    id: 12, slug: "royal-lytham", name: "Royal Lytham & St Annes",
    county: "Lancashire", country: "England", type: "Links",
    length: 7108, par: 70, slope: 138, difficulty: 5,
    fees: "£240", address: "Links Gate, Lytham St Annes FY8 3LQ",
    phone: "+44 1253 724206", email: "", website: "https://www.royallytham.org",
    lat: 53.744, lng: -2.990, image: "https://images.unsplash.com/photo-1505852679233-d9fd70aff56d?auto=format&fit=crop&w=1200&q=80",
    images: [], youtube: "", description: "Open host with over 170 bunkers guarding lines of charm."
  },
  {
    id: 13, slug: "north-berwick-west", name: "North Berwick (West Links)",
    county: "East Lothian", country: "Scotland", type: "Links",
    length: 6481, par: 71, slope: 133, difficulty: 4,
    fees: "£235", address: "Beach Rd, North Berwick EH39 4BB",
    phone: "+44 1620 892135", email: "", website: "https://www.northberwickgolfclub.com",
    lat: 56.058, lng: -2.725, image: "https://images.unsplash.com/photo-1600180758895-34b77a7a89c5?auto=format&fit=crop&w=1200&q=80",
    images: [], youtube: "", description: "Quirky, joyful links with the original ‘Redan’ hole."
  },
  {
    id: 14, slug: "royal-dornoch", name: "Royal Dornoch (Championship)",
    county: "Sutherland", country: "Scotland", type: "Links",
    length: 6737, par: 70, slope: 137, difficulty: 4,
    fees: "£235", address: "Golf Rd, Dornoch IV25 3LW",
    phone: "+44 1862 810219", email: "", website: "https://www.royaldornoch.com",
    lat: 57.879, lng: -4.030, image: "https://images.unsplash.com/photo-1599050751720-f7f2b59213b2?auto=format&fit=crop&w=1200&q=80",
    images: [], youtube: "", description: "Remote links beauty with raised greens and gorse."
  },
  {
    id: 15, slug: "waterville-placeholder", name: "Hillside Golf Club",
    county: "Merseyside", country: "England", type: "Links",
    length: 7087, par: 72, slope: 137, difficulty: 4,
    fees: "£165", address: "Hastings Rd, Southport PR8 2LU",
    phone: "+44 1704 569250", email: "", website: "https://www.hillside-golfclub.co.uk",
    lat: 53.622, lng: -3.030, image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1200&q=80",
    images: [], youtube: "", description: "Neighbor to Birkdale with dramatic back-nine dunes."
  }
];
