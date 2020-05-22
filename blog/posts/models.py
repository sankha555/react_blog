from django.db import models
from users.models import Author
from django.conf import settings

class Post(models.Model):
    author = models.ForeignKey(Author, on_delete=models.CASCADE)
    title = models.CharField(max_length=30)
    content = models.TextField(max_length=1000, default = "")
    date_posted = models.DateTimeField(auto_now=True)
    likes = models.ForeignKey(Author, on_delete = models.CASCADE, default = None, null=True, related_name='post_likes')

class Comment(models.Model):
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    author = models.ForeignKey(Author, on_delete=models.CASCADE, related_name = "comment_author")
    message = models.TextField(max_length=200, default = "")
    date_posted = models.DateTimeField(auto_now=True)
    likes = models.ForeignKey(Author, on_delete = models.CASCADE, default = None, null=True, related_name='comment_likes')

    
