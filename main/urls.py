from django.urls import path
from .views import Home, ProductDetailView, ProductsView

app_name = "main"

urlpatterns = [
    path("", Home, name="homePage"),
    path("products/", ProductsView, name="productsPage"),
    path("products/<slug:slug>/", ProductDetailView, name="productDetailPage")
]
