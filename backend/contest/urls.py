from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views


router = DefaultRouter()
router.register('team', views.TeamViewSet)
router.register('player', views.PlayerViewSet)

urlpatterns = [
    path('', include(router.urls))
]