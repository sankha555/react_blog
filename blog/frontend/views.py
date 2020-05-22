from django.shortcuts import render

def index(request):
    return render(request, "frontend/index.htm")

# Create your views here.
