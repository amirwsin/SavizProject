const BASE_URL = "http://127.0.0.1:8000/"

const homePageProducts = () => {
    $.ajax({
        url: `${BASE_URL}api/products`,
        type: "GET",
        success: (res) => {
            const productDiv = document.getElementById("product-content")
            productDiv.innerHTML = ""
            res?.results.map(item => {
                productDiv.innerHTML += `
                <div class="single-products-catagory clearfix">
                    <a href='/product/${item.slug}'>
                        <img src="${item.inventory.media[0].image}" alt="">
                        <div class="hover-content">
                            <div class="line"></div>
                            <p>$${item.inventory.sale_price}</p>
                            <h4>${item.name}</h4>
                        </div>
                    </a>
                </div>
            `
            })
        }
    })
}