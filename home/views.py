from django.shortcuts import render
from django.http import HttpResponse

def index(request):
	return HttpResponse("Lucy and Braden are getting married!!!")
