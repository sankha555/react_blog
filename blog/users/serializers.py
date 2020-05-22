from rest_framework import serializers
from users.models import Author

class AuthorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Author
        fields = ['name', 'username', 'password', 'email', 'bio']

