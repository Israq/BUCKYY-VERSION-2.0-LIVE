from django.urls import path
from . import views
urlpatterns = [
    
    path('name.html',views.home_view, name='ekyc'),
   
]