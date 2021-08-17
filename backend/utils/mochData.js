const users = [
    {
        firstName: "Alan",
        lastName: "Reed", 
        userName: "readA",
        passWord: "Password123"
    },
    {
        firstName: "Sean",
        lastName: "Connor", 
        userName: "sean123",
        passWord: "letters123"
    },
    {
        firstName: "Jenefer",
        lastName: "Garner", 
        userName: "cutie123",
        passWord: "fluffy12"
    },
    {
        firstName: "Lola",
        lastName: "Davis", 
        userName: "lolo",
        passWord: "lolo123"
    },
    {
        firstName: "Suzie",
        lastName: "Bowie", 
        userName: "moonlight",
        passWord: "moonlight"
    },
]

const categories = [
    {
        name: "Retail",
    },
    {
        name: "Food & Drinks",
    },
    {
        name: "Health & Fitness",
    },
    {
        name: "Entertainment",
    }
]

const reviews = [
    {
        description: "Great stuff, amazing price. I can't beleve it cost soo little!",
        date: "10/08/2021",
        rating: 5,
        itemId: 1,
        userId: 1
    }, 
    {
        description: "I didn't like it that much",
        date: "10/08/2021",
        rating: 4,
        itemId: 1,
        userId: 2
    }, 
    {
        description: "Improved my Microsoft office skills!",
        date: "10/07/2021",
        rating: 5,
        itemId: 1,
        userId: 3
    }, {
        description: "Easy to follow, happy with a product",
        date: "10/08/2021",
        rating: 4,
        itemId: 1,
        userId: 4
    }, 
    {
        description: "Both presentation and fragrance are perfect. Makes a beautiful gift for someone special.",
        date: "09/08/2021",
        rating: 5,
        itemId: 2,
        userId: 2
    }, 
    {
        description: "Very good value for money.",
        date: "10/08/2021",
        rating: 5,
        itemId: 2,
        userId: 3
    }, 
    {
        description: "The groupon didn't work at first. I messaged the shop and they got back to me the next day and sorted out the problem. The bath bombs arrived quickly and they are very nice.",
        date: "09/08/2021",
        rating: 5,
        itemId: 2,
        userId: 4
    }, 
    {
        description: "Beautifully presented in a lovely box, these bath bombs smell amazing. Delivered within a week, excellent service, very happy with purchase.",
        date: "08/07/2021",
        rating: 5,
        itemId: 2,
        userId: 5
    }, 
    {
        description: "Really nice product, very fast delivery.",
        date: "06/07/2021",
        rating: 5,
        itemId: 3,
        userId: 1
    }, 
    {
        description: "Very nicely packed and presented. Lovely follow up email. It was given as a gift and the recipient loved it.",
        date: "12/06/2021",
        rating: 5,
        itemId: 3,
        userId: 2
    }, 
    {
        description: "Very fast service from order to delivery The receiver really loved the surprise. It was great that it was able to be delivered through the letterbox very convenient",
        date: "25/03/2021",
        rating: 5,
        itemId: 3,
        userId: 3
    },
    {
        description: "I like the product but it was very complicated to redee",
        date: "25/03/2021",
        rating: 4,
        itemId: 4,
        userId: 4
    },
    {
        description: "Beyond expectations, canvas prints I purchased were fantastic",
        date: "30/01/2021",
        rating: 5,
        itemId: 4,
        userId: 5
    },
    {
        description: "A nice product, looks good on the house, nice and bright at night. Great price.",
        date: "12/02/2021",
        rating: 4,
        itemId: 4,
        userId: 1
    },
    {
        description: "Simple website. Easy to order. Quick delivery time.",
        date: "12/02/2021",
        rating: 5,
        itemId: 4,
        userId: 2
    },
    {
        description: "Our sign arrived and is just what was advertised.",
        date: "18/03/2021",
        rating: 4,
        itemId: 4,
        userId: 3
    },
    {
        description: "I was expecting better selection, not too bad overall",
        date: "18/03/2021",
        rating: 4,
        itemId: 5,
        userId: 4
    },
    {
        description: "Happy customer",
        date: "14/06/2021",
        rating: 5,
        itemId: 5,
        userId: 5
    },
    {
        description: "Great value for the price!",
        date: "11/07/2021",
        rating: 5,
        itemId: 5,
        userId: 1
    },
    {
        description: "Great value for the price!Professional staff.",
        date: "11/07/2021",
        rating: 5,
        itemId: 6,
        userId: 2
    },
    {
        description: "Not impressed with delivery",
        date: "15/08/2021",
        rating: 4,
        itemId: 6,
        userId: 3
    },
    {
        description: "Don't buy it, you can find better deals",
        date: "25/09/2021",
        rating: 3,
        itemId: 6,
        userId: 4
    },
    {
        description: "Flowers where delivered on time, great service",
        date: "20/12/2021",
        rating: 5,
        itemId: 6,
        userId: 5
    },
    {
        description: "I was extremely happy with DoggyCurls. I had my puppies photo done with her name above. It now hangs pride of place in my lounge.",
        date: "20/12/2021",
        rating: 5,
        itemId: 7,
        userId: 1
    },
    {
        description: "I was a bit dubious at first as company is based in Spain, which isn’t clear when ordering. (BTW I love Spain) I did wonder if I would ever receive my item, as it seems to take forever, but it did arrive and I was very happy with it. It was a gift for my husband for Christmas and he loves it. Will definitely be buying one for my father in law on his birthday.",
        date: "19/01/2021",
        rating: 5,
        itemId: 7,
        userId: 2
    },
    {
        description: "I ordered a print from this company of my two dogs. It was a Christmas present for my husband. We were all delighted with the standard of this print.",
        date: "10/02/2021",
        rating: 5,
        itemId: 7,
        userId: 3
    },
    {
        description: "Excellent service. Really pleased with the image made from my photo. Very accurate and detailed representation of subject. 5 star review !",
        date: "15/03/2021",
        rating: 5,
        itemId: 7,
        userId: 4
    },
    {
        description: "Great food Great value for money",
        date: "15/03/2021",
        rating: 5,
        itemId: 8,
        userId: 5
    },
    {
        description: "Excellent we will return",
        date: "12/05/2021",
        rating: 5,
        itemId: 8,
        userId: 1
    },
    {
        description: "Sadly I wasn’t so impressed on recent visit We had to wait over 35 minutes to be served & some of the limited groupon menu was unavailable",
        date: "21/07/2021",
        rating: 3,
        itemId: 8,
        userId: 2
    },
    {
        description: "The food was AMAZING, the staff was great too. This is great value for money. I haven’t tried this restaurant before but it really is a piece of Greek in the U.K. I will be going back for sure.",
        date: "22/09/2021",
        rating: 5,
        itemId: 8,
        userId: 3
    },
    {
        description: "David is great host. Enjoyed the wine tour & lunch. Would definitely recommend & go again!",
        date: "22/09/2021",
        rating: 5,
        itemId: 9,
        userId: 4
    },
    {
        description: "Great little place with relaxed tour and settings, bought a case of wine as too good not to!",
        date: "03/10/2021",
        rating: 5,
        itemId: 9,
        userId: 5
    },
    {
        description: "Excellent experience in an authentic vineyard, combining an informative and highly enjoyable tour with wine tasting and hospitality. A great half day out in a great setting. My only point of feedback is that the actual wine tasting was very rushed and we had to down 7 different wines in quick succession, far far too quickly, which impacted the ability to truly taste them and enjoy them",
        date: "09/11/2021",
        rating: 4,
        itemId: 9,
        userId: 1
    },
    {
        description: "Excellent wine tour and the wines tasting was brilliant, then afterwards we had a cream tea outside which was lovely, in all a lovely afternoon",
        date: "15/11/2021",
        rating: 5,
        itemId: 9,
        userId: 2
    },
    {
        description: "Exceptional food, quirky environment. Great service. Had a fabulous time, would definitely recommend.",
        date: "15/11/2021",
        rating: 5,
        itemId: 10,
        userId: 3
    },
    {
        description: "Excellent customer service",
        date: "10/12/2021",
        rating: 5,
        itemId: 10,
        userId: 4
    },
    {
        description: "The fact that you cannot use more than voucher on one day",
        date: "15/12/2021",
        rating: 3,
        itemId: 10,
        userId: 5
    },
    {
        description: "We always book the crazy bear afternoon tea, it’s good value for money at a lovely restaurant",
        date: "25/03/2021",
        rating: 3,
        itemId: 10,
        userId: 1
    },
    {
        description: "Venue 10/10 service 10/10 Thai 12 plate menu 6/10 compared to other Thai food we have had. Overall lovely afternoon with friends but food did not match the venue and service.",
        date: "29/04/2021",
        rating: 4,
        itemId: 10,
        userId: 2
    },
    {
        description: "The food was delicious and the service was excellent.The staff we dealt with Sushma and Anshul are a credit to their employer and their helpfulness and politeness really made dining at the restaurant a lovely experience",
        date: "29/04/2021",
        rating: 5,
        itemId: 11,
        userId: 3
    },
    {
        description: "I am a fussy eater so when choosing a meal for our day out in London the Reform Social & Grill from the online menu looked like it suited me perfectly. The greeting we received when arriving was very professional and welcoming and this didn’t faulter throughout our stay. We were seated straight away and given the menu. I was disappointed to see the Halloumi...",
        date: "30/05/2021",
        rating: 3,
        itemId: 11,
        userId: 4
    },
    {
        description: "Ambiance food and waiting staff al excellent. Toilet is 3 flights down but there may be disabled one available. Didn't ask.",
        date: "02/06/2021",
        rating: 5,
        itemId: 11,
        userId: 5
    },
    {
        description: "The food was very nice and the presentation was immaculate. The customer service as always was great, that lady is so amazing. My dessert was sensational the mousse was not was I expected and it blew me away. Definitely recommend.",
        date: "05/06/2021",
        rating: 5,
        itemId: 11,
        userId: 1
    },
    {
        description: "My third cake for the year! Fresh and scrumptious!",
        date: "05/06/2021",
        rating: 5,
        itemId: 12,
        userId: 2
    },
    {
        description: "Amazing service l, friendly and welcoming staff and cakes to die for. Taste like a piece of Heaven!",
        date: "09/06/2021",
        rating: 5,
        itemId: 12,
        userId: 3
    },
    {
        description: "Absolutely fantastic cake and at a great groupon deal. The staff at Caffe Concerto are v helpful and i found ordering hte cake very fantastic experience.",
        date: "15/08/2021",
        rating: 5,
        itemId: 12,
        userId: 4
    },
    {
        description: "Love love love this place!!",
        date: "15/08/2021",
        rating: 5,
        itemId: 13,
        userId: 5
    },
     {
        description: "Good food, felt very safe with the Covid precautions in place, a very good experia",
        date: "17/09/2021",
        rating: 5,
        itemId: 13,
        userId: 1
    },
     {
        description: "The staff were really friendly and the food was great, would highly recommend! All tables have shields and are socially distant.",
        date: "22/09/2021",
        rating: 5,
        itemId: 13,
        userId: 2
    },
    {
        description: "Fantastic set up, very friendly and felt very safe. Was a great birthday treat for my fr",
        date: "22/09/2021",
        rating: 5,
        itemId: 14,
        userId: 3
    },
    {
        description: "Very good massage and cupping.Recommend",
        date: "22/09/2021",
        rating: 5,
        itemId: 15,
        userId: 4
    },
    {
        description: "The massage was great. Thank you so much",
        date: "25/09/2021",
        rating: 5,
        itemId: 15,
        userId: 5
    },
    {
        description: "Alice gave me a very thorough and deep tissue massage, which relived a lot of the muscle tension in my body. Very highly recommended!",
        date: "31/09/2021",
        rating: 5,
        itemId: 15,
        userId: 1
    },
    {
        description: "Love Love Love my teeth. Total stain removal and great service. Will use again",
        date: "31/09/2021",
        rating: 5,
        itemId: 16,
        userId: 2
    },
    {
        description: "Kerry was lovely and she did a great job with cleaning my teeth. Staff were friendly and informative. Will definitely be coming back.",
        date: "02/10/2021",
        rating: 5,
        itemId: 16,
        userId: 3
    },
    {
        description: "Excellent service, my teeth were so clean after the treatment. The practitioner was so friendly and knowledgeable, look forward to my next appointment.",
        date: "12/10/2021",
        rating: 4,
        itemId: 16,
        userId: 4
    },
    {
        description: "The hygienist was so friendly and knowledgeable and put me at ease. The results are great! She really gave them a good clean. I shall be coming back.",
        date: "18/10/2021",
        rating: 5,
        itemId: 16,
        userId: 5
    },
    {
        description: "I recommend Pilates HQ, especially instructor SOL, she is helpful, friendly and very skilled.",
        date: "18/10/2021",
        rating: 5,
        itemId: 17,
        userId: 1
    },
    {
        description: "They are great",
        date: "22/10/2021",
        rating: 5,
        itemId: 17,
        userId: 2
    },
    {
        description: "They are great",
        date: "22/10/2021",
        rating: 5,
        itemId: 18,
        userId: 3
    },
    {
        description: "I recommend them especially instructor SOL, she is helpful, friendly and very skilled.",
        date: "25/10/2021",
        rating: 5,
        itemId: 18,
        userId: 4
    },
    {
        description: "Lovely place and clean Nice staff",
        date: "25/10/2021",
        rating: 5,
        itemId: 19,
        userId: 5
    },
    {
        description: "Good Gym great instructors!",
        date: "28/10/2021",
        rating: 5,
        itemId: 19,
        userId: 1
    },
    {
        description: "Great deluxe pedicure, and the bonus was the massage chair!",
        date: "28/10/2021",
        rating: 5,
        itemId: 20,
        userId: 2
    },
    {
        description: "Excellent customer service",
        date: "30/11/2021",
        rating: 5,
        itemId: 20,
        userId: 3
    },
    {
        description: "Very clean, friendly and relaxing salon. Was seen very quickly even slightly before my appointment time. Very professional manicure and loved the pampering of my hands with exfoliation and a massage. My first visit and will definitely consider returning in due course.",
        date: "31/12/2021",
        rating: 5,
        itemId: 20,
        userId: 4
    },
    {
        description: "Very clean, friendly and relaxing place. Was seen very quickly even slightly before my appointment time.",
        date: "31/12/2021",
        rating: 5,
        itemId: 21,
        userId: 5
    },
    {
        description: "Best cinema experience ever. Clean spacious and friendly staff. It made for the perfect movie experience. No chatting or noise. It felt very intimate. Thank you.",
        date: "31/12/2021",
        rating: 5,
        itemId: 22,
        userId: 1
    },
    {
        description: "great value but limited choice of movies as you cant see new relases!",
        date: "02/03/2021",
        rating: 5,
        itemId: 22,
        userId: 2
    },
    {
        description: "The cleanliness and politeness of staff was commendable. Seats were comfortable and the screen and sound quality were great.",
        date: "05/03/2021",
        rating: 4,
        itemId: 22,
        userId: 3
    },
    {
        description: "We love going to the cinema, it's a great experience, but it is very expensive if we don't have a voucher, therefore, we don't go as often as we would like to.",
        date: "08/03/2021",
        rating: 5,
        itemId: 22,
        userId: 4
    },
    {
        description: "Great Day out",
        date: "08/03/2021",
        rating: 5,
        itemId: 23,
        userId: 5
    },
    {
        description: "Very nice and safe, kids loved it.",
        date: "10/03/2021",
        rating: 4,
        itemId: 23,
        userId: 1
    },
    {
        description: "fantastic trip out with the family, great venue for a few hour trip. Boat easy to manage and the kids loved it. Thanks",
        date: "15/05/2021",
        rating: 5,
        itemId: 23,
        userId: 2
    },
    {
        description: "Friendly staff, amazing experience, good value for money.",
        date: "15/05/2021",
        rating: 5,
        itemId: 24,
        userId: 3
    },
    {
        description: "Instructor was great and my kids loved the whole experience.",
        date: "17/05/2021",
        rating: 5,
        itemId: 24,
        userId: 4
    },
    {
        description: "We had a wonderful experience. Groupon was very good in sending out reminder of the expiring date. On arrival at London School of Diving. The staff were all very welcoming and clearly very experience in the job they do. BIG THANKS TO ALL. Velma",
        date: "21/06/2021",
        rating: 4,
        itemId: 24,
        userId: 5
    },
    {
        description: "Very helpfull and lovely with any questions I had via email prior and after booking and the look on my partners face when we arrived was defenitly worth it :)",
        date: "21/06/2021",
        rating: 5,
        itemId: 25,
        userId: 1
    },
    {
        description: "There was a small problem initially with booking on line but a message to the Drift Limts help line was answered VERY quickly and everything was sorted.Seriously impressed with the service that I received-thank you very much",
        date: "22/06/2021",
        rating: 5,
        itemId: 25,
        userId: 2
    },
    {
        description: "There was a small problem initially with booking on line but a message to the Drift Limts help line was answered VERY quickly and everything was sorted.Seriously impressed with the service that I received-thank you very much",
        date: "31/07/2021",
        rating: 5,
        itemId: 25,
        userId: 3
    },
    {
        description: "Tour guide was great, very funny. Trio was very nice and informative",
        date: "31/07/2021",
        rating: 5,
        itemId: 26,
        userId: 4
    },
    {
        description: "Super good value for money!",
        date: "02/08/2021",
        rating: 5,
        itemId: 26,
        userId: 5
    },
    {
        description: "Good cruise around Poole Harbour, it was very musty and wet. Did pull canopy over which keep us a bit dry, no room inside. Still enjoyable.",
        date: "08/08/2021",
        rating: 4,
        itemId: 26,
        userId: 1
    },
    {
        description: "I really enjoyed it",
        date: "08/08/2021",
        rating: 4,
        itemId: 27,
        userId: 2
    },
    {
        description: "Great experience! Totally recommended if you're a pig lover. The staff were really nice. We had a short tour of the farm and then free time to be with the pigs and piglets in their pens. They are adorable and well looked after. Definitely we will repeat the visit. We were lucky to see heaps of piglets on our visit and we had plenty of time with them. Thank you, guys, for this experience!",
        date: "10/09/2021",
        rating: 5,
        itemId: 27,
        userId: 3
    },
    {
        description: "Great day out- lots of pigs that seemed to be well looked after! So many cute piglets to see as well!",
        date: "15/10/2021",
        rating: 4,
        itemId: 27,
        userId: 4
    },
    {
        description: "Kids seemed to enjoy it",
        date: "15/10/2021",
        rating: 4,
        itemId: 28,
        userId: 5
    },
     {
        description: "Wad good fun, but would of liked it to longer!",
        date: "17/10/2021",
        rating: 4,
        itemId: 28,
        userId: 1
    },
    {
        description: "Brilliant my son and hubby loved it. Will definitely book again",
        date: "21/10/2021",
        rating: 5,
        itemId: 28,
        userId: 2
    } 
]

const items = [
    {
        name: "ZAK Learning",
        img: "https://cdn.alzashop.com/ImgW.ashx?fd=f16&cd=SWMM0451",
        description: "Customers can expand their knowledge about Microsoft Office 2019 with optional home and student or professional software",
        price: 9.95,
        RRP: 399,
        categoryId: 1
    },
    {
        name: "Bathtime Boutique",
        img: "https://m.media-amazon.com/images/I/813O+v8uchL._AC_SS450_.jpg",
        description: "70% Off Love Heart Bath Bomb Gift Box with Optional Personalisation from Bathtime Boutique",
        price: 4,
        RRP: 27,
        categoryId: 1
    },
    {
        name: "Always Looking Good",
        img: "https://yorkshiresoap.co.uk/pub/media/catalog/product/cache/72422bc56cd43489d9473e4be03a4102/p/a/pamper_hamper_1.png",
        description: "Pick a spa hamper to surprise a loved one with a gift or enjoy some me time; options include snail slime skincare and a vegan set",
        price: 13.95,
        RRP: 88,
        categoryId: 1
    },
    {
        name: "Decomatters",
        img: "https://www.notonthehighstreet.com/fs/c4/66/92af-8e49-43d0-a758-d4070594e787/original_personalised-chef-in-training-aprons.jpg",
        description: "Customers can add a personalised touch by including their kid’s name on the apron for the cooking activities in the school or home",
        price: 4.99,
        RRP: 19.99,
        categoryId: 1
    },
    {
        name: "British Corner Shop",
        img: "https://m.media-amazon.com/images/I/81ZN2EV-RNL._AC_SX679_.jpg",
        description: "Chocolate lovers can enjoy a selection of Cadbury chocolates with a kit filled to the brim with cocoa goodness",
        price: 5.65,
        RRP: 15.99,
        categoryId: 1
    },
    {
        name: "iFlorist",
        img: "https://images.bunches.co.uk/products/large/1669-fpley-2.jpg",
        description: "50% Off Fresh Flowers Delivery from iFlorist",
        price: 15.99,
        RRP: 34.99,
        categoryId: 1
    },
    {
        name: "Doggy Curls",
        img: "https://www.juliespetportraits.com/images2/dogs/tall/choc_lab_680.jpg",
        description: "30% Off Custom Cartoon Dog Portraits from DoggyCurls",
        price: 19.99,
        RRP: 35.99,
        categoryId: 1
    },
    {
        name: "The Real Greek",
        img: "https://www.definitelygreece.com/wp-content/uploads/2020/05/traditional-greek-food-meals.jpg",
        description: "Eight Greek Meze and Sides to Share Plus Drink Each for Two at The Real Greek, Multiple Locations (Up to 55% Off)",
        price: 44.40,
        RRP: 99.95,
        categoryId: 2
    },
    {
        name: "Carr Taylor Vineyard",
        img: "https://image.shutterstock.com/image-photo/beautiful-sunset-over-tuscan-vineyards-260nw-1493420213.jpg",
        description: "This 90-minute guided tour takes visitors through the winery and explains the production process; includes wine tasting and buffet lunch",
        price: 59,
        RRP: 170,
        categoryId: 2
    },
    {
        name: "The Crazy Bear Group",
        img: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/cosmopolitan-a4bd227.jpg?quality=90&resize=768,574",
        description: "A choice of three or six cocktails from The Crazy Bear’s entire artisan cocktail list in decadent surroundings",
        price: 27,
        RRP: 54,
        categoryId: 2
    },
    {
        name: "Reform Social and Grill",
        img: "https://www.thespruceeats.com/thmb/YOvgxYaaC-dkPoww0UEH3qKcz5A=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-592250991-587b04163df78c17b643863a.jpg",
        description: "Pair of patrons can enjoy this two-course lunch featuring goat’s cheese-tart and pan-fried salmon while sipping on a glass of wine",
        price: 26,
        RRP: 62,
        categoryId: 2
    },
    {
        name: "Caffè Concerto",
        img: "https://img.grouponcdn.com/deal/3ELN8HSaGChLhQ2dzWcomgxuP1Ke/3E-960x576/v1/c870x524.jpg",
        description: "Clients can make any occasion extra special by ordering this 8’’ mixed fruit gateau cake from any of sixteen locations",
        price: 22.95,
        RRP: 38.95,
        categoryId: 2
    },
    {
        name: "Pasta Di Piazza",
        img: "https://www.vegrecipesofindia.com/wp-content/uploads/2021/05/arrabiata-pasta-2.jpg",
        description: "Pasta di piazza been stablished since 1989 we offer authentic Italian cousin with quality ingredient you will not be disappointed",
        price: 10,
        RRP: 20,
        categoryId: 2
    },
    {
        name: "vomFASS MK",
        img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-191217-sex-on-the-beach-109-landscape-pf-1-1577742797.jpg?crop=1.00xw:1.00xh;0,0&resize=640:*",
        description: "Customers can look forward to tasting a variety of unique flavoured and fruit gins, with a range of premium mixers to suit each one",
        price: 34,
        RRP: 69,
        categoryId: 2
    },
    {
        name: "Thai Spa",
        img: "https://img.grouponcdn.com/iam/2mDi3vhh6ri2bLf3Xcbjczq7G9Y2/2m-2048x1229/v1/t600x362.jpg",
        description: "Customers can take advantage of an acupuncture and massage package, designed to help alleviate aches and pains and relax tense muscles",
        price: 32,
        RRP: 90,
        categoryId: 3
    },
    {
        name: "BBSmiles",
        img: "https://teethandsmiles.co.uk/wp-content/uploads/2021/06/Teeth-and-Smiles-Cosmetic-Dentistry-min-min.jpg",
        description: "Patients can keep their smile healthy and full of sparkle thanks to this dental service bundle including a check, scale, clean and polish",
        price: 79,
        RRP: 179,
        categoryId: 3
    },
    {
        name: "Pilates HQ",
        img: "https://www.countryandtownhouse.co.uk/wp-content/uploads/2019/05/DSC_5189-2.jpg",
        description: "Get moving with five Reformer Pilates classes designed to elongate and tone muscles, improve posture and increase flexibility",
        price: 39,
        RRP: 100,
        categoryId: 3
    },
    {
        name: "Bikram Yoga London",
        img: "https://images.squarespace-cdn.com/content/v1/5c7e2a3751f4d4e7874a87b7/1590228472551-T43M6M7IZPPLPUN94GC5/image-asset.jpeg?format=1500w",
        description: "Customers can improve their core strength, achieve greater mindfulness and break a sweat over the course of ten hot yoga classes",
        price: 19,
        RRP: 100,
        categoryId: 3
    },
    {
        name: "Energie Fitness",
        img: "https://mediashower.com/img/DF55B278-C8A4-11E5-9D94-BCE196E77A88/bigstock-group-of-young-people-running--85541696.jpg",
        description: "Customers can work on their fitness goals thanks to a five-day gym pass, or opt for a one-month membership",
        price: 14,
        RRP: 52.99,
        categoryId: 3
    },
    {
        name: "West End Beauty Clinic",
        img: "https://img.freepik.com/free-photo/woman-beauty-clinic-treatment_23-2148878896.jpg?size=626&ext=jpg",
        description: "Customers can enjoy some body contouring treatments such as the sauna wrap or the cavitation radio frequency treatment",
        price: 69,
        RRP: 1200,
        categoryId: 3
    },
    {
        name: "Kensington Eye Centre",
        img: "https://www.kingsroadlondon.com/wp-content/uploads/2019/03/Chelsea-Eye-Centre.jpg",
        description: "Clients can have their sight assessed and use a £100 discount on a designer pair of spectacles when purchased with standard plastic lenses",
        price: 25,
        RRP: 45,
        categoryId: 3
    },
    {
        name: "ODEON Cinemas",
        img: "https://i.inews.co.uk/content/uploads/2020/07/PRI_157086344-640x360.jpg",
        description: "See the latest blockbuster films at a choice of 100+ ODEON cinemas across the UK in one or multiple visits.",
        price: 22,
        RRP: 15,
        categoryId: 4
    },
    {
        name: "Riverscapes",
        img: "https://img.grouponcdn.com/deal/4QkVGmnYkT6mipbXPkCby3EomKxu/4Q-700x420/v1/t600x362.jpg",
        description: "Up to six adventure seekers can enjoy a self-drive boat ride; includes a 15-minute instruction session and safety equipment",
        price: 89,
        RRP: 148,
        categoryId: 4
    },
    {
        name: "London School of Diving",
        img: "https://resources.finalsite.net/images/f_auto,q_auto,t_image_size_2/v1602505808/bedesorg/fo3kdxdbq7ns708u9pe9/ScubaDiving_Oct2020-1.jpg",
        description: "Get a feel for breathing and moving underwater with a Try Dive session at this Chiswick dive centre, complete with purpose-built heated pool",
        price: 38,
        RRP: 70,
        categoryId: 4
    },
    {
        name: "Drift Limits",
        img: "http://cdn.shopify.com/s/files/1/0023/3635/8473/files/IMG_0322_1200x1200.jpg?v=1534293758",
        description: "Feel like a true racer sitting behind the wheel of a variety of supercars such as: Audi R8, Aston Martin or V8 Vantage",
        price: 59,
        RRP: 120,
        categoryId: 4
    },
    {
        name: "City Cruises",
        img: "https://www.daysoutguide.co.uk/media/431991/city-cruises-add-5.jpg?anchor=center&mode=crop&width=618&height=350&rnd=131824274430000000",
        description: "Duos can take in the riverside views of London thanks to these cruise packages including food, drink and live entertainment",
        price: 46,
        RRP: 78,
        categoryId: 4
    },
    {
        name: "Kew Little Pigs",
        img: "https://static.scientificamerican.com/blogs/cache/file/4FEEF410-97BF-4692-A258BD695208BB0B_source.jpg?w=590&h=800&69B9DF69-B830-46A3-9B8187DEC6E5DB0C",
        description: "Children and adults can have some quality time with miniature pigs; guests over 12 can opt for a three-hour pig enthusiast experience",
        price: 67,
        RRP: 96,
        categoryId: 4
    },
    {
        name: "Limitless VR",
        img: "https://physicsworld.com/wp-content/uploads/2018/04/PWOPTICSMay18-ANALYSIS-VR-390641047-Shutterstock-Halfpoint-1024x682.jpg",
        description: "Up to four can enjoy a one-hour VR session with a choice of games and experiences, including Google Earth and Richie’s Plank Experience",
        price: 20,
        RRP: 45,
        categoryId: 4
    },

]

module.exports = {users, categories, reviews, items}