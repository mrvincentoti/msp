from django.shortcuts import render

# Create your views here.


def landing(request):
    return render(request, 'managestate/states.html', {})


def configure(request):
    return render(request, 'managestate/configure.html', {})


def addfacility(request):
    return render(request, 'managestate/add-facility.html', {})


def viewfacility(request):
    return render(request, 'managestate/view-facility.html', {})
