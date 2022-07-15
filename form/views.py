from django.shortcuts import render

def form_view(request):
    template_name = 'form/form.html'
    return render(request, template_name)
