from django.db import models
from django.contrib.auth.models import AbstractUser
from django.conf import settings

class Author(AbstractUser):
    name = models.CharField(max_length=20)
    email = models.EmailField(unique=True)
    bio = models.TextField(max_length=100, default = "")
    followers = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete = models.CASCADE, default = None, null=True, related_name='author_followers')
    following = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete = models.CASCADE, null=True, related_name='author_following')

# Create your models here.
