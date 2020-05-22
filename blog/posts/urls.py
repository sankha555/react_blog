from rest_framework import routers
from posts.api import PostViewSet, CommentViewSet

router = routers.DefaultRouter()
router.register('api/posts', PostViewSet)
router.register('api/comments', CommentViewSet)

urlpatterns = router.urls

