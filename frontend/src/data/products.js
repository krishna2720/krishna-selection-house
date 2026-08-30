// This is FALLBACK data only.
// The website's real product data lives in MongoDB and is fetched
// through the backend API (see src/utils/api.js).
//
// This local array is used only if that fetch fails (e.g. while you are
// still setting up the backend, or MongoDB is temporarily unreachable),
// so the page never looks completely empty.
//
// It matches backend/seed/seedProducts.js - if you change one,
// consider updating the other.

const products = [
  { name: "Ladies Jeans", category: "Ladies", description: "Comfortable and stylish jeans for everyday wear.", image: "https://loremflickr.com/500/600/women,jeans" },
  { name: "Ladies T-Shirts", category: "Ladies", description: "Casual cotton t-shirts in everyday colours.", image: "https://loremflickr.com/500/600/women,tshirt" },
  { name: "Ladies Tops", category: "Ladies", description: "Trendy tops for casual and semi-formal wear.", image: "https://loremflickr.com/500/600/women,top,fashion" },
  { name: "Ladies Shirts", category: "Ladies", description: "Smart shirts for a neat, everyday look.", image: "https://loremflickr.com/500/600/women,shirt" },
  { name: "Ladies Lowers", category: "Ladies", description: "Comfortable lowers for daily and home wear.", image: "https://loremflickr.com/500/600/women,leggings" },
  { name: "Kurtis", category: "Ladies", description: "Traditional and modern kurtis for every occasion.", image: "https://loremflickr.com/500/600/kurti,indian,dress" },
  { name: "Baba Suits", category: "Ladies", description: "Comfortable baba suit sets.", image: "https://loremflickr.com/500/600/indian,suit,women" },
  { name: "Fancy Tops", category: "Ladies", description: "Party-wear fancy tops for special occasions.", image: "https://loremflickr.com/500/600/women,party,top" },

  { name: "Men's Shirts", category: "Men", description: "Formal and casual shirts for men.", image: "https://loremflickr.com/500/600/men,shirt" },
  { name: "Men's Jeans", category: "Men", description: "Durable and stylish jeans for men.", image: "https://loremflickr.com/500/600/men,jeans" },
  { name: "Men's T-Shirts", category: "Men", description: "Everyday casual t-shirts for men.", image: "https://loremflickr.com/500/600/men,tshirt" },
  { name: "Men's Lowers", category: "Men", description: "Comfortable lowers for daily wear.", image: "https://loremflickr.com/500/600/men,trackpants" },

  { name: "Kids Dresses", category: "Kids", description: "Everyday dresses for kids.", image: "https://loremflickr.com/500/600/kids,dress" },
  { name: "Fancy Dresses", category: "Kids", description: "Festive and party-wear dresses for kids.", image: "https://loremflickr.com/500/600/kids,party,dress" },
  { name: "Girls' Jeans", category: "Kids", description: "Comfortable jeans for young girls.", image: "https://loremflickr.com/500/600/girl,jeans" },
  { name: "Fancy Tops for Little Girls", category: "Kids", description: "Cute fancy tops for little girls.", image: "https://loremflickr.com/500/600/girl,top,fashion" },

  { name: "Fancy Ladies Tops", category: "Fancy", description: "Trendy fancy tops for special occasions.", image: "https://loremflickr.com/700/500/women,fancy,top" },
  { name: "Trendy Kurtis", category: "Fancy", description: "Stylish kurtis for festive occasions.", image: "https://loremflickr.com/700/500/kurti,fashion" },
  { name: "Girls' Fancy Dresses", category: "Fancy", description: "Beautiful fancy dresses for girls.", image: "https://loremflickr.com/700/500/girl,fancy,dress" },
  { name: "Fancy Tops for Little Girls ", category: "Fancy", description: "Adorable party tops for little girls.", image: "https://loremflickr.com/700/500/kids,party,top" },
];

export default products;
