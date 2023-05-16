const BASE_URL = "http://127.0.0.1:8000/"

const homePageProducts = () => {
    $.ajax({
        url: `${BASE_URL}api/products`,
        type: "GET",
        success: (res) => {
            const productDiv = document.getElementById("product-content")
            productDiv.innerHTML = ""
            res?.results?.map(item => {
                productDiv.innerHTML += `
                <div class="single-products-catagory clearfix">
                    <a href='/products/${item.slug}'>
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

const ProductPageProducts = (category,brand,color,size) => {
    let url = `${BASE_URL}api/products/?`
    console.log(category)
    if (category !== "None")
        url +=`category=${category}&`
    $.ajax({
        url: url,
        type: "GET",
        success: (res) => {
            const productList = document.getElementById("products-list")
            productList.innerHTML = ""
            res?.results?.map(item => {
                productList.innerHTML += `
                <div class="col-12 col-sm-6 col-md-12 col-xl-6">
                    <div class="single-product-wrapper">
                        <div class="product-img">
                            <img src="${item.inventory.media[0].image}" alt="${item.inventory.media[0].alt_text}">
                            <img class="hover-img" src="${item.inventory?.media[0]?.image}" alt="${item.inventory?.media[0]?.alt_text}">
                        </div>

                        <div class="product-description d-flex align-items-center justify-content-between">
                            <div class="product-meta-data">
                                <div class="line"></div>
                                <p class="product-price">$${item.inventory?.sale_price}</p>
                                <a href="/products/${item.slug}">
                                    <h6>${item.name}</h6>
                                </a>
                            </div>
                            <div class="ratings-cart text-right">
                                <div class="ratings">
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                `
            })
        }
    })
}

const ProductsPageCategories = () => {
    $.ajax({
        url: `${BASE_URL}api/categories/`,
        type: "GET",
        success: (res) => {
            const categoriesList = document.getElementById("categories-list")
            categoriesList.innerHTML = ''
            res?.results?.map((item) => {
                categoriesList.innerHTML += `
                  <li><a href="/products/?category=${item.slug}">${item.name}</a></li>
                `
            })
        }
    })
}
const ProductsPageBrand = () => {
    $.ajax({
        url: `${BASE_URL}api/brands/`,
        type: "GET",
        success: (res) => {
            const brandsList = document.getElementById("brands-list")
            brandsList.innerHTML = ''
            res?.results?.map((item) => {
                brandsList.innerHTML += `
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="${item.name}">
                    <label class="form-check-label" for="${item.name}">${item.name}</label>
                </div>
                `
            })
        }
    })
}
const ProductsPageColor = () => {
    $.ajax({
        url: `${BASE_URL}api/colors/`,
        type: "GET",
        success: (res) => {
            const colorsList = document.getElementById("colors-list")
            colorsList.innerHTML = ''
            res?.results?.map((item) => {
                colorsList.innerHTML += `
                    <li><a href="#" style="background-color: ${item.value}"></a></li>
                `
            })
        }
    })
}