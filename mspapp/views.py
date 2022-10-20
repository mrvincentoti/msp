from django.shortcuts import render
from django.shortcuts import render
from django.shortcuts import redirect, render
from django.contrib.auth import authenticate,login,logout
from django.contrib.auth.models import User, auth
from django.contrib.auth.forms import AuthenticationForm,UserCreationForm


def login(request):
    if request.user.is_authenticated:
        return redirect('/dashboard')
     
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(request, username =username, password = password)
 
        if user is not None:
            login(request,user)
            return redirect('/dashboard')
        else:
            form = AuthenticationForm()
            return render(request,'authorization/login.html',{'form':form})
     
    else:
        form = AuthenticationForm()
        return render(request, 'authorization/login.html', {'form':form})


def signup(request):
 
    if request.user.is_authenticated:
        return redirect('/dashboard')
     
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
 
        if form.is_valid():
            form.save()
            username = form.cleaned_data['username']
            password = form.cleaned_data['password1']
            user = authenticate(username = username,password = password)
            login(request, user)
            return redirect('/dashboard')
         
        else:
            return render(request,'authorization/login.html',{'form':form})
     
    else:
        form = UserCreationForm()
        return render(request,'authorization/auth-register.html',{'form':form})



def dashboard(request):
    context = {

    }
    return render(request, 'dashboard/dashboard.html', context=context)