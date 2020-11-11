# -*- coding: UTF-8 -*-
"""
 * @author  zfj
 * @date  2020/10/22 17:29
"""
# 子路由

from django.urls import path
from . import views

urlpatterns = [
    path('get_blog/', views.get_blog),
    path('get_type/', views.get_type),
    path('get_tag/', views.get_tag),
    path('get_recommend/', views.get_recommend),
]