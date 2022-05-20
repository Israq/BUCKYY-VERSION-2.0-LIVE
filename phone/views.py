from django.shortcuts import render
from phone.models import Phone

def phone(request):
    template_name=''
    if request.method=="POST":
        object = Phone()
        object.phone=request.POST['phone']
        object.save()
    return render(request, "index.html")
# Create your views here.
