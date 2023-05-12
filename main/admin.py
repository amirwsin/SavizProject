from django.contrib import admin
from .models import Category, Product, Brand, ProductInventory, Color, Collection, Size, Media, Stock
from mptt.admin import MPTTModelAdmin
import nested_admin


# Register your models here.


class ProductStockInline(nested_admin.NestedStackedInline):
    model = Stock


class MediaInline(nested_admin.NestedTabularInline):
    model = Media


class ProductInventoryLinkInline(nested_admin.NestedStackedInline):
    model = ProductInventory
    inlines = [MediaInline, ProductStockInline]


@admin.register(Product)
class ProductAdmin(nested_admin.NestedModelAdmin):
    inlines = [ProductInventoryLinkInline]


admin.site.register(Brand)
admin.site.register(Collection)
admin.site.register(Size)
admin.site.register(Color)
admin.site.register(Category, MPTTModelAdmin)
