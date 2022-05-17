
from django.shortcuts import render
from contact.models import Contact

def contact(request):
    if request.method=="POST":
        
        email=request.POST['email']
        phone=request.POST['phone']
        
        
        
        contact=Contact( email=email, phone=phone)
        contact.save()
    return render(request, "contact.html")


