from django.shortcuts import render
from django.shortcuts import redirect, render
from django.contrib.auth import authenticate,login,logout
from django.contrib.auth.models import User, auth
from django.contrib.auth.forms import AuthenticationForm,UserCreationForm



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



def signout(request):
    logout(request)
    return redirect('/templates/authorization/login.html/')