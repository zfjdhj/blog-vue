from django.http import JsonResponse
from django.shortcuts import render

# Create your views here.
from django.template.context_processors import request
from blog.models import Blog
import json


def test(request):
    if request.method == "GET":
        res = {}
        query_art = Blog.objects.all()
        for item in query_art:
            res[item.id]=item.title
        return JsonResponse(res)
