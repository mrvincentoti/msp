from django.urls import path
from . import views

urlpatterns = [
    path('', views.configurations, name='configurations'),
    path('standard', views.standard, name='standard'),
]
