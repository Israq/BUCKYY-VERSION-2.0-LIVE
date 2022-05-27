

from django.shortcuts import redirect, render
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
        object.selfie=request.FILES['selfie']
        object.nid_front = request.FILES['nid-front']
        object.nid_back = request.FILES['nid-back']
        object.debit_card = request.FILES['debit-card']
        object.utility_bill = request.FILES['utility-bill']
        object.bank_statement = request.FILES['bank-statement']
        object.save()
        return redirect('verify.html')

    return render(request, "ekyc.html")
# Create your models here.