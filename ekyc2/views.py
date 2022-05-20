

from django.shortcuts import render
from ekyc2.models import Ekyc2

def ekyc2(request):
    if request.method=="POST":
        name=request.POST['name']
        email=request.POST['email']
        address=request.POST['address']
        gender=request.POST['gender']
        profession=request.POST['profession']
        income=request.POST['income']
        fileDetails3=request.POST.get('fileDetails3')
       
        
       
        

        
        
       
        ekyc2=Ekyc2( email=email,address=address,gender=gender,name=name,profession=profession,fileDetails3=fileDetails3,income=income)
        ekyc2.save()
    return render(request, "ekyc.html")
# Create your models here.