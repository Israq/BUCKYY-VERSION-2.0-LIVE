

from django.shortcuts import render
from ekyc2.models import Ekyc2

def ekyc2(request):
    if request.method=="POST":
        object = Ekyc2()
        object.name=request.POST['name']
        object.email=request.POST['email']
        object.address=request.POST['address']
        object.gender=request.POST['gender']
        object.profession=request.POST['profession']
        object.income=request.POST['estimated monthly income']
        object.selfie=request.POST.get('selfie')
        object.nid_front = request.POST.get('nid-front')
        object.nid_back = request.POST.get('nid-back')
        object.debit_card = request.POST.get('debit-card')
        object.utility_bill = request.POST.get('utility-bill')
        object.bank_statement = request.POST.get('bank-statement')
        object.save()
    return render(request, "ekyc.html")
# Create your models here.