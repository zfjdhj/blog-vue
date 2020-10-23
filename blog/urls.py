# -*- coding: UTF-8 -*-
"""
 * @author  zfj
 * @date  2020/10/22 17:29
"""
# 子路由

from django.urls import path
from . import views

urlpatterns = [
    path('test/', views.test),
]
