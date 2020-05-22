from rest_framework import routers
from users.api import AuthorViewSet

router = routers.DefaultRouter()
router.register('api/authors', AuthorViewSet)

urlpatterns = router.urls

