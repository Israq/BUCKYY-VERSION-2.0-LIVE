from django.urls import path
from . import views
urlpatterns = [
    
    path('contact.html',views.contact, name='contact'),
   
]