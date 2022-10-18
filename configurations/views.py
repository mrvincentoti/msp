from django.shortcuts import render

# Create your views here.


def configurations(request):
    return render(request, 'configurations/configurations.html', {})


def standard(request):
    return render(request, 'configurations/standard.html', {})
