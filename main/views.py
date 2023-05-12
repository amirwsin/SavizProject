from django.shortcuts import render


# Create your views here.


def Home(request, *args, **kwargs):
    my_context = {}
    return render(request, "Home.html", my_context)
