from django.urls import path
from . import views

urlpatterns = [
    path('', views.landing, name='landing'),
    path('add-facility', views.addfacility, name='add-facility'),
    path('view-facilities', views.viewfacility, name='view-facilities'),
    path('configure', views.configure, name='configure'),
]
