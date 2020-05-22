from rest_framework import viewsets, permissions
from posts.models import Post, Comment
from posts.serializers import PostSerializer, CommentSerializer

class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    permissions = [
        permissions.AllowAny
    ]
    serializer_class = PostSerializer

class CommentViewSet(viewsets.ModelViewSet):
    queryset = Comment.objects.all()
    permissions = [
        permissions.AllowAny
    ]
    serializer_class = CommentSerializer