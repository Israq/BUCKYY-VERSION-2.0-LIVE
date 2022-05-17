"""mysite URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('',views.index, name='home'),
    path('page.html',views.page_3, name='page_3'),
    path('page_1.html',views.page_1, name='page_1'),
    path('page_2.html',views.page_2, name='page_2'),
    path('financial_wellness.html',views.financial_wellness, name='financial_wellness'),
    path('', include('ekyc2.urls')),
    path('', include('contact.urls')),
    path('', include('geeks.urls')),
    
]