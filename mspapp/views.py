from django.shortcuts import render


def login(request):

    context = {
    }

    return render(request, 'authorization/login.html', context=context)
