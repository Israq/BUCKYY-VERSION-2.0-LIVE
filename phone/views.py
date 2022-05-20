from django.shortcuts import render
from phone.models import Phone

def phone(request):
    if request.method=="POST":
        phone=request.POST.get['phone1']
       
       
        
       
        

        
        
       
        phone=Phone(phone=phone)
        phone.save()
    return render(request, "index.html")
# Create your views here.
