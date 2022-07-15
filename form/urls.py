from django.urls import path
from . import views

app_name = 'form'

urlpatterns = [
    path('',views.form_view, name='form'),
]