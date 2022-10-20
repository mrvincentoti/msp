from django.urls import path
from . import views

urlpatterns = [
    path('dashboard', views.dashboard, name='dashboard'),
    path('configure', views.configurations, name='configurations'),
    path('standard', views.standard, name='standard'),
]
