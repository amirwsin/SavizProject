from django.shortcuts import render, get_object_or_404
from .models import Product


# Create your views here.


def Home(request, *args, **kwargs):
    my_context = {"title": "صفحه اصلی"}
    return render(request, "Home.html", my_context)


def ProductsView(request, *args, **kwargs):
    my_context = {"title": "محصولات","category":None,"brand":None,"color":None,"size":None,}
    categories = request.GET.get("category")
    if categories:
        my_context["category"] = categories

    return render(request, "Products.html", my_context)


def ProductDetailView(request, slug, *args, **kwargs):
    product = get_object_or_404(Product, slug=slug)
    my_context = {"title": product.name, "product": product}
    return render(request, "ProductDetail.html", my_context)
