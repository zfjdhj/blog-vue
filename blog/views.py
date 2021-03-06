import time

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
    if type:
        return list(type)[0]

# 获取tagName
def get_tag_name_by_id(param):
    tags = list(BlogTags.objects.filter(blogs=param).values())
    res_list = []
    if tags:
        for item in tags:
            # print(item)
            tmp_tag=list(Tag.objects.filter(id=item["tags_id"]).values())[0]
            res_list.append({"id":tmp_tag["id"],"name":tmp_tag["name"]})
    # print(res_list)
    # print(res)
    return res_list


# 获取userName
def get_user_name_by_id(param):
    user = User.objects.filter(id=param).values()
    return list(user)[0]["nickname"]


# api:GET获取blog_top列表
def get_blog(request):
    print(type(request))
    if request.method == "GET":
        res = {}
        new_list_blog = []
        page = request.GET.get('page', '')
        mode = request.GET.get('mode', '')
        id = request.GET.get('id', '')
        if not id:
            blog = Blog.objects.filter(published=True).order_by('-update_time').values()
            for item in list(blog):
                item.pop("content")
                item["type_id"] = get_type_name_by_id(item["type_id"])
                item["tags"] = get_tag_name_by_id(item["id"])
                item["user_id"] = get_user_name_by_id(item["user_id"])
                new_list_blog.append(item)
            res["total"] = len(list(blog))
            if not page:
                res["page"] = "all"
                res["list"] = new_list_blog
            elif page == "admin":
                new_list_blog=[]
                blog = Blog.objects.all().order_by('-update_time').values()
                for item in list(blog):
                    item.pop("content")
                    item["type_id"] = get_type_name_by_id(item["type_id"])
                    item["tags"] = get_tag_name_by_id(item["id"])
                    item["user_id"] = get_user_name_by_id(item["user_id"])
                    new_list_blog.append(item)
                res["page"] = "admin"
                res["list"] = new_list_blog
            else:
                res["page"] = page
                res["list"] = new_list_blog[int(page) * 10:(int(page) + 1) * 10]
            res_json = json.dumps(res, cls=DateEncoder)
            return JsonResponse(json.loads(res_json))
        else:
            blog = Blog.objects.filter(id=id).values()[0]
            if mode == "markdown":
                pass
            else:
                blog["content"] = markdown.markdown(blog["content"], extensions=['markdown.extensions.fenced_code'])
            blog["user_id"] = get_user_name_by_id(blog["user_id"])
            blog["type_id"] = get_type_name_by_id(blog["type_id"])
            blog["tags"] = get_tag_name_by_id(blog["id"])
            res_json = json.dumps(blog, cls=DateEncoder)
            return JsonResponse(json.loads(res_json))


# api:GET获取type_top列表
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
                tmp_list = list(Blog.objects.filter(published=True, type=item.id).order_by('-update_time').values())
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
                tmp_list = list(Blog.objects.filter(published=True, type=item.id).order_by('-update_time').values())
                tmp_item["blog_total"] = len(tmp_list)
                sort_list[item.id] = len(tmp_list)
                new_tmp_list = []
                if tmp_list:
                    for item2 in tmp_list:
                        item2.pop("content")
                        item2["user_id"] = get_user_name_by_id(item2["user_id"])
                        item2["type_id"] = get_type_name_by_id(item2["type_id"])
                        item2["tags"] = get_tag_name_by_id(item2["id"])
                        new_tmp_list.append(item2)
                    tmp_item["blog_list"] = new_tmp_list
                    type_item.append(tmp_item)
                    res["type_item"] = type_item
        res_json = json.dumps(res, cls=DateEncoder)
        return JsonResponse(json.loads(res_json))


# api:GET获取tag_top列表
def get_tag(request):
    start = time.time()
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
                    if list(Blog.objects.filter(published=True, id=item2["blogs_id"]).order_by(
                            '-update_time').values()):
                        tmp=list(Blog.objects.filter(published=True, id=item2["blogs_id"]).order_by(
                            '-update_time').values())[0]
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
                tmp_list = list(BlogTags.objects.filter(tags=item.id).order_by('-blogs').values())
                tmp_item["blog_total"] = len(tmp_list)
                sort_list[item.id] = len(tmp_list)
                new_tmp_list = []
                tmp_blog_list=[]
                for item in tmp_list:
                    try:
                        tmp_blog_list=list(Blog.objects.filter(published=True, id=item["blogs_id"]).values())
                        if tmp_blog_list:
                            tmp =tmp_blog_list[0]
                            tmp["content"] = ""
                            tmp["user_id"] = get_user_name_by_id(tmp["user_id"])
                            tmp["type_id"] = get_type_name_by_id(tmp["type_id"])
                            tmp["tags"] = get_tag_name_by_id(tmp["id"])
                            new_tmp_list.append(tmp)
                    except Exception as error:
                        new_tmp_list.append(str(error))
                tmp_item["blog_list"] = new_tmp_list
                tag_item.append(tmp_item)
                res["tag_item"] = tag_item
        end = time.time()
        res["elapsed_time"]=end - start
        res_json = json.dumps(res, cls=DateEncoder)
        # print(res["tag_item"][3]["blog_list"][0]["update_time"])
        # print(res["tag_item"][3]["blog_list"][1]["update_time"])
        return JsonResponse(json.loads(res_json))


# api:GET获取recommend_top列表
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


# api:GET获取commend_top列表
def get_comment(request):
    if request.method == "GET":
        res = {}
        comment = Comment.objects.filter().order_by('-create_time').values()
        res["total"] = len(list(comment))
        new_comment_list = []
        for item in list(comment):
            print(item)
            tmp_blog = Blog.objects.filter(id=item["blog_id"]).values()[0]
            tmp_blog["content"] = ""
            item["blog_id"] = tmp_blog
            item["content"] = markdown.markdown(item["content"])
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


# api:GET获取clipboard_top列表
def get_clipboard(request):
    if request.method == "GET":
        res = {}
        clipboard = Clipboard.objects.filter().order_by('-create_time').values()
        res["total"] = len(list(clipboard))
        new_comment_list = list(clipboard)
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


# api:GET获取achieve列表
def get_archive(request):
    if request.method == "GET":
        res = {}
        data = []
        year = []
        for yy in Blog.objects.extra(select={"year": "DATE_FORMAT(create_time, '%%Y')"},
                                     # where={"t_blog b group by date_format(create_time,'%Y') order by year"},
                                     order_by={"create_time"}).values():
            year.append(yy["year"])
        year = list(set(year))
        for yy in year:
            tmp_list = []
            for blog in Blog.objects.extra(where={"DATE_FORMAT(create_time, '%%Y')=%s"},
                                           params={int(yy)}).values():
                print("blog", blog)
                tmp_list.append(blog)
            data.append({"year": yy, "list": tmp_list})
        res["data"] = data
        res["blog_total"] = len(Blog.objects.all())
        res_json = json.dumps(res, cls=DateEncoder)
        return JsonResponse(json.loads(res_json))


# 导入,可以使此次请求忽略csrf校验
from django.views.decorators.csrf import csrf_exempt


# 跨域 在处理函数加此装饰器即可 @csrf_exempt
# api:POST提交admin登录验证
@csrf_exempt
def admin_login(request):
    if request.method == "POST":
        res = {}
        res["data"] = "succeed"
        res["recode"] = "200"
        res_json = json.dumps(res)
        return JsonResponse(json.loads(res_json))
    if request.method == "GET":
        res = {}
        res["data"] = "error"
        res["recode"] = "403"
        res_json = json.dumps(res)
        return JsonResponse(json.loads(res_json))


# api：POST提交添加一条新的blog记录
@csrf_exempt
def add_blog(request):
    if request.method == "POST":
        blog_data = request.body.decode()
        # print(type(request.body),request.body.decode())
        blog_json_data = json.loads(blog_data)["data"]
        blog_id=blog_json_data["id"]

        res = {}
        if not blog_id:
            # 创建新的blog数据
            newBlog=Blog.objects.create(
                appreciation=blog_json_data["appreciation"],
                commentabled=blog_json_data["commentabled"],
                content=blog_json_data["content"],
                create_time=datetime.datetime.now(),
                description=blog_json_data["description"],
                first_picture=blog_json_data["first_picture"],
                flag=blog_json_data["flag"],
                published=blog_json_data["published"],
                recommend=blog_json_data["recommend"],
                share_statement=blog_json_data["share_statement"],
                title=blog_json_data["title"],
                update_time=datetime.datetime.now(),
                type_id=blog_json_data["type_id"]["id"],
                user_id=1
            )
            # 删除原有tag
            tmp_blog = Blog.objects.get(id=newBlog.id)
            tags_item=BlogTags.objects.filter(blogs_id=newBlog.id)
            for item in tags_item:
                item.delete()
            # 添加tags
            tags = blog_json_data["tags"]
            for item in tags:
                tag_item=Tag.objects.get(id=item["id"])
                BlogTags(blogs=tmp_blog,tags=tag_item).save()
                print("tag_id", item["id"])

            res["data"] = {
                "msg":"succeed to add new blog.",
                "blogId":str(newBlog.id)
            }
        elif blog_id:
            tmp_blog=Blog.objects.get(id=blog_id)
            tmp_blog.appreciation = blog_json_data["appreciation"]
            tmp_blog.commentabled = blog_json_data["commentabled"]
            tmp_blog.content = blog_json_data["content"]
            tmp_blog.description = blog_json_data["description"]
            tmp_blog.first_picture = blog_json_data["first_picture"]
            tmp_blog.flag = blog_json_data["flag"]
            print("before",tmp_blog.published)
            tmp_blog.published = blog_json_data["published"]
            print("after", tmp_blog.published)
            tmp_blog.recommend = blog_json_data["recommend"]
            tmp_blog.share_statement = blog_json_data["share_statement"]
            tmp_blog.title = blog_json_data["title"]
            tmp_blog.update_time = datetime.datetime.now()
            tmp_blog.type_id = blog_json_data["type_id"]["id"]
            tmp_blog.user_id = 1
            tmp_blog.save()
            # 删除原有tag
            tmp_blog = Blog.objects.get(id=tmp_blog.id)
            tags_item = BlogTags.objects.filter(blogs_id=tmp_blog.id)
            for item in tags_item:
                item.delete()
            # 添加tags
            tags = blog_json_data["tags"]
            tmp_blog = Blog.objects.get(id=blog_id)
            for item in tags:
                tag_item=Tag.objects.get(id=item["id"])

                BlogTags(blogs=tmp_blog,tags=tag_item).save()
                print("tag_id", item["id"])

            res["data"] = {
                "msg": "succeed to update the blog.",
                "blogId": str(blog_id)
            }
        res["status"] = "200"
        res_json = json.dumps(res)
        return JsonResponse(json.loads(res_json))
    if request.method == "GET":
        res = {}
        res["data"] = "error"
        res["status"] = "403"
        res_json = json.dumps(res)
        return JsonResponse(json.loads(res_json))


def test(request):
    if request.method == "POST":
        res = {}
        res["data"] = "succeed"
        res["recode"] = "200"
        res_json = json.dumps(res)
        return JsonResponse(json.loads(res_json))
    if request.method == "GET":
        tags_item = BlogTags.objects.filter(blogs_id=66)
        for item in tags_item:
            print(item.tags)
        print(list(tags_item))
        res = {}
        res["data"] = "error"
        res["recode"] = "403"
        res_json = json.dumps(res)
        return JsonResponse(json.loads(res_json))