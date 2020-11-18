from django.core.checks import Tags
from django.http import JsonResponse
from django.shortcuts import render

import markdown
# Create your views here.
from django.template.context_processors import request
from blog.models import Blog, Type, Tag, BlogTags, User, Comment, Clipboard
import json

import datetime


class DateEncoder(json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, datetime.datetime):
            return obj.strftime("%Y-%m-%d %H:%M:%S")
        else:
            return json.JSONEncoder.default(self, obj)


# 获取typeName
def get_type_name_by_id(param):
    type = Type.objects.filter(id=param).values()
    return list(type)[0]

# 获取tagName
def get_tag_name_by_id(param):
    tags=list(BlogTags.objects.filter(blogs=param).values())
    res_list=[]
    for item in tags:
        # print(item)
        res_list.append(list(Tag.objects.filter(id=item["tags_id"]).values())[0]["name"])
    # print(res_list)
    # print(res)
    return res_list


# 获取userName
def get_user_name_by_id(param):
    user = User.objects.filter(id=param).values()
    return list(user)[0]["nickname"]


# api:获取blog_top列表
def get_blog(request):
    print(type(request))
    if request.method == "GET":
        # print(type(request))
        res = {}
        new_list_blog = []
        # query_art = Blog.objects.all()
        blog = Blog.objects.filter(published=True).order_by('-update_time').values()
        # print(list(blog)[0]["content"])
        for item in list(blog):

            item.pop("content")

            # print(item["type_id"], item["user_id"])
            item["type_id"] = get_type_name_by_id(item["type_id"])
            item["tags"] =get_tag_name_by_id(item["id"])
            item["user_id"] = get_user_name_by_id(item["user_id"])
            # print(item["type_id"], item["user_id"])

            new_list_blog.append(item)
        res["total"] = len(list(blog))

        page = request.GET.get('page', '')
        if not page:
            res["page"] = "all"
            res["list"] = new_list_blog
        else:
            res["page"] = page
            res["list"] = new_list_blog[int(page) * 10:(int(page) + 1) * 10]
        # for item in query_art:
        #     print(json.dumps(item))
        #     res[item.id]=item.title
        res_json = json.dumps(res, cls=DateEncoder)
        # print(type(res_json))
        return JsonResponse(json.loads(res_json))

# api:获取type_top列表
def get_type(request):
    if request.method == "GET":
        top_num = request.GET.get('top', '')
        res = {}
        types = Type.objects.all()
        total = len(list(types))
        res["type_total"] = total
        type_item = []
        sort_list = {}
        if top_num:
            for item in types:
                tmp_item = {}
                tmp_item["type_id"] = item.id
                tmp_item["type_name"] = item.name
                tmp_list = list(Blog.objects.filter(published=True, type=item.id).values())
                tmp_item["blog_total"] = len(tmp_list)
                sort_list[item.id] = len(tmp_list)
                new_tmp_list = []
                for item2 in tmp_list:
                    item2.pop("content")
                    new_tmp_list.append(item2)
                tmp_item["blog_list"] = new_tmp_list
                type_item.append(tmp_item)
            # print(sort_list)
            new_sort = sorted(sort_list.items(), key=lambda x: x[1], reverse=True)
            # print(new_sort)
            new_type_item = []
            for item in new_sort:
                for item2 in type_item:
                    if item2["type_id"] == item[0]:
                        new_type_item.append(item2)
            res["type_item"] = new_type_item[:int(top_num)]
        else:
            for item in types:
                tmp_item = {}
                tmp_item["type_id"] = item.id
                tmp_item["type_name"] = item.name
                tmp_list = list(Blog.objects.filter(published=True, type=item.id).values())
                tmp_item["blog_total"] = len(tmp_list)
                sort_list[item.id] = len(tmp_list)
                new_tmp_list = []
                for item2 in tmp_list:
                    item2.pop("content")
                    new_tmp_list.append(item2)
                tmp_item["blog_list"] = new_tmp_list
                type_item.append(tmp_item)
                res["type_item"] = type_item
        res_json = json.dumps(res, cls=DateEncoder)
        return JsonResponse(json.loads(res_json))


# api:获取tag_top列表
def get_tag(request):
    if request.method == "GET":
        top_num = request.GET.get('top', '')
        res = {}
        tags = Tag.objects.all()
        total = len(list(tags))
        res["tag_total"] = total
        tag_item = []
        sort_list = {}
        if top_num:
            for item in tags:
                tmp_item = {}
                tmp_item["tag_id"] = item.id
                tmp_item["tag_name"] = item.name
                tmp_list = list(BlogTags.objects.filter(tags=item.id).values())
                tmp_item["blog_total"] = len(tmp_list)
                sort_list[item.id] = len(tmp_list)
                new_tmp_list = []
                for item2 in tmp_list:
                    tmp = list(Blog.objects.filter(published=True, id=item2["blogs_id"]).values())[0]
                    tmp["content"] = ""
                    new_tmp_list.append(tmp)
                tmp_item["blog_list"] = new_tmp_list
                tag_item.append(tmp_item)
            new_sort = sorted(sort_list.items(), key=lambda x: x[1], reverse=True)
            # print(new_sort)
            new_tag_item = []
            for item in new_sort:
                for item2 in tag_item:
                    if item2["tag_id"] == item[0]:
                        new_tag_item.append(item2)
            res["tag_item"] = new_tag_item[:int(top_num)]
        else:
            for item in tags:
                tmp_item = {}
                tmp_item["tag_id"] = item.id
                tmp_item["tag_name"] = item.name
                tmp_list = list(BlogTags.objects.filter(tags=item.id).values())
                tmp_item["blog_total"] = len(tmp_list)
                sort_list[item.id] = len(tmp_list)
                new_tmp_list = []
                for item in tmp_list:
                    tmp=list(Blog.objects.filter(published=True, id=item["blogs_id"]).values())[0]
                    tmp["content"]=""
                    new_tmp_list.append(tmp)
                tmp_item["blog_list"] = new_tmp_list
                tag_item.append(tmp_item)
                res["tag_item"] = tag_item
        res_json = json.dumps(res, cls=DateEncoder)
        return JsonResponse(json.loads(res_json))


# api:获取recommend_top列表
def get_recommend(request):
    if request.method == "GET":
        res = {}
        blog = Blog.objects.filter(recommend=True).order_by('-update_time').values()
        res["total"] = len(list(blog))
        top_recommend = request.GET.get('top', '')
        if not top_recommend:
            res["top"] = "all"
            res["list"] = list(blog)
        else:
            res["top"] = top_recommend
            res["list"] = list(blog[:int(top_recommend)])
        res_json = json.dumps(res, cls=DateEncoder)
        # print(type(res_json))
        return JsonResponse(json.loads(res_json))


# api:获取commend_top列表
def get_comment(request):
    if request.method == "GET":
        res = {}
        comment = Comment.objects.filter().order_by('-create_time').values()
        res["total"] = len(list(comment))
        new_comment_list=[]
        for item in list(comment):
            print(item)
            tmp_blog=Blog.objects.filter(id=item["blog_id"]).values()[0]
            tmp_blog["content"]=""
            item["blog_id"]=tmp_blog
            item["content"]=markdown.markdown(item["content"])
            new_comment_list.append(item)
        top_comment = request.GET.get('top', '')
        if not top_comment:
            res["top"] = "all"
            res["list"] = list(new_comment_list)
        else:
            res["top"] = top_comment
            res["list"] = list(new_comment_list[:int(top_comment)])
        res_json = json.dumps(res, cls=DateEncoder)
        # print(type(res_json))
        return JsonResponse(json.loads(res_json))


# api:获取clipboard_top列表
def get_clipboard(request):
    if request.method == "GET":
        res = {}
        clipboard = Clipboard.objects.filter().order_by('-create_time').values()
        res["total"] = len(list(clipboard))
        new_comment_list=list(clipboard)
        # new_comment_list=[]
        # for item in list(comment):
        #     print(item)
        #     tmp_blog=Blog.objects.filter(id=item["blog_id"]).values()[0]
        #     tmp_blog["content"]=""
        #     item["blog_id"]=tmp_blog
        #     item["content"]=markdown.markdown(item["content"])
        #     new_comment_list.append(item)
        top_comment = request.GET.get('top', '')
        if not top_comment:
            res["top"] = "all"
            res["list"] = list(new_comment_list)
        else:
            res["top"] = top_comment
            res["list"] = list(new_comment_list[:int(top_comment)])
        res_json = json.dumps(res, cls=DateEncoder)
        # print(type(res_json))
        return JsonResponse(json.loads(res_json))
