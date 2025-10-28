const mongoose = require('mongoose');
const Product = require('./models/Product');
require('dotenv').config();


const imageUrl = "https://via.placeholder.com/300x300.png?text=Product+Image";


const products = [
  {
    name: "Homeopathy Relief Drops 1",
    category: "homeopathy",
    price: 249,
    offer: 10,
    rating: 4.3,
    description: "Natural formula for fast relief from headaches and fatigue. Safe, non-drowsy and effective for daily use.",
    imageUrl: "/images/homeo1.png",
    stock: 85
  },
  {
    name: "Homeopathy Energy Booster 2",
    category: "homeopathy",
    price: 299,
    offer: 15,
    rating: 4.5,
    description: "Revitalize your body with natural energy support. Boost stamina and reduce tiredness naturally.",
    imageUrl: "/images/homeo2.png",
    stock: 100
  },
  {
    name: "Homeopathy Immunity Plus 3",
    category: "homeopathy",
    price: 349,
    offer: 12,
    rating: 4.4,
    description: "Strengthen your immune system with herbal extracts. Provides long-lasting defense against seasonal changes.",
    imageUrl: "/images/homeo3.png",
    stock: 150
  },
  {
    name: "Homeopathy Stress Relief 4",
    category: "homeopathy",
    price: 279,
    offer: 18,
    rating: 4.6,
    description: "Calm your mind and body with natural stress relievers. Promotes peaceful sleep and emotional balance.",
    imageUrl: "/images/homeo4.png",
    stock: 90
  },
  {
    name: "Homeopathy Cough Remedy 5",
    category: "homeopathy",
    price: 199,
    offer: 20,
    rating: 4.1,
    description: "Soothes throat irritation and persistent cough. Works gently without causing drowsiness.",
    imageUrl: "/images/homeo5.png",
    stock: 130
  },
  {
    name: "Homeopathy Cold Care 6",
    category: "homeopathy",
    price: 229,
    offer: 10,
    rating: 4.3,
    description: "Natural defense for colds, congestion, and sneezing. Strengthens your body’s natural healing process.",
    imageUrl: "/images/homeo6.png",
    stock: 120
  },
  {
    name: "Homeopathy Skin Glow 7",
    category: "homeopathy",
    price: 379,
    offer: 15,
    rating: 4.7,
    description: "Enhance your skin’s natural glow with herbal care. Reduces acne, blemishes, and dullness effectively.",
    imageUrl: "/images/homeo7.png",
    stock: 75
  },
  {
    name: "Homeopathy Hair Revive 8",
    category: "homeopathy",
    price: 399,
    offer: 17,
    rating: 4.5,
    description: "Strengthen your hair roots and prevent hair fall. Promotes natural shine and growth with regular use.",
    imageUrl: "/images/homeo8.png",
    stock: 95
  },
  {
    name: "Homeopathy Joint Ease 9",
    category: "homeopathy",
    price: 329,
    offer: 14,
    rating: 4.4,
    description: "Relieve joint pain and stiffness naturally. Improves mobility and supports healthy bones and muscles.",
    imageUrl: "/images/homeo9.png",
    stock: 110
  },
  {
    name: "Homeopathy Digestion Care 10",
    category: "homeopathy",
    price: 259,
    offer: 10,
    rating: 4.2,
    description: "Supports healthy digestion and reduces bloating. Gentle yet powerful formula for gut wellness.",
    imageUrl: "/images/homeo10.png",
    stock: 140
  },
  {
    name: "Homeopathy Sleep Well 11",
    category: "homeopathy",
    price: 299,
    offer: 12,
    rating: 4.6,
    description: "Promotes deep, restful sleep and relieves insomnia. Wake up refreshed and energized every morning.",
    imageUrl: "/images/homeo11.png",
    stock: 80
  },
  {
    name: "Homeopathy Weight Balance 12",
    category: "homeopathy",
    price: 379,
    offer: 15,
    rating: 4.3,
    description: "Supports natural weight management. Boosts metabolism and reduces unhealthy cravings safely.",
    imageUrl: "/images/homeo12.png",
    stock: 100
  },
  {
    name: "Homeopathy Allergy Shield 13",
    category: "homeopathy",
    price: 289,
    offer: 10,
    rating: 4.4,
    description: "Protect yourself from seasonal allergies naturally. Reduces sneezing, itching, and watery eyes effectively.",
    imageUrl: "/images/homeo13.png",
    stock: 120
  },
  {
    name: "Homeopathy Liver Detox 14",
    category: "homeopathy",
    price: 349,
    offer: 18,
    rating: 4.5,
    description: "Cleanses and supports liver function naturally. Promotes healthy digestion and energy restoration.",
    imageUrl: "/images/homeo14.png",
    stock: 90
  },
  {
    name: "Homeopathy Heart Care 15",
    category: "homeopathy",
    price: 459,
    offer: 20,
    rating: 4.7,
    description: "Supports heart health and blood circulation. Natural formula for improved vitality and stamina.",
    imageUrl: "/images/homeo15.png",
    stock: 70
  },
  {
    name: "Homeopathy Eye Comfort 16",
    category: "homeopathy",
    price: 239,
    offer: 12,
    rating: 4.2,
    description: "Relieves eye strain and dryness naturally. Keeps your eyes fresh and healthy all day long.",
    imageUrl: "/images/homeo16.png",
    stock: 150
  },
  {
    name: "Homeopathy Memory Booster 17",
    category: "homeopathy",
    price: 399,
    offer: 15,
    rating: 4.6,
    description: "Improves focus, memory, and concentration naturally. Perfect for students and professionals alike.",
    imageUrl: "/images/homeo17.png",
    stock: 85
  },
  {
    name: "Homeopathy Bone Strength 18",
    category: "homeopathy",
    price: 369,
    offer: 10,
    rating: 4.5,
    description: "Strengthens bones and prevents calcium loss. Helps maintain flexibility and joint strength.",
    imageUrl: "/images/homeo18.png",
    stock: 90
  },
  {
    name: "Homeopathy Womens Harmony 19",
    category: "homeopathy",
    price: 319,
    offer: 14,
    rating: 4.4,
    description: "Balances hormonal cycles and relieves PMS symptoms. Crafted with care for women’s natural wellness.",
    imageUrl: "/images/homeo19.png",
    stock: 120
  },
  {
    name: "Homeopathy Mens Vitality 20",
    category: "homeopathy",
    price: 339,
    offer: 16,
    rating: 4.3,
    description: "Boosts stamina and performance naturally. Enhances strength, mood, and overall confidence.",
    imageUrl: "/images/homeo20.png",
    stock: 110
  },
  {
    name: "Homeopathy Allergy Relief 21",
    category: "homeopathy",
    price: 259,
    offer: 10,
    rating: 4.2,
    description: "Quick relief from seasonal sneezing and itching. 100% natural ingredients with no side effects.",
    imageUrl: "/images/homeo21.png",
    stock: 100
  },
  {
    name: "Homeopathy Sinus Clear 22",
    category: "homeopathy",
    price: 279,
    offer: 15,
    rating: 4.5,
    description: "Opens nasal passages and clears sinus congestion. Fast-acting natural care for easy breathing.",
    imageUrl: "/images/homeo22.png",
    stock: 85
  },
  {
    name: "Homeopathy Diabetic Support 23",
    category: "homeopathy",
    price: 459,
    offer: 12,
    rating: 4.4,
    description: "Supports healthy blood sugar levels. A safe and natural supplement for daily diabetic management.",
    imageUrl: "/images/homeo23.png",
    stock: 70
  },
  {
    name: "Homeopathy Thyroid Balance 24",
    category: "homeopathy",
    price: 399,
    offer: 15,
    rating: 4.3,
    description: "Regulates metabolism and hormonal balance naturally. Helps improve energy and weight stability.",
    imageUrl: "/images/homeo24.png",
    stock: 95
  },
  {
    name: "Homeopathy Acidity Relief 25",
    category: "homeopathy",
    price: 249,
    offer: 18,
    rating: 4.4,
    description: "Relieves heartburn and acidity quickly. Soothes stomach lining and promotes better digestion.",
    imageUrl: "/images/homeo25.png",
    stock: 140
  },
  {
    name: "Homeopathy Detox Drops 26",
    category: "homeopathy",
    price: 319,
    offer: 10,
    rating: 4.5,
    description: "Flushes out toxins and purifies your body naturally. Helps improve skin tone and energy levels.",
    imageUrl: "/images/homeo26.png",
    stock: 90
  },
  {
    name: "Homeopathy Pain Relief 27",
    category: "homeopathy",
    price: 299,
    offer: 12,
    rating: 4.3,
    description: "Natural relief for muscle and body pain. Fast-absorbing and long-lasting comfort guaranteed.",
    imageUrl: "/images/homeo27.png",
    stock: 120
  },
  {
    name: "Homeopathy Mood Uplift 28",
    category: "homeopathy",
    price: 279,
    offer: 10,
    rating: 4.5,
    description: "Lift your mood and beat daily fatigue. Promotes emotional wellness and calm naturally.",
    imageUrl: "/images/homeo28.png",
    stock: 100
  },
  {
    name: "Homeopathy Detox Tablets 29",
    category: "homeopathy",
    price: 349,
    offer: 16,
    rating: 4.6,
    description: "Powerful herbal detox for body and mind. Restores balance and promotes clear, healthy skin.",
    imageUrl: "/images/homeo29.png",
    stock: 80
  },
  {
    name: "Homeopathy Skin Repair 30",
    category: "homeopathy",
    price: 379,
    offer: 20,
    rating: 4.7,
    description: "Repairs damaged skin and restores smooth texture. Gives you glowing, youthful, and healthy skin naturally.",
    imageUrl: "/images/homeo30.png",
    stock: 95
  },
  {
    name: "Pain Relief Tablet 1",
    category: "medicine",
    price: 129,
    offer: 10,
    rating: 4.3,
    description: "Provides fast and effective relief from headaches and muscle pain. Gentle on the stomach and quick to act.",
    imageUrl: "/images/med1.png",
    stock: 120
  },
  {
    name: "FeverCare Paracetamol 2",
    category: "medicine",
    price: 99,
    offer: 12,
    rating: 4.4,
    description: "Reduces fever and provides comfort during cold and flu. Trusted by families for safe recovery.",
    imageUrl: "/images/med2.png",
    stock: 150
  },
  {
    name: "Cold Relief Syrup 3",
    category: "medicine",
    price: 149,
    offer: 15,
    rating: 4.2,
    description: "Soothes sore throat and nasal congestion. Works effectively to clear breathing passages.",
    imageUrl: "/images/med3.png",
    stock: 110
  },
  {
    name: "Cough Syrup Plus 4",
    category: "medicine",
    price: 159,
    offer: 18,
    rating: 4.5,
    description: "Provides instant relief from dry and wet cough. Enriched with natural honey and herbal extracts.",
    imageUrl: "/images/med4.png",
    stock: 90
  },
  {
    name: "Antibiotic Capsule 5",
    category: "medicine",
    price: 249,
    offer: 10,
    rating: 4.6,
    description: "Powerful broad-spectrum antibiotic for bacterial infections. Fast-acting formula for better healing.",
    imageUrl: "/images/med5.png",
    stock: 85
  },
  {
    name: "Allergy Block Tablet 6",
    category: "medicine",
    price: 179,
    offer: 14,
    rating: 4.4,
    description: "Stops sneezing, itching, and watery eyes instantly. Works round the clock without drowsiness.",
    imageUrl: "/images/med6.png",
    stock: 95
  },
  {
    name: "Vitamin C Boost 7",
    category: "medicine",
    price: 199,
    offer: 15,
    rating: 4.7,
    description: "Boosts immunity and fights fatigue. Antioxidant-rich tablets to support daily wellness.",
    imageUrl: "/images/med7.png",
    stock: 130
  },
  {
    name: "Multivitamin Capsule 8",
    category: "medicine",
    price: 279,
    offer: 12,
    rating: 4.6,
    description: "Complete nutrition for everyday strength and energy. Supports healthy skin, hair, and bones.",
    imageUrl: "/images/med8.png",
    stock: 100
  },
  {
    name: "Calcium D3 Tablet 9",
    category: "medicine",
    price: 229,
    offer: 10,
    rating: 4.5,
    description: "Supports bone and joint health with essential minerals. Prevents calcium deficiency effectively.",
    imageUrl: "/images/med9.png",
    stock: 90
  },
  {
    name: "Iron Tonic 10",
    category: "medicine",
    price: 199,
    offer: 16,
    rating: 4.3,
    description: "Combats fatigue and anemia naturally. Enriched with iron and folic acid for improved blood health.",
    imageUrl: "/images/med10.png",
    stock: 120
  },
  {
    name: "Digestive Enzyme Syrup 11",
    category: "medicine",
    price: 169,
    offer: 14,
    rating: 4.4,
    description: "Improves digestion and reduces bloating. Great for everyday gut comfort after meals.",
    imageUrl: "/images/med11.png",
    stock: 110
  },
  {
    name: "Acidity Control Tablet 12",
    category: "medicine",
    price: 149,
    offer: 10,
    rating: 4.2,
    description: "Neutralizes acid and soothes heartburn quickly. Helps restore natural digestive balance.",
    imageUrl: "/images/med12.png",
    stock: 130
  },
  {
    name: "Antacid Suspension 13",
    category: "medicine",
    price: 179,
    offer: 12,
    rating: 4.3,
    description: "Provides fast relief from acidity and gas. Refreshing mint flavor for instant comfort.",
    imageUrl: "/images/med13.png",
    stock: 100
  },
  {
    name: "Liver Tonic 14",
    category: "medicine",
    price: 199,
    offer: 15,
    rating: 4.5,
    description: "Detoxifies and revitalizes liver function naturally. Keeps digestion and metabolism in balance.",
    imageUrl: "/images/med14.png",
    stock: 85
  },
  {
    name: "Diabetic Control Tablet 15",
    category: "medicine",
    price: 299,
    offer: 20,
    rating: 4.6,
    description: "Supports healthy blood sugar levels. Formulated for safe, consistent glucose management.",
    imageUrl: "/images/med15.png",
    stock: 80
  },
  {
    name: "Blood Pressure Care 16",
    category: "medicine",
    price: 269,
    offer: 10,
    rating: 4.4,
    description: "Helps maintain normal blood pressure levels. A reliable companion for daily heart wellness.",
    imageUrl: "/images/med16.png",
    stock: 90
  },
  {
    name: "Cholesterol Balance Capsule 17",
    category: "medicine",
    price: 319,
    offer: 15,
    rating: 4.5,
    description: "Supports heart health by managing cholesterol naturally. Promotes better blood circulation.",
    imageUrl: "/images/med17.png",
    stock: 75
  },
  {
    name: "Antiseptic Cream 18",
    category: "medicine",
    price: 129,
    offer: 10,
    rating: 4.3,
    description: "Heals cuts, burns, and wounds quickly. Provides infection protection and skin recovery.",
    imageUrl: "/images/med18.png",
    stock: 150
  },
  {
    name: "Muscle Relaxant Gel 19",
    category: "medicine",
    price: 199,
    offer: 18,
    rating: 4.5,
    description: "Instant relief from muscle stiffness and sprains. Non-sticky gel formula for easy application.",
    imageUrl: "/images/med19.png",
    stock: 100
  },
  {
    name: "Antifungal Cream 20",
    category: "medicine",
    price: 159,
    offer: 12,
    rating: 4.2,
    description: "Cures fungal infections and skin irritations. Provides quick, soothing comfort to affected areas.",
    imageUrl: "/images/med20.png",
    stock: 130
  },
  {
    name: "Eye Drops Refresh 21",
    category: "medicine",
    price: 139,
    offer: 10,
    rating: 4.4,
    description: "Relieves dryness and irritation in tired eyes. Provides cooling, hydrating comfort instantly.",
    imageUrl: "/images/med21.png",
    stock: 110
  },
  {
    name: "Ear Drop Solution 22",
    category: "medicine",
    price: 169,
    offer: 12,
    rating: 4.3,
    description: "Soothes ear pain and reduces inflammation. Gentle yet effective for daily ear care.",
    imageUrl: "/images/med22.png",
    stock: 80
  },
  {
    name: "Antiseptic Mouthwash 23",
    category: "medicine",
    price: 149,
    offer: 10,
    rating: 4.2,
    description: "Kills 99.9% of germs for lasting freshness. Protects against cavities and gum infections.",
    imageUrl: "/images/med23.png",
    stock: 140
  },
  {
    name: "Skin Healing Lotion 24",
    category: "medicine",
    price: 199,
    offer: 15,
    rating: 4.5,
    description: "Nourishes and repairs dry, damaged skin. Clinically proven formula for smooth, healthy skin.",
    imageUrl: "/images/med24.png",
    stock: 120
  },
  {
    name: "Antiseptic Wipes 25",
    category: "medicine",
    price: 99,
    offer: 10,
    rating: 4.4,
    description: "Instant germ protection anytime, anywhere. Gentle on skin, tough on bacteria and viruses.",
    imageUrl: "/images/med25.png",
    stock: 160
  },
  {
    name: "Rehydration Electrolyte 26",
    category: "medicine",
    price: 89,
    offer: 15,
    rating: 4.6,
    description: "Restores hydration and electrolyte balance fast. Perfect for heat, fatigue, or travel sickness.",
    imageUrl: "/images/med26.png",
    stock: 200
  },
  {
    name: "Sleep Aid Tablet 27",
    category: "medicine",
    price: 249,
    offer: 18,
    rating: 4.5,
    description: "Promotes restful sleep and reduces anxiety. Non-habit forming and completely safe.",
    imageUrl: "/images/med27.png",
    stock: 90
  },
  {
    name: "Immunity Booster Capsule 28",
    category: "medicine",
    price: 279,
    offer: 15,
    rating: 4.7,
    description: "Strengthens your body’s defense system naturally. Helps you stay active and illness-free.",
    imageUrl: "/images/med28.png",
    stock: 100
  },
  {
    name: "Antioxidant Tablet 29",
    category: "medicine",
    price: 299,
    offer: 12,
    rating: 4.5,
    description: "Combats oxidative stress and supports healthy aging. Keeps you youthful and energetic inside out.",
    imageUrl: "/images/med29.png",
    stock: 85
  },
  {
    name: "Probiotic Capsule 30",
    category: "medicine",
    price: 249,
    offer: 10,
    rating: 4.6,
    description: "Improves digestion and strengthens gut flora. Enhances nutrient absorption and immunity naturally.",
    imageUrl: "/images/med30.png",
    stock: 95
  },
  {
    name: "ProStrike Cricket Bat",
    category: "sports",
    price: 2499,
    offer: 15,
    rating: 4.7,
    description: "Premium English willow bat with superb balance and power. Designed for professionals who love precision shots.",
    imageUrl: "/images/cr1.png",
    stock: 40
  },
  {
    name: "Blaze Leather Cricket Ball",
    category: "sports",
    price: 499,
    offer: 10,
    rating: 4.5,
    description: "Durable hand-stitched red leather ball with perfect seam. Ideal for club and professional matches.",
    imageUrl: "/images/cr2.png",
    stock: 120
  },
  {
    name: "PowerGrip Batting Gloves",
    category: "sports",
    price: 899,
    offer: 12,
    rating: 4.4,
    description: "Breathable gloves offering superior comfort and grip. Protects your hands while improving control.",
    imageUrl: "/images/cr3.png",
    stock: 75
  },
  {
    name: "Shield Pro Leg Pads",
    category: "sports",
    price: 1299,
    offer: 18,
    rating: 4.6,
    description: "Lightweight and protective batting pads. Made with high-density foam for complete safety.",
    imageUrl: "/images/cr4.png",
    stock: 50
  },
  {
    name: "Elite Wicket Keeping Gloves",
    category: "sports",
    price: 1499,
    offer: 20,
    rating: 4.7,
    description: "Top-grade leather gloves with extra padding. Offers excellent grip and quick movement behind the stumps.",
    imageUrl: "/images/cr5.png",
    stock: 35
  },
  {
    name: "Cricket Helmet Guard Pro",
    category: "sports",
    price: 1099,
    offer: 15,
    rating: 4.5,
    description: "High-impact resistant helmet with adjustable straps. Ensures maximum head protection on every delivery.",
    imageUrl: "/images/cr6.png",
    stock: 60
  },
  {
    name: "Cricket Kit Bag Deluxe",
    category: "sports",
    price: 1799,
    offer: 10,
    rating: 4.4,
    description: "Spacious and stylish cricket kit bag with multiple compartments. Built with durable material for long-term use.",
    imageUrl: "/images/cr7.png",
    stock: 45
  },
  {
    name: "Cricket Stumps Set",
    category: "sports",
    price: 599,
    offer: 12,
    rating: 4.3,
    description: "Set of 3 durable wooden stumps with bails. Ideal for practice sessions and matches.",
    imageUrl: "/images/cr8.png",
    stock: 90
  },
  {
    name: "Cricket Arm Guard Classic",
    category: "sports",
    price: 299,
    offer: 15,
    rating: 4.2,
    description: "Lightweight yet protective arm guard for comfort and safety. Designed for pro and amateur cricketers alike.",
    imageUrl: "/images/cr9.png",
    stock: 80
  },
  {
    name: "Boundary Marker Cones",
    category: "sports",
    price: 399,
    offer: 10,
    rating: 4.1,
    description: "Set of 20 flexible boundary cones for training and matches. Brightly colored for better field visibility.",
    imageUrl: "/images/cr10.png",
    stock: 100
  },

  // ⚽ FOOTBALL (10)
  {
    name: "Velocity Pro Football",
    category: "sports",
    price: 899,
    offer: 15,
    rating: 4.6,
    description: "FIFA-quality match ball with premium synthetic cover. Offers great control, spin, and durability.",
    imageUrl: "/images/cr11.png",
    stock: 120
  },
  {
    name: "Football Stud Shoes",
    category: "sports",
    price: 1399,
    offer: 20,
    rating: 4.7,
    description: "High-traction football shoes built for speed and agility. Comfortable fit for turf and grass surfaces.",
    imageUrl: "/images/cr12.png",
    stock: 70
  },
  {
    name: "Goalkeeper Gloves Pro",
    category: "sports",
    price: 999,
    offer: 12,
    rating: 4.5,
    description: "Strong grip and breathable mesh for top performance. Perfect for goalkeepers at any level.",
    imageUrl: "/images/cr13.png",
    stock: 90
  },
  {
    name: "Portable Football Goal Post",
    category: "sports",
    price: 2499,
    offer: 18,
    rating: 4.6,
    description: "Easy-to-install foldable goalpost ideal for training and backyard fun. Built from durable steel.",
    imageUrl: "/images/cr14.png",
    stock: 40
  },
  {
    name: "Football Pump Kit",
    category: "sports",
    price: 249,
    offer: 10,
    rating: 4.3,
    description: "Compact air pump with needle attachment. Quickly inflates footballs and other sports gear.",
    imageUrl: "/images/cr15.png",
    stock: 200
  },
  {
    name: "Shin Guard Classic",
    category: "sports",
    price: 349,
    offer: 15,
    rating: 4.4,
    description: "Protective shin pads made with soft foam cushioning. Lightweight and comfortable for long games.",
    imageUrl: "/images/cr16.png",
    stock: 130
  },
  {
    name: "Football Jersey Set of Ronaldo",
    category: "sports",
    price: 799,
    offer: 12,
    rating: 4.5,
    description: "Stylish and breathable jersey set for players and teams. Designed for peak performance and comfort.",
    imageUrl: "/images/cr17.png",
    stock: 90
  },
  {
    name: "Training Ladder Pro",
    category: "sports",
    price: 699,
    offer: 18,
    rating: 4.6,
    description: "Improve speed, balance, and agility with this training ladder. Ideal for football and all fitness workouts.",
    imageUrl: "/images/cr18.png",
    stock: 85
  },
  {
    name: "Football Carry Net",
    category: "sports",
    price: 199,
    offer: 10,
    rating: 4.2,
    description: "Lightweight mesh net to carry multiple footballs easily. Durable and compact for coaches and players.",
    imageUrl: "/images/cr19.png",
    stock: 150
  },
  {
    name: "Football Cone Set",
    category: "sports",
    price: 299,
    offer: 10,
    rating: 4.1,
    description: "Colorful cones for football training and drills. Helps improve player coordination and movement.",
    imageUrl: "/images/cr20.png",
    stock: 100
  },

  // 🏸 BADMINTON (10)
  {
    name: "AeroSmash Badminton Racket",
    category: "sports",
    price: 1599,
    offer: 15,
    rating: 4.7,
    description: "Lightweight carbon fiber racket for ultimate control. Perfect for fast and aggressive gameplay.",
    imageUrl: "/images/cr21.png",
    stock: 70
  },
  {
    name: "Feather Shuttlecock Pack(3 in 1)",
    category: "sports",
    price: 499,
    offer: 10,
    rating: 4.4,
    description: "Pack of 12 premium feather shuttles for consistent flight. Used in both professional and amateur matches.",
    imageUrl: "/images/cr22.png",
    stock: 150
  },
  {
    name: "Badminton Grip Set",
    category: "sports",
    price: 199,
    offer: 12,
    rating: 4.3,
    description: "Soft anti-slip grips to enhance comfort and control. Available in vibrant colors for stylish play.",
    imageUrl: "/images/cr23.png",
    stock: 120
  },
  {
    name: "Badminton Net Standard",
    category: "sports",
    price: 799,
    offer: 10,
    rating: 4.5,
    description: "Durable nylon net suitable for indoor and outdoor games. Easy setup for quick matches anywhere.",
    imageUrl: "/images/cr24.png",
    stock: 80
  },
  {
    name: "Badminton Shoes Sprint Pro",
    category: "sports",
    price: 1899,
    offer: 20,
    rating: 4.6,
    description: "Lightweight court shoes with excellent grip and cushioning. Designed for agility and performance.",
    imageUrl: "/images/cr25.png",
    stock: 60
  },
  {
    name: "Badminton Kit Bag",
    category: "sports",
    price: 999,
    offer: 15,
    rating: 4.4,
    description: "Stylish multi-compartment bag for rackets and gear. Lightweight and easy to carry anywhere.",
    imageUrl: "/images/cr26.png",
    stock: 70
  },
  {
    name: "Badminton Wrist Band Set",
    category: "sports",
    price: 149,
    offer: 10,
    rating: 4.2,
    description: "Soft cotton wristbands for sweat absorption. Keep your game cool and comfortable.",
    imageUrl: "/images/cr27.png",
    stock: 140
  },
  {
    name: "Badminton Headband",
    category: "sports",
    price: 129,
    offer: 10,
    rating: 4.3,
    description: "Elastic headband designed to keep sweat away. Perfect for long and intense matches.",
    imageUrl: "/images/cr28.png",
    stock: 130
  },
  {
    name: "Badminton Training Cone Set",
    category: "sports",
    price: 249,
    offer: 12,
    rating: 4.3,
    description: "Improve footwork and reflexes with colorful cones. Great for coaching and drills.",
    imageUrl: "/images/cr29.png",
    stock: 90
  },
  {
    name: "Badminton String Reel",
    category: "sports",
    price: 699,
    offer: 15,
    rating: 4.5,
    description: "Durable high-tension strings for consistent performance. Perfect for professional racket restringing.",
    imageUrl: "/images/cr30.png",
    stock: 100
  },

  // 🏀 BASKETBALL (10)
  {
    name: "StreetMaster Basketball",
    category: "sports",
    price: 899,
    offer: 12,
    rating: 4.5,
    description: "Durable rubber basketball for indoor and outdoor use. Provides superior bounce and control.",
    imageUrl: "/images/cr31.png",
    stock: 130
  },
  {
    name: "Basketball Hoop Set",
    category: "sports",
    price: 2499,
    offer: 20,
    rating: 4.7,
    description: "Adjustable portable hoop for home or training use. Built with strong steel frame for durability.",
    imageUrl: "/images/cr32.png",
    stock: 50
  },
  {
    name: "Basketball Jersey Set",
    category: "sports",
    price: 899,
    offer: 15,
    rating: 4.4,
    description: "Stylish, breathable jersey for comfort and confidence. Made from sweat-wicking performance fabric.",
    imageUrl: "/images/cr33.png",
    stock: 90
  },
  {
    name: "Basketball Wristband",
    category: "sports",
    price: 149,
    offer: 10,
    rating: 4.3,
    description: "Soft and stretchable cotton band for maximum sweat absorption. Keeps your hands dry for better grip.",
    imageUrl: "/images/cr34.png",
    stock: 120
  },
  {
    name: "Basketball Net Replacement(4 in 1)",
    category: "sports",
    price: 199,
    offer: 12,
    rating: 4.4,
    description: "Durable nylon net suitable for all hoop sizes. Withstands high-intensity play and outdoor conditions.",
    imageUrl: "/images/cr35.png",
    stock: 100
  },
  {
    name: "Basketball Pump Kit",
    category: "sports",
    price: 249,
    offer: 10,
    rating: 4.2,
    description: "Compact and efficient ball pump for quick inflation. Comes with extra needles and hose.",
    imageUrl: "/images/cr36.png",
    stock: 200
  },
  {
    name: "Basketball Shoes Dunk Pro",
    category: "sports",
    price: 2499,
    offer: 18,
    rating: 4.6,
    description: "High-top shoes designed for grip, jump, and comfort. Shock-absorbing sole with breathable mesh.",
    imageUrl: "/images/cr37.png",
    stock: 55
  },
  {
    name: "Basketball Headband Set",
    category: "sports",
    price: 179,
    offer: 10,
    rating: 4.3,
    description: "Keep sweat away and stay focused on your shots. Soft and stretchable for ultimate comfort.",
    imageUrl: "/images/cr38.png",
    stock: 150
  },
  {
    name: "Basketball Bag Pro",
    category: "sports",
    price: 899,
    offer: 15,
    rating: 4.4,
    description: "Spacious carry bag with compartments for ball and shoes. Lightweight and water-resistant design.",
    imageUrl: "/images/cr39.png",
    stock: 80
  },
  {
    name: "Basketball Training Cones",
    category: "sports",
    price: 349,
    offer: 10,
    rating: 4.2,
    description: "Essential training accessory for footwork drills. Bright colors for better visibility during practice.",
    imageUrl: "/images/cr40.png",
    stock: 100
  },

  // 🏒 HOCKEY (10)
  {
    name: "Hockey Stick Elite Pro",
    category: "sports",
    price: 1599,
    offer: 15,
    rating: 4.6,
    description: "Lightweight and balanced carbon composite stick. Designed for precision and power in every hit.",
    imageUrl: "/images/cr41.png",
    stock: 65
  },
  {
    name: "Hockey Ball Classic(4 in 1)",
    category: "sports",
    price: 299,
    offer: 10,
    rating: 4.3,
    description: "Solid and smooth hockey ball for outdoor turf play. Delivers excellent control and stability.",
    imageUrl: "/images/cr42.png",
    stock: 180
  },
  {
    name: "Hockey Gloves Defender",
    category: "sports",
    price: 699,
    offer: 12,
    rating: 4.4,
    description: "Protective gloves with padded design for maximum comfort. Keeps hands safe during intense matches.",
    imageUrl: "/images/cr43.png",
    stock: 90
  },
  {
    name: "Hockey Shin Guards",
    category: "sports",
    price: 499,
    offer: 15,
    rating: 4.5,
    description: "Lightweight shin guards with superior cushioning. Ensures full protection and easy movement.",
    imageUrl: "/images/cr44.png",
    stock: 110
  },
  {
    name: "Hockey Goalkeeper Pads",
    category: "sports",
    price: 2499,
    offer: 18,
    rating: 4.7,
    description: "Heavy-duty goalkeeper pads offering total coverage. Designed for agility, comfort, and defense.",
    imageUrl: "/images/cr45.png",
    stock: 40
  },
  {
    name: "Hockey Helmet Pro",
    category: "sports",
    price: 1299,
    offer: 12,
    rating: 4.5,
    description: "Full-face helmet with superior impact protection. Lightweight, breathable, and adjustable fit.",
    imageUrl: "/images/cr46.png",
    stock: 60
  },
  {
    name: "Hockey Turf Shoes",
    category: "sports",
    price: 1899,
    offer: 15,
    rating: 4.6,
    description: "High-grip shoes designed for hockey turf performance. Offers stability and quick directional control.",
    imageUrl: "/images/cr47.png",
    stock: 70
  },
  {
    name: "Hockey Stick Bag(3 in 1)",
    category: "sports",
    price: 1999,
    offer: 10,
    rating: 4.3,
    description: "Durable bag to carry sticks and accessories with ease. Padded straps for comfortable handling.",
    imageUrl: "/images/cr48.png",
    stock: 90
  },
  {
    name: "Hockey Training Cones Set",
    category: "sports",
    price: 299,
    offer: 10,
    rating: 4.2,
    description: "Colorful marker cones for speed and agility drills. Ideal for coaches and professional training sessions.",
    imageUrl: "/images/cr49.png",
    stock: 120
  },
  {
    name: "Hockey Goal Net",
    category: "sports",
    price: 1499,
    offer: 20,
    rating: 4.7,
    description: "Heavy-duty goal net designed for intense practice. Easy to install and built to last for seasons.",
    imageUrl: "/images/cr50.png",
    stock: 50
  },
  {
    name: "Elegant Table Lamp",
    category: "home-accessories",
    price: 899,
    offer: 15,
    rating: 4.5,
    description: "Soft warm lighting that adds a cozy charm to your bedroom. Stylish design with durable finish.",
    imageUrl: "/images/home1.png",
    stock: 120
  },
  {
    name: "Wooden Wall Clock",
    category: "home-accessories",
    price: 749,
    offer: 10,
    rating: 4.4,
    description: "Classic handcrafted wooden clock for your living room. Blends tradition with timeless beauty.",
    imageUrl: "/images/home2.png",
    stock: 90
  },
  {
    name: "Floral Cushion Set(4 in 1)",
    category: "home-accessories",
    price: 999,
    offer: 20,
    rating: 4.3,
    description: "Soft and vibrant cushions that lift your home’s mood. Perfect comfort with colorful flair.",
    imageUrl: "/images/home3.png",
    stock: 150
  },
  {
    name: "Marble Vase",
    category: "home-accessories",
    price: 1199,
    offer: 18,
    rating: 4.6,
    description: "Elegant handcrafted marble vase for fresh flowers. Enhances any corner with luxury appeal.",
    imageUrl: "/images/home4.png",
    stock: 70
  },
  {
    name: "Cotton Bedsheet Set",
    category: "home-accessories",
    price: 999,
    offer: 12,
    rating: 4.5,
    description: "Soft breathable cotton for a peaceful night’s sleep. Stylish prints to brighten your bedroom.",
    imageUrl: "/images/home5.png",
    stock: 110
  },
  {
    name: "Scented Candle Pack",
    category: "home-accessories",
    price: 399,
    offer: 10,
    rating: 4.7,
    description: "Relaxing aroma candles that calm your mind. Perfect for gifting or cozy evenings.",
    imageUrl: "/images/home6.png",
    stock: 200
  },
  {
    name: "Decorative Wall Mirror",
    category: "home-accessories",
    price: 1599,
    offer: 15,
    rating: 4.6,
    description: "Stylish wall mirror with intricate frame design. Adds brightness and elegance to your decor.",
    imageUrl: "/images/home7.png",
    stock: 85
  },
  {
    name: "Indoor Plant Pot",
    category: "home-accessories",
    price: 349,
    offer: 18,
    rating: 4.4,
    description: "Eco-friendly ceramic pot to grow your favorite plants. Ideal for tabletops or window sills.",
    imageUrl: "/images/home8.png",
    stock: 130
  },
  {
    name: "Laundry Storage Basket",
    category: "home-accessories",
    price: 699,
    offer: 20,
    rating: 4.3,
    description: "Stylish woven storage basket to keep things tidy. Durable and lightweight for easy movement.",
    imageUrl: "/images/home9.png",
    stock: 100
  },
  {
    name: "Wall Art Canvas",
    category: "home-accessories",
    price: 999,
    offer: 15,
    rating: 4.6,
    description: "High-quality printed canvas to adorn your walls. Brings color and creativity to your space.",
    imageUrl: "/images/home10.png",
    stock: 95
  },
  {
    name: "Aroma Diffuser",
    category: "home-accessories",
    price: 899,
    offer: 10,
    rating: 4.5,
    description: "Relaxing diffuser that spreads soothing fragrances. Compact design ideal for bedrooms or offices.",
    imageUrl: "/images/home11.png",
    stock: 140
  },
  {
    name: "Kitchen Storage Jar Set",
    category: "home-accessories",
    price: 749,
    offer: 12,
    rating: 4.4,
    description: "Air-tight jars to keep your ingredients fresh. Elegant and functional for modern kitchens.",
    imageUrl: "/images/home12.png",
    stock: 130
  },
  {
    name: "Photo Frame Collage",
    category: "home-accessories",
    price: 599,
    offer: 20,
    rating: 4.5,
    description: "Showcase your memories with this beautiful collage frame. Adds warmth to your living space.",
    imageUrl: "/images/home13.png",
    stock: 110
  },
  {
    name: "Velvet Curtains Set",
    category: "home-accessories",
    price: 1299,
    offer: 18,
    rating: 4.6,
    description: "Luxurious velvet curtains that block sunlight beautifully. Elegant texture and perfect drape.",
    imageUrl: "/images/home14.png",
    stock: 80
  },
  {
    name: "Wall Shelves Trio",
    category: "home-accessories",
    price: 899,
    offer: 15,
    rating: 4.5,
    description: "Space-saving shelves for décor or storage. Simple yet modern design for every room.",
    imageUrl: "/images/home15.png",
    stock: 100
  },
  {
    name: "LED Fairy Lights",
    category: "home-accessories",
    price: 299,
    offer: 20,
    rating: 4.7,
    description: "Bright and colorful fairy lights to light up your evenings. Perfect for parties or cozy setups.",
    imageUrl: "/images/home16.png",
    stock: 250
  },
  {
    name: "Bamboo Floor Mat",
    category: "home-accessories",
    price: 499,
    offer: 15,
    rating: 4.3,
    description: "Natural bamboo mat for a cool, earthy feel. Ideal for living or yoga spaces.",
    imageUrl: "/images/home17.png",
    stock: 150
  },
  {
    name: "Kitchen Apron & Glove Set",
    category: "home-accessories",
    price: 399,
    offer: 10,
    rating: 4.5,
    description: "Stylish apron and gloves to keep you cooking cleanly. Comfortable cotton material with design flair.",
    imageUrl: "/images/home18.png",
    stock: 120
  },
  {
    name: "Fridge Organizer Tray",
    category: "home-accessories",
    price: 249,
    offer: 15,
    rating: 4.4,
    description: "Smart space-saving trays for refrigerator storage. Keeps everything organized and easy to find.",
    imageUrl: "/images/home19.png",
    stock: 180
  },
  {
    name: "Bathroom Towel Set",
    category: "home-accessories",
    price: 799,
    offer: 12,
    rating: 4.5,
    description: "Soft and absorbent towels for everyday luxury. Long-lasting comfort with elegant finish.",
    imageUrl: "/images/home20.png",
    stock: 100
  },
  {
    name: "Cushion Cover Pack(5 in 1)",
    category: "home-accessories",
    price: 449,
    offer: 18,
    rating: 4.3,
    description: "Trendy cushion covers that refresh your interiors. Vibrant prints with smooth fabric quality.",
    imageUrl: "/images/home21.png",
    stock: 130
  },
  {
    name: "Wall Mounted Key Holder",
    category: "home-accessories",
    price: 299,
    offer: 10,
    rating: 4.4,
    description: "Keep your keys handy and stylishly displayed. Compact, durable, and perfect for entryways.",
    imageUrl: "/images/home22.png",
    stock: 160
  },
  {
    name: "Decorative Candle Stand",
    category: "home-accessories",
    price: 549,
    offer: 15,
    rating: 4.5,
    description: "Beautiful metal candle stand for festive evenings. Adds charm to your table or living room.",
    imageUrl: "/images/home23.png",
    stock: 100
  },
  {
    name: "Drawer Organizer Set",
    category: "home-accessories",
    price: 599,
    offer: 12,
    rating: 4.4,
    description: "Organize your essentials neatly with this drawer set. Perfect for makeup, stationery, or tools.",
    imageUrl: "/images/home24.png",
    stock: 110
  },
  {
    name: "Round Wall Clock",
    category: "home-accessories",
    price: 699,
    offer: 10,
    rating: 4.6,
    description: "Modern round clock with silent movement. Ideal for kitchen or office walls.",
    imageUrl: "/images/home25.png",
    stock: 140
  },
  {
    name: "Handwoven Table Runner",
    category: "home-accessories",
    price: 449,
    offer: 15,
    rating: 4.5,
    description: "Elegant handwoven runner for dining tables. Adds warmth and artistry to your meals.",
    imageUrl: "/images/home26.png",
    stock: 120
  },
  {
    name: "Decor Wall Hooks",
    category: "home-accessories",
    price: 299,
    offer: 20,
    rating: 4.3,
    description: "Stylish metal hooks for bags, coats, or décor. Small detail, big difference in look.",
    imageUrl: "/images/home27.png",
    stock: 180
  },
  {
    name: "Table Clock Retro",
    category: "home-accessories",
    price: 649,
    offer: 10,
    rating: 4.4,
    description: "Charming retro-style table clock for bedside or desk. Durable, elegant, and classic.",
    imageUrl: "/images/home28.png",
    stock: 100
  },
  {
    name: "Kitchen Utensil Holder",
    category: "home-accessories",
    price: 399,
    offer: 12,
    rating: 4.5,
    description: "Keeps your spoons and spatulas neatly arranged. Sleek stainless-steel design for easy cleaning.",
    imageUrl: "/images/home29.png",
    stock: 140
  },
  {
    name: "Floor Lamp Modern",
    category: "home-accessories",
    price: 1599,
    offer: 15,
    rating: 4.6,
    description: "Tall modern floor lamp for ambient lighting. Perfect addition to living or study space.",
    imageUrl: "/images/home30.png",
    stock: 80
  },
  {
    name: "Wall Hanging Dreamcatcher",
    category: "home-accessories",
    price: 349,
    offer: 20,
    rating: 4.5,
    description: "Handcrafted dreamcatcher to bring peace and positivity. Adds a mystical charm to walls.",
    imageUrl: "/images/home31.png",
    stock: 170
  },
  {
    name: "Wooden Serving Tray",
    category: "home-accessories",
    price: 549,
    offer: 15,
    rating: 4.4,
    description: "Elegant tray perfect for serving snacks or tea. Sturdy, stylish, and easy to maintain.",
    imageUrl: "/images/home32.png",
    stock: 150
  },
  {
    name: "Mirror Photo Frame",
    category: "home-accessories",
    price: 799,
    offer: 10,
    rating: 4.5,
    description: "Reflective frame design that highlights your memories. Adds a premium touch to your shelf.",
    imageUrl: "/images/home33.png",
    stock: 95
  },
  {
    name: "Kitchen Spice Rack",
    category: "home-accessories",
    price: 699,
    offer: 12,
    rating: 4.5,
    description: "Compact spice rack for neat kitchen organization. Easy-access jars to simplify cooking.",
    imageUrl: "/images/home34.png",
    stock: 120
  },
  {
    name: "Decorative Wall Plate Set(3 in 1)",
    category: "home-accessories",
    price: 999,
    offer: 15,
    rating: 4.6,
    description: "Art-inspired wall plates to elevate your interiors. A stunning blend of tradition and color.",
    imageUrl: "/images/home35.png",
    stock: 85
  },
  {
    name: "Table Coaster Pack",
    category: "home-accessories",
    price: 249,
    offer: 10,
    rating: 4.4,
    description: "Durable wooden coasters to protect your tables. Adds elegance to your dining setup.",
    imageUrl: "/images/home36.png",
    stock: 160
  },
  {
    name: "Wall Mounted Shelf Unit",
    category: "home-accessories",
    price: 1099,
    offer: 12,
    rating: 4.5,
    description: "Strong floating shelf unit for books and decor. Stylish minimalism for every home.",
    imageUrl: "/images/home37.png",
    stock: 100
  },
  {
    name: "Printed Doormat",
    category: "home-accessories",
    price: 349,
    offer: 18,
    rating: 4.4,
    description: "Non-slip printed doormat that welcomes with style. Easy to clean and durable for long use.",
    imageUrl: "/images/home38.png",
    stock: 200
  },
  {
    name: "Storage Box Set",
    category: "home-accessories",
    price: 799,
    offer: 10,
    rating: 4.5,
    description: "Multi-size storage boxes to declutter with ease. Foldable and lightweight for daily use.",
    imageUrl: "/images/home39.png",
    stock: 110
  },
  {
    name: "Glass Flower Vase",
    category: "home-accessories",
    price: 599,
    offer: 15,
    rating: 4.6,
    description: "Elegant clear glass vase for fresh blooms. Adds freshness and minimal charm to interiors.",
    imageUrl: "/images/home40.png",
    stock: 120
  },
  {
    name: "Decorative Wall Clock Large",
    category: "home-accessories",
    price: 1599,
    offer: 12,
    rating: 4.7,
    description: "Oversized designer wall clock that stands out. Blends modern art with precision timekeeping.",
    imageUrl: "/images/home41.png",
    stock: 70
  },
  {
    name: "Printed Cushion Set",
    category: "home-accessories",
    price: 499,
    offer: 15,
    rating: 4.4,
    description: "Bright printed cushions for instant room uplift. Comfy, colorful, and easy to wash.",
    imageUrl: "/images/home42.png",
    stock: 140
  },
  {
    name: "Metal Wall Art Panel",
    category: "home-accessories",
    price: 1999,
    offer: 18,
    rating: 4.7,
    description: "Contemporary metal art that transforms plain walls. Adds elegance with a premium touch.",
    imageUrl: "/images/home43.png",
    stock: 60
  },
  {
    name: "Curtain Tiebacks",
    category: "home-accessories",
    price: 249,
    offer: 10,
    rating: 4.4,
    description: "Simple yet classy tiebacks for your curtains. Keeps your windows neat and stylish.",
    imageUrl: "/images/home44.png",
    stock: 180
  },
  {
    name: "Tabletop Artificial Plant",
    category: "home-accessories",
    price: 399,
    offer: 12,
    rating: 4.5,
    description: "Evergreen décor piece that needs no care. Brings freshness to any space instantly.",
    imageUrl: "/images/home45.png",
    stock: 150
  },
  {
    name: "Rug Carpet SoftTouch",
    category: "home-accessories",
    price: 1399,
    offer: 20,
    rating: 4.6,
    description: "Plush carpet that adds warmth and luxury. Perfect for living rooms or cozy corners.",
    imageUrl: "/images/home46.png",
    stock: 75
  },
  {
    name: "Mug Holder Rack",
    category: "home-accessories",
    price: 499,
    offer: 15,
    rating: 4.4,
    description: "Creative mug holder stand for kitchen counters. Space-saving and uniquely designed.",
    imageUrl: "/images/home47.png",
    stock: 120
  },
  {
    name: "Decorative Cushion Chair Pad",
    category: "home-accessories",
    price: 599,
    offer: 12,
    rating: 4.5,
    description: "Comfortable chair pad with decorative finish. Perfect for dining and work chairs.",
    imageUrl: "/images/home48.png",
    stock: 130
  },
  {
    name: "Metal Candle Lantern",
    category: "home-accessories",
    price: 699,
    offer: 15,
    rating: 4.6,
    description: "Rustic lantern that spreads warm candlelight glow. Perfect for festive décor or balcony setup.",
    imageUrl: "/images/home49.png",
    stock: 100
  },
  {
    name: "Classic Leather Backpack",
    category: "bags",
    price: 1899,
    offer: 15,
    rating: 4.6,
    description: "Premium leather backpack with multiple compartments. Perfect blend of style and durability for travel or work.",
    imageUrl: "/images/bag1.png",
    stock: 90
  },
  {
    name: "Canvas Travel Duffel Bag",
    category: "bags",
    price: 1499,
    offer: 20,
    rating: 4.5,
    description: "Spacious and rugged duffel bag for short trips. Strong zippers and handles for long-lasting use.",
    imageUrl: "/images/bag2.png",
    stock: 110
  },
  {
    name: "Women's Hand Tote",
    category: "bags",
    price: 1299,
    offer: 18,
    rating: 4.4,
    description: "Elegant tote bag that complements every outfit. Lightweight with ample storage for daily essentials.",
    imageUrl: "/images/bag3.png",
    stock: 130
  },
  {
    name: "Men’s Office Laptop Bag",
    category: "bags",
    price: 1599,
    offer: 12,
    rating: 4.5,
    description: "Stylish laptop bag with padded compartments. Designed for professionals who value both form and function.",
    imageUrl: "/images/bag4.png",
    stock: 95
  },
  {
    name: "Foldable Gym Duffle",
    category: "bags",
    price: 999,
    offer: 20,
    rating: 4.3,
    description: "Lightweight foldable gym bag with waterproof lining. Ideal for daily workouts and weekend trips.",
    imageUrl: "/images/bag5.png",
    stock: 120
  },
  {
    name: "Trendy Mini Backpack",
    category: "bags",
    price: 899,
    offer: 15,
    rating: 4.4,
    description: "Compact yet chic mini backpack for casual outings. Stylish design with soft, durable fabric.",
    imageUrl: "/images/bag6.png",
    stock: 100
  },
  {
    name: "Travel Trolley Bag",
    category: "bags",
    price: 3499,
    offer: 10,
    rating: 4.7,
    description: "Smooth-rolling trolley bag with spacious storage. Sturdy handle and lock system for safety.",
    imageUrl: "/images/bag7.png",
    stock: 80
  },
  {
    name: "College Backpack",
    category: "bags",
    price: 1199,
    offer: 18,
    rating: 4.5,
    description: "Stylish, lightweight backpack with laptop sleeve. Designed for comfort and durability for everyday use.",
    imageUrl: "/images/bag8.png",
    stock: 140
  },
  {
    name: "Hiking Rucksack",
    category: "bags",
    price: 2199,
    offer: 15,
    rating: 4.6,
    description: "Adventure-ready rucksack with adjustable straps. Built for comfort, capacity, and outdoor durability.",
    imageUrl: "/images/bag9.png",
    stock: 75
  },
  {
    name: "Ladies Sling Bag",
    category: "bags",
    price: 999,
    offer: 12,
    rating: 4.4,
    description: "Compact sling bag with elegant gold detailing. Perfect companion for daily errands and outings.",
    imageUrl: "/images/bag10.png",
    stock: 150
  },
  {
    name: "Messenger Crossbody Bag",
    category: "bags",
    price: 1399,
    offer: 10,
    rating: 4.5,
    description: "Functional crossbody bag with multiple pockets. Ideal for business or casual use.",
    imageUrl: "/images/bag11.png",
    stock: 100
  },
  {
    name: "Printed School Bag",
    category: "bags",
    price: 799,
    offer: 15,
    rating: 4.3,
    description: "Vibrant and durable school bag with ergonomic straps. Designed to make every school day fun.",
    imageUrl: "/images/bag12.png",
    stock: 180
  },
  {
    name: "Weekend Travel Backpack",
    category: "bags",
    price: 1699,
    offer: 18,
    rating: 4.6,
    description: "Stylish travel backpack with hidden anti-theft pockets. Ideal for short trips and urban adventures.",
    imageUrl: "/images/bag13.png",
    stock: 110
  },
  {
    name: "Formal Leather Briefcase",
    category: "bags",
    price: 2499,
    offer: 10,
    rating: 4.7,
    description: "Classic leather briefcase for professionals. Elegant look with premium craftsmanship.",
    imageUrl: "/images/bag14.png",
    stock: 70
  },
  {
    name: "Eco-Friendly Jute Bag",
    category: "bags",
    price: 499,
    offer: 20,
    rating: 4.4,
    description: "Reusable jute carry bag that’s stylish and sustainable. Ideal for shopping or casual outings.",
    imageUrl: "/images/bag15.png",
    stock: 200
  },
  {
    name: "Sports Gym Backpack",
    category: "bags",
    price: 1099,
    offer: 15,
    rating: 4.5,
    description: "Lightweight and durable sports backpack. Breathable mesh straps for added comfort.",
    imageUrl: "/images/bag16.png",
    stock: 130
  },
  {
    name: "Convertible Laptop Backpack",
    category: "bags",
    price: 1899,
    offer: 12,
    rating: 4.6,
    description: "Transforms easily from backpack to briefcase. Smart and professional for business travelers.",
    imageUrl: "/images/bag17.png",
    stock: 90
  },
  {
    name: "Kids Cartoon School Bag",
    category: "bags",
    price: 699,
    offer: 18,
    rating: 4.4,
    description: "Adorable cartoon-printed school bag for kids. Lightweight and fun for everyday school use.",
    imageUrl: "/images/bag18.png",
    stock: 160
  },
  {
    name: "Travel Organizer Pouch",
    category: "bags",
    price: 349,
    offer: 10,
    rating: 4.3,
    description: "Compact pouch for travel accessories and makeup. Keeps essentials neatly packed and accessible.",
    imageUrl: "/images/bag19.png",
    stock: 190
  },
  {
    name: "Anti-Theft Laptop Bag",
    category: "bags",
    price: 1999,
    offer: 15,
    rating: 4.7,
    description: "Modern laptop backpack with hidden zippers. Built-in USB charging and waterproof fabric.",
    imageUrl: "/images/bag20.png",
    stock: 85
  },
  {
    name: "Leather Handbag Set",
    category: "bags",
    price: 2299,
    offer: 20,
    rating: 4.6,
    description: "Trendy handbag set for all occasions. Includes tote, clutch, and sling for matching style.",
    imageUrl: "/images/bag21.png",
    stock: 95
  },
  {
    name: "Mini Wallet Purse",
    category: "bags",
    price: 499,
    offer: 12,
    rating: 4.3,
    description: "Compact purse that fits cards and cash securely. Sleek design for easy everyday carry.",
    imageUrl: "/images/bag22.png",
    stock: 200
  },
  {
    name: "Laptop Sleeve Case",
    category: "bags",
    price: 699,
    offer: 10,
    rating: 4.5,
    description: "Slim laptop sleeve with shock-absorbing padding. Sleek and professional for daily commuting.",
    imageUrl: "/images/bag23.png",
    stock: 140
  },
  {
    name: "Drawstring Sports Bag combo",
    category: "bags",
    price: 599,
    offer: 18,
    rating: 4.4,
    description: "Light drawstring bag for gym, yoga, or outings. Easy to carry and store anywhere.",
    imageUrl: "/images/bag24.png",
    stock: 220
  },
  {
    name: "Business Travel Bag",
    category: "bags",
    price: 2599,
    offer: 10,
    rating: 4.7,
    description: "Professional-grade travel bag with laptop and document slots. Built for convenience and style.",
    imageUrl: "/images/bag25.png",
    stock: 70
  },
  {
    name: "Casual Shoulder Sling",
    category: "bags",
    price: 899,
    offer: 15,
    rating: 4.4,
    description: "Trendy sling bag for casual and travel wear. Lightweight with plenty of space for essentials.",
    imageUrl: "/images/bag26.png",
    stock: 150
  },
  {
    name: "Rolling Duffel Trolley",
    category: "bags",
    price: 2799,
    offer: 12,
    rating: 4.6,
    description: "Spacious duffel with wheels for easy movement. Built for travel enthusiasts on the go.",
    imageUrl: "/images/bag27.png",
    stock: 80
  },
  {
    name: "Camera Carry Bag",
    category: "bags",
    price: 1699,
    offer: 15,
    rating: 4.5,
    description: "Protective camera bag with padded dividers. Keeps your gear safe and organized.",
    imageUrl: "/images/bag28.png",
    stock: 90
  },
  {
    name: "Wallet with RFID Protection",
    category: "bags",
    price: 899,
    offer: 10,
    rating: 4.6,
    description: "Secure RFID wallet to protect your cards. Compact, elegant, and travel-friendly design.",
    imageUrl: "/images/bag29.png",
    stock: 130
  },
  {
    name: "Leather Travel Kit Bag",
    category: "bags",
    price: 1299,
    offer: 18,
    rating: 4.5,
    description: "Organize toiletries with this leather travel pouch. Compact yet spacious for all essentials.",
    imageUrl: "/images/bag30.png",
    stock: 100
  },
  {
    name: "College Laptop Backpack",
    category: "bags",
    price: 1199,
    offer: 15,
    rating: 4.5,
    description: "Comfortable backpack with laptop compartment. Ideal for students and professionals alike.",
    imageUrl: "/images/bag31.png",
    stock: 140
  },
  {
    name: "Foldable Shopping Bag 3 in 1",
    category: "bags",
    price: 299,
    offer: 20,
    rating: 4.4,
    description: "Reusable foldable shopping bag that saves space. Eco-friendly and strong for groceries.",
    imageUrl: "/images/bag32.png",
    stock: 200
  },
  {
    name: "Travel Cosmetic Case",
    category: "bags",
    price: 799,
    offer: 15,
    rating: 4.5,
    description: "Compact cosmetic case with multiple slots. Ideal for makeup lovers and frequent travelers.",
    imageUrl: "/images/bag33.png",
    stock: 120
  },
  {
    name: "Trekking Waterproof Backpack",
    category: "bags",
    price: 2199,
    offer: 12,
    rating: 4.6,
    description: "Durable waterproof backpack built for tough trails. Designed for hikers and adventure seekers.",
    imageUrl: "/images/bag34.png",
    stock: 75
  },
  {
    name: "Travel Passport Pouch",
    category: "bags",
    price: 499,
    offer: 15,
    rating: 4.3,
    description: "Keep passports and cards secure while traveling. Sleek and handy for international trips.",
    imageUrl: "/images/bag35.png",
    stock: 150
  },
  {
    name: "Laptop Messenger Bag",
    category: "bags",
    price: 1599,
    offer: 10,
    rating: 4.6,
    description: "Professional messenger bag with laptop slot. Sleek and ideal for daily office use.",
    imageUrl: "/images/bag36.png",
    stock: 90
  },
  {
    name: "Kids Cartoon Backpack",
    category: "bags",
    price: 799,
    offer: 18,
    rating: 4.5,
    description: "Cute cartoon backpack for school or playtime. Lightweight, durable, and full of joy.",
    imageUrl: "/images/bag37.png",
    stock: 160
  },
  {
    name: "Ladies Evening Clutch",
    category: "bags",
    price: 999,
    offer: 20,
    rating: 4.4,
    description: "Elegant evening clutch with metallic shine. Compact and perfect for special occasions.",
    imageUrl: "/images/bag38.png",
    stock: 120
  },
  {
    name: "Expandable Cabin Bag",
    category: "bags",
    price: 2699,
    offer: 12,
    rating: 4.7,
    description: "Compact cabin trolley with expandable compartments. Designed for smooth travel convenience.",
    imageUrl: "/images/bag39.png",
    stock: 70
  },
  {
    name: "Sports Duffel Bag",
    category: "bags",
    price: 1299,
    offer: 15,
    rating: 4.5,
    description: "Durable sports duffel bag with wet/dry compartment. Ideal for gym or short trips.",
    imageUrl: "/images/bag40.png",
    stock: 100
  },
  {
    name: "Office Document Folder",
    category: "bags",
    price: 599,
    offer: 12,
    rating: 4.3,
    description: "Sleek folder to organize your documents efficiently. Professional look for meetings or travel.",
    imageUrl: "/images/bag41.png",
    stock: 140
  },
  {
    name: "Trekking Waist Pouch",
    category: "bags",
    price: 499,
    offer: 15,
    rating: 4.5,
    description: "Lightweight waist pouch for outdoor adventures. Keeps essentials secure and easy to access.",
    imageUrl: "/images/bag42.png",
    stock: 130
  },
  {
    name: "Stylish Hand Purse",
    category: "bags",
    price: 899,
    offer: 18,
    rating: 4.4,
    description: "Trendy purse for everyday style. Compact yet roomy enough for essentials.",
    imageUrl: "/images/bag43.png",
    stock: 120
  },
  {
    name: "Rolling Travel Duffel",
    category: "bags",
    price: 2899,
    offer: 10,
    rating: 4.6,
    description: "Versatile duffel with trolley wheels. Durable and designed for heavy travel use.",
    imageUrl: "/images/bag44.png",
    stock: 80
  },
  {
    name: "Casual Daypack",
    category: "bags",
    price: 999,
    offer: 15,
    rating: 4.5,
    description: "Light and stylish daypack for daily commutes. Compact size, big on comfort.",
    imageUrl: "/images/bag45.png",
    stock: 160
  },
  {
    name: "Luxury Leather Handbag",
    category: "bags",
    price: 2599,
    offer: 12,
    rating: 4.7,
    description: "Elegant designer handbag crafted with genuine leather. Perfect for special occasions.",
    imageUrl: "/images/bag46.png",
    stock: 75
  },
  {
    name: "Smart Backpack with USB",
    category: "bags",
    price: 1999,
    offer: 15,
    rating: 4.6,
    description: "Smart backpack with built-in USB charging port. Stylish, durable, and tech-friendly.",
    imageUrl: "/images/bag47.png",
    stock: 85
  },
  {
    name: "Printed Tote Bag",
    category: "bags",
    price: 699,
    offer: 20,
    rating: 4.4,
    description: "Trendy printed tote for casual or shopping days. Spacious, durable, and eco-friendly.",
    imageUrl: "/images/bag48.png",
    stock: 190
  },
  {
    name: "Laptop Backpack 15-inch",
    category: "bags",
    price: 1499,
    offer: 12,
    rating: 4.5,
    description: "Sleek backpack designed for 15-inch laptops. Comfortable padding and organized compartments.",
    imageUrl: "/images/bag49.png",
    stock: 100
  },
  {
    name: "Sports Utility Bag",
    category: "bags",
    price: 1099,
    offer: 18,
    rating: 4.5,
    description: "Durable multi-use bag for sports gear or travel. Lightweight yet highly functional design.",
    imageUrl: "/images/bag50.png",
    stock: 130
  },
  {
    name: "Men’s Classic Cotton Shirt",
    category: "fashion",
    subcategory: "mens",
    price: 1199,
    offer: 15,
    rating: 4.6,
    description: "Soft cotton shirt with a tailored fit. Perfect for office or casual wear.",
    imageUrl: "/images/fas1.png",
    stock: 100
  },
  {
    name: "Men’s Slim Fit Jeans",
    category: "fashion",
    subcategory: "mens",
    price: 1699,
    offer: 18,
    rating: 4.7,
    description: "Stylish slim-fit jeans crafted with stretch denim for all-day comfort.",
    imageUrl: "/images/fas2.png",
    stock: 120
  },
  {
    name: "Men’s Leather Jacket",
    category: "fashion",
    subcategory: "mens",
    price: 3499,
    offer: 20,
    rating: 4.8,
    description: "Premium leather jacket for a rugged and bold look. A timeless wardrobe piece.",
    imageUrl: "/images/fas3.png",
    stock: 70
  },
  {
    name: "Men’s Polo T-Shirt",
    category: "fashion",
    subcategory: "mens",
    price: 999,
    offer: 10,
    rating: 4.5,
    description: "Classic polo tee with breathable fabric. Perfect for everyday style.",
    imageUrl: "/images/fas4.png",
    stock: 150
  },
  {
    name: "Men’s Formal Trousers",
    category: "fashion",
    subcategory: "mens",
    price: 1399,
    offer: 12,
    rating: 4.5,
    description: "Elegant formal trousers with slim fit design. Ideal for office or events.",
    imageUrl: "/images/fas5.png",
    stock: 90
  },
  {
    name: "Men’s Hoodie Sweatshirt",
    category: "fashion",
    subcategory: "mens",
    price: 1299,
    offer: 15,
    rating: 4.6,
    description: "Cozy fleece hoodie with adjustable drawstrings. Keeps you warm and stylish.",
    imageUrl: "/images/fas6.png",
    stock: 100
  },
  {
    name: "Men’s Casual Shirts",
    category: "fashion",
    subcategory: "mens",
    price: 1999,
    offer: 18,
    rating: 4.7,
    description: "Lightweight sneakers built for comfort and street style.",
    imageUrl: "/images/fas7.png",
    stock: 120
  },
  {
    name: "Men’s Classic Watch",
    category: "fashion",
    subcategory: "mens",
    price: 2499,
    offer: 20,
    rating: 4.8,
    description: "Elegant analog wristwatch with leather strap. A timeless fashion essential.",
    imageUrl: "/images/fas8.png",
    stock: 80
  },
  {
    name: "Men’s Kurta Set",
    category: "fashion",
    subcategory: "mens",
    price: 1799,
    offer: 15,
    rating: 4.6,
    description: "Traditional cotton kurta with churidar pant. Perfect for festive occasions.",
    imageUrl: "/images/fas9.png",
    stock: 90
  },
  {
    name: "Men’s Sports Joggers 4 in combo",
    category: "fashion",
    subcategory: "mens",
    price: 1499,
    offer: 10,
    rating: 4.5,
    description: "Comfortable joggers for gym and casual wear. Soft fabric with stretch.",
    imageUrl: "/images/fas10.png",
    stock: 130
  },

  // 👗 WOMEN'S FASHION
  {
    name: "Women’s Floral Maxi Dress",
    category: "fashion",
    subcategory: "womens",
    price: 1899,
    offer: 15,
    rating: 4.7,
    description: "Beautiful floral maxi dress with flowy silhouette. Perfect for outings and brunch.",
    imageUrl: "/images/fas11.png",
    stock: 110
  },
  {
    name: "Women’s Kurthi Set",
    category: "fashion",
    subcategory: "womens",
    price: 2399,
    offer: 20,
    rating: 4.8,
    description: "Trendy handbag set with tote, clutch, and sling bag. Matches every outfit.",
    imageUrl: "/images/fas12.png",
    stock: 80
  },
  {
    name: "Women’s Anarkali Kurta",
    category: "fashion",
    subcategory: "womens",
    price: 1699,
    offer: 12,
    rating: 4.6,
    description: "Elegant Anarkali kurta with intricate prints. Ideal for festive occasions.",
    imageUrl: "/images/fas13.png",
    stock: 95
  },
  {
    name: "Women’s Denim Jacket",
    category: "fashion",
    subcategory: "womens",
    price: 1799,
    offer: 18,
    rating: 4.7,
    description: "Classic blue denim jacket with button closure. A casual wardrobe essential.",
    imageUrl: "/images/fas14.png",
    stock: 120
  },
  {
    name: "Women’s High Waist Jeans",
    category: "fashion",
    subcategory: "womens",
    price: 1599,
    offer: 15,
    rating: 4.6,
    description: "Trendy high-rise jeans that hug your curves. Comfortable stretch fabric.",
    imageUrl: "/images/fas15.png",
    stock: 110
  },
  {
    name: "Women’s Wedding dress",
    category: "fashion",
    subcategory: "womens",
    price: 999,
    offer: 12,
    rating: 4.5,
    description: "Elegant sandals with soft padding for all-day comfort.",
    imageUrl: "/images/fas16.png",
    stock: 150
  },
  {
    name: "Women’s Ethnic Saree",
    category: "fashion",
    subcategory: "womens",
    price: 2499,
    offer: 20,
    rating: 4.8,
    description: "Graceful saree with beautiful embroidery. Perfect for weddings and events.",
    imageUrl: "/images/fas17.png",
    stock: 70
  },
  {
    name: "Women’s Crop Top",
    category: "fashion",
    subcategory: "womens",
    price: 799,
    offer: 10,
    rating: 4.4,
    description: "Trendy crop top with ribbed stretch design. Ideal for casual wear.",
    imageUrl: "/images/fas18.png",
    stock: 130
  },
  {
    name: "Women’s Leggings Pack of 2",
    category: "fashion",
    subcategory: "womens",
    price: 999,
    offer: 15,
    rating: 4.5,
    description: "Comfortable and stretchable leggings. Perfect for yoga and daily wear.",
    imageUrl: "/images/fas19.png",
    stock: 140
  },
  {
    name: "Women’s Party Clutch dress",
    category: "fashion",
    subcategory: "womens",
    price: 1199,
    offer: 12,
    rating: 4.6,
    description: "Stylish clutch with metallic accents. Complements every party look.",
    imageUrl: "/images/fas20.png",
    stock: 90
  },
  {
    name: "Smart LED TV 32 Inch",
    category: "electronics",
    subcategory: "tv",
    price: 15999,
    offer: 15,
    rating: 4.5,
    description: "Crisp HD visuals with immersive sound. Perfect for compact living rooms or bedrooms.",
    imageUrl: "/images/elec1.png",
    stock: 80
  },
  {
    name: "4K Ultra HD Smart TV 43 Inch",
    category: "electronics",
    subcategory: "tv",
    price: 25999,
    offer: 18,
    rating: 4.6,
    description: "Experience lifelike clarity and vibrant colors. Built-in apps for your streaming comfort.",
    imageUrl: "/images/elec2.png",
    stock: 75
  },
  {
    name: "Android TV 50 Inch",
    category: "electronics",
    subcategory: "tv",
    price: 32999,
    offer: 20,
    rating: 4.7,
    description: "Voice-controlled smart TV with Google Assistant. Smooth, lag-free performance.",
    imageUrl: "/images/elec3.png",
    stock: 60
  },
  {
    name: "OLED TV 55 Inch",
    category: "electronics",
    subcategory: "tv",
    price: 84999,
    offer: 22,
    rating: 4.8,
    description: "Deep blacks and stunning contrast for cinema lovers. Sleek bezel-less design.",
    imageUrl: "/images/elec4.png",
    stock: 40
  },
  {
    name: "QLED 65 Inch 4K TV",
    category: "electronics",
    subcategory: "tv",
    price: 99999,
    offer: 25,
    rating: 4.9,
    description: "Quantum dot brilliance with premium HDR display. Redefine your home entertainment.",
    imageUrl: "/images/elec5.png",
    stock: 30
  },
  {
    name: "LED HD Ready TV 24 Inch",
    category: "electronics",
    subcategory: "tv",
    price: 9999,
    offer: 10,
    rating: 4.3,
    description: "Compact and efficient display for smaller rooms. Enjoy your favorite shows in clear detail.",
    imageUrl: "/images/elec6.png",
    stock: 90
  },
  {
    name: "Curved Smart LED TV 49 Inch",
    category: "electronics",
    subcategory: "tv",
    price: 37999,
    offer: 18,
    rating: 4.6,
    description: "Curved display for immersive viewing experience. Stunning clarity and vivid colors.",
    imageUrl: "/images/elec7.png",
    stock: 50
  },
  {
    name: "Android HD LED TV 40 Inch",
    category: "electronics",
    subcategory: "tv",
    price: 21999,
    offer: 15,
    rating: 4.5,
    description: "Smart Android TV with fast WiFi and Dolby Audio. Ideal for seamless entertainment.",
    imageUrl: "/images/elec8.png",
    stock: 65
  },
  {
    name: "Full HD LED TV 32 Inch",
    category: "electronics",
    subcategory: "tv",
    price: 14999,
    offer: 12,
    rating: 4.4,
    description: "Brilliant display with rich sound. Best value TV for family entertainment.",
    imageUrl: "/images/elec9.png",
    stock: 85
  },
  {
    name: "Smart 8K UHD TV 65 Inch",
    category: "electronics",
    subcategory: "tv",
    price: 159999,
    offer: 28,
    rating: 4.9,
    description: "The next generation of clarity and depth. Experience reality like never before.",
    imageUrl: "/images/elec10.png",
    stock: 20
  },
  {
    name: "Smart LED TV 43 Inch Frameless",
    category: "electronics",
    subcategory: "tv",
    price: 26999,
    offer: 16,
    rating: 4.6,
    description: "Frameless beauty with vivid picture quality. Perfect mix of style and performance.",
    imageUrl: "/images/elec11.png",
    stock: 70
  },
  {
    name: "UltraBook Pro 14 Inch",
    category: "electronics",
    subcategory: "laptop",
    price: 69999,
    offer: 18,
    rating: 4.7,
    description: "Sleek metal body with lightning-fast SSD and latest i5 processor.",
    imageUrl: "/images/elec21.png",
    stock: 50
  },
  {
    name: "Gaming Laptop GTX Edition",
    category: "electronics",
    subcategory: "laptop",
    price: 99999,
    offer: 22,
    rating: 4.8,
    description: "High-performance laptop with GTX graphics for intense gaming sessions.",
    imageUrl: "/images/elec22.png",
    stock: 40
  },
  {
    name: "Business Laptop ProBook",
    category: "electronics",
    subcategory: "laptop",
    price: 79999,
    offer: 15,
    rating: 4.6,
    description: "Ideal for professionals. Fast, durable, and lightweight for daily productivity.",
    imageUrl: "/images/elec23.png",
    stock: 60
  },
  {
    name: "Student Laptop 15 Inch",
    category: "electronics",
    subcategory: "laptop",
    price: 49999,
    offer: 12,
    rating: 4.5,
    description: "Perfect for students with long battery life and multitasking capabilities.",
    imageUrl: "/images/elec24.png",
    stock: 80
  },
  {
    name: "MacBook Air M2",
    category: "electronics",
    subcategory: "laptop",
    price: 119999,
    offer: 10,
    rating: 4.9,
    description: "Supercharged by Apple M2 chip. Featherlight, powerful, and beautifully silent.",
    imageUrl: "/images/elec25.png",
    stock: 30
  },
  {
    name: "2-in-1 Convertible Laptop",
    category: "electronics",
    subcategory: "laptop",
    price: 74999,
    offer: 15,
    rating: 4.7,
    description: "Switch easily between laptop and tablet mode. Ideal for creative work.",
    imageUrl: "/images/elec26.png",
    stock: 50
  },
  {
    name: "Budget Laptop 14 Inch",
    category: "electronics",
    subcategory: "laptop",
    price: 34999,
    offer: 10,
    rating: 4.3,
    description: "Affordable and efficient laptop for students and home use.",
    imageUrl: "/images/elec27.png",
    stock: 90
  },
  {
    name: "Gaming Beast RTX 4060",
    category: "electronics",
    subcategory: "laptop",
    price: 139999,
    offer: 25,
    rating: 4.9,
    description: "Next-gen graphics laptop for pro gamers and designers.",
    imageUrl: "/images/elec28.png",
    stock: 25
  },
  {
    name: "Notebook Lite 13 Inch",
    category: "electronics",
    subcategory: "laptop",
    price: 45999,
    offer: 14,
    rating: 4.5,
    description: "Ultra-thin laptop with sharp display and extended battery backup.",
    imageUrl: "/images/elec29.png",
    stock: 70
  },
  {
    name: "Chromebook 14 Inch",
    category: "electronics",
    subcategory: "laptop",
    price: 29999,
    offer: 10,
    rating: 4.4,
    description: "Fast, secure, and simple laptop for work, learning, and fun.",
    imageUrl: "/images/elec30.png",
    stock: 100
  },
  {
    name: "Kanchipuram Silk Saree",
    category: "sarees",
    subcategory: "saree",
    price: 8999,
    offer: 20,
    rating: 4.8,
    description: "A rich handwoven Kanchipuram silk saree with golden zari border. Perfect for weddings and festivals.",
    fabric: "Pure Silk",
    weight: "750g",
    blouse: "Yes",
    imageUrl: "/images/sare1.png",
    stock: 25
  },
  {
    name: "Banarasi Brocade Saree",
    category: "sarees",
    subcategory: "saree",
    price: 7499,
    offer: 18,
    rating: 4.7,
    description: "Intricate golden zari patterns crafted on soft Banarasi silk. A timeless piece for special occasions.",
    fabric: "Banarasi Silk",
    weight: "700g",
    blouse: "Yes",
    imageUrl: "/images/sare2.png",
    stock: 30
  },
  {
    name: "Organza Floral Saree",
    category: "sarees",
    subcategory: "saree",
    price: 3599,
    offer: 15,
    rating: 4.5,
    description: "Lightweight organza saree with pastel floral prints. A dreamy choice for daytime celebrations.",
    fabric: "Organza",
    weight: "400g",
    blouse: "Yes",
    imageUrl: "/images/sare3.png",
    stock: 40
  },
  {
    name: "Cotton Handloom Saree",
    category: "sarees",
    subcategory: "saree",
    price: 2499,
    offer: 12,
    rating: 4.4,
    description: "Soft and breathable handloom cotton saree designed for everyday elegance and comfort.",
    fabric: "Cotton",
    weight: "500g",
    blouse: "No",
    imageUrl: "/images/sare4.png",
    stock: 60
  },
  {
    name: "Georgette Partywear Saree",
    category: "sarees",
    subcategory: "saree",
    price: 4299,
    offer: 17,
    rating: 4.6,
    description: "Graceful georgette saree embellished with sequins for a dazzling evening look.",
    fabric: "Georgette",
    weight: "550g",
    blouse: "Yes",
    imageUrl: "/images/sare5.png",
    stock: 45
  },
  {
    name: "Chiffon Printed Saree",
    category: "sarees",
    subcategory: "saree",
    price: 2999,
    offer: 14,
    rating: 4.3,
    description: "Elegant chiffon saree featuring soft floral prints. Lightweight and flowy for effortless draping.",
    fabric: "Chiffon",
    weight: "420g",
    blouse: "Yes",
    imageUrl: "/images/sare6.png",
    stock: 55
  },
  {
    name: "Tussar Silk Saree",
    category: "sarees",
    subcategory: "saree",
    price: 5999,
    offer: 16,
    rating: 4.6,
    description: "Natural textured Tussar silk saree with handcrafted motifs. A refined classic for traditional events.",
    fabric: "Tussar Silk",
    weight: "650g",
    blouse: "Yes",
    imageUrl: "/images/sare7.png",
    stock: 35
  },
  {
    name: "Designer Net Saree",
    category: "sarees",
    subcategory: "saree",
    price: 5199,
    offer: 20,
    rating: 4.5,
    description: "Stylish net saree adorned with glitter embroidery and lace border. Glamorous and chic.",
    fabric: "Net",
    weight: "480g",
    blouse: "Yes",
    imageUrl: "/images/sare8.png",
    stock: 40
  },
  {
    name: "Patola Silk Saree",
    category: "sarees",
    subcategory: "saree",
    price: 8499,
    offer: 18,
    rating: 4.7,
    description: "Traditional Patola saree with double ikat patterns. A regal touch to your ethnic collection.",
    fabric: "Patola Silk",
    weight: "720g",
    blouse: "Yes",
    imageUrl: "/images/sare9.png",
    stock: 28
  },
  {
    name: "Linen Casual Saree",
    category: "sarees",
    subcategory: "saree",
    price: 3299,
    offer: 12,
    rating: 4.4,
    description: "Soft linen saree with minimalistic design. Ideal for daily wear with easy drape comfort.",
    fabric: "Linen",
    weight: "500g",
    blouse: "No",
    imageUrl: "/images/sare10.png",
    stock: 65
  },
  {
    name: "Paithani Silk Saree",
    category: "sarees",
    subcategory: "saree",
    price: 9999,
    offer: 22,
    rating: 4.8,
    description: "Rich Paithani silk saree with signature peacock motifs and golden pallu. A Maharashtrian masterpiece.",
    fabric: "Paithani Silk",
    weight: "780g",
    blouse: "Yes",
    imageUrl: "/images/sare11.png",
    stock: 20
  },
  {
    name: "Crepe Digital Print Saree",
    category: "sarees",
    subcategory: "saree",
    price: 3899,
    offer: 14,
    rating: 4.5,
    description: "Trendy digital printed crepe saree that combines comfort with contemporary elegance.",
    fabric: "Crepe",
    weight: "450g",
    blouse: "Yes",
    imageUrl: "/images/sare12.png",
    stock: 50
  },
  {
    name: "Velvet Embroidered Saree",
    category: "sarees",
    subcategory: "saree",
    price: 6499,
    offer: 20,
    rating: 4.6,
    description: "Luxurious velvet saree with heavy zari and stone embroidery. Ideal for grand functions.",
    fabric: "Velvet",
    weight: "800g",
    blouse: "Yes",
    imageUrl: "/images/sare13.png",
    stock: 25
  },
  {
    name: "Kalamkari Cotton Saree",
    category: "sarees",
    subcategory: "saree",
    price: 2799,
    offer: 10,
    rating: 4.4,
    description: "Hand-printed Kalamkari saree made with eco-friendly dyes. A tribute to traditional art.",
    fabric: "Cotton",
    weight: "520g",
    blouse: "Yes",
    imageUrl: "/images/sare14.png",
    stock: 60
  },
  {
    name: "Banarasi Soft Silk Saree",
    category: "sarees",
    subcategory: "saree",
    price: 7999,
    offer: 18,
    rating: 4.7,
    description: "Soft silk saree from Banaras with intricate silver zari work. Subtle, elegant, and royal.",
    fabric: "Soft Silk",
    weight: "680g",
    blouse: "Yes",
    imageUrl: "/images/sare15.png",
    stock: 30
  },
  {
    name: "Fancy Tissue Saree",
    category: "sarees",
    subcategory: "saree",
    price: 5599,
    offer: 15,
    rating: 4.5,
    description: "Golden tissue saree that shimmers beautifully under light. Perfect for festive evenings.",
    fabric: "Tissue",
    weight: "600g",
    blouse: "Yes",
    imageUrl: "/images/sare16.png",
    stock: 40
  },
  {
    name: "Satin Plain Saree",
    category: "sarees",
    subcategory: "saree",
    price: 3199,
    offer: 12,
    rating: 4.3,
    description: "Smooth satin saree with glossy finish and minimalistic charm. Great for modern occasions.",
    fabric: "Satin",
    weight: "480g",
    blouse: "Yes",
    imageUrl: "/images/sare17.png",
    stock: 50
  },
  {
    name: "Bhagalpuri Silk Saree",
    category: "sarees",
    subcategory: "saree",
    price: 4699,
    offer: 14,
    rating: 4.5,
    description: "Bhagalpuri silk saree with earthy hues and soft texture. Loved for its natural sheen.",
    fabric: "Bhagalpuri Silk",
    weight: "630g",
    blouse: "Yes",
    imageUrl: "/images/sare18.png",
    stock: 35
  },
  {
    name: "Kota Doria Saree",
    category: "sarees",
    subcategory: "sarees",
    price: 2699,
    offer: 10,
    rating: 4.3,
    description: "Delicate Kota Doria saree with light texture and subtle embroidery work.",
    fabric: "Kota Doria",
    weight: "420g",
    blouse: "No",
    imageUrl: "/images/sare19.png",
    stock: 55
  },
  {
    name: "Pochampally Ikat Saree",
    category: "sarees",
    subcategory: "sarees",
    price: 7299,
    offer: 18,
    rating: 4.6,
    description: "Vibrant Pochampally Ikat saree showcasing traditional geometric artistry.",
    fabric: "Ikat Silk",
    weight: "710g",
    blouse: "Yes",
    imageUrl: "/images/sare20.png",
    stock: 32
  }

];

async function seedProducts() {
  const url = process.env.MONGO_URI || 'mongodb://localhost:27017/ecommerce';
  try {
    await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('✅ MongoDB connected for seeding');

    await Product.deleteMany({});
    console.log('🧹 Existing products deleted');

    
    const normalized = products.map(p => {
      const copy = { ...p };
      
      if (!copy.material) copy.material = 'Not specified';
      if (!copy.fabric) copy.fabric = copy.fabric === undefined ? 'Not specified' : copy.fabric;
      if (!copy.blouse) copy.blouse = copy.blouse === undefined ? 'No' : copy.blouse;
      
      if (!copy.weight || isNaN(Number(copy.weight))) copy.weight = 900;
     
      if (!copy.imageUrl) copy.imageUrl = imageUrl;
      
      if (copy.category) copy.category = String(copy.category).toLowerCase();
      return copy;
    });

    const inserted = await Product.insertMany(normalized);
    console.log(`${inserted.length} products inserted successfully.`);

    await mongoose.disconnect();
    console.log('MongoDB disconnected, seeding complete');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding products:', error);
    try { await mongoose.disconnect(); } catch {}
    process.exit(1);
  }
}

seedProducts();
