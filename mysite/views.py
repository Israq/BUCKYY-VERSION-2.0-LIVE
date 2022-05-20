from django.http  import HttpResponse
from django.shortcuts import render

 
def index(request):
    return render(request, 'index.html')
def page_3(request):
    return render(request, 'page.html')
def page_1(request):
    return render(request, 'page_1.html')
def page_2(request):
    return render(request, 'page_2.html')
def ekyc(request):
    return render(request, 'ekyc.html')
def financial_wellness(request):
    return render(request, 'financial_wellness.html')
def phone(request):
    return render(request, 'index.html')

