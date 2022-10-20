from django.urls import path
from django.conf.urls import re_path
from . import views

urlpatterns = [
    path('state', views.state, name='state'),
    path('lga', views.lga, name='lga'),
    path(r'^stateresult/$', views.stateresult, name='state-result'),
    path('lga-result', views.lgaresult, name='lga-result'),
    re_path(r'^stateoutput/$', views.return_data),
]
