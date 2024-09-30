document.addEventListener("DOMContentLoaded", () => {
    // Sample data for recently viewed products

    // Sample data for promotions
    const promotions = [
        {
            name: "IPhone 16 Pro Max",
            price: "34.990.000",
            image: "https://cdn.tgdd.vn/Products/Images/42/329143/iphone-16-pro-titan-tu-nhien.png",
            priceSale: "36.000.000",
        },
        {
            name: "IPhone 16 Pro",
            price: "28.990.000",
            image: "https://cdn.tgdd.vn/Products/Images/42/329143/iphone-16-pro-titan-tu-nhien.png",
            priceSale: "30.000.000",
        },
        {
            name: "IPhone 16 Plus",
            price: "25.990.000",
            image: "https://cdn.tgdd.vn/Products/Images/42/329138/iphone-16-plus-hong-thumb-600x600.jpg",
            priceSale: "28.000.000",
        },
        {
            name: "IPhone 16",
            price: "22.900.000",
            image: "https://cdn.tgdd.vn/Products/Images/42/329135/iphone-16-blue-600x600.png",
            priceSale: "25.000.000",
        },
        {
            name: "IPhone 15 Pro Max",
            price: "29.900.000",
            image: "https://cdn.tgdd.vn/Products/Images/42/305658/iphone-15-pro-max-gold-thumbnew-600x600.jpg",
            priceSale: "31.000.000",
        },
        {
            name: "IPhone 15 Pro",
            price: "25.000.000",
            image: "https://cdn.tgdd.vn/Products/Images/42/305658/iphone-15-pro-max-gold-thumbnew-600x600.jpg",
            priceSale: "27.000.000",
        },
        {
            name: "IPhone 15 Plus",
            price: "20.900.000",
            image: "https://cdn.tgdd.vn/Products/Images/42/303825/iphone-15-plus-512gb-den-thumb-600x600.jpg",
            priceSale: "22.000.000",
        },
        {
            name: "IPhone 15",
            price: "18.900.000",
            image: "https://cdn.tgdd.vn/Products/Images/42/303825/iphone-15-plus-512gb-den-thumb-600x600.jpg",
            priceSale: "20.000.000",
        },
        {
            name: "IPhone 14 Plus",
            price: "17.900.000",
            image: "https://cdn.tgdd.vn/Products/Images/42/245545/iPhone-14-plus-thumb-xanh-1-600x600.jpg",
            priceSale: "20.000.000",
        },
        {
            name: "IPhone 14",
            price: "14.900.000",
            image: "https://cdn.tgdd.vn/Products/Images/42/240259/iPhone-14-thumb-tim-1-600x600.jpg",
            priceSale: "20.000.000",
        },

        {
            name: "Samsung Galaxy A55 5G",
            price: "11.900.000",
            image: "https://cdn.tgdd.vn/Products/Images/42/322096/samsung-galaxy-a55-5g-xanh-thumb-1-600x600.jpg",
            priceSale: "13.000.000",
        },
        {
            name: "Samsung Galaxy Z Fold 6 5G",
            price: "38.900.000",
            image: "https://cdn.tgdd.vn/Products/Images/42/320721/samsung-galaxy-z-fold6-xam-thumbn-600x600.jpg",
            priceSale: "40.000.000",
        },
        {
            name: "Samsung Galaxy Z Flip 6 5G",
            price: "24.900.000",
            image: "https://cdn.tgdd.vn/Products/Images/42/320722/samsung-galaxy-z-flip6-xanh-thumbn-600x600.jpg",
            priceSale: "28.000.000",
        }, {
            name: "Samsung Galaxy Z M51 5G",
            price: "4.490.000",
            image: "https://cdn.tgdd.vn/Products/Images/42/325073/samsung-galaxy-m15-5g-blue-thumb-1-600x600.jpg",
            priceSale: "6.000.000",
        }, {
            name: "Samsung Galaxy M35 5G",
            price: "8.900.000",
            image: "https://cdn.tgdd.vn/Products/Images/42/323563/samsung-galaxy-m35-5g-xanhdam-thumb-600x600.jpg",
            priceSale: "10.000.000",
        },
        {
            name: "Samsung Galaxy M34 5G",
            price: "7.900.000",
            image: "https://cdn.tgdd.vn/Products/Images/42/275953/samsung-galaxy-m54-xanh-thumb-600x600.jpg",
            priceSale: "9.000.000",
        }, {
            name: "Samsung Galaxy S24 FE 5G",
            price: "11.900.000",
            image: "https://cdn.tgdd.vn/Products/Images/42/306994/samsung-galaxy-s23-fe-mint-thumbnew-600x600.jpg",
            priceSale: "14.000.000",
        }, {
            name: "Samsung Galaxy M55 5G",
            price: "10.400.000",
            image: "https://cdn.tgdd.vn/Products/Images/42/327372/samsung-galaxy-m55-5g-black-thumb-600x600.jpg",
            priceSale: "12.000.000",
        }, {
            name: "Samsung Galaxy S24 5G",
            price: "17.900.000",
            image: "https://cdn.tgdd.vn/Products/Images/42/319665/samsung-galaxy-s24-yellow-thumbnew-600x600.jpg",
            priceSale: "20.000.000",
        }, {
            name: "Samsung Galaxy S24+ 5G",
            price: "20.900.000",
            image: "https://cdn.tgdd.vn/Products/Images/42/307172/samsung-galaxy-s24-plus-violet-thumbnew-600x600.jpg",
            priceSale: "22.000.000",
        }, {
            name: "Samsung Galaxy A15",
            price: "5.100.000",
            image: "https://cdn.tgdd.vn/Products/Images/42/316075/thumb-xanh-duong-4g-600x600.jpg",
            priceSale: "6.000.000",
        },
        {
            name: "Samsung Galaxy A15 5G",
            price: "5.900.000",
            image: "https://cdn.tgdd.vn/Products/Images/42/319584/samsung-galaxy-a15-5g-xanh-duong-dam-thumb-600x600.jpg",
            priceSale: "6.000.000",
        },
        {
            name: "Samsung Galaxy A05",
            price: "3.090.000",
            image: "https://cdn.tgdd.vn/Products/Images/42/313194/samsung-galaxy-a05-black-thumbnew-600x600.jpg",
            priceSale: "4.000.000",
        },
        {
            name: "Samsung Galaxy A25 5G",
            price: "6.090.000",
            image: "https://cdn.tgdd.vn/Products/Images/42/319904/samsung-galaxy-a25-5g-xanh-duong-thumb-600x600.jpg",
            priceSale: "7.000.000",
        },
        {
            name: "Samsung Galaxy Z Flip 5 5G",
            price: "17.090.000",
            image: "https://cdn.tgdd.vn/Products/Images/42/309745/samsung-galaxy-z-flip5-mint-thumbnew-600x600.jpg",
            priceSale: "20.000.000",
        },

    ];

    // Load recently viewed products


    // Load promotions
    const promotionsContainer = document.getElementById("promotions-list");
    promotions.forEach(promotion => {
        const promotionElement = `
            <div class="promotion-item">
                <img src="${promotion.image}" alt="${promotion.name}" width="150" height="150">
                <p  class="item-name">${promotion.name}</p>
                <p class="item-price">${promotion.price + "đ"}<span class="sales">${promotion.priceSale + "đ"}</span></p>
            </div>
        `;
        promotionsContainer.innerHTML += promotionElement;
    });
});
