from django.shortcuts import render, redirect
from home.models import PhoneNumber

def index(request):
    template_name = 'home/index.html'

    if request.method == 'GET':
        return render(request, template_name)
    else:
        object = PhoneNumber()
        object.phone_number = request.POST['phone']
        object.save()
        return redirect('ekyc.html')
