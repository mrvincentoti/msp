from django.shortcuts import render

# Create your views here.


def state(request):
    return render(request, 'analysis/state.html', {})


def lga(request):
    return render(request, 'analysis/lga.html', {})


def lgaresult(request):
    return render(request, 'analysis/lga-result.html', {})


def stateresult(request):
    return render(request, 'analysis/state-result.html', {})


def return_data(request):
    # return HttpResponse('entered text:' + request.POST['text'])
    return render(request, 'analysis/state-result.html', {})
