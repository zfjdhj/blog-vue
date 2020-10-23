from django.contrib import admin

# Register your models here.
# 导入模型User,Article
from blog.models import User, Blog

admin.site.register(User)
admin.site.register(Blog)
