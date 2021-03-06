# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remov` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class Blog(models.Model):
    id = models.AutoField(primary_key=True)
    appreciation = models.BooleanField()  # This field type is a guess.
    appreciation_count = models.IntegerField(blank=True, null=True)
    commentabled = models.BooleanField()  # This field type is a guess.
    content = models.TextField(blank=True, null=True)
    create_time = models.DateTimeField(blank=True, null=True)
    description = models.CharField(max_length=255, blank=True, null=True)
    first_picture = models.CharField(max_length=255, blank=True, null=True)
    flag = models.CharField(max_length=255, blank=True, null=True)
    published = models.BooleanField()
    recommend = models.BooleanField()
    share_statement = models.BooleanField()
    title = models.CharField(max_length=255, blank=True, null=True)
    update_time = models.DateTimeField(blank=True, null=True)
    views = models.IntegerField(blank=True, null=True)
    type = models.ForeignKey('Type', models.DO_NOTHING, blank=True, null=True)
    user = models.ForeignKey('User', models.DO_NOTHING, blank=True, null=True)

    class Meta:
        db_table = 't_blog'

    def __int__(self):
        return self.id


class Tag(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        db_table = 't_tag'

    def __int__(self):
        return self.id


class BlogTags(models.Model):
    id = models.AutoField(primary_key=True)
    blogs = models.ForeignKey(Blog, models.DO_NOTHING)
    tags = models.ForeignKey('Tag', models.DO_NOTHING)

    class Meta:
        db_table = 't_blog_tags'

    def __int__(self):
        return self.id


class Clipboard(models.Model):
    id = models.AutoField(primary_key=True)
    content = models.CharField(max_length=255, blank=True, null=True)
    create_time = models.DateTimeField(blank=True, null=True)
    delete_switch = models.BooleanField()  # This field type is a guess.
    delete_time = models.DateTimeField(blank=True, null=True)
    update_time = models.DateTimeField(blank=True, null=True)

    class Meta:
        db_table = 't_clipboard'

    def __int__(self):
        return self.id


class Comment(models.Model):
    id = models.AutoField(primary_key=True)
    admin_comment = models.BooleanField()  # This field type is a guess.
    avatar = models.CharField(max_length=255, blank=True, null=True)
    content = models.CharField(max_length=255, blank=True, null=True)
    create_time = models.DateTimeField(blank=True, null=True)
    email = models.CharField(max_length=255, blank=True, null=True)
    nickname = models.CharField(max_length=255, blank=True, null=True)
    blog = models.ForeignKey(Blog, models.DO_NOTHING, blank=True, null=True)
    parent_comment = models.ForeignKey('self', models.DO_NOTHING, blank=True, null=True)

    class Meta:
        db_table = 't_comment'

    def __int__(self):
        return self.id


class Type(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        db_table = 't_type'

    def __int__(self):
        return self.id


class User(models.Model):
    id = models.AutoField(primary_key=True)
    avatar = models.CharField(max_length=255, blank=True, null=True)
    create_time = models.DateTimeField(blank=True, null=True)
    email = models.CharField(max_length=255, blank=True, null=True)
    nickname = models.CharField(max_length=255, blank=True, null=True)
    password = models.CharField(max_length=255, blank=True, null=True)
    type = models.IntegerField(blank=True, null=True)
    update_time = models.DateTimeField(blank=True, null=True)
    username = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        db_table = 't_user'

    def __int__(self):
        return self.id
