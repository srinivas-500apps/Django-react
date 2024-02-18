from django.shortcuts import render
from rest_framework import viewsets
from .serializers import TodoSerializer
from .models import Todo

# Create your views here.

class TodoView(viewsets.ModelViewSet):
    serializer_class = TodoSerializer
    queryset = Todo.objects.all()
from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.
def start_project(request):
    """Start project"""
    return HttpResponse("you are successfully started jango project")