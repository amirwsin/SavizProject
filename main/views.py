from django.shortcuts import render


# Create your views here.


def Home(request, *args, **kwargs):
    my_context = {}
    return render(request, "index.html", my_context)
