const skincareProducts = [
    {
      id: 1,
      title: "HydraGlow Moisturizer",
      description: "A lightweight, hydrating moisturizer for daily use. Infused with hyaluronic acid and aloe vera to lock in moisture, leaving skin plump, soft, and refreshed all day long.",
      price: 30000,
      category: "Moisturizers",
      image: "https://carynt.pk/cdn/shop/files/caryntmoisturizermockupcolorcopy.jpg?v=1734957116",
      rating: 4.5,
      ratingStars: "★★★★☆"
    },
    {
      id: 2,
      title: "Purity Cleanser",
      description: "Gentle foaming cleanser that removes dirt and excess oil. Formulated with chamomile and green tea to soothe and refresh your skin without over-drying.",
      price: 20000,
      category: "Cleansers",
      image: "https://m.media-amazon.com/images/I/81y38uhSYJL._AC_UF1000,1000_QL80_.jpg",
      rating: 4.3,
      ratingStars: "★★★★☆"
    },
    {
      id: 3,
      title: "Radiance Vitamin C Serum",
      description: "Brightens and evens skin tone with 15% Vitamin C. Packed with antioxidants and ferulic acid to protect against environmental damage and reduce dark spots.",
      price: 38000,
      category: "Serums",
      image: "https://m.media-amazon.com/images/I/71ThvUWdyJL._SL1500_.jpg",
      rating: 4.7,
      ratingStars: "★★★★☆"
    },
    {
      id: 4,
      title: "Green Tea Toner",
      description: "Refreshing toner with calming green tea extract. Helps balance pH, tighten pores, and reduce redness, ideal for oily or combination skin.",
      price: 18000,
      category: "Toners",
      image: "https://tosnigeria.com/wp-content/uploads/2023/07/isntree-toner-and-cleanser.png",
      rating: 4.2,
      ratingStars: "★★★★☆"
    },
    {
      id: 5,
      title: "SunShield SPF 50",
      description: "Lightweight, non-greasy sunscreen for all-day protection. Broad-spectrum SPF 50 with niacinamide to fight signs of sun damage.",
      price: 23000,
      category: "Sunscreens",
      image: "https://theaphrobeauty.com/cdn/shop/files/image10_8ccceb39-aa4a-401f-9f77-27130591e167.jpg?v=1693045689",
      rating: 4.6,
      ratingStars: "★★★★☆"
    },
    {
      id: 6,
      title: "Revive Eye Cream",
      description: "Reduces puffiness and dark circles with caffeine and peptides. A silky cream that firms the under-eye area and boosts collagen production.",
      price: 340000,
      category: "Eye Care",
      image: "https://reviveskincare.com/cdn/shop/files/EyeRenewalDuo_1000x.jpg?v=1727194119",
      rating: 4.4,
      ratingStars: "★★★★☆"
    },
    {
      id: 7,
      title: "ExfoliGlow Scrub",
      description: "Gentle exfoliating scrub with jojoba beads. Removes dead skin cells and improves texture while nourishing with vitamin E.",
      price: 107100,
      category: "Exfoliators",
      image: "https://i5.walmartimages.com/seo/Clean-Clear-Oil-Free-Deep-Action-Exfoliating-Facial-Scrub-Cooling-Face-Wash-for-Deep-Pore-Cleansing-7-oz_1b5d7e34-e469-4092-b98b-7270387f1a08.e48251c4cc857c5a05dbddfa13ea922e.jpeg",
      rating: 4.1,
      ratingStars: "★★★★☆"
    },
    {
      id: 8,
      title: "Overnight Recovery Mask",
      description: "Hydrating mask that works overnight to nourish and repair skin. Enriched with shea butter, ceramides, and plant extracts for ultimate recovery.",
      price: 56000,
      category: "Face Masks",
      image: "https://ffcosmetics.com/cdn/shop/products/OvernightRecoveryMask_600x.png?v=1717104386",
      rating: 4.8,
      ratingStars: "★★★★★"
    },
    {
      id: 9,
      title: "Clear Skin Cleanser",
      description: "Deep pore cleanser for acne-prone skin. Contains salicylic acid and tea tree oil to fight blemishes and control oil production.",
      price: 89750,
      category: "Cleansers",
      image: "https://www.u-buy.com.ng/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvMzE0Y0Qxb2JmSkwuX1NTNDAwXy5qcGc.jpg",
      rating: 4.4,
      ratingStars: "★★★★☆"
    },
    {
      id: 10,
      title: "HydraMist Toner",
      description: "Hydrating toner mist with rose water and aloe. Refreshes skin throughout the day, leaving it dewy, soothed, and prepped for serums.",
      price: 16485,
      category: "Toners",
      image: "https://dollfacehouseofmakeup.com/cdn/shop/products/1_aa827d0b-2598-4441-9b74-056f4c09336f.png?v=1618743603",
      rating: 4.3,
      ratingStars: "★★★★☆"
    },
    {
      id: 11,
      title: "Daily Defense SPF 30",
      description: "Daily sunscreen with added antioxidants. Lightweight texture perfect for layering under makeup while protecting against UV rays.",
      price: 21000,
      category: "Sunscreens",
      image: "https://www.skinauthority.com/cdn/shop/products/51115_0.7-fl-oz_18-ml_01.jpg?v=1673376560",
      rating: 4.2,
      ratingStars: "★★★★☆"
    },
    {
      id: 12,
      title: "Bright Eyes Serum",
      description: "Targeted serum for fine lines and under-eye darkness. Enriched with peptides, vitamin K, and hyaluronic acid for visible rejuvenation.",
      price: 30000,
      category: "Eye Care",
      image: "https://cdn.salla.sa/nGgdb/FR1YMNOFB2N7yH8gG4UA3YCkdwIevUU5vCUm09Qq.jpg",
      rating: 4.6,
      ratingStars: "★★★★☆"
    },
    {
      id: 13,
      title: "Charcoal Detox Mask",
      description: "Purifying mask with activated charcoal and clay. Draws out toxins and impurities, leaving your skin refreshed, tight, and matte.",
      price: 26235,
      category: "Face Masks",
      image: "https://cdn.kindlife.in/images/detailed/95/product-_-ingredients_r21j-tj.jpg?t=1692456055",
      rating: 4.5,
      ratingStars: "★★★★☆"
    },
    {
      id: 14,
      title: "SmoothGlow Exfoliator",
      description: "Enzyme-based exfoliant for sensitive skin. Gently dissolves dead skin cells without irritation, revealing a brighter, softer complexion.",
      price: 24450,
      category: "Exfoliators",
      image: "https://www.spacenk.com/dw/image/v2/ABCE_PRD/on/demandware.static/-/Sites-spacenkmastercatalog/default/dw44198019/products/NARS_COSME/UK200009519_NARS_COSME.jpg?sw=582&sh=582",
      rating: 4.0,
      ratingStars: "★★★★☆"
    },
    {
      id: 15,
      title: "Nourish Night Cream",
      description: "Rich night cream with ceramides and hyaluronic acid. Replenishes skin barrier while you sleep, leaving skin supple by morning.",
      price: 34500,
      category: "Moisturizers",
      image: "https://www.rooibostee.shop/en/pictures/items/african-extracts/ae05/nourishing-night-cream-75ml.jpg?x=510&y=800",
      rating: 4.7,
      ratingStars: "★★★★★"
    },
    {
      id: 16,
      title: "Calm & Soothe Cleanser",
      description: "Cream cleanser ideal for dry, sensitive skin. Free from sulfates and harsh chemicals, infused with oat extract and calendula.",
      price: 19800,
      category: "Cleansers",
      image: "https://brandlistry.com/cdn/shop/products/10292514_5966060d-62dc-4cd5-9bed-09adc04629cb.jpg?v=1621522646",
      rating: 4.5,
      ratingStars: "★★★★☆"
    },
    {
      id: 17,
      title: "Glow Booster Serum",
      description: "Niacinamide and zinc serum for radiant, clear skin. Regulates oil production and refines pores while improving brightness.",
      price: 32850,
      category: "Serums",
      image: "https://hooraintrading.com/wp-content/uploads/2023/11/Untitled-design-2023-11-17T143556.069.png",
      rating: 4.6,
      ratingStars: "★★★★☆"
    },
    {
      id: 18,
      title: "Daily Dew Moisturizer",
      description: "Oil-free, non-comedogenic moisturizer. Provides lightweight hydration with squalane and vitamin B5 for a smooth, soft finish.",
      price: 25200,
      category: "Moisturizers",
      image: "https://images-static.nykaa.com/media/catalog/product/c/5/c50841d8906090574891.jpg?tr=w-500",
      rating: 4.4,
      ratingStars: "★★★★☆"
    },
    {
      id: 19,
      title: "Triple Peptide Eye Gel",
      description: "Cooling eye gel to smooth and tighten. Fast-absorbing formula with peptides and caffeine to reduce the look of tired eyes.",
      price: 28125,
      category: "Eye Care",
      image: "https://www.lookfantastic.com/images?url=https://static.thcdn.com/productimg/original/12322623-1725039040541710.jpg&format=webp&auto=avif&width=985&height=985&fit=cover",
      rating: 4.3,
      ratingStars: "★★★★☆"
    },
    {
      id: 20,
      title: "Renewal Retinol Serum",
      description: "Retinol-based serum to reduce fine lines. Supports cell turnover and fades discoloration while being gentle enough for daily use.",
      price: 41250,
      category: "Serums",
      image: "https://skintific.com/cdn/shop/files/SKT-180-daily_20ml.png?v=1744801205",
      rating: 4.8,
      ratingStars: "★★★★★"
    }
  ];
  
  