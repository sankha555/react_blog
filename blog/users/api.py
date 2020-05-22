from rest_framework import viewsets, permissions
from users.models import Author
from users.serializers import AuthorSerializer

class AuthorViewSet(viewsets.ModelViewSet):
    queryset = Author.objects.all()
    permissions = [
        permissions.AllowAny
    ]
    serializer_class = AuthorSerializer
