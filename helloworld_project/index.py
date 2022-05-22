from django.http import HttpResponse
from django.shortcuts import render
from blog.models import Blog
def webpage1(request):
    blog = Blog.objects.all()
    user=request.user
    return render(request,'HOME/Home.html',{'Blogs':blog,'User':user})

def webpage2(request):
    user=request.user
    return render(request,'FAQ.html',{'User':user})

def webpage3(request):
    user=request.user
    return render(request,'Giohang.html',{'User':user})

